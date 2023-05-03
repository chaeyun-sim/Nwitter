import { useEffect, useState } from "react";
import Router from "./Router";
import { authService } from '../firebase'

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

  console.log(userObj)


  return (
    <div style={{ width: '100%' }}>
      {init ? <Router isLoggedIn={isLoggedIn} userObj={userObj} /> : "Loading...."}
    </div>
  );
}

export default App;
