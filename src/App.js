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
import SignIn from "./components/SignIn";

let interval = null;

const App = () => {
 return(
  <div>
 <SignIn />
 </div>
  );
};

export default App;
