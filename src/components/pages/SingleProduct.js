import * as React from 'react';
import image from "../../assets/images/smartphones/apple-iphone-12-mini-blanco-vista-frontal.webp";
import image2 from "../../assets/images/smartphones/apple-iphone-12-mini-blanco-ambas-vistas.webp";
import image3 from "../../assets/images/smartphones/apple-iphone-12-mini-blanco-vista-frontal-dinamica.webp";
import image4 from "../../assets/images/smartphones/apple-iphone-12-mini-blanco-vista-trasera.webp";


export const SingleProduct = () => {
    return (
        <div className="product-details">
            <div className="product-image-container">
                <div className="device-preview">
                    <img src={image} alt='iphone'/>
                </div>

                <div className="device-preview__minipreviews">
                    <div className="device-preview__minipreviews--one">
                        <img src={image} alt='iphone'/>

                    </div>

                    <div className="device-preview__minipreviews--two">
                        <img src={image2} alt='iphone'/>
                    </div>

                    <div className="device-preview__minipreviews--three">
                        <img src={image3} alt='iphone'/>
                    </div>

                    <div className="device-preview__minipreviews--four">
                        <img src={image4} alt='iphone'/>
                    </div>
                </div>
            </div>

            <div className="product-info">
                <h1>Iphone bla bla</h1>
                <h2>$price</h2>

                <p> <strong>Description</strong> 
              
                </p>
                <span>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Amet Numquam </span>
                <p> <strong>Battery</strong>  </p>
                <span>5020 mAh</span>

                <p> <strong>Display</strong></p>
                <span>6.67"</span>

                <p> <strong>CPU</strong> </p>
                <span>SnapDragon 720G</span>

                <p> <strong>Camera</strong> </p>
                <span>48 + 8 + 5 + 2 MP</span>

                <div className="cart-button__wrapper">
                 Add to cart
                </div>
            </div>

            

        </div>
    )
}
