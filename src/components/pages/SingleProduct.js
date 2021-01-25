import * as React from 'react';
import { getDeviceBySlug } from '../../selectors/getDeviceBySlug';


export const SingleProduct = ({match}) => {
    const idPhone = match.params.idPhone;
    const {price,images, description, battery, display, cpu, camera, name} = getDeviceBySlug(idPhone);
    return (
        <div className="product-details">
            <div className="product-image-container">
                <div className="device-preview">
                    <img src={images[0].img1} alt='iphone'/>
                </div>

                <div className="device-preview__minipreviews">
                    <div className="device-preview__minipreviews--one">
                        <img src={images[0].img1} alt='iphone'/>

                    </div>

                    <div className="device-preview__minipreviews--two">
                        <img src={images[1].im2} alt='iphone'/>
                    </div>

                    <div className="device-preview__minipreviews--three">
                        <img src={images[2].img3} alt='iphone'/>
                    </div>

                    <div className="device-preview__minipreviews--four">
                        <img src={images[3].img4} alt='iphone'/>
                    </div>
                </div>
            </div>

            <div className="product-info">
                <h1>{name}</h1>
                <h2>${price}</h2>

                <p> <strong>Description</strong> 
              
                </p>
                <span> {description} </span>
                <p> <strong>Battery</strong>  </p>
                <span> {battery} </span>

                <p> <strong>Display</strong></p>
                <span> {display} </span>

                <p> <strong>CPU</strong> </p>
                <span> {cpu} </span>

                <p> <strong>Camera</strong> </p>
                <span> {camera} </span>
git lg

                <div className="cart-button__wrapper">
                 Add to cart
                </div>
            </div>

            

        </div>
    )
}
