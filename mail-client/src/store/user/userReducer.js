import {SET_USER} from "./userActions"
import initialStore from "../initialStore";


export default function (userFromStore = initialStore.user, action) {
  switch(action.type) {
    case SET_USER: return action.payload;
    default: return userFromStore
  }
}