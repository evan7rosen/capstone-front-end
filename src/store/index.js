import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./users/reducer";
import videosReducer from "./videos/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  users: usersReducer,
  videos: videosReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
