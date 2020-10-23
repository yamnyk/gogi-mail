import {applyMiddleware, compose, createStore} from "redux";
import reducer from "./reducers/rootReducer";
import initialStore from "./initialStore";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
  reducer,
  initialStore,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store