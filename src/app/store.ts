import { configureStore, ThunkAction, Action, } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import personReducer from '../PersonalInfoSectionView/PersonSlice';
import schoolReducer from '../SchoolInfoSectionView/SchoolSlice';
import detailPageReducer from '../detailPage/detailPageSlice';

// We'll use redux-logger just as an example of adding another middleware
// import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    person: personReducer,
    school: schoolReducer,
    detail: detailPageReducer
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
