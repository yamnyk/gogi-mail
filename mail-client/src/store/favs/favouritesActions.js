import {emailsResultSelector} from "../emails/emailsSelectors";
import {getFavouritesEmails} from "./favouritesEmailsSelector";

export const FAVOURITES_TOGGLE = "FAVOURITES_TOGGLE";

export const addToFavourites = (id) => (dispatch, getStore) => {
  const allEmails = emailsResultSelector(getStore());
  const allFavourites = getFavouritesEmails(getStore());

  const favItem = allEmails.find(email => email.id === id);

  dispatch({
    type: FAVOURITES_TOGGLE,
    payload: allFavourites.some(f => f.id === favItem.id)
      ? [...allFavourites.filter(f => f.id !== favItem.id)]
      : [...allFavourites, favItem]
  });
};