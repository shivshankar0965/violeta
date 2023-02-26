import axios from "axios";
import * as types from "./actionTypes";

const register = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  console.log(payload);
  return axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/v1/register`, payload, {
      headers: { "Content-Type": "application/json" },
    })
    .then((r) => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: r.data });
      return types.REGISTER_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.REGISTER_FAILURE, payload: e });
      return types.REGISTER_FAILURE;
    });
};

const login = (params) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/v1/login`, params, {
      headers: { "Content-Type": "application/json" },
    })
    .then((r) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data });
      return types.LOGIN_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.LOGIN_FAILURE, payload: e });
      return types.LOGIN_FAILURE;
    });
};

export { register, login };
