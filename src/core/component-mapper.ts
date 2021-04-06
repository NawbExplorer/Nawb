import { View } from 'react-native';
import {
  MiaoImage,
  MiaoListTile,
  MiaoTapZone,
  MiaoText,
  RecyclerListZone,
  BottomTabBar,
} from '../components';

export const componentMapper = {
  RecyclerListZone: RecyclerListZone,
  Zone: View,
  Text: MiaoText,
  Image: MiaoImage,
  ListTile: MiaoListTile,
  TapZone: MiaoTapZone,
  BottomTabBar: BottomTabBar,
};
