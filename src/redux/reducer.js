import { ADD_TO_CART } from "./constant"
import { REMOVE_FROM_CART } from "./constant"
import { EMPTY_CART } from "./constant"


export const cartData = (data=[],action) => {
    switch(action.type){
        case ADD_TO_CART :  
            console.warn("Add to cart condition",action)
            return [action.data, ...data]
        case REMOVE_FROM_CART:
                console.warn("Remove cart condition", action);
                //return data.slice(0, -1);
                const remainingItems = data.filter((item)=> item.id!==action.data)
                return [...remainingItems]
                /* your condition to identify the item to be removed */       
        case EMPTY_CART :  
            console.warn("Empty cart condition",action)
            data=[]
            return [...data]
        default:
             return data
        }
    }
    
    
