export const INCR_COUNTER = "INCR_COUNTER";
export const DECR_COUNTER = "DECR_COUNTER";
export const RESET_COUNTER = "RESET_COUNTER";

export function incrementCounterAction() {
  return {
    type: INCR_COUNTER
  }
}

export function decrementCounterAction() {
  return {
    type: DECR_COUNTER
  }
}

export function resetCounterAction(zeroCounter) {
  return {
    type: RESET_COUNTER,
    payload: zeroCounter
  }
}
