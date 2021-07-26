import React, { FC, ForwardRefRenderFunction, useRef } from 'react';
import { View, Text } from 'react-native';
import { MiaoVideoPlayerProps } from './MiaoVideoPlayerIntefcae';
import Video from 'react-native-video';

const VideoPlayer: ForwardRefRenderFunction<
  any,
  MiaoVideoPlayerProps
> = function (props, ref) {
  // const videoEntity = useRef(ref);

  return (
    <View
      style={{
        width: 300,
        height: 150,
        backgroundColor: '#000',
      }}>
      <Video
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        onLoad={() => {
          console.log(11);
        }}
        onError={(e) => {
          console.log(e);
        }}
        source={{ uri: 'https://www.runoob.com/try/demo_source/movie.mp4' }}
      />
    </View>
  );
};

export const MiaoVideoPlayer = React.forwardRef(VideoPlayer);
