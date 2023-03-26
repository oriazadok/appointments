import React, { useEffect, useState } from 'react'; 

import './App.css';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
// import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile'

/**
 * toDo:
 * 1. connect to fire base
 * 2. create the gallery
 * 3. edit the prices page
 * 4. figure out what to put in the home page
 * 5. style contact etc
 * 6. add seperation between admin and user
 */

function App() {

  const[authorized, setauthorized] = useState(false);
  const[userName, setUserName] = useState("");
  const[dataMenu, setDataMenu] = useState({});


  const setauthorization = (state, username) => {
    setauthorized(state);
    setUserName(username);
  }

  useEffect(() => {
    fetch("/api/HairStyleMenu")
      .then(res => res.json())
      .then(data => {
        console.log("list data from server" , data);
        setDataMenu(data);
      })
  }, []);

  return (
    
    <div>
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setauth={setauthorization}/>} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="/products" element={<Products/>} /> */}
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/prices" element={<Prices/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signin" element={<SignIn setauth={setauthorization} authorized={authorized} uname={userName} dataMenu={dataMenu} />} />
          <Route path="/signup" element={<SignUp setauth={setauthorization}/>} />
          <Route path="/profile" element={<Profile setauth={setauthorization} authorized={authorized} uname={userName} dataMenu={dataMenu} />} />

          <Route path="*" element={<div><h1>404 Not Found</h1></div>} />
        </Routes>
      </Router>

    </div>
    
  );
}

export default App;


