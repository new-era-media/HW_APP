//объединение наших компонентов стейта

import { createStore, combineReducers } from "redux";
import { testReducer } from "./reducers/test";

const rootReducer = combineReducers({
  test: testReducer,
});

export default createStore(rootReducer);
