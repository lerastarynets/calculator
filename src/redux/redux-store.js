import { applyMiddleware, createStore } from "redux";
import calculatorReducer from "./calculator-reducer";
import thunkMiddleware from "redux-thunk";

const store = createStore(calculatorReducer, applyMiddleware(thunkMiddleware));

export default store;
