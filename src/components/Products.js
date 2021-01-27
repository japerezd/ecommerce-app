import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { singleProductReducer } from '../reducers/singleProductReducer';
// import { getDeviceByName } from '../selectors/getDeviceByName';
// import { buySingleProduct } from '../actions/singleProduct';
import { ProductContext } from '../ProductContext';

export const Products = ({selected ,handleLowerHigherPrice}) => {
// TODO: hacer que funcione el context api y que se pueda tomar datos en Cart.js
    const {filteredProducts} = selected;
    const {handleBuy} = React.useContext(ProductContext)
    // const [items, dispatch] = React.useReducer(singleProductReducer)

    // const handleBuy = (e) => {
    //     const nameImage = e.currentTarget.parentNode.querySelector('img').alt;
    //     const product = getDeviceByName(nameImage);
    //     // dispatching action
    //     dispatch(buySingleProduct(product))
    // }

    return (
    // <ProductContext.Provider value={items}>
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
                        <div className="container-image">
                            <Link to={`/products/${prod.slug}`}>
                                <img  src={prod.images[0].img1} alt={prod.name}/>
                            </Link>
                         {/* <Link to="/cart">    */}
                            <div 
                            className="button__wrapper"
                            onClick={handleBuy}
                            >
                                BUY NOW
                            </div>
                         {/* </Link>   */}
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
    // </ProductContext.Provider>
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