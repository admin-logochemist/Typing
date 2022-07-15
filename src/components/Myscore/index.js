import { Table } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import styles from "./style.module.css";

const Myscore = ({
  cpm,
  wpm,
  lastScore,
  duration,
  accuracy,
  errorIndex,
}) => {
  const [usersName, setUsersName ] = useState("");
  useEffect(() => {
    // Perform localStorage action
    const users = localStorage.getItem('displayName')
    console.log(users,"local storage")
    setUsersName(((users!==null)&&(users!==undefined)) ? users : "Login")
  }, [])
  return (
    <div className={styles.main}>
      <h1 className={styles.rankHeading}>My Score</h1>
      <div className={styles.scoreTable}>
        <Table >

         

          <th>
            <span className={styles.rank}>Name</span>
          </th>
          <th>
            <span className={styles.rank}>Id</span>
          </th>

          <th>
            <span className={styles.rank}>Score</span>
          </th>


          <tr>

            <td>
              <span className={styles.rank}>{usersName}</span>
            </td>
            <td>
              <span className={styles.rank}>sad1a2sd1aa1</span>
            </td>

            <td>
              <span className={styles.rank}>89</span>
            </td></tr>





          
        </Table>
      </div>



    </div>
  );
};

export default Myscore;
