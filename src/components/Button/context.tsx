import React, { createContext, ReactNode } from 'react';

import { ButtonType } from './index';

interface Context {
  isActive: boolean;
  type: ButtonType;
}

export const ButtonContext = createContext<Context>({
  isActive: false,
  type: ButtonType.Default,
});

interface ButtonContextProviderProps {
  children: ReactNode;
  isActive: boolean;
  type: ButtonType;
}

export const ButtonContextProvider = (props: ButtonContextProviderProps) => {
  const { children, isActive, type } = props;

  return (
    <ButtonContext.Provider value={{ isActive, type }}>
      {children}
    </ButtonContext.Provider>
  );
};
