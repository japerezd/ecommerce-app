import {products} from '../data/products.js';

export const getDeviceByName = (name) => {
    return products.find(prod => prod.name === name);
}