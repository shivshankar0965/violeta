import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";

import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { adminReducers, adminUserReducer } from "./admin/admin.reducer";
const rootReducer = combineReducers({
  //here all reducers will come
  adminReducers,
  AuthReducer,
  adminUserReducer,
});

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composerEnhancer(applyMiddleware(thunk))
);
