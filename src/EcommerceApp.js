import React from 'react'
import { addItem, addToCart, buy, deleteItem, subtractItem } from './actions/cartItems'
import { ProductContext } from './ProductContext'
import { singleProductReducer } from './reducers/cartReducer'
import { AppRouter } from './routers/AppRouter'
import { getDeviceByName } from './selectors/getDeviceByName';
import Swal from 'sweetalert2';

export const EcommerceApp = () => {
  const [items, dispatch] = React.useReducer(singleProductReducer, {
    products: []
  })

  
  const handleItems = (e) => {
    const nameProduct = e.target.closest('.container-cart__details').querySelector('h2').innerHTML;

    const product = getDeviceByName(nameProduct);

    if(e.target.id === 'minus' || e.target.className === 'removing'){
        dispatch(subtractItem(product, product.price))
    }
    else if (e.target.id === 'plus' || e.target.className === 'adding'){

      dispatch(addItem(product,product.price))
    }

  }

    const handleAddToCart = (e) => {
        const nameImage = e.currentTarget.parentNode.querySelector('img').alt;
        const product = getDeviceByName(nameImage);
        // dispatching action
        dispatch(addToCart(product))
    }

    const handleAddToCartSingleProduct = (e) => {
      const nameImage = e.currentTarget.parentElement.querySelector('h1').innerHTML;
      const product = getDeviceByName(nameImage);
      // dispatching action
      dispatch(addToCart(product))
  }

    const handleDelete = (e) => {
      const itemToDelete = e.target.closest('.container-cart__item').querySelector('h2').innerHTML;

      const product = getDeviceByName(itemToDelete)
      dispatch(deleteItem(product))
    }

    const buyItems = () => {
      dispatch(buy(items.products));
      Swal.fire({
        icon: 'success',
        title: 'Successful purchase',
        text: 'You have bought in E-commerce App. Thanks for your purchase'
      })
    }

    return (
        <ProductContext.Provider value={{items, handleAddToCart, handleItems, handleDelete, handleAddToCartSingleProduct, buyItems}}>
             <AppRouter />
        </ProductContext.Provider> 
    )
}
