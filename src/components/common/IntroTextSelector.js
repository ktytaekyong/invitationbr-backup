/* Import */
import { useState, useEffect } from "react";
/* CSS Module */
import styles from "../../css/module/common/IntroTextSelector.module.css";
import Button from "../layout/Button";

const IntroTextSelector = () => {
  const [isActive, setIsActive] = useState(false);
  const setActiveHandler = () => {
    setIsActive(!isActive);
  }
  useEffect(() => {
    setIsActive(0);
  }, []);

  return (
    <>
      <Button type="button" content="+" onClick={setActiveHandler} />
      <ul className={`${styles.option__list} ${isActive ? styles["active"] : ""}`}>
        <li className={`${styles.option__item} ${styles.style__date}`}>
          <div className={styles.txt__picker}></div>
          <div className={styles.txt__wrapper}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </li>
        <li className={`${styles.option__item} ${styles.style__day}`}>
          <div className={styles.txt__picker}></div>
          <div className={styles.txt__wrapper}>
            <input type="text" />
          </div>
        </li>
        <li className={`${styles.option__item} ${styles.style__name}`}>
          <div className={styles.txt__picker}></div>
          <div className={styles.txt__wrapper}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </li>
        <li className={`${styles.option__item} ${styles.style__txtarea}`}>
          <div className={styles.txt__picker}></div>
          <div className={styles.txt__wrapper}>
            <textarea name="" id=""></textarea>
          </div>
        </li>
      </ul>
    </>

  )
}

export default IntroTextSelector;