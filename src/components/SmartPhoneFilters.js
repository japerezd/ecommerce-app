import React from "react";
import PropTypes from "prop-types";
import {getBrandsByAlphabetic, getBrandsInStock} from './filters/getBrands';

export const SmartPhoneFilters = ({handleBrandChange, handlePriceRange}) => {

  const brandsAlphabetic = getBrandsByAlphabetic();

  return (
    <section className="section-filter">
      <form>
        <label className="title-filter">Brands</label>
        
        {
          brandsAlphabetic.map((brand, index) => (
          <div className="section-filter__container" key={index}>
            <div className="form-group">
              <input
                type="checkbox"
                id={brand}
                name={brand}
                onChange={handleBrandChange}
                className="brandCheckbox"
              />
              <label htmlFor={brand} className="brand">
                {brand} ({getBrandsInStock(brand)})
              </label>
            </div>
          
          </div>
        ))
        }

        <label className="title-filter">Price Range</label>

        <div className="section-filter__container">
          <div className="form-group">
            <input
              type="radio"
              id="3000"
              name="price"
              onChange={handlePriceRange}
              // checked={p3000}
            />
            <label htmlFor="3000">From $3000 to $6999</label>
          </div>

          <div className="form-group">
            <input
              type="radio"
              id="7000"
              name="price"
              onChange={handlePriceRange}
              // checked={p7000}
            />
            <label htmlFor="7000">From $7000 to $10999</label>
          </div>
          
            <div className="form-group">
                <input type="radio" id="11000" name="price" 
                onChange={handlePriceRange}

                />
                    <label htmlFor="11000">
                        From $11000 or more
                    </label>
            </div>
        </div>
      </form>
    </section>
  );
};

SmartPhoneFilters.propTypes = {
  handleBrandChange: PropTypes.func.isRequired
}