import React, { useEffect, useState } from 'react'; 

// import { auth, db } from "./config/firebase-config"
// import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';

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
// import { async } from '@firebase/util';

function App() {

  const[authorized, setauthorized] = useState(false);
  const[userName, setUserName] = useState("");
  const[dataMenu, setDataMenu] = useState([]);

  // const[clientList, setClientList] = useState([]);

  // const clientsCollectionRef = collection(db, "clients");

  // useEffect(() => {
  //   const getClientList = async () => {
  //     // READ THE DATA
  //     // SET THE CLIENT LIST
  //     try {
  //       const data = await getDocs(clientsCollectionRef);
  //       const filteredData = data.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }))
  //       console.log(filteredData);
  //     } catch(err) {
  //       console.error(err);
  //     }
  //   };

  //   getClientList();
  // }, []);

  // useEffect(() => {
  //   const addClient = async () => {
  //     try {
  //       await addDoc(clientsCollectionRef, {
  //         uid: auth?.currentUser.uid,
  //         fname: "or",
  //         lname: "re",
  //         uname: "oro"
  //       });
  //     } catch(err) {
  //       console.error(err);
  //     }
  //   }
  //   addClient();
  // }, [])

  // const deleteClient = async (id) => {
  //   const clientDoc = doc(db, "clients", id);
  //   await deleteDoc(clientDoc);
  // }

  // const updateClient = async (id) => {
  //   const clientDoc = doc(db, "clients", id);
  //   await updateDoc(clientDoc, { uname: "newuname" });
  // }

  

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


