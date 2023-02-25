import {
  ADMIN_ORDER_FAILURE,
  ADMIN_ORDER_REQUEST,
  ADMIN_ORDER_SUCCESS,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_FAILURE,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_ADD_PRODUCT_FAILURE,
  ADMIN_ADD_PRODUCT_SUCCESS,
  ADMIN_ADD_PRODUCT_REQUEST,
  RESET_ERROR,
} from "./admin.types";

const initState = {
  loading: false,
  error: false,
  errorMsg: "",
  data: [],
};

export const adminReducers = (state = initState, { type, payload }) => {
  switch (type) {
    case ADMIN_ORDER_REQUEST:
    case ADMIN_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADMIN_ORDER_FAILURE:
    case ADMIN_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: payload,
      };

    case ADMIN_ORDER_SUCCESS:
    case ADMIN_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case RESET_ERROR:
      return {
        ...state,
        errorMsg: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export const adminUserReducer = (
  state = { loading: false, data: {}, error: false },
  { type, payload }
) => {
  switch (type) {
    case ADMIN_ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_ADD_PRODUCT_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case ADMIN_ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
