import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

interface Context {
  activeEvent?: string;
  setActiveEvent: (eventId: string) => void;
}

export const EPGContext = createContext<Context>({
  setActiveEvent: (_eventId: string) => {},
});

interface EPGContextProviderProps {
  children: ReactNode;
}

export const EPGContextProvider = (props: EPGContextProviderProps) => {
  const { children } = props;
  const [activeEvent, setActiveEvent] = useState<string | undefined>();

  return (
    <EPGContext.Provider value={{ activeEvent, setActiveEvent }}>
      {children}
    </EPGContext.Provider>
  );
};

export const useEPG = () => {
  const { activeEvent, setActiveEvent } = useContext(EPGContext);

  return useMemo(() => {
    return { activeEvent, setActiveEvent };
  }, [activeEvent, setActiveEvent]);
};
