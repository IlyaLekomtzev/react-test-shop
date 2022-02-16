import { FC } from 'react';
import { useAppSelector } from '../../hooks/redux';
import './cart-total.scss';

const CartTotal: FC = () => {
    const { items, totalPrice } = useAppSelector((state) => state.cart);

    return (
        <div className="cart-total">
            <div className="cart-total__item">Всего позиций: <b>{items.length} шт.</b></div>
            <div className="cart-total__item">Сумма заказа: <b>${totalPrice.toFixed(2)}</b></div>
        </div>
    );
};

export default CartTotal;