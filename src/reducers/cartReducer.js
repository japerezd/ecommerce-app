import { types } from "../types/types";

const initialState = {
    products: []
}


export const singleProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.addToCart:{
            const indexProduct = state.products.findIndex(prod => prod.product.name === action.payload.product.name);
            console.log(indexProduct)
            if(indexProduct !== -1){
                if(state.products[indexProduct].product.id === action.payload.product.id){

                    state.products[indexProduct].amount++;
                    state.products[indexProduct].itemPrice = state.products[indexProduct].product.price * state.products[indexProduct].amount;

                    return{
                        ...state,
                        products: [...state.products]
                    }
                }
          
            }
            
            return {
                ...state,
                products: [...state.products,action.payload]
            }
        }
            
            
        case types.add: {

            const indexProduct = state.products.findIndex(prod => prod.product.name === action.payload.product.name);

            state.products[indexProduct].amount++;
            state.products[indexProduct].itemPrice = state.products[indexProduct].product.price * state.products[indexProduct].amount;
            return {
                products: [...state.products],
            }
        }
        case types.subtract:
            const indexProduct = state.products.findIndex(prod => prod.product.name === action.payload.product.name);
            state.products[indexProduct].itemPrice = state.products[indexProduct].product.price * (state.products[indexProduct].amount - 1);

            if(state.products[indexProduct].amount === 1){
                state.products[indexProduct].itemPrice = state.products[indexProduct].product.price
                return { products: [...state.products]}
            }
                 
            state.products[indexProduct].amount--;

            return{
                products: [...state.products]
            }

        case types.delete:
            return {
                products: state.products.filter(prod => prod.product.id !== action.payload.product.id)
            }

        case types.buy:
            
            return {
                products: []
            };
    
        default:
            return state;
    }

}