import {products} from '../../data/products'


export const getPriceRange = (initialPrice) => {
    return products.filter(prod =>{
        if(initialPrice === '3000' )
            return prod.price >= initialPrice && prod.price <= 6999
        if(initialPrice === '7000')
            return prod.price >= initialPrice && prod.price <=10999
        if(initialPrice === '11000')
            return prod.price >= initialPrice
        return prod.price >= 0
    })
}