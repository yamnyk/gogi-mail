import axios from "axios";
import {emailsResultSelector} from "./emailsSelectors";

export const EMAILS_LOADING_START = "EMAILS_LOADING_START";
export const EMAILS_LOADING_END = "EMAILS_LOADING_END";
export const EMAILS_LOADING_ERROR = "EMAILS_LOADING_ERROR";
export const DELETE_EMAIL = "DELETE_EMAIL";

export function emailsLoadedAction() {
  return (dispatch) => {
    dispatch({type: EMAILS_LOADING_START});

    axios('/api/emails')
      .then(res => {
        dispatch({
          type: EMAILS_LOADING_END,
          result: res.data
        })
      })
      .catch(error => {
        dispatch({type: EMAILS_LOADING_ERROR, error})
      })
  }
}

export const deleteEmail = (id) => (dispatch, getStore) => {
  const oldEmails = emailsResultSelector(getStore());
  const newEmails = oldEmails.filter(el => el.id !== id);
  dispatch({type: DELETE_EMAIL, result: newEmails});
};