import { HasChildrenEntity } from '../../types';

import { ZoneStyle } from '../Zone';

type PresetLayout = 'line' | 'card' | 'stagger';

export interface RecyclerListProps {
  style?: ZoneStyle;
  onRefresh?: () => Promise<Record<any, any>>;
  onFetch?: () => Promise<Record<any, any>>;
  // 到达底部多少时出发onReachBottom
  reachBottomDistance?: number;
  // 顶部多少时开始渲染
  preRenderTopOffset?: number;
  presetLayout?: PresetLayout;
  // 初始渲染位置
  initRenderOffset?: number;
  footer?: HasChildrenEntity;
  header?: HasChildrenEntity;
  itemHeight?: number;
  initData?: object;
  zoneHeight?: number;
  zoneWidth?: number;
  forbidFetch?: boolean;
}
