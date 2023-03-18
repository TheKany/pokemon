import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.circle}></div>
        <div className={styles.square}></div>
        <div className={styles.triangle}></div>
        <div className={styles.logo}>!!</div>
        <div className={styles.shadow}></div>
      </div>
    </>
  );
};

export default Loading;
