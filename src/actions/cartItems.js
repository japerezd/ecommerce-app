import {types} from '../types/types';

export const addToCart = (product) => ({
    type: types.addToCart,
    payload: {
        product,
        amount: 1,
        itemPrice: product.price
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

export const deleteItem = (product) => ({
    type: types.delete,
    payload: {product}
})

export const buy = (products) => ({
    type: types.buy,
    payload: {products}
})