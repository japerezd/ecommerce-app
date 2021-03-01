import {products, brands} from '../../data/products'

export const getBrandsByAlphabetic = () => {
    return brands.sort();
}

export const getFilteredBrands = (selected) => {
    return products.filter(prod => prod.brand === selected)
}

export const getBrandsInStock = (brand) => {

    const arrayBrands =  products.map(prod => prod.brand)
   
    return arrayBrands.filter(value => (value === brand)).length

}