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
  minPrice: 0,
}

export const EcommerceScreen = () => {
  //TODO: check why is bugged when a radio button is selected and is not displaying correctly the products

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
              const prices = getPriceRange(e.target.id, selectedBrands.products);
              setSetSelectedBrands((prevState) => ({
                ...prevState,
                filteredProducts: prices
              }))
            }else{
              const prices = getPriceRange(e.target.id, selectedBrands.filteredProducts);
  
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
              filteredProducts: [...filtered]
            }))
          }else{

            setSetSelectedBrands((prevState) => ({
              ...prevState,
              filteredProducts: [...prevState.filteredProducts,...filtered]
            }))
          }
        }else{
          const newState = selectedBrands.filteredProducts.filter((brand) => brand.brand !== e.target.id
          )
          setSetSelectedBrands((prevState) => ({
            ...prevState,
            filteredProducts: newState
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
