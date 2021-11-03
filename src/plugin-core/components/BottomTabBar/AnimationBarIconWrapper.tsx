import React, { FC } from 'react';
import { ColorValue, View } from 'react-native';
import { SimpleScaleAnimation } from '../SimpleAnimations';

export interface AnimationBarIconWrapperProps {
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: ColorValue;
  outputRange?: number[];
}

export const AnimationBarIconWrapper: FC<AnimationBarIconWrapperProps> = function (
  props,
) {
  const { children, width, height, outputRange, borderRadius } = props;
  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: '#313131',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: borderRadius,
      }}>
      <SimpleScaleAnimation outputRange={outputRange!}>
        {children}
      </SimpleScaleAnimation>
    </View>
  );
};

AnimationBarIconWrapper.defaultProps = {
  width: 46,
  height: 46,
  borderRadius: 50,
  outputRange: [0, 31],
};
