import { FC } from 'react';
import { CartList } from '../../components';

const Cart: FC = () => {
    return (
        <section className="page container">
            <h1>Корзина</h1>
            <CartList />
        </section>
    );
};

export default Cart;