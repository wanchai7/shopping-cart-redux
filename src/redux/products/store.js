import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pageReducer";
import productReducer from "./productReducer";
import cartReducer from "../carts/cartReducer";
export const store = configureStore({
  reducer: {
    page: pageReducer,
    products: productReducer,
    cart: cartReducer,
  },
  devTools: true,
});
