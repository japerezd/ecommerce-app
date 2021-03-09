import {products} from '../../data/products'


export const getPriceRange = (initialPrice, selectedProd) => {
    if(selectedProd.length === 0){
        return products.filter(prod =>{
            if(initialPrice === '3000')
                return prod.price >= initialPrice && prod.price <= 6999
            if(initialPrice === '7000')
                return prod.price >= initialPrice && prod.price <=10999
            if(initialPrice === '11000')
                return prod.price >= initialPrice
           
            return prod.price >= 0
        })
    }

    return selectedProd.filter(prod =>{
        if(initialPrice === '3000' )
            return prod.price >= initialPrice && prod.price <= 6999
        if(initialPrice === '7000')
            return prod.price >= initialPrice && prod.price <=10999
        if(initialPrice === '11000')
            return prod.price >= initialPrice
       
        return prod.price >= 0
    })
}

export const lowerHigherPrice = (option, filtered) => {
    if(option === 'higher'){
         return filtered.sort((first, second) => second.price - first.price)
    }else if(option === 'lower'){
        return filtered.sort((first, second) => first.price - second.price)
    }
}