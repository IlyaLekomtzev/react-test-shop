import { FC, Suspense, lazy, useEffect } from 'react';
import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { Header } from '../../components';
import { Main } from '../../screens';
import { AppRoute } from '../../const';
import { cartSlice, CartItemType } from '../../store/reducers/cartSlice';

const Cart = lazy(() => import('../../screens/Cart/Cart'));

const App: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localStorage.getItem('cart')) {
            const cart = JSON.parse(localStorage.getItem('cart') as string) as CartItemType[];
            dispatch(cartSlice.actions.setCart(cart));
        }
    });

    return (
        <section className="app">
            <Header />

            <Routes>
                <Route
                    path={AppRoute.Main}
                    element={<Main />}
                />
                <Route
                    path={AppRoute.Cart}
                    element={
                        <Suspense fallback={<>Loading..</>}>
                            <Cart />
                        </Suspense>
                    }
                />
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        </section>
    );
};

export default App;