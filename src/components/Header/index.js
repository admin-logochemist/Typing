import { Button } from "@material-ui/core";
import { Directions } from "@material-ui/icons";
import React from "react";
import styles from "./style.module.css";

const Header = () => {
  return (
    <div className={styles.main} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }} >
      <div>
        <h1 className={styles.heading}>Typing Test 🚀⌨️ </h1>
        <p className={styles.subHeading}>The one minute typing challenge 🔥</p>
      </div>
      <div style={{marginTop : 50 }}>
      <Button style={{backgroundColor : "#7966d7"}} onClick={() => alert("Logout")}>LogOut</Button>
      </div>
      
    </div>
  );
};

export default Header;
