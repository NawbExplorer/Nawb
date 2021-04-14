import { ZoneStyle } from '../../Zone/ZoneInterface';
import { BasicMiaoEvent } from '../../../common';

export interface TapZoneStyle extends ZoneStyle {}

export interface MiaoTapZoneEvent extends BasicMiaoEvent {}

export const tapZoneValidProps = [
  'mode',
  'style',
  'onTap',
  'onLongTap',
  'onBlur',
  'onFocus',
  'onTapDown',
  'onTapUp',
  'delayLongTap',
  'delayTapDown',
  'delayTapUp',
];

export interface TapZoneProps {
  style?: TapZoneStyle;

  mode?: 'opacity' | 'highlight' | 'default';
  /**
   * 单位毫秒
   */
  delayLongTap?: number;
  delayTapDown?: number;
  delayTapUp?: number;
  onFocus?: (event?: MiaoTapZoneEvent) => Promise<void> | void;
  onBlur?: (event?: MiaoTapZoneEvent) => Promise<void> | void;
  onTap?: (event?: MiaoTapZoneEvent) => Promise<void> | void;
  onTapUp?: (event?: MiaoTapZoneEvent) => Promise<void> | void;
  onTapDown?: (event?: MiaoTapZoneEvent) => Promise<void> | void;
  onLongTap?: (event?: MiaoTapZoneEvent) => Promise<void> | void;
}
