import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../pages/AuthPage/Auth';
import Home from '../pages/HomePage/Home'
import PrivateRoute from './PrivateRoute';
import Navigation from '../components/Navigation/Navigation'
import Profile from 'pages/ProfilePage/Profile';

const URL = {
  HOME: '/',
  LOGIN: '/login',
  PROFILE: '/profile'
}

const Router = ({ isLoggedIn, userObj }) => {
  return (
    <BrowserRouter>
      {isLoggedIn && <Navigation />}
      <Routes>
        <Route path={URL.HOME} element={<PrivateRoute isLoggedIn={isLoggedIn} component={<Home userObj={userObj} />} />}/>
        <Route path={URL.PROFILE} element={<PrivateRoute isLoggedIn={isLoggedIn} component={<Profile userObj={userObj} />} />}/>
        <Route path={URL.LOGIN} element={<Auth />}  />
      </Routes>
      <footer style={{ display: 'flex', justifyContent: 'center'}}>&copy; {new Date().getFullYear()} Nwitter</footer>
    </BrowserRouter>
  )
};

export default Router;