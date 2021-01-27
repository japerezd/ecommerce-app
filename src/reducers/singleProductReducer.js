import { types } from "../types/types";

const initialState = {
    products: []
}


export const singleProductReducer = (state = initialState, action) => {

    const indexProduct = state.products.findIndex(prod => prod.product.name === action.payload.product.name);

    switch (action.type) {
        case types.buySingleProduct:

            return {
                ...state,
                products: [...state.products,action.payload]
            }
            
        case types.add: 

          state.products[indexProduct].amount++;
            return {
                products: [...state.products]
            }

        case types.subtract:

            if(state.products[indexProduct].amount === 1)
               return { products: [...state.products]}
                 
            state.products[indexProduct].amount--;

            return{
                products: [...state.products]
            }
    
        default:
            return state;
    }

}