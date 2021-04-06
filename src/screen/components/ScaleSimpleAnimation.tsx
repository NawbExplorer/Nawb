import React, { FC, useEffect, useMemo } from 'react';
import { Animated, Easing } from 'react-native';

let sizeValue = new Animated.Value(0);

export interface ScaleSimpleAnimationProps {
  easing?: (value: number) => number;
  duration?: number;
  width?: number | string;
  height?: number | string;
  toSize?: number;
  outputRange: number[];
}

export const ScaleSimpleAnimation: FC<ScaleSimpleAnimationProps> = function (
  props,
) {
  const { duration, easing, outputRange } = props;

  const size = useMemo(
    () =>
      sizeValue.interpolate({
        inputRange: [0, 1],
        outputRange: outputRange,
      }),
    [outputRange],
  );

  useEffect(() => {
    const animation = Animated.timing(sizeValue, {
      toValue: 1,
      duration,
      easing,
      useNativeDriver: false,
    });
    animation.start();
    return () => {
      animation.reset();
    };
  });

  return (
    <Animated.View
      style={{
        // justifyContent: 'center',
        // alignItems: 'center',
        width: size,
        height: size,
      }}>
      {props.children}
    </Animated.View>
  );
};

ScaleSimpleAnimation.defaultProps = {
  duration: 700,
  easing: Easing.bounce,
};
