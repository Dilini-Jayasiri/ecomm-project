import { ADD_TO_CART } from "./constant"
import { REMOVE_FROM_CART } from "./constant"
import { EMPTY_CART } from "./constant"


export const cartData = (data=[],action) => {
    switch(action.type){
        case ADD_TO_CART :  
            console.warn("Add to cart condition",action)
            return [action.data, ...data]
        case REMOVE_FROM_CART : 
            console.warn("Remove cart condition",action) 
            data.length= data.length? data.length-1: []
            return [...data]
        case EMPTY_CART :  
            console.warn("Empty cart condition",action)
            data=[]
            return [...data]
        default:
             return []
        }
    }
    
    
