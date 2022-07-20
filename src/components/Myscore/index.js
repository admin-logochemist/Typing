import { Table } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import styles from "./style.module.css";
import { getFirestore, collection, onSnapshot, orderBy, query,where,limit } from 'firebase/firestore'; 

const Myscore = ({
  cpm,
  wpm,
  lastScore,
  duration,
  accuracy,
  errorIndex,
}) => {
  const [visible, setVisible] = useState(false);
  // const [userModal, setUserModal] = useState();
  const [changeData, setChangeData] = useState();
  const [fdata, setFData] = useState();
  const [userData, setUserData] = useState([]);
  const [status, setStatus] = useState(false)
  const [usersName, setUsersName ] = useState("");
  const [usersEmail, setusersEmail ] = useState("");
  const [usersScore, setusersScore ] = useState("");
  const [flag,setFlag] = useState(false)
  const db=getFirestore()
  var data = [];
  const getUser = async () => {
   
    onSnapshot(
      query(collection(db,"LeaderBoards"), orderBy("score", "desc"), limit(3) ), (snapshot)=>{
        
        setUserData(snapshot.docs.map(doc => ({
          data: doc.data()
        })))
     console.log(userData[0]?.data.email);
     

      })
      if(userData[0]?.data.email != usersEmail){
       
      }
  }

  useEffect(() => {
    getUser();
    // Perform localStorage action
    const users = localStorage.getItem('displayName')
    console.log(users,"local storage")
    setUsersName(((users!==null)&&(users!==undefined)) ? users : "Login")
    const uemail = localStorage.getItem('email')
    console.log(uemail,"local storage")
    setusersEmail(((uemail!==null)&&(uemail!==undefined)) ? uemail : "Login")
    const wpm = localStorage.getItem('wpm')
    console.log(wpm,"local storage")
    setusersScore(((wpm!==null)&&(wpm!==undefined)) ? wpm : "Login")
    
  }, []);
  
  return (
   <div className="container">
   <div className="row">
   <div className={styles.col}>
    <div className={styles.main}>
      <p className={styles.rankHeading}>Leader Boards</p>
      <div className={styles.scoreTable}>
        <Table >

        <th>
        <span className={styles.rank}>Number</span>
      </th>

          <th>
            <span className={styles.rank}>Name</span>
          </th>
          <th>
            <span className={styles.rank}>Email</span>
          </th>

          <th>
            <span className={styles.rank}>Score</span>
          </th>
         

          {userData?.map((item, index) => (
            
          <tr key={index}>
             <td>
              <span className={styles.rank}>{index+1}</span>
            </td>

            <td>
              <span className={styles.rank}>{item?.data.name}</span>
            </td>
            <td>
              <span className={styles.rank}>{item?.data.email}</span>
            </td>

            <td>
              <span className={styles.rank}>{item?.data.score}</span>
            </td></tr>
            ))}




          
        </Table>
      </div>



      </div>
      </div>
      </div>
    </div>
  );
};

export default Myscore;
