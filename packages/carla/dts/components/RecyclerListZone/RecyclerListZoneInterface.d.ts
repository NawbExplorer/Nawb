import { WithChildrenEntity } from 'src/common';
import { ZoneStyle } from '../Zone';
declare type PresetLayout = 'line' | 'card' | 'stagger';
export interface RecyclerListProps {
    style?: ZoneStyle;
    onRefresh?: () => Promise<Record<any, any>>;
    onFetch?: () => Promise<Record<any, any>>;
    reachBottomDistance?: number;
    preRenderTopOffset?: number;
    presetLayout?: PresetLayout;
    initRenderOffset?: number;
    footer?: WithChildrenEntity;
    header?: WithChildrenEntity;
    itemHeight?: number;
    initData?: object;
    zoneHeight?: number;
    zoneWidth?: number;
    forbidFetch?: boolean;
}
export {};
