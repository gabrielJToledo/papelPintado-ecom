import { productsTypes } from "./types";
import { Reducer } from "redux";

const initalState = {
    products: null,
    cart: null
}

const productReducer: Reducer = (state = initalState, action) => {
    switch (action.type) {
        case productsTypes.getProductsFromDB:
            return { ...state, products: action.payload }
        case productsTypes.getProductsCartFromDB:
            return { ...state, cart: action.payload }
        default:
            return state
    }
}

export default productReducer