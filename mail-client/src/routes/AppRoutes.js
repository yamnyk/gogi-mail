import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import Inbox from "../pages/Inbox/Inbox";
import Auth from "../components/Auth/Auth";
import Page404 from "../pages/Page404/Page404";
import OneEmail from "../pages/OneEmail/OneEmail";
import {setUserAction} from "../store/user/userActions";
import {connect} from "react-redux"
import Favourites from "../pages/Favourites/Favourites";

const AppRoutes = ({user, emails, setUser}) => {
  const isAuth = !!user;

  return (
    <>
      <ProtectedRoute authenticated={isAuth} path='/' component={SideBar}/>
      <Switch>
        <ProtectedRoute exact path='/' render={() => <Redirect to='/inbox'/>} authenticated={isAuth}/>
        <ProtectedRoute
          authenticated={isAuth}
          path='/inbox'
          exact
          component={Inbox}
        />
        <ProtectedRoute
          authenticated={isAuth}
          path='/favourites'
          exact
          component={Favourites}
        />
        <ProtectedRoute exact path='/emails/:emailId' component={OneEmail} authenticated={isAuth}/>

        <Route exact path='/login' render={() => isAuth ? <Redirect to='/'/> : <Auth test={'test'}/>}/>
        <Route path='*' component={Page404}/>
      </Switch>
    </>
  );
};

function mapStoreToProps(store) {
  return {
    user: store.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: (newUser) => {
      dispatch(setUserAction(newUser))
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(AppRoutes);

const ProtectedRoute = ({authenticated, ...props}) => authenticated ? <Route {...props} /> : <Redirect to='/login'/>;