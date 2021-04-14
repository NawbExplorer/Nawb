import { WithChildrenEntity } from '../../common';
import { ZoneStyle } from '../Zone';

export const listTileValidProps = ['style', 'leading'];

export interface ListTileProps {
  // 设置整个listTile的style例如调整高度
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
