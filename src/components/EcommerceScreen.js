// import React from 'react'
import * as React from 'react'
import { Products } from './Products'
import { SmartPhoneFilters } from './SmartPhoneFilters';
import {products} from '../data/products'
import { getFilteredBrands } from './filters/getBrands';
import { getPriceRange,lowerHigherPrice } from './filters/getPrices';


const initialState = {
  products,
  filteredProducts: [],
  temporalProducts: []
}

export const EcommerceScreen = () => {
//TODO: 

    const [selectedBrands, setSetSelectedBrands] = React.useState(initialState);
    const inputsChecked = document.querySelectorAll('.brandCheckbox:checked').length;
    
    const handlePriceRange = (e)  => {
      
        if(e.target.checked){
          if(inputsChecked === 0)
          {
            const prices = getPriceRange(e.target.id, products);
            setSetSelectedBrands((prevState) => ({
              ...prevState,
              filteredProducts: prices
            }))
          }else{
            if(selectedBrands.filteredProducts.length === 0){
              const prices = getPriceRange(e.target.id, selectedBrands.temporalProducts);
              setSetSelectedBrands((prevState) => ({
                ...prevState,
                filteredProducts: prices
              }))
            }else{
              const prices = getPriceRange(e.target.id, selectedBrands.temporalProducts);
  
              setSetSelectedBrands((prevState) => ({
                ...prevState,
                filteredProducts: prices
              }))
            }
        }
      }
    }

    const handleBrandChange = (e) => {
      const filtered = getFilteredBrands(products, e.target.id);
      
        if(e.target.checked){

          if(selectedBrands.filteredProducts.length === products.length){
            setSetSelectedBrands((prevState) => ({
              ...prevState,
              filteredProducts: [...filtered],
              temporalProducts: [...filtered]
            }))
          }else{

            setSetSelectedBrands((prevState) => ({
              ...prevState,
              filteredProducts: [...prevState.temporalProducts,...filtered],
              temporalProducts: [...prevState.temporalProducts, ...filtered]
            }))
          }
        }else{
          // DELETE BRANDS UNSELECTED FROM STATE
          const newState = selectedBrands.temporalProducts.filter((brand) => brand.brand !== e.target.id
          )
          setSetSelectedBrands((prevState) => ({
            ...prevState,
            filteredProducts: newState,
            temporalProducts: newState
          }))
        }
        
    };

    const handleLowerHigherPrice = (e) => {
      const option = e.target.value;
      if(inputsChecked === 0){
        const filtered = lowerHigherPrice(option, selectedBrands.products)
        setSetSelectedBrands((selectedBrands) => ({
          ...selectedBrands,
          filteredProducts: filtered
        }))
      }else{
        const filtered = lowerHigherPrice(option, selectedBrands.filteredProducts);
        setSetSelectedBrands((selectedBrands) => ({
          ...selectedBrands,
          filteredProducts: filtered
        }))
      } 
  }

    React.useEffect(() => {
      if(inputsChecked === 0)
        setSetSelectedBrands(selectedBrands => ({
          ...selectedBrands,
          filteredProducts: products
        }))

    },[inputsChecked])
   
    return (
        <div className="container">

            <SmartPhoneFilters handleBrandChange={handleBrandChange} handlePriceRange={handlePriceRange}/>

            <Products selected={selectedBrands} handleLowerHigherPrice = {handleLowerHigherPrice} />
        </div>
    )
}
