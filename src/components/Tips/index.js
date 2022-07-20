import React from "react";
import styles from "./style.module.css";

const Tips = (props) => {
  return  (props.trigger) ? (
    <div className={styles.popup}>
    <div className={styles.popupinner}>
    

    <div className={styles.main}>
      <p className={styles.heading}>Tips..!</p>
      <ul className={styles.tips_container}>
        <li className={styles.tips}>Focus on accuracy over speed</li>
        <li className={styles.tips}>
          Stop with the hunt and peck. Hand position is an important part of
          typing.
        </li>
        <li className={styles.tips}>Stretch your hands, neck, and shoulders</li>
        <li className={styles.tips}>Test touch typing</li>
        <li className={styles.tips}>Don't stress </li>
      </ul>
      <button className={styles.closeebtn} onClick={()=> props.setTrigger(false)}>close</button>
      {props.children}
    </div>
    </div>
    </div>
  ) : "";
};

export default Tips;
