import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../pages/AuthPage/Auth";
import Home from "../pages/HomePage/Home";
import PrivateRoute from "./PrivateRoute";
import Navigation from "../components/Navigation/Navigation";
import Profile from "pages/ProfilePage/Profile";
import NotFoundPage from "./NotFoundPage";
import EditProfile from "pages/ProfilePage/EditProfile/EditProfilePage";

const URL = {
  HOME: "/home",
  LOGIN: "/login",
  PROFILE: "/profile",
  EDITPROFILE: "/edit-profile"
};

const Router = ({ refreshUser, isLoggedIn, userObj }) => {
  const [tweets, setTweets] = useState([]);
  const [displayName, setDisplayName] = useState("");

  return (
    <BrowserRouter>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Routes>
        <Route
          path={URL.HOME}
          element={
            <PrivateRoute
              isLoggedIn={isLoggedIn}
              component={
                <Home
                  userObj={userObj}
                  tweets={tweets}
                  setTweets={setTweets}
                />
              }
            />
          }
        />
        <Route
          path={URL.PROFILE}
          element={
            <PrivateRoute
              isLoggedIn={isLoggedIn}
              component={
                <Profile
                  userObj={userObj}
                  refreshUser={refreshUser}
                  tweets={tweets}
                  displayName={displayName}
                  setDisplayName={setDisplayName}
                />
              }
            />
          }
        />
        <Route
          path={URL.EDITPROFILE}
          element={
            <PrivateRoute
              isLoggedIn={isLoggedIn}
              component={
                <EditProfile
                  userObj={userObj}
                  tweets={tweets}
                  displayName={displayName}
                  setDisplayName={setDisplayName}
                />
              }
            />
          }
        />
        <Route
          path={URL.LOGIN}
          element={<Auth />}
        />
        <Route
          path="/*"
          element={<NotFoundPage isLoggedIn={isLoggedIn} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
