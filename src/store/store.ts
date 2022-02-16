import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice';
import { productsAPI } from '../services/ProductsService';

export enum Reducer {
  Cart = 'cart'
}

const rootReducer = combineReducers({
  [Reducer.Cart]: cartReducer,
  [productsAPI.reducerPath]: productsAPI.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsAPI.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
