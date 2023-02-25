import axios from "axios";
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
} from "./admin.types";
export const getOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_ORDER_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}api/v1/admin/orders`
    );
    console.log(data);
    dispatch({
      type: ADMIN_ORDER_SUCCESS,
      payload: data.products,
    });
  } catch (err) {
    dispatch({
      type: ADMIN_ORDER_FAILURE,
      payload: err.response.data.message,
    });
  }
};
export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PRODUCT_REQUEST });
    const { data } = await axios.get(`/api/v1/products`);
    dispatch({
      type: ADMIN_PRODUCT_SUCCESS,
      payload: data.products,
    });
  } catch (err) {
    dispatch({
      type: ADMIN_PRODUCT_FAILURE,
      payload: err.response.data.message,
    });
  }
};

export const addProducts = (product) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_ADD_PRODUCT_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${process.env.REACT_APP_BASE_URL}api/v1/product/new`,
      product,
      config
    );
    dispatch({ type: ADMIN_ADD_PRODUCT_SUCCESS, payload: data.user });
  } catch (err) {
    dispatch({
      type: ADMIN_ADD_PRODUCT_FAILURE,
      payload: err.response.message,
    });
  }
};
