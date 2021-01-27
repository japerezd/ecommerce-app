import {types} from '../types/types';

const initialState = {
    // products: [{
    //     amount: 1,
    //     product:[]
    // }
    // ]
}

export const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.add:
            return {
                // ...state,
                products: [state.products.amount + 1]
            }
    
        default:
            return state;
    }
}