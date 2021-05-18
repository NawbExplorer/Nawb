import { HasChildrenEntity } from '../../types';
import { ZoneStyle } from '../Zone';
export declare const listTileValidProps: string[];
export interface ListTileProps {
    containerStyle?: ZoneStyle;
    leading?: HasChildrenEntity;
    leadingStyle?: ZoneStyle;
    trailing?: HasChildrenEntity;
    trailingStyle?: ZoneStyle;
    title?: HasChildrenEntity;
    titleStyle?: ZoneStyle;
    subtitle?: HasChildrenEntity;
    subtitleStyle?: ZoneStyle;
}
