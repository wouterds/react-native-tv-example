import { configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (__DEV__) {
  middleware.push(require('redux-flipper').default());
}

const store = configureStore({
  reducer,
  middleware,
});

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>;

export const useDispatch = () => useReduxDispatch<typeof store.dispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default store;
