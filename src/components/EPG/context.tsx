import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

interface Context {
  activeEventId?: string;
  setActiveEventId: (eventId: string) => void;
}

export const EPGContext = createContext<Context>({
  setActiveEventId: (_eventId: string) => {},
});

interface EPGContextProviderProps {
  children: ReactNode;
}

export const EPGContextProvider = (props: EPGContextProviderProps) => {
  const { children } = props;
  const [activeEventId, setActiveEventId] = useState<string | undefined>();

  return (
    <EPGContext.Provider value={{ activeEventId, setActiveEventId }}>
      {children}
    </EPGContext.Provider>
  );
};

export const useEPG = () => {
  const { activeEventId, setActiveEventId } = useContext(EPGContext);

  return useMemo(() => {
    return { activeEventId, setActiveEventId };
  }, [activeEventId, setActiveEventId]);
};
