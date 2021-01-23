// import React from 'react'
import * as React from 'react'
import { Products } from './Products'
import { SmartPhoneFilters } from './SmartPhoneFilters';
import {products} from '../data/products'

// const initialState = {
//   products,
//   filteredProducts: [],
//   minPrice: 0,
// }

export const EcommerceScreen = () => {


    const [selectedBrands, setSetSelectedBrands] = React.useState([]);
    const [priceRange, setPriceRange] = React.useState();

    const handlePriceRange = (e)  => {
      if(e.target.checked)
        setPriceRange(e.target.id)
    }

    const handleBrandChange = (e) => {
        if(e.target.checked){
          setSetSelectedBrands((prevState) => {
            return [...prevState, e.target.id]
          })
        }else{
          const newState = selectedBrands.filter((brand) => brand !== e.target.id
          )
          setSetSelectedBrands(newState)
        }
        
    };

    return (
        <div className="container">

            <SmartPhoneFilters handleBrandChange={handleBrandChange} handlePriceRange={handlePriceRange}/>

            <Products products={products} selected={selectedBrands} priceRange={priceRange}/>
        </div>
    )
}
