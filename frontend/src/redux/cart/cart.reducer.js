import { ADD_CART, REMOVE_CART } from "./cart.types";

const initState = {
  cart: [],
};

if (localStorage.getItem("cart")) {
  initState.cart = JSON.parse(localStorage.getItem("cart"));
} else {
  initState.cart = [];
}

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_CART:
      return {
        ...state,
        cart: payload,
      };
    case REMOVE_CART:
      return {
        ...state,
        cart: [...payload],
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
