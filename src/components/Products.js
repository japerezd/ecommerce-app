import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ProductContext } from '../ProductContext';

export const Products = ({selected ,handleLowerHigherPrice}) => {
    const sortedProds = selected;
    const {handleAddToCart} = React.useContext(ProductContext)

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

            sortedProds.length === 0 
            ?
             <div className="empty-search">
                <h3>Unfortunately no devices matched your search parameters :( </h3>
             </div>

            :
                sortedProds.map(prod => (
                    <div className="container-products__item" key={prod.id}>
                        <div className="container-image">
                            <Link to={`/products/${prod.slug}`}>
                                <img  src={prod.images[0].img1} alt={prod.name}/>
                            </Link>
                                <div 
                                className="button__wrapper"
                                onClick={handleAddToCart}
                                >
                                    ADD TO CART
                                </div>
                        </div>

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
    sortedProds: PropTypes.shape({
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