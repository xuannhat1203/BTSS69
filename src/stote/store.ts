import reducerItem from "./reducers/cartItem";
import reducerState from "./reducers/listCart";
import { combineReducers, createStore } from "redux";
const rootReducer = combineReducers({
  reducerState,
  reducerItem,
});
const store = createStore(rootReducer);
export default store;
