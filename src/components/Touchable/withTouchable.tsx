import React, { ComponentType, forwardRef } from 'react';

import Touchable, { TouchableProps } from './index';

export const withTouchable = <Props extends Record<string, unknown>>(
  Component: ComponentType<Props>,
) => {
  const ComponentWithTouchable = forwardRef<unknown, Props & TouchableProps>(
    (props: Props, ref) => {
      return (
        <Touchable {...props} ref={ref}>
          <Component {...props} />
        </Touchable>
      );
    },
  );

  return ComponentWithTouchable;
};
