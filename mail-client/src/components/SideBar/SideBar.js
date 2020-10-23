import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './SideBar.scss'

class SideBar extends Component {
  render() {
    return (
      <div>
        <NavLink exact to='/inbox' activeStyle={{color: 'coral'}} className={'nav-link'}>Go to inbox</NavLink>
        <NavLink exact to='/sent' activeStyle={{color: 'coral'}} className={'nav-link'}>Sent</NavLink>
        <NavLink exact to='/favourites' activeStyle={{color: 'coral'}} className={'nav-link'}>Favorites</NavLink>
      </div>
    );
  }
}

export default SideBar;