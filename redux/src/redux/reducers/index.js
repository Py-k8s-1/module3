import { combineReducers } from "redux";
import { productsReducer,selectedProductsReducer } from "./productReducers";
const rootReducer = combineReducers({
    allproduct:productsReducer,
    product:selectedProductsReducer,
})


export default rootReducer