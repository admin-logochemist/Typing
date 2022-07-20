import { Button } from "@material-ui/core";
import { Directions } from "@material-ui/icons";
import React,{useEffect,useState} from "react";
import { Router } from "react-router-dom";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [usersName, setUsersName ] = useState("");
  const navigate=useNavigate()
useEffect(() => {
  // Perform localStorage action
  const users = localStorage.getItem('displayName')
  console.log(users,"local storage")
  setUsersName(((users!==null)&&(users!==undefined)) ? users : "Login")
}, [])


const signOut=()=>{
if(usersName!=="logged Out"){
localStorage.clear();
const users = null;
  navigate("/SignIn");
}
}
  return (
    <div className={styles.main} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }} >
      <div>
        <h1 className={styles.heading}>Typing Test  </h1>
        <p className={styles.subHeading}>The one minute typing challenge 🔥</p>
      </div>
      <div style={{marginTop : 30 }}>
     
      {((usersName!==null)&&(usersName!=="Login")) ?  <div><span className={styles.zigor}>Hello! &nbsp; {`${usersName}`}</span><Button className={styles.btnpb}  onClick={signOut}> Logout</Button></div>
       : (usersName==="Login") ? <Button className={styles.btnpb}  onClick={()=> navigate("/")}> Login</Button> : <Button className={styles.btnpb}  onClick={()=> navigate("/")}> Login</Button>}
    
       </div>
      
    </div>
  );
};
  
export default Header;
