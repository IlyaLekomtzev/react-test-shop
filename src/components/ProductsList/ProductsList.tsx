import { FC } from 'react';
import { productsAPI } from '../../services/ProductsService';
import { ProductItem } from '../../components';
import './products-list.scss';

const ProductsList: FC = () => {
    const { data: products, isLoading, isError } = productsAPI.useGetProductsQuery('');

    if (isLoading) {
        return <div>Loading..</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    return (
        <div className="products-list">
            {products && products.map((product) => (
                <ProductItem key={product.name} {...product} />
            ))}
        </div>
    );
};

export default ProductsList;