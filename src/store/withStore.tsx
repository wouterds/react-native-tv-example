import React, { ComponentType } from 'react';
import { Provider } from 'react-redux';

import store from './index';

export const withStore = <Props extends Record<string, unknown>>(
  Component: ComponentType<Props>,
) => {
  const ComponentWithStore = (props: Props) => {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  };

  return ComponentWithStore;
};
