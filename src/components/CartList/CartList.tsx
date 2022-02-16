import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { clearCart } from '../../store/actions/cart';
import { CartItem, CartTotal } from '../../components';
import './cart-list.scss';

const CartList: FC = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.items);

    const renderCartList = () => {
        if (cartItems.length > 0) {
            return (
                <>
                    <button
                        type="button"
                        className="cart-list__remove"
                        onClick={() => dispatch(clearCart())}
                    >
                        Очистить корзину
                    </button>
                    <div className="cart-list__items">
                        {cartItems.map((item) => <CartItem key={item.name} {...item} />)}
                    </div>
                    <div className="cart-list__total">
                        <CartTotal />
                    </div>
                </>
            );
        }

        return <div className="cart-list__empty">Пока пусто</div>;
    };

    return (
        <div className="cart-list">
            {renderCartList()}
        </div>
    );
};

export default CartList;