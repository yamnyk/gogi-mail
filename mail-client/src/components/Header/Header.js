import React from 'react';
import './Header.scss';
import {connect} from "react-redux";
import {decrementCounterAction, incrementCounterAction} from "../../store/counter/counterActions";

export const Header = ({
                  myTitle,
                  myCounter,
                  changeTitle,
                  incrementCounter,
                  decrementCounter
                }) => {

  return (
    <div className='header'>
      <h2>{myTitle}</h2>
      <button onClick={() => changeTitle()}>change title</button>
      <p data-testid='counter' className='counter'>count: {myCounter || 0}</p>
      <button onClick={() => incrementCounter()}>increment counter</button>
      <button onClick={() => decrementCounter()}>decrement counter</button>
    </div>
  );
};

const mapStoreToProps = (store) => {
  return {
    myTitle: store.title,
    myCounter: store.counter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeTitle: () => dispatch({type: "CHANGE_TITLE"}),
    incrementCounter: () => dispatch(incrementCounterAction()),
    decrementCounter: () => dispatch(decrementCounterAction())
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Header);