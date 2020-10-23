import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {setUserAction} from "../../store/user/userActions";
import styled from 'styled-components';
import validateInputs from "../../utils/formValidation";

const Auth = (props) => {
  const [formState, setFormState] = useState({
    login: 'admin@gogi.com',
    password: '',
    passwordConfirmation: '',
  });
  const [errors, setErrors] = useState({
    login: ' ',
    password: '',
    passwordConfirmation: '',
  });

  const dispatch = useDispatch();

  const isSubmittable = () => {
    for (let key in errors) {
      if (errors[key].length > 0) {
        return false
      }
    }
    return true;
  };

  const handleInputChange = e => {
    const {target} = e;
    const newFormState = {
      ...formState,
      [target.name]: target.value,
    };
    setFormState(newFormState);

    setErrors(validateInputs(newFormState));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserAction(formState));
  };

  useEffect(() => {
    setFormState({
      ...formState,
      disabled: !isSubmittable()
    })
  },[errors]);

  return (
    <MyForm onSubmit={handleSubmit} className={'auth-form'}>
      <label htmlFor="">
        {
          errors.login && <ErrorMsg>{errors.login}</ErrorMsg>
        }
        <input type="text"
               name={'login'}
               value={formState.login}
               onChange={handleInputChange}
               minLength={3} required={true}
               placeholder={'Enter login'}/>
      </label>
      <label htmlFor="">
        {
          errors.password && <ErrorMsg>{errors.password}</ErrorMsg>
        }
        <input type="password"
               name={'password'}
               value={formState.password}
               onChange={handleInputChange}
               minLength={3}
               required={true}
               placeholder={'Enter password'}/>
      </label>
      <label htmlFor="">
        {
          errors.passwordConfirmation && <ErrorMsg>{errors.passwordConfirmation}</ErrorMsg>
        }
        <input
          type="password"
          name={'passwordConfirmation'}
          value={formState.passwordConfirmation}
          onChange={handleInputChange}
          minLength={3}
          required={true}
          placeholder={'Enter password'}/>
      </label>

      <input type='submit' disabled={formState.disabled} value={"You don't want this, aren't you?"}/>
    </MyForm>
  );
};

export default Auth;

const MyForm = styled.form`
display: flex;
flex-direction: column;
`;

const ErrorMsg = styled.span`
color: red;
`;