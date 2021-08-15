import React from 'react';
import ReactNative from 'react-native';

var { NativeModules, processColor, requireNativeComponent, View } = ReactNative;

var RNSpinkit = null;

class Indicator extends React.Component {
  static defaultProps = {
    size: 37,
    color: '#000000',
    isVisible: true,
  };

  render() {
    if (!this.props.isVisible) return <View />;

    var size = { height: this.props.size, width: this.props.size };

    // In order to handle all the color specifications allowed in React Native
    // as a whole, we need to call processColor here, and can pass in the
    // resulting number directly. RCTConvert will be called on iOS to parse
    // into #AARRGGBB form; on Android, this int can be used directly for
    // setting the color.
    var colorNumber = processColor(this.props.color);

    return (
      <RNSpinkit
        type={String(this.props.type)}
        size={parseInt(this.props.size)}
        color={colorNumber}
        style={[size, this.props.style]}
      />
    );
  }
}

// Since RNPM does not recognize `requireNativeComponent`, so we have to
// add this line, and RNPM will link native modules automatically
NativeModules.RNSpinkit;

// Native component
RNSpinkit = requireNativeComponent('RNSpinkit', Indicator, {
  nativeOnly: {
    nativeID: true,
  },
});

module.exports = Indicator;
