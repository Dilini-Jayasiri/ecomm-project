import { ADD_TO_CART } from "./constant";
import { REMOVE_FROM_CART } from "./constant";
import { EMPTY_CART } from "./constant";

export const addToCart = (data) => {
    console.warn("Actions is called",data)
    return {
        type : ADD_TO_CART,
        data
    }
}

export const removeFromCart = (data) => {
    console.warn("Actions is called",data)
    return {
        type : REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () => {
    console.warn("Actions empty cart")
    return {
        type : EMPTY_CART,
    }
}