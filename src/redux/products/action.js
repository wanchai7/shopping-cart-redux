import { ADD_PRODUCT, ADD_QUANTITY, REMOVE_QUANTITY } from "./action.Type";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};


export const addQuantity = (productId, quantity) => {
  return {
    type: ADD_QUANTITY,
    payload: { productId, quantity },
  };
};

export const removeQuantity = (productId, quantity) => {
  return {
    type: REMOVE_QUANTITY,
    payload: { productId, quantity },
  };
}
