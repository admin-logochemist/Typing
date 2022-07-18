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
  navigate("/");
}
}
  return (
    <div className={styles.main} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }} >
      <div>
        <h1 className={styles.heading}>Typing Test 🚀⌨️ </h1>
        <p className={styles.subHeading}>The one minute typing challenge 🔥</p>
      </div>
      <div style={{marginTop : 50 }}>
      <li> {`${usersName}`}</li>
      {((usersName!==null)&&(usersName!=="Login")) ? <Button  onClick={signOut}> Logout</Button>
       : (usersName==="Login") ? <Button  onClick={()=> navigate("/")}> Login</Button> : <Button  onClick={()=> navigate("/")}> Login</Button>}
    
       </div>
      
    </div>
  );
};
  
export default Header;
