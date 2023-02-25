import {
  ADMIN_ORDER_FAILURE,
  ADMIN_ORDER_REQUEST,
  ADMIN_ORDER_SUCCESS,
  RESET_ERROR,
} from "./admin.types";

const initState = {
  loading: false,
  error: false,
  errorMsg: "",
  orders: [],
};

export const adminOrderReducers = (state = initState, { type, payload }) => {
  switch (type) {
    case ADMIN_ORDER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADMIN_ORDER_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: payload,
      };
    }
    case ADMIN_ORDER_SUCCESS: {
      return {
        ...state,
        loading: false,
        orders: payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
