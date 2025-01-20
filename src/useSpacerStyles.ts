import { StyleSheet, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { SpacerViewProps } from './types';
import { useMemo } from 'react';

type Props = SpacerViewProps & { style: ViewStyle };

export const useSpacerStyles = ({
  flex: injectedFlex,
  height: propsHeight,
  width: propsWidth,
  safeTop,
  safeBottom,
  style = {},
}: Props) => {
  const { top, bottom } = useSafeAreaInsets();

  const styles = useMemo(() => {
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

    return spacerStyles;
  }, [
    top,
    bottom,
    injectedFlex,
    propsHeight,
    propsWidth,
    safeTop,
    safeBottom,
    style,
  ]);

  return styles;
};
