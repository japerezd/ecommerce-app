// import React from 'react'
import * as React from 'react'
import { Products } from './Products'
import { SmartPhoneFilters } from './SmartPhoneFilters';
import {products} from '../data/products'
import { getFilteredBrands } from './filters/getBrands';
import { getPriceRange } from './filters/getPrices';

const initialState = {
  products,
  filteredProducts: [],
  minPrice: 0,
}

export const EcommerceScreen = () => {
  

    const [selectedBrands, setSetSelectedBrands] = React.useState(initialState);
    // const [priceRange, setPriceRange] = React.useState();
    //TODO: get work for range price either with no selected brands or selected
    const handlePriceRange = (e)  => {
      const prices = getPriceRange(e.target.id, selectedBrands.filteredProducts);
      // console.log(prices)
      if(e.target.checked){
        setSetSelectedBrands((prevState) => ({
          ...prevState,
          filteredProducts: prices
        }))
      }
    }

    const handleBrandChange = (e) => {
      const filtered = getFilteredBrands(products, e.target.id);

        if(e.target.checked){
        // const filted = [...products.filteredProducts, filtered]

          setSetSelectedBrands((prevState) => ({
            // return [...prevState, e.target.id]
            ...prevState,
            filteredProducts: [...prevState.filteredProducts,...filtered]
          }))
        }else{
          const newState = selectedBrands.filteredProducts.filter((brand) => brand.brand !== e.target.id
          )
          setSetSelectedBrands((prevState) => ({
            ...prevState,
            filteredProducts: newState
          }))
        }
        
    };

    return (
        <div className="container">

            <SmartPhoneFilters handleBrandChange={handleBrandChange} handlePriceRange={handlePriceRange}/>

            <Products selected={selectedBrands} />
        </div>
    )
}
