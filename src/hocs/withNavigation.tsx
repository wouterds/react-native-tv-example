import { NavigationContainer } from '@react-navigation/native';
import React, { ComponentType } from 'react';

export const withNavigation = <Props extends Record<string, unknown>>(
  Component: ComponentType<Props>,
) => {
  const ComponentWithNavigation = (props: Props) => {
    return (
      <NavigationContainer>
        <Component {...props} />
      </NavigationContainer>
    );
  };

  return ComponentWithNavigation;
};
