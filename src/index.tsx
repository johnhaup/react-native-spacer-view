import React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
}

export const Spacer = ({
  flex: injectedFlex,
  height: propsHeight,
  width: propsWidth,
  safeTop,
  safeBottom,
  style = {},
  ...rest
}: Props) => {
  const { top, bottom } = useSafeAreaInsets();
  const flex = injectedFlex
    ? typeof injectedFlex === 'number'
      ? injectedFlex
      : 1
    : undefined;
  const width = propsWidth;
  const safeHeight = (safeTop ? top : 0) + (safeBottom ? bottom : 0);
  const height =
    propsHeight && safeHeight
      ? propsHeight + safeHeight
      : safeHeight > 0
      ? safeHeight
      : propsHeight;
  const layoutProps = { flex, height, width };
  const cleanedLayoutProps = Object.fromEntries(
    Object.entries(layoutProps).filter(([, value]) => !!value)
  ) as ViewStyle;
  const spacerStyles = StyleSheet.flatten([cleanedLayoutProps, style]);

  return <View style={spacerStyles} pointerEvents={'box-none'} {...rest} />;
};
