import React, { useState, useRef, useEffect } from "react";
import styles from "./app.module.css";
import { quotesArray, random, allowedKeys } from "./util/helperFunctions";
import InputArea from "./components/InputArea";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShowText from "./components/ShowText";
import Statistics from "./components/Statistics";
import Tips from "./components/Tips";
import TypingSpeedInfo from "./components/TypingSpeedInfo";
import Main from "./components/Main";
import GuestMode from "./components/GuestMode";
import SignIn from "./components/SignIn/Signin";
import SignUp from "./components/SignIn/SignUp";



import {
  Route,
  Routes,
  Link,
Navigate
} from "react-router-dom";


const App = () => {
  const [usersName, setUsersName] = useState("");
  const [usersEmail, setusersEmail] = useState("");
  useEffect(() => {
    

    const users = localStorage.getItem('displayName')
    if(users && users.length>1){

      setUsersName(((users !== null) && (users !== undefined)) ? users : users)
    }
    const uemail = localStorage.getItem('email')
    setusersEmail(((uemail !== null) && (uemail !== undefined)) ? uemail : localStorage.getItem('email'))

    // <Route path="/"  element={ !usersName ? <Navigate to="/SignIn" /> : <Main/> } ></Route>
    // <Route path='/SignIn' element={<SignIn />} />
  }, []);



  return (



      <Routes>
      {
        !usersName &&  <Route path='/SignIn' element={<SignIn />} /> 
      }
        <Route path='/' element={<Main />} />


        <Route path='/SignIn' element={<SignIn />} /> 
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/GuestMode' element={<GuestMode />} />
      </Routes>
     
  );
};

export default App;
