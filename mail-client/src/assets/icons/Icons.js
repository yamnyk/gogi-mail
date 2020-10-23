import React from 'react';
import email from "./email";
import inbox from "./inbox";

const Icons = ({type, classname, styles}) => {
  switch (type) {
    case 'inbox':
      return inbox(classname, styles);
    case 'email':
      return email(classname, styles);
    default:
      return null
  }
};

export default Icons;