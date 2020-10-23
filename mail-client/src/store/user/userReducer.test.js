import {SET_USER} from "./userActions";
import userReducer from "./userReducer";

describe('user reducer tests', () => {
  test('SAVE_USER action', () => {
    const initialUser = null;
    const action = {
      type: SET_USER,
      payload: {
        login: 'Gogi',
        password: '132321',
        passwordConfirmation: '123321'
      }
    };
    const setUserActionNoPayload = {
      type: SET_USER
    };
    const emptyAction = {type: 'GOGI_ACTION'};

    expect(userReducer(initialUser, emptyAction)).toBeNull();
    expect(userReducer(initialUser, action)).toBe(action.payload);
    expect(userReducer(initialUser, setUserActionNoPayload)).toBeUndefined();
  })
});