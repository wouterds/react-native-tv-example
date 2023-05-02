import React, { ComponentType } from 'react';
import { Device } from 'react-native-device-select';

/**
 * When your component is wrapped with this HOC, it will only be rendered on TV devices.
 */
export const withTVSpecific = <Props extends Record<string, unknown>>(
  Component: ComponentType<Props>,
) => {
  const TVSpecificComponent = (props: Props) => {
    if (!Device.isTV) {
      return null;
    }

    return <Component {...props} />;
  };

  return TVSpecificComponent;
};
