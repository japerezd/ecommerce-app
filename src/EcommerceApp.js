import React from 'react'
import { addItem, buySingleProduct, subtractItem } from './actions/singleProduct'
import { ProductContext } from './ProductContext'
import { singleProductReducer } from './reducers/singleProductReducer'
import { AppRouter } from './routers/AppRouter'
import { getDeviceByName } from './selectors/getDeviceByName'

export const EcommerceApp = () => {
    const [items, dispatch] = React.useReducer(singleProductReducer)
  
  const handleItems = (e) => {
    const nameProduct = e.target.closest('.container-cart__details').querySelector('h2').innerHTML;

    const product = getDeviceByName(nameProduct);

    if(e.target.id === 'minus' || e.target.className === 'removing'){
        dispatch(subtractItem(product))
    }
    else if (e.target.id === 'plus' || e.target.className === 'adding'){

      dispatch(addItem(product))
    }
  }

    const handleBuy = (e) => {
        const nameImage = e.currentTarget.parentNode.querySelector('img').alt;
        const product = getDeviceByName(nameImage);
        // dispatching action
        dispatch(buySingleProduct(product))
    }

    return (
        <ProductContext.Provider value={{items, handleBuy, handleItems}}>
             <AppRouter />
        </ProductContext.Provider> 
    )
}
