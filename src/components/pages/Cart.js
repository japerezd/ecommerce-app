import React from "react";
import image from "../../assets/images/smartphones/apple-iphone-12-mini-blanco-vista-frontal.webp";

export const Cart = () => {
  // const url = process.env.REACT_APP_URL;

  return (
    <div className="container-cart">
      <div className="container-cart__item">
        <div className="container-cart__image">
          <img src={image} alt="apple-iphone" />
        </div>

        <div className="container-cart__details">
          <h2>Iphone bla bla bla</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dignissim porttitor lacinia. Suspendisse rhoncus mollis sagittis.
            Mauris nec eros arcu. Duis a euismod erat. Vivamus dictum facilisis
            fermentum. In non aliquam quam. Aliquam erat mi, consectetur in
            imperdiet quis, ornare a felis.
          </p>
          <p><strong>$precio</strong></p>

          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <button>Delete</button>
      </div>

      <div className="cart__subtotals">

        <span className="cart__total-products">1 Products</span>
        <p className="cart__value">
          Subtotal
          <strong>$10,500</strong>
        </p>

        <div className="button__wrapper">
            Buy
        </div>

      </div>

      

    </div>
  );
};
