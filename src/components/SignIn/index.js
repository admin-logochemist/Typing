import React from "react";
import styles from "./style.module.css";

const SignIn = () => {
  return (
    <div className={styles.main}>
<div id="container">
<form>
<img src="https://bit.ly/2tlJLoz" /><br />
<input type="text" value="@AmJustSam" /><br />
<input type="password" /><br />
<input type="submit" value="SIGN IN" /><br />

</form>
</div>
</div>
  );
};

export default SignIn;
