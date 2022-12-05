import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import FormReducer from "./Form/FormReducer";
const store = createStore(FormReducer ,applyMiddleware(logger) );
export default store;