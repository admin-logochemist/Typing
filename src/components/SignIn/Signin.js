import React,{useState} from "react";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";
import { updateDoc, collection, onSnapshot, orderBy, query, doc, getDocs, where, getDoc, addDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase';



const SignIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate()
  const data=[]
  const logintoApp =  async  (e) => {
   
    const querySnapshot = await getDocs(collection(db, "userid"), where("select", "==", "admin"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      data.push({ id: doc.id, ...doc.data() })
      // setUserData(userData=>[...userData,doc.data()])
    })
    try{
    const filterData = await  data.filter((item) => item.email === email && item.password === password)
    if (filterData) {
      if((filterData.length>0)&&(filterData[0].email === email)&&(filterData[0].password === password) )
      {
        console.log("signIn name",filterData[0].name)
         localStorage.setItem('email', filterData[0].email);
        
         localStorage.setItem('displayName', filterData[0].name);
         navigate('/')
  
        }
        else{
          setError('Wrong Email or Password') // if email or password is wrong
        }

    }

  }
 catch(e){
   console.log(e)
 }
  }
  return (

<div className={styles.main}>
<div id="container">
 <div className={styles.container}>
  
<button className={styles.buttong} onClick={()=>navigate("/GuestMode")}>Guest Mode</button>
<button className={styles.buttong} onClick={()=>navigate("/SignUp")}> SIGN UP</button>
<div className={styles.form}>
<img src="https://bit.ly/2tlJLoz" className={styles.imgs} /><br />
<input type="text" placeholder="Email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
<button  onClick={()=>logintoApp()}> SIGN IN</button>  

</div>
</div>
</div>
</div>
  );
};

export default SignIn;
