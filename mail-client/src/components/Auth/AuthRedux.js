import React from 'react';
import {Field, reduxForm} from "redux-form";
import {EMAIL_REGEX} from "../../utils/formValidation";
import MyInput from "./MyInput";
import styled from 'styled-components';

const validateEmail = value => !EMAIL_REGEX.test(value) && "Email is invalid, dummy!";
const passwordsMatches = (value, allValues) => value !== allValues.password && "Passwords are not matched!";
const requiredInput = value => !value && "Field required";

let Auth = (props) => {


  return (
    <MyForm onSubmit={props.handleSubmit} name={'auth'} className={'auth-form'}>
        <Field type="text"
               component={'input'}
               // component={MyInput}
               name={'login'}
               required={true}
               placeholder={'Enter login'}
               validate={[requiredInput, validateEmail]}
        />
        <Field type="password"
               component={MyInput}
               name={'password'}
               required={true}
               placeholder={'Enter password'}
               validate={[requiredInput]}
        />
        <Field
          type="password"
          component={MyInput}
          name={'passwordConfirmation'}
          required={true}
          placeholder={'Enter password'}
          validate={[requiredInput, passwordsMatches]}
        />
      {/*<input type='submit' component={'input'} disabled={formState.disabled} value={"You don't want this, aren't you?"} />*/}
      <button onClick={() => props.submit()} disabled={props.submitting}>submit</button>
      <button onClick={() => props.reset()} disabled={props.submitting}>reset</button>
    </MyForm>
  );
};

export default reduxForm({
  form: 'auth',
  initialValues: {
    login: 'admin@go.g',
    password: '',
    passwordConfirmation: ''
  }
})(Auth);

const MyForm = styled.form`
display: flex;
flex-direction: column;
`;