import {CHANGE_TITLE} from "../actions/actionTypes";
import {combineReducers} from "redux";
import counterReducer from "../counter/counterReducer";
import initialStore from "../initialStore";
import emailsReducer from "../emails/emailReducer";
import userReducer from "../user/userReducer";
import {favouritesReducer} from "../favs/favouritesReducer";
import {reducer as formReducer} from 'redux-form';


const titleReducer = (store=initialStore.title, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...store,
        title: "Redux title successfully changed"
      };
    default:
      return store;
  }
};

export default combineReducers({
  title: titleReducer,
  counter: counterReducer,
  emails: emailsReducer,
  user: userReducer,
  favourites: favouritesReducer,
  form: formReducer
},);