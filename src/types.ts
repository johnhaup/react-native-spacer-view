export type SpacerViewProps = {
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
};
