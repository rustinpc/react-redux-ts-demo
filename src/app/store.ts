import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import clientsReducer from '../features/clients/reducer';

export const store = configureStore({
  reducer: {
    clients: clientsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
