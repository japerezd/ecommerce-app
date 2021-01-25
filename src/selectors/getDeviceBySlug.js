import {products} from '../data/products.js';

export const getDeviceBySlug = (slug) => {
    return products.find(prod => prod.slug === slug);
}