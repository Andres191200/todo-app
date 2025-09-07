import React from "react";
import styles from "./styles.module.scss";
import SignupForm from "../../components/auth/signup-form/SignupForm";

export default function Auth() {
  function signup() {}

  return (
    <div className={styles.authScreen}>
      <SignupForm />
    </div>
  );
}
