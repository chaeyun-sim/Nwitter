import { useEffect, useState } from "react";
import Router from "./Router";
import { authService } from '../firebase'
import { ToastContainer } from "react-toastify";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) setIsLoggedIn(true);
      else setIsLoggedIn(false);
      setInit(true);
    })
  }, [])


  return (
    <div style={{ width: '100%' }}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ fontSize: "1.6rem" }}
        theme="light"
      />
      {init ? <Router isLoggedIn={isLoggedIn} /> : "Loading...."}
    </div>
  );
}

export default App;
