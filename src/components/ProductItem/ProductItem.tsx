import { FC } from 'react';
import { IProduct } from '../../models/IProduct';
import { useAppDispatch } from '../../hooks/redux';
import { addToCart } from '../../store/actions/cart';
import './product-item.scss';

interface ProductItemProps extends IProduct {
    //other types
}

const ProductItem: FC<ProductItemProps> = ({ name, price, image }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="product-item">
            <div className="product-item__image">
                <img src={process.env.REACT_APP_BASE_URL + image} alt={name} />
            </div>
            <h3 className="product-item__name">{name}</h3>
            <div className="product-item__offer">
                <div className="product-item__price">${price}</div>
                <button
                    type="button"
                    className="product-item__button"
                    onClick={() => dispatch(addToCart({
                        name, price, image
                    }))}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default ProductItem;