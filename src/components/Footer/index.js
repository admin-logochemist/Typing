import React from "react";
import styles from "./style.module.css";

const Footer = () => {
  return (
    <div className={styles.main}>
      Made {" "}
      <span role="img" aria-label="smile">
        
      </span>{" "}
      by{" "}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        style={{ fontWeight: "bold" }}
      >
       
      </a>{" "}
      And Design @ Binary Chemist 2022{" "}
    </div>
  );
};

export default Footer;
