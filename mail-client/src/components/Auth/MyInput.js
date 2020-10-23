import React from 'react';
import styled from "styled-components";

const MyInput = ({placeholder, type, required, field, form}) => {
  const {errors, touched} = form;
  const {name} = field;

  return (
    <MyLabel>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        {...field}/>
      {
        touched[name] && errors[name] && <ErrorMsg>{errors[name]}</ErrorMsg>
      }
    </MyLabel>
  );
};

export default MyInput;

const MyLabel = styled.label`
display: flex;
flex-direction: column;
`;

export const ErrorMsg = styled.span`
color: red;
`;