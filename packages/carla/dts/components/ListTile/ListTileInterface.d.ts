import { WithChildrenEntity } from '../../common';
import { ZoneStyle } from '../Zone';
export declare const listTileValidProps: string[];
export interface ListTileProps {
    containerStyle?: ZoneStyle;
    leading?: WithChildrenEntity;
    leadingStyle?: ZoneStyle;
    trailing?: WithChildrenEntity;
    trailingStyle?: ZoneStyle;
    title?: WithChildrenEntity;
    titleStyle?: ZoneStyle;
    subtitle?: WithChildrenEntity;
    subtitleStyle?: ZoneStyle;
}
