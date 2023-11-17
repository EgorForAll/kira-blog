import { configureStore, combineReducers } from '@reduxjs/toolkit';
import postsSlice from './reducer/reducer';

export const rootReducer = combineReducers({
  postsSlice
});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore['dispatch'];
