import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import {
  RefreshControl,
  useWindowDimensions,
  Dimensions,
  View,
  ViewStyle,
} from 'react-native';
import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from 'recyclerlistview';
import { renderCarlaToReact } from '../core';
import nodejs from 'nodejs-mobile-react-native';
import LoadingIndicator from 'react-native-indicator';
import { makeUniqueName } from '../utils';

type PresetLayout = 'line' | 'card' | 'stagger';

interface LayoutProviderPartialArgs {
  presetLayout: PresetLayout;
  padding: number;
  itemHeight?: number;
}

const RecyclerListZoneEvents = {
  Refresh: 'refresh',
  Fetch: 'fetch',
  Error: 'error',
};

const createLayoutProvider = function (
  args: LayoutProviderPartialArgs & { screenWidth: number },
) {
  const { presetLayout, screenWidth, padding, itemHeight } = args;
  return new LayoutProvider(
    () => {
      return presetLayout;
    },
    (type, dim, index) => {
      switch (type) {
        case 'line':
          dim.width = Math.floor(screenWidth - padding * 2);
          dim.height = itemHeight ?? 100;
          break;
        case 'card':
          dim.width = Math.floor(screenWidth - padding * 2) / 2;
          dim.height = itemHeight ?? 260;
          break;
        case 'stagger':
          const columnWidth = ((screenWidth * 1000) / 1000 - padding * 2) / 3;
          if (index % 3 === 0) {
            dim.width = 3 * columnWidth;
            dim.height = itemHeight ?? 250;
          } else if (index % 2 === 0) {
            dim.width = 2 * columnWidth;
            dim.height = itemHeight ?? 250;
          } else {
            dim.width = columnWidth;
            dim.height = itemHeight ?? 250;
          }
          break;
        default:
          dim.width = 0;
          dim.height = 0;
      }
    },
  );
};

export interface RecyclerListZoneProps {
  zoneHeight?: number;
  zoneWidth?: number;
  style?: ViewStyle;
  presetLayout?: PresetLayout;
  padding?: number;
  itemHeight?: number;
  preRenderTopOffset?: number;
  reachBottomDistance?: number;
  initRenderOffset?: number;
  header?: object;
  footer?: object;
  elementId: string;
}

export const RecyclerListZone: FC<RecyclerListZoneProps> = function (props) {
  const {
    presetLayout,
    preRenderTopOffset,
    reachBottomDistance,
    padding,
    itemHeight,
    style,
    zoneHeight,
    zoneWidth,
    initRenderOffset,
    elementId,
  } = props;
  const { width } = useWindowDimensions();
  const refreshEventName = makeUniqueName(
    RecyclerListZoneEvents.Refresh,
    elementId,
  );

  const fetchEventName = makeUniqueName(
    RecyclerListZoneEvents.Fetch,
    elementId,
  );

  const initDataProvider = useMemo(
    () =>
      new DataProvider((p, n) => {
        return p?.props?.elementId !== n?.props?.elementId;
      }).cloneWithRows([]),
    [],
  );

  const initLayoutProvider = useMemo(() => {
    return createLayoutProvider({
      presetLayout: presetLayout!,
      screenWidth: width,
      padding: padding!,
      itemHeight,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [dataProvider, setDataProvider] = useState(initDataProvider);
  const [updating, setUpdating] = useState(false);
  const [isRefreshing, setRefreshing] = useState(true);
  const [isInit, setInit] = useState(false);

  let listStyle = useMemo(() => {
    const tempStyle = style;
    delete tempStyle?.padding;
    delete tempStyle?.flex;
    return tempStyle;
  }, [style]);

  const setData = useCallback(
    (msg, refresh: boolean = false) => {
      const data = refresh ? [] : dataProvider.getAllData();
      if (msg) {
        if (Array.isArray(msg.data)) {
          data.push(...msg.data);
        } else {
          data.push(msg.data);
        }
      }
      return data;
    },
    [dataProvider],
  );

  useEffect(() => {
    nodejs.channel.post(fetchEventName);
    nodejs.channel.once(fetchEventName, (msg) => {
      const data = setData(msg);
      setRefreshing(false);
      setInit(true);
      setDataProvider(dataProvider.cloneWithRows(data));
    });

    return () => {
      nodejs.channel.removeAllListeners(fetchEventName);
      nodejs.channel.removeAllListeners(refreshEventName);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 三个都有 2 5 3

  // leading + title  1 5
  return (
    <View
      style={Object.assign(
        zoneHeight
          ? { height: zoneHeight, width: zoneWidth }
          : { flex: 1, width: zoneWidth },
      )}>
      <RecyclerListView
        style={{ flex: 1, padding, ...listStyle }}
        renderAheadOffset={preRenderTopOffset}
        onEndReachedThreshold={reachBottomDistance}
        initialOffset={initRenderOffset}
        rowRenderer={(_type, data) => {
          const reactElement = renderCarlaToReact(data) as JSX.Element;
          return reactElement;
        }}
        scrollViewProps={{
          refreshControl: (
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={async () => {
                if (!isRefreshing) {
                  nodejs.channel.once(refreshEventName, (msg) => {
                    const data = setData(msg, true);
                    setDataProvider(dataProvider.cloneWithRows(data));
                    setRefreshing(false);
                  });
                  setRefreshing(true);
                  nodejs.channel.post(refreshEventName);
                }
              }}
            />
          ),
        }}
        layoutProvider={initLayoutProvider}
        dataProvider={dataProvider}
        onEndReached={
          !isInit
            ? undefined
            : () => {
                if (!updating) {
                  nodejs.channel.once(fetchEventName, (msg) => {
                    const data = setData(msg);
                    setDataProvider(dataProvider.cloneWithRows(data));
                    setUpdating(false);
                  });
                  setUpdating(true);
                  nodejs.channel.post(fetchEventName);
                }
              }
        }
        renderFooter={() => {
          return updating ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingTop: 10,
                paddingBottom: 15,
              }}>
              <LoadingIndicator
                type="ThreeBounce"
                size={40}
                color="#1A1A1AA6"
              />
            </View>
          ) : null;
        }}
      />
    </View>
  );
};

RecyclerListZone.defaultProps = {
  presetLayout: 'card',
  preRenderTopOffset: Dimensions.get('window').height / 2,
  reachBottomDistance: 20,
  padding: 8,
};
