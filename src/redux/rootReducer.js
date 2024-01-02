import {combineReducers} from "redux";
import { cartData } from "./reducer";
import { productData } from "./productReucer";
export default combineReducers({
   cartData,
   productData
})

