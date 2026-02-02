import {
  ADD_PRODUCT,
  ADD_QUANTITY,
  REMOVE_QUANTITY,
  FILTER_BY_CATEGORY,
} from "./action.Type.js";
import { initialState } from "./initialState.js";

const nextId = (items) => {
  return items.reduce((id, item) => Math.max(id, item.id), -1) + 1;
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products,
          {
            id: nextId(state.products),
            ...action.payload,
            price: parseFloat(action.payload.price),
            quantity: parseInt(action.payload.quantity),
          },
        ],
      };

    case ADD_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.productId) {
            return {
              ...product,
              quantity: product.quantity + action.payload.quantity,
            };
          } else {
            return product;
          }
        }),
      };

    case REMOVE_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.productId) {
            return {
              ...product,
              quantity: Math.max(0, product.quantity - action.payload.quantity),
            };
          } else {
            return product;
          }
        }),
      };

    case FILTER_BY_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;