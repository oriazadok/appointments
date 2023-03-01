import React, { useEffect, useState } from 'react'; 

import './App.css';

import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';


function App() {

  const[authorized, setauthorized] = useState(false);
  const[userName, setUserName] = useState("");
  const[dataMenu, setDataMenu] = useState([]);

  const setauthorization = (state, username) => {
    // console.log("state", state);
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
        <Routes>
          <Route path="/" element={<Home setauth={setauthorization}/>} />
          <Route path="/signup" element={<SignUp setauth={setauthorization}/>} />
          <Route path="/signin" element={<SignIn setauth={setauthorization} authorized={authorized} uname={userName} dataMenu={dataMenu} />} />

          <Route path="*" element={<div><h1>404 Not Found</h1></div>} />
        </Routes>
      </Router>

    </div>
    
  );
}

export default App;
