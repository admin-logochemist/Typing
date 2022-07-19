import React, { useState } from "react";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore'; 
import { db, storage } from  '../../firebase';
import { useNavigate } from "react-router-dom";
import SignIn from "./Signin";



const SignUp = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState("")
    const [name, setName] = useState();
    const [uid, setUids] = useState("");
    
    const navigate=useNavigate()
  
    const registers = () => {
  
      createUserWithEmailAndPassword(auth,email,password).then(async(userAuth) => {
     
          setUids(userAuth.user.uid)
          localStorage.setItem('email', email);
      
           localStorage.setItem('displayName', name);
           const docRef = await addDoc(collection(db, 'userid'), {
            email:email,
            password:password,
            name:name,
          
           
          })
        navigate('/Main')
  
      }).catch(function(error) {
        var errorMessage = error.message;
        console.log("errorMessage: "+ errorMessage )
      });
    
    
   
      
      }

  return (

<div className={styles.main}>
<div id="container">
 <div className="container">
  
<div className={styles.form}>
<img src="https://bit.ly/2tlJLoz" className={styles.imgs} /><br />
<div className="mt-2">
<input type="text"  placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/><br />
<input autocomplete="off" type="text"  placeholder="Example@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} /><br />
<input type="password" autocomplete="off" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
<button onClick={registers}>SIGN UP</button>   <br />
</div>
</div>
</div>  
</div>
</div>
  );
};

export default SignUp;