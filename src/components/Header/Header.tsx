import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { AppRoute } from '../../const';
import './header.scss';

const Header: FC = () => {
    const count = useAppSelector((state) => state.cart.totalCount);

    return (
        <header className="header">
            <div className="container header__wrap">
                <Link to={AppRoute.Main} className="header__logo">
                    SHOP
                </Link>
                <Link to={AppRoute.Cart} className="header__basket">
                    <span className="header__basket-title">Basket</span>
                    {count > 0 && <span className="header__basket-counter">{count}</span>}
                </Link>
            </div>
        </header>
    );
};

export default Header;