import {products} from '../data/products.js';

export const getDeviceBySlug = (slug) => {
    const NO_PRODUCTS = { price: '',  description: '', battery: '', display: '', cpu: '', camera: '', name: ''}
    const product =  products.find(prod => prod.slug === slug);

    if(!product) return NO_PRODUCTS;

    return product;
}