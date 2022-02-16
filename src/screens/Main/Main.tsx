import { FC } from 'react';
import { ProductsList } from '../../components';

const Main: FC = () => {
    return (
        <section className="page container">
            <h1>Главная</h1>
            <ProductsList />
        </section>
    );
};

export default Main;