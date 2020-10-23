export const SET_USER = "SET_USER";


export const setUserAction = (payload) => dispatch => {
  const action = {
    type: SET_USER,
    payload
  };

  localStorage.setItem("user", JSON.stringify(payload))
  dispatch(action)
}