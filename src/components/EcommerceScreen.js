import * as React from 'react';
import { Products } from './Products';
import { SmartPhoneFilters } from './SmartPhoneFilters';
import { products } from '../data/products';
import { getFilteredBrands } from './filters/getBrands';
import { getPriceRange, lowerHigherPrice } from './filters/getPrices';

const initialState = {
  products,
  filteredProducts: [],
  temporalProducts: [],
};

export const EcommerceScreen = () => {
// TODO: make an error page
  const [selectedBrands, setSetSelectedBrands] = React.useState(initialState);
  const inputsChecked = document.querySelectorAll('.brandCheckbox:checked')
    .length;

  const handlePriceRange = (e) => {

    setSetSelectedBrands({
      ...selectedBrands,
      price: e.target.id
    });

  };

  const handleBrandChange = (e) => {
    const filtered = getFilteredBrands(e.target.id);
    if (e.target.checked) {
      // Adding more brands to the array
        setSetSelectedBrands((prevState) => ({
          ...prevState,
          filteredProducts: [...prevState.temporalProducts, ...filtered],
          temporalProducts: [...prevState.temporalProducts, ...filtered],
        }));
    } else {
      // Deleting those which are unselected
      const newFiltered = selectedBrands.filteredProducts.filter(
        (prod) => prod.brand !== e.target.id
      );
      setSetSelectedBrands((prevState) => ({
        ...prevState,
        filteredProducts: newFiltered,
        temporalProducts: newFiltered,
      }));
    }
  };

  const handleLowerHigherPrice = (e) => {
    const option = e.target.value;
    console.log(option)
    setSetSelectedBrands({
      ...selectedBrands,
      orderBy: option
    })
 
  };

  const filterProducts = () => {
    let { filteredProducts, orderBy,price } = selectedBrands;
    let tempPhones = [...filteredProducts];

    if(price){
      const prices = getPriceRange(price, filteredProducts);
      tempPhones = prices
    }
    
    if(orderBy){
      tempPhones = lowerHigherPrice(orderBy, tempPhones)
    }

    return tempPhones;
  };

  const sortedProds = filterProducts();

  React.useEffect(() => {
    if (inputsChecked === 0)
      setSetSelectedBrands((selectedBrands) => ({
        ...selectedBrands,
        filteredProducts: products,
      }));
  }, [inputsChecked]);

  return (
    <div className='container'>
      <SmartPhoneFilters
        handleBrandChange={handleBrandChange}
        handlePriceRange={handlePriceRange}
      />

      <Products
        selected={sortedProds}
        handleLowerHigherPrice={handleLowerHigherPrice}
      />
    </div>
  );
};
