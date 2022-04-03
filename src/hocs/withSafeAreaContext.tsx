import React, { ComponentType } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const withSafeAreaContext = <Props extends Record<string, unknown>>(
  Component: ComponentType<Props>,
) => {
  const ComponentWithSafeAreaContext = (props: Props) => {
    return (
      <SafeAreaProvider>
        <Component {...props} />
      </SafeAreaProvider>
    );
  };

  return ComponentWithSafeAreaContext;
};
