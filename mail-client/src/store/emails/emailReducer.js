import {
  DELETE_EMAIL,
  EMAILS_LOADING_END,
  EMAILS_LOADING_ERROR,
  EMAILS_LOADING_START
} from "./emailActions";
import initialStore from "../initialStore";

export default function emailsReducer(emailsFromStore=initialStore.emails, {type, error, result}) {
  switch (type) {
    case EMAILS_LOADING_START:
      return {
        ...emailsFromStore,
        loading: true
      };
    case EMAILS_LOADING_END:
      return {
        ...emailsFromStore,
        loading: false,
        result
      };
    case EMAILS_LOADING_ERROR:
      return {
        ...emailsFromStore,
        loading: false,
        error
      };
    case DELETE_EMAIL:
      return {
        ...emailsFromStore,
        result
      };
    default:
      return emailsFromStore;
  }
}