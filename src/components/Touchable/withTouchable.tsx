import React, { ComponentType } from 'react';

import Touchable, { TouchableProps } from './index';

export const withTouchable = <Props extends Record<string, unknown>>(
  Component: ComponentType<Props>,
) => {
  const ComponentWithTouchable = (props: Props) => {
    return (
      <Touchable {...props}>
        <Component {...props} />
      </Touchable>
    );
  };

  return ComponentWithTouchable as ComponentType<Props & TouchableProps>;
};
