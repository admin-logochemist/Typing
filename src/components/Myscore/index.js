import { Table } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import styles from "./style.module.css";
import { getFirestore, collection, onSnapshot, orderBy, query,where,limit,deleteDoc,doc } from 'firebase/firestore'; 

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
  const [scoreData, setScoreData] = useState()
  const [filterData, setFilterData] = useState()
  const time = Date.now();

  const [flag,setFlag] = useState(false)
  const db=getFirestore()
  var data = [];
  const getUser = async () => {
   
    onSnapshot(
      query(collection(db,"LeaderBoards"), orderBy("score", "desc"), limit(3) ), (snapshot)=>{
        
        setUserData(snapshot.docs.map(doc => ({
          data: doc.data()
        })))
     

      })
      if(userData[0]?.data.email != usersEmail){
       
      }
  }

  const getScore = async () => {
    onSnapshot(
      query(collection(db, "LeaderBoards")), (snapshot) => {
        
        setScoreData(snapshot.docs.map(doc => ({
        
         id: doc.id, ...doc.data() 
         
        })))
      }) 
      
      
}

  useEffect(() => {
    getScore();
    getUser();
    
    // Perform localStorage action
    const users = localStorage.getItem('displayName')
    setUsersName(((users!==null)&&(users!==undefined)) ? users : "Login")
    const uemail = localStorage.getItem('email')
    setusersEmail(((uemail!==null)&&(uemail!==undefined)) ? uemail : "Login")
    const wpm = localStorage.getItem('wpm')
    setusersScore(((wpm!==null)&&(wpm!==undefined)) ? wpm : "Login")
    
  }, []);
  
 const filter = scoreData && scoreData?.filter( item => ((item?.time?.seconds*1000)+ (86400*1000*3))  < time )
filter && filter.forEach(async(data)=>{
await deleteDoc(doc(db, "LeaderBoards", data.id));
console.log("data deleted")

})

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
