/* Import */
import React from "react";
/* Component */
import Button from "./Button";
/* CSS Module */
import styles from "../../css/module/layout/ButtonWrapper.module.css";

const ButtonWrapper = () => {
  return (
    <div className={styles.button__wrapper}>
      <Button type="button" styleType="default" content="저장" />
      <Button type="button" styleType="primary" content="안 저장" />
    </div>
  )
}

export default ButtonWrapper;