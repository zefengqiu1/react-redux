import { configureStore, ThunkAction, Action, } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import personReducer from '../PersonalInfoSectionView/PersonSlice';

// We'll use redux-logger just as an example of adding another middleware
// import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    person: personReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
