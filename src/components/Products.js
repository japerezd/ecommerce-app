import * as React from 'react';
import PropTypes from 'prop-types';
import { getFilteredBrands } from "./filters/getBrands";
import { getPriceRange } from "./filters/getPrices";

export const Products = ({products, selected ,priceRange}) => {

    const filtered = getFilteredBrands(products, selected);
    const prices = getPriceRange(priceRange);

    return (
    
    <div className="products">
        <div className="container-products__filter-price">
                <select defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled>ORDER BY</option>
                    <option>HIGHER PRICE</option>
                    <option>LOWER PRICE</option>
                </select>
            </div>

        <main className="container-products">

            {/* FILTERING BRANDS SELECTED */}
           { 

               filtered.length === 0 
                ?
                prices.map(prod => (
                <div className="container-products__item" key={prod.id}>
                    <div className="container-image">
                        <img  src={prod.images[0].img1} alt={prod.name}/>
                        <div className="button__wrapper">BUY NOW</div>
                    </div>

                    <div className="container-products__details">
                        <p>{prod.name}</p>
                        <p><strong>${prod.price}</strong></p>
                    </div>
                </div>
                ))
                : 
               filtered.map(prod => (
                <div className="container-products__item" key={prod.id}>
                    <div className="container-image">
                        <img  src={prod.images[0].img1} alt={prod.name}/>
                        <div className="button__wrapper">BUY NOW</div>
                    </div>

                    <div className="container-products__details">
                        <p>{prod.name}</p>
                        <p><strong>${prod.price}</strong></p>
                    </div>
                </div>
                
                ))
            
            }
           
            {/* FILTERING PRICE RANGE SELECTED */}

            {/* {

                filtered.length === 0 && priceRange ?
                prices.map(prod => (
                    <div className="container-products__item" key={prod.id}>
                        <div className="container-image">
                            <img  src={prod.images[0].img1} alt={prod.name}/>
                            <div className="button__wrapper">BUY NOW</div>
                        </div>

                        <div className="container-products__details">
                            <p>{prod.name}</p>
                            <p><strong>${prod.price}</strong></p>
                        </div>
                    </div>
                ))
                    : ''
            } */}
                

        </main>
    </div>
    )
}

Products.propTypes = {
        products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.shape(
            PropTypes.string.isRequired
        )).isRequired,
        slug: PropTypes.string.isRequired
    })).isRequired,
    selected: PropTypes.arrayOf(String).isRequired
}