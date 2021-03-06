import * as React from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../ProductContext';
import { getDeviceBySlug } from '../../selectors/getDeviceBySlug';


export const SingleProduct = ({match}) => {
    const {handleAddToCartSingleProduct} = React.useContext(ProductContext)
    
    const smartphone = getDeviceBySlug(match.params.idPhone);

    const {price,images, description, battery, display, cpu, camera, name} = smartphone;
    
    const [imagePreview, setImagePreview] = React.useState({
        preview: images ? images[0].img1 : ''
    });
    
    const miniImages = document.querySelectorAll('.device-preview__minipreviews div');

    const handleImage = (e) => {
        setImagePreview({
            class: 'active',
            preview: e.currentTarget.src
        })
        miniImages.forEach(miniImg => miniImg.classList.remove('active'));
        e.currentTarget.parentNode.classList.add('active')
    }

    React.useEffect(()=>{
            setImagePreview({
                class:'active',
                preview: images ? images[0].img1 : ''
            })
    },[images])

    if(price === ''){
        return (
            <div className="error">
                <h2>NO SUCH SMARTPHONE COULD BE FOUND </h2>
                <Link className="button__wrapper" to="/">
                    Back to Home
                </Link>
            </div>
        )
    }

    return (
        <div className="product-details">
            <div className="product-image-container">
                <div className="device-preview">
                    <img src={imagePreview.preview} alt='iphone'/>
                </div>

                <div className="device-preview__minipreviews">
                    <div className={`device-preview__minipreviews--one ${imagePreview.class}`}>
                        <img src={images[0].img1} alt='iphone' onClick={handleImage}/>
                    </div>

                    <div className={`device-preview__minipreviews--two`}>
                        <img src={images[1].im2} alt='iphone' onClick={handleImage} />
                    </div>

                    <div className={`device-preview__minipreviews--three`}>
                        <img src={images[2].img3} alt='iphone' onClick={handleImage}/>
                    </div>

                    <div className={`device-preview__minipreviews--four`}>
                        <img src={images[3].img4} alt='iphone' onClick={handleImage}/>
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

                
                    <div className="cart-button__wrapper" onClick={handleAddToCartSingleProduct}>
                        Add to cart
                    </div>
                

            </div>

            

        </div>
    )
}
