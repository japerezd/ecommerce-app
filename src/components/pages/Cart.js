import React from "react";
import {FaTrash} from 'react-icons/fa'
import { ProductContext } from "../../ProductContext";

export const Cart = () => {
  // const url = process.env.REACT_APP_URL;
  const {items, handleItems, handleDelete, buyItems} = React.useContext(ProductContext)

  const totalProducts = () => {
    return items?.products.reduce((total, prod) => total += prod.amount, 0)
  }

  const subtotal = () => {
    return items?.products.reduce((total, prod) => total += prod.itemPrice,0)
  }

  return (
    <div className="container-cart">
      {

        items?.products.length > 0 
        ?
        items.products.map((prod) => (
          <div className="container-cart__item" key={prod.product.id}>
            <div className="container-cart__image">
              <img src={prod.product.images[0].img1} alt={prod.product.name} />
            </div>

            <div className="container-cart__details">
              <h2>{prod.product.name}</h2>
              <p> {prod.product.description} </p>
              <p>
                <strong>
                  ${prod.itemPrice}
                </strong>
              </p>

            <div className="control__products" onClick={handleItems}>
                  <div className="removing">
                      <span id="minus"> &minus; </span>
                  </div>

                  <span className="number__products">
                    {prod.amount}
                  </span>

                  <div className="adding">
                      <span id="plus"> &#43; </span>
                  </div>
             </div>
            </div>

            <div onClick={handleDelete}>
              <FaTrash className="delete"/>
            </div>

          </div>
        )) 
        
        :
            
            <div className="empty-search">
                    <h3> There is no items in the cart. </h3>
            </div>
        
            
      }

      {
        items?.products.length > 0 &&
        <div className="cart__subtotals">

          <span className="cart__total-products">
            {totalProducts()} Products
          </span>
          
          <p className="cart__value">
            Subtotal
            <strong>${subtotal()}</strong>
          </p>

          <div className="button__wrapper" onClick={buyItems}>
              Buy
          </div>

        </div>

       
      }

    </div>
  );
};
