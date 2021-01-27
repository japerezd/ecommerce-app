import React from "react";
import {FaTrash} from 'react-icons/fa'
import { ProductContext } from "../../ProductContext";

export const Cart = () => {
  // const url = process.env.REACT_APP_URL;
  const {items, handleItems} = React.useContext(ProductContext)
  // const [addRemoveItems, dispatch] = React.useReducer(cartReducer)
  
  // const handleItems = (e) => {
  //   // console.log(e.currentTarget)
  //   if(e.target.id === 'minus' || e.target.className === 'removing'){

  //     console.log('Removing')
  //   }
  //   else if (e.target.id === 'plus' || e.target.className === 'adding'){

  //     console.log('Adding')
  //     dispatch(addItem())
  //   }
  // }

  return (
    <div className="container-cart">
      {

        items?.products 
        ?
        items.products.map((prod) => (
          <div className="container-cart__item" key={prod.product.id}>
            <div className="container-cart__image">
              <img src={prod.product.images[0].img1} alt={prod.product.name} />
            </div>

            <div className="container-cart__details">
              <h2>{prod.product.name}</h2>
              <p> {prod.product.description} </p>
              <p><strong>${prod.product.price}</strong></p>

            <div className="control__products" onClick={handleItems}>
                  <div className="removing">
                      <span id="minus"> &minus; </span>
                  </div>

                  <span className="number__products">{prod.amount}</span>

                  <div className="adding">
                      <span id="plus"> &#43; </span>
                  </div>
              </div>
            </div>

            <div><FaTrash className="delete"/></div>

          </div>
        )) 
        
        :

          <div className="empty-search">
                  <h3> There is no items in the cart. </h3>
          </div>
      }

      {
        items?.products && 
        <div className="cart__subtotals">

          <span className="cart__total-products">
            {items.products.length} Products
          </span>
          
          <p className="cart__value">
            Subtotal
            <strong>$10,500</strong>
          </p>

          <div className="button__wrapper">
              Buy
          </div>

        </div>
      }

      

    </div>
  );
};
