import React, { useState, useRef, useEffect } from "react";
import styles from "../app.module.css";
import { quotesArray, random, allowedKeys } from "../util/helperFunctions";
import InputArea from "./InputArea";
import Header from "./Header";
import Footer from "./Footer";
import ShowText from "./ShowText";
import Statistics from "./Statistics";
import Tips from "./Tips";
import TypingSpeedInfo from "./TypingSpeedInfo";
import Rank from "./Rank";
import Myscore from "./Myscore";
import { getFirestore, onSnapshot, query, limit, orderBy, getDocs, where, addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';

import TipsPopup from './Tips/index';

let interval = null;

const Main = () => {
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const checkRef = useRef(null);
  const [duration, setDuration] = useState(60);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [index, setIndex] = useState(0);
  const [delIndex, setDelIndex] = useState(0);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [errorIndex, setErrorIndex] = useState(0);
  const [quote, setQuote] = useState({});
  const [input, setInput] = useState("");
  const [cpm, setCpm] = useState(0);
  const [wpm, setWpm] = useState(0);
  const db = getFirestore()
  const [accuracy, setAccuracy] = useState(0);
  const [isError, setIsError] = useState(false);
  const [lastScore, setLastScore] = useState("0");
  const [usersName, setUsersName] = useState("");
  const [usersEmail, setusersEmail] = useState("");
  const [usersScore, setusersScore] = useState("");
  const [visible, setVisible] = useState(false)
  // const [userModal, setUserModal] = useState()
  const [changeData, setChangeData] = useState()
  const [fdata, setFData] = useState()
  const [userData, setUserData] = useState([])
  const [checkUserData, setCheckUserData] = useState([])
  const [status, setStatus] = useState(false)
  const [flag, setFlag] = useState(false)
  var data = [];
  const getUser =   () => {
     onSnapshot(
      query(collection(db, "LeaderBoards"), orderBy("score", "desc"), limit(3)), (snapshot) => {
        
        setUserData(snapshot.docs.map(doc => ({
          
          id: doc.id, ...doc.data() 
        })))
        
      })
    }

  
  useEffect(() => {
    getUser()
    const users = localStorage.getItem('displayName')
    setUsersName(((users !== null) && (users !== undefined)) ? users : "Login")
    const uemail = localStorage.getItem('email')
    setusersEmail(((uemail !== null) && (uemail !== undefined)) ? uemail : "Login")
    const wpm = localStorage.getItem('wpm')
    setusersScore(((wpm !== null) && (wpm !== undefined)) ? wpm : "Login")
  }, []);
  useEffect(() => {
    const newQuote = random(quotesArray);
    setQuote(newQuote);
    setInput(newQuote.quote);




  }, []);

  const[timedPopup , setTimedPopup] = useState(false);
useEffect(()=>{
  setTimeout(() =>{
    setTimedPopup(true);
  }, 2000);
  
},[]);




  const handleEnd = async () => {
    setEnded(true);
    setStarted(false);
    clearInterval(interval);
    

  };

  const setTimer = () => {
    const now = Date.now();
    const seconds = now + duration * 1000;
    interval = setInterval(() => {
      const secondLeft = Math.round((seconds - Date.now()) / 1000);
      setDuration(secondLeft);
      if (secondLeft === 0) {
        handleEnd();
      }
    }, 1000);
  };

  const handleStart = async () => {

    setStarted(true);
    setEnded(false);
    setInput(quote.quote);
    inputRef.current.focus();
    setTimer();
  };

  const handleKeyDown = (e) => {
    e.preventDefault();
    const { key } = e;

    const quoteText = quote.quote;

    if ((key === quoteText.charAt(index)) && (outputRef.current.innerHTML === checkRef.current.innerHTML)) {
      setIndex(index + 1);
      const currenChar = quoteText.substring(
        index + 1,
        index + quoteText.length
      );
      setInput(currenChar);

      setCorrectIndex(correctIndex + 1);
      setIsError(false);
      outputRef.current.innerHTML += key;
      checkRef.current.innerHTML += key;

    } else {
      if (allowedKeys.includes(key) && key !== "Backspace") {

        setErrorIndex(errorIndex + 1);
        setDelIndex(delIndex + 1)
        setIsError(true);
        // outputRef.current.innerHTML += `<span class="text-danger">${key}</span>`;
        outputRef.current.innerHTML += key;
      }
    }
    if (key === "Backspace") {

      if (delIndex !== 0) {
        setDelIndex(delIndex - 1);
        outputRef.current.innerHTML = outputRef.current.innerHTML.substring(0, outputRef.current.innerHTML.length - 1)
      }
      // if(checkRef.current.innerHTML!==outputRef.current.innerHTML){

      //   setDelIndex(delIndex - 1);
      //   outputRef.current.innerHTML=outputRef.current.innerHTML.substring(0,outputRef.current.innerHTML.length-1) 
      // }




    }



    const timeRemains = ((60 - duration) / 60).toFixed(2);
    const _accuracy = Math.floor(((index - errorIndex) / index) * 100);
    const _wpm = Math.round(correctIndex / 5 / timeRemains);

    if (index > 5) {
      setAccuracy(_accuracy);
      setCpm(correctIndex);
      setWpm(_wpm);
    }

    if (index + 1 === quoteText.length || errorIndex > 50) {
      handleEnd();
    }
  };

  useEffect(() => {
    if (ended) localStorage.setItem("wpm", wpm);
  }, [ended, wpm]);
  
  const endDB =  (wpm)=>{
    const uemail = localStorage.getItem('email')
 
    const filterData = userData.filter(item => item.email === uemail) 
    // When user data not exist
    
  
  // When user data exist
  if ((filterData.length >= 1 && filterData[0].email === usersEmail) && (filterData[0] !== null || filterData[0] !== undefined) && (filterData[0].score < wpm)) {
    const docRef =  updateDoc(doc(db, 'LeaderBoards', filterData[0].id), {
      score: wpm,

    })
  }
  else{

    if ( filterData.length===0) {
      const docRef =  addDoc(collection(db, 'LeaderBoards'), {
        email: usersEmail,
        score: wpm,
        name: usersName,
        time:serverTimestamp()

      })
    }
  }
}
  useEffect(() => {
    if (ended) 
    endDB(wpm);
  }, [ended]);


  useEffect(() => {
    const stroedScore = localStorage.getItem("wpm");
    if (stroedScore) setLastScore(stroedScore);
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>

    <TipsPopup trigger={timedPopup} setTrigger={setTimedPopup}/>
      <Header />
      <Statistics
        cpm={cpm}
        wpm={wpm}
        lastScore={lastScore}
        duration={duration}
        accuracy={accuracy}
        errorIndex={errorIndex}
      />


      {/* Start Button */}
      {ended || started ? (
        <div
          onClick={() => window.location.reload()}
          className={styles.startButton}
          style={{
            backgroundColor: "#ff8a65",
            border: "5px solid #e64a19",
          }}
        >
          {" "}
          <span> Reload</span>{" "}
        </div>
      ) : (
        <div
          onClick={handleStart}
          className={styles.startButton}
          style={{
            backgroundColor: "#8bc34a",
            border: "5px solid #33691e",
          }}
        >
          {" "}
          <span> Start </span>{" "}
        </div>
      )}
      {/* Start Button end */}
      <div className="container-fluid">

        <div className={styles.container}>
          <div className={styles.leftSideInContainer}>
            {" "}
            {/* "<Rank <Tips /> */}
          </div>
          <div className={styles.rightSideInContainer}>

            <ShowText
              quote={quote}
              started={started}
              ended={ended}
              isError={isError}
              inputRef={inputRef}
              input={input}
              handleKeyDown={handleKeyDown}
            />

            <InputArea value={outputRef} />

            <span ref={checkRef} style={{ display: "none" }} ></span>

            <TypingSpeedInfo />
          </div>
        </div>
      </div>


      <Footer />

    </div>
  );
};
export default Main;