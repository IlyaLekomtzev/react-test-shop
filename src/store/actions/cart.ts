import { IProduct } from '../../models/IProduct';
import { AppThunk } from '../store';
import { cartSlice } from '../reducers/cartSlice';

export const addToCart = (product: IProduct): AppThunk => (dispatch, getState) => {
    const cart = getState().cart.items;
    const cartModified = [...cart];

    const index = cartModified.findIndex((item) => item.name === product.name);

    if (index !== -1) {
        cartModified[index] = {
            ...cartModified[index],
            count: cartModified[index].count + 1
        }
    } else {
        cartModified.push({ ...product, count: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartModified));
    dispatch(cartSlice.actions.setCart(cartModified));
};

export const incrementCountInCart = (name: string): AppThunk => (dispatch, getState) => {
    const cart = getState().cart.items;
    const cartModified = [...cart];

    const index = cartModified.findIndex((item) => item.name === name);

    if (index !== -1) {
        cartModified[index] = {
            ...cartModified[index],
            count: cartModified[index].count + 1
        }
    }

    localStorage.setItem('cart', JSON.stringify(cartModified));
    dispatch(cartSlice.actions.setCart(cartModified));
};

export const removeFromCart = (name: string, full = false): AppThunk => (dispatch, getState) => {
    const cart = getState().cart.items;
    const cartModified = [...cart];

    const index = cartModified.findIndex((item) => item.name === name);

    if (index !== -1) {
        if (cartModified[index].count <= 1 || full) {
            cartModified.splice(index, 1);
        } else {
            cartModified[index] = {
                ...cartModified[index],
                count: cartModified[index].count - 1
            }
        }
    }

    localStorage.setItem('cart', JSON.stringify(cartModified));
    dispatch(cartSlice.actions.setCart(cartModified));
};

export const clearCart = (): AppThunk => (dispatch) => {
    localStorage.setItem('cart', JSON.stringify([]));
    dispatch(cartSlice.actions.setCart([]));
};