import initialStore from "../initialStore";
import {FAVOURITES_TOGGLE} from "./favouritesActions";

export const favouritesReducer = (favsFromStore = initialStore.favourites, action) => {
  switch (action.type) {
    case FAVOURITES_TOGGLE:
      return action.payload;
    default:
      return favsFromStore;
  }
}