import React, { useState } from "react";

import Header from '../components/Header';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';



const Home = () => {

    const [sign, setSign]=useState("");

    const signIn = () => {
        console.log("s");
        setSign("signIn")
    }
    const signUp = () => {
        console.log("u");
        setSign("signUp")
    }

  return (
    <div>
      <Header 
        signIn={signIn}
        signUp={signUp}
       />

        <div>
        {
            sign === "signUP" ? <SignUp /> : null
        }
        {
            sign === "signIn" ? <SignIn /> : null
        }
        </div>
    </div>
  );
}

export default Home
