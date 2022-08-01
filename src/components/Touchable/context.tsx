import React, { createContext, ReactNode } from 'react';

interface Context {
  hasFocus: boolean;
}

export const TouchableContext = createContext<Context>({ hasFocus: false });

interface TouchableContextProviderProps {
  children: ReactNode;
  hasFocus: boolean;
}

export const TouchableContextProvider = (
  props: TouchableContextProviderProps,
) => {
  const { children, hasFocus } = props;

  return (
    <TouchableContext.Provider value={{ hasFocus }}>
      {children}
    </TouchableContext.Provider>
  );
};
