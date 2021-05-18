import { HasChildrenEntity } from '../../types';
import { ZoneStyle } from '../Zone';

export const listTileValidProps = ['style', 'leading'];

export interface ListTileProps {
  // 设置整个listTile的style例如调整高度
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
