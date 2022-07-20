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
  Link
} from "react-router-dom";


const App = () => {



  return (



      <Routes>
      <Route path='/' element={<SignIn />} />
        <Route path='/Main' element={<Main />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/GuestMode' element={<GuestMode />} />
      </Routes>
     
  );
};

export default App;
