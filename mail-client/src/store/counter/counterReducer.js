import initialStore from "../initialStore";
import {DECR_COUNTER, INCR_COUNTER, RESET_COUNTER} from "./counterActions";


export default function counterReducer(counterFromStore = initialStore.counter, action) {
  switch (action.type) {
    case INCR_COUNTER :
      return ++counterFromStore;
    case DECR_COUNTER:
      return --counterFromStore;
    case RESET_COUNTER:
      return action.payload;
    default:
      return counterFromStore
  }
}

