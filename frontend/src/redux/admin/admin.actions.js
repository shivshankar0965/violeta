import axios from "axios";
import {
  ADMIN_ORDER_FAILURE,
  ADMIN_ORDER_REQUEST,
  ADMIN_ORDER_SUCCESS,
  RESET_ERROR,
} from "./admin.types";
console.log(process.env.REACT_APP_BASE_URL);
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
