import { FC } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { CartItemType } from '../../store/reducers/cartSlice';
import {incrementCountInCart, removeFromCart} from '../../store/actions/cart';
import './cart-item.scss';

const CartItem: FC<CartItemType> = ({ name, price, image, count }) => {
    const dispatch = useAppDispatch();

    const getSum = (price: number, count: number): string => {
        return (price * count).toFixed(2);
    };

    return (
        <div className="cart-item">
            <div className="cart-item__product cart-product">
                <div className="cart-product__image">
                    <img src={process.env.REACT_APP_BASE_URL + image} alt={name} />
                </div>
                <div className="cart-product__info">
                    <div className="cart-product__title">{name}</div>
                    <div className="cart-product__price">${price}</div>
                </div>
            </div>
            <div className="cart-item__count cart-count">
                <button
                    className="cart-count__action"
                    onClick={() => dispatch(removeFromCart(name))}
                >-</button>
                <div className="cart-count__value">{count}</div>
                <button
                    className="cart-count__action"
                    onClick={() => dispatch(incrementCountInCart(name))}
                >+</button>
            </div>
            <div className="cart-item__sum">${getSum(price, count)}</div>
            <div className="cart-item__remove cart-remove">
                <button
                    type="button"
                    className="cart-remove__button"
                    onClick={() => dispatch(removeFromCart(name, true))}
                >&#10006;</button>
            </div>
        </div>
    );
};

export default CartItem;