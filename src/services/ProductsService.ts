import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IProduct } from '../models/IProduct';

export const productsAPI = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_BASE_URL}/api`
    }),
    endpoints: (build) => ({
        getProducts: build.query<IProduct[], string>({
            query: () => ({
                url: '/goods'
            })
        })
    })
});