import React from 'react';
import {connect, useSelector} from "react-redux";

export const Footer = ({user, isOpenedUserCopy=true, toggleUserCopy}) => {
  // const user = useSelector((store) => (store.user));

  const handleToggle = () => {
    toggleUserCopy();
  };

  return (
    <div data-testid={"footer-container"} className="container" style={{fontSize: '10px', textAlign: 'right'}}>
      hush...all rights have been stolen from other developers, but they don't know anything about it
      <button data-testid="toggler" onClick={handleToggle}>Toggle user info</button>
      {
        isOpenedUserCopy &&
        <p>the person who stoled the data is - <span data-testid="person-copy">{user ? user.name : 'You'}</span></p>
      }
    </div>
  );
};

export default connect((store) => ({user: store.user}))(Footer);