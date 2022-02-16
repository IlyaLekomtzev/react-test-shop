import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../models/IProduct';

export interface CartItemType extends IProduct {
    count: number
}

interface CartState {
    items: CartItemType[];
    totalPrice: number;
    totalCount: number;
}

const initialState: CartState = {
    items: [],
    totalPrice: 0,
    totalCount: 0
};

const getTotalPrice = (array: CartItemType[]) => array.reduce((prev, cur) => prev + cur.price * cur.count, 0);
const getTotalCount = (array: CartItemType[]) => array.reduce((prev, cur) => prev + cur.count, 0);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<CartItemType[]>) => {
            state.items = action.payload;
            state.totalPrice = getTotalPrice(action.payload);
            state.totalCount = getTotalCount(action.payload);
        }
    }
});

export default cartSlice.reducer;