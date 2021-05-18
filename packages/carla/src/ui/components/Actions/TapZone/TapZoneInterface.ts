import { ZoneStyle } from '../../Zone/ZoneInterface';

export interface TapZoneStyle extends ZoneStyle {}

export interface TapZoneBasicEvent {}

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
  onFocus?: (event?: TapZoneBasicEvent) => Promise<void> | void;
  onBlur?: (event?: TapZoneBasicEvent) => Promise<void> | void;
  onTap?: (event?: TapZoneBasicEvent) => Promise<void> | void;
  onTapUp?: (event?: TapZoneBasicEvent) => Promise<void> | void;
  onTapDown?: (event?: TapZoneBasicEvent) => Promise<void> | void;
  onLongTap?: (event?: TapZoneBasicEvent) => Promise<void> | void;
}
