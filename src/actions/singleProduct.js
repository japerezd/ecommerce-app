import {types} from '../types/types';

export const buySingleProduct = (product) => ({
    type: types.buySingleProduct,
    payload: {
        product,
        amount: 1
    }
})

export const addItem = (product) => ({
    type: types.add,
    payload: {product}
})

export const subtractItem = (product) => ({
    type: types.subtract,
    payload: {product}
  
})