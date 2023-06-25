import { action } from "typesafe-actions";
import { productsTypes } from "./types";

export const getProductsFromDB = (payload: any) => action(productsTypes.getProductsFromDB, payload)
export const getProductsCartFromDB = (payload: any) => action(productsTypes.getProductsCartFromDB, payload)