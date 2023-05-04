import { useEffect, useState } from "react";
import Router from "./Router";
import { authService } from '../firebase'
import { updateProfile } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user)
      }
      else setIsLoggedIn(false);
      setInit(true);
    })
  }, [])

  const refreshUser = () => {
    if (userObj) {
      setUserObj({
        displayName: userObj.displayName,
        uid: userObj.uid,
        updateProfile: (args) => updateProfile(userObj, { displayName: userObj.displayName }),
      })
    } else {
      setUserObj(null)
    }
  };

  console.log(userObj)


  return (
    <div style={{ width: '100%' }}>
      {init ? <Router isLoggedIn={isLoggedIn} userObj={userObj} refreshUser={refreshUser} /> : "Loading...."}
    </div>
  );
}

export default App;
