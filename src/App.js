import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import { useMoralis } from "react-moralis";
import './App.css'


function App() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          // console.log(user!.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  

  return (
    <>
      <Navbar />
      

      <div className='header'>
        <div className='container'>
          <button className='login-btn' onClick={login}>Moralis Metamask Login</button>
          <button className='logout-btn' onClick={logOut} disabled={isAuthenticating}>Logout</button>
        </div>
      </div>
      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </>
  );
}

export default App;
