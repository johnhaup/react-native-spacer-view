import React from 'react';
import { View, type ViewProps, type ViewStyle } from 'react-native';
import { useSpacerStyles } from './useSpacerStyles';

interface Props extends ViewProps {
  /**
   * Passing true gives Spacer flex: 1, passing a number gives Spacer flex: [number].
   */
  flex?: boolean | number;
  /**
   * Adds to total height of Spacer.
   */
  height?: number;
  /**
   * Adds to total width of Spacer.
   */
  width?: number;
  /**
   * Adds the device's top safe area inset to the total height of Spacer.
   */
  safeTop?: boolean;
  /**
   * Adds the device's bottom safe area inset to the total height of Spacer.
   */
  safeBottom?: boolean;
  style?: ViewStyle;
}

export function Spacer({
  flex,
  height,
  width,
  safeTop,
  safeBottom,
  style = {},
  ...rest
}: Props) {
  const spacerStyles = useSpacerStyles({
    flex,
    height,
    width,
    safeTop,
    safeBottom,
    style,
  });

  return <View style={spacerStyles} pointerEvents={'box-none'} {...rest} />;
}
