import React from 'react';
import validateInputs, {EMAIL_REGEX} from "../../utils/formValidation";
import MyInput from "./MyInput";
import styled from 'styled-components';
import {Form, Field, withFormik} from "formik";
import * as yup from 'yup';

const validateEmail = value => !EMAIL_REGEX.test(value) && "Email is invalid, dummy!";
const passwordsMatches = (value, allValues) => value !== allValues.password && "Passwords are not matched!";
const requiredInput = value => !value && "Field required";

const formSchema = yup.object().shape({
  login: yup
    .string()
    .required("This is a required field!")
    .email('Enter valid email!'),
  password: yup
    .string()
    .required("This is a required field!")
    .min(5, "Min required password should be 5 characters long"),
  passwordConfirmation: yup
    .string()
    .required("This is a required field!")
    .min(5, "Min required password should be 5 characters long")
});

let Auth = (props) => {
  return (
    <MyForm onSubmit={props.handleSubmit} noValidate>
        <Field type="text"
               component={MyInput}
               name={'login'}
               required={true}
               placeholder={'Enter login'}
        />
        <Field type="password"
               component={MyInput}
               name={'password'}
               required={true}
               placeholder={'Enter password'}
        />
        <Field
          type="password"
          component={MyInput}
          name={'passwordConfirmation'}
          required={true}
          placeholder={'Enter password'}
        />
      {/*<input type='submit' component={'input'} disabled={formState.disabled} value={"You don't want this, aren't you?"} />*/}
      <button type={'submit'} disabled={props.isSubmitting}>submit</button>
      {/*<button type={'reset'} onClick={() => formikProps.resetForm()} disabled={formikProps.isSubmitting}>reset*/}
      {/*</button>*/}
    </MyForm>
  );
};

export default withFormik({
  mapPropsToValues: props => ({
    login: 'admin@go.g',
    password: '',
    passwordConfirmation: '',
  }),
  validate: validateInputs,
  validationSchema: formSchema
})(Auth);

const MyForm = styled(Form)`
display: flex;
flex-direction: column;
`;

const ErrorSpan = styled.span`
color: ${props => props.clicked ? '#ff7d79' : 'red'};
`;