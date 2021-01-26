import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Products = ({selected ,handleLowerHigherPrice}) => {

    const {filteredProducts} = selected;

    return (
    
    <div className="products">
        <div className="container-products__filter-price">
                <select defaultValue={'DEFAULT'} onChange={handleLowerHigherPrice}>
                    <option value="DEFAULT" disabled>ORDER BY</option>
                    <option value="higher">HIGHER PRICE</option>
                    <option value="lower">LOWER PRICE</option>
                </select>
            </div>

        <main className="container-products">

            {/* FILTERING BRANDS SELECTED */}
           { 

            filteredProducts.length === 0 
            ?
             <div className="empty-search">
                <h3>Unfortunately no devices matched your search parameters :( </h3>
             </div>

            :
                filteredProducts.map(prod => (
                    <div className="container-products__item" key={prod.id}>
                    <Link to={`/products/${prod.slug}`}>
                        <div className="container-image">
                            <img  src={prod.images[0].img1} alt={prod.name}/>
                            <div className="button__wrapper">BUY NOW</div>
                        </div>
                    </Link>

                    <div className="container-products__details">
                        <p>{prod.name}</p>
                        <p><strong>${prod.price}</strong></p>
                    </div>
                </div>
                
                ))
            
            }
           
        </main>
    </div>
    )
}

Products.propTypes = {
    selected: PropTypes.shape({
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
        
        filteredProducts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            brand: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            images: PropTypes.arrayOf(PropTypes.shape(
                PropTypes.string.isRequired
            )).isRequired,
            slug: PropTypes.string.isRequired
        }))
    })
}