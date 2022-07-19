import React,{useState,useEffect} from "react";
import styles from "./style.module.css";
import StatisticsItem from "../../util/UI/StatisticsItem";
import Rank from "../Rank/index"
import Myscore from "../Myscore";

const Statistics = ({
  cpm,
  wpm,
  lastScore,
  duration,
  accuracy,
  errorIndex,
}) => {
  const [usersName, setUsersName ] = useState("");
   const [usersEmail, setUsersEmail ] = useState("");
  useEffect(() => {
    // Perform localStorage action
    const users = localStorage.getItem('displayName')
    console.log(users,"local storage")
    setUsersName(((users!==null)&&(users!==undefined)) ? users : "Login")
    
    const uemail = localStorage.getItem('email')
    console.log(uemail,"local storage")
    setUsersEmail(((uemail!==null)&&(uemail!==undefined)) ? uemail : "Login")
  }, [])
  return (
   
    <div className={styles.main}>
  {/*  <div className={styles.stakszo}>
    <p className={styles.forot}>Name:{usersName}</p>
    <p className={styles.forot}>Email:{usersEmail}</p>
    <p className={styles.forot}>Score:{lastScore}</p>
  </div>*/}

      <StatisticsItem name="" value={"Score"} />
      <StatisticsItem name="Last Score" value={lastScore} />
      <StatisticsItem name="WPM" value={wpm} />
      <StatisticsItem name="CPM" value={cpm} />
      <StatisticsItem name="Errors" value={errorIndex} />
      <StatisticsItem name="Accuracy" value={accuracy} />
      <StatisticsItem name="Timer" value={duration} />
      <Myscore/>
    </div>
    
  );
};

export default Statistics;
