/* Import */
import { useState, useRef, useEffect } from "react";
/* CSS Module */
import styles from "../../css/module/common/ProduceItem.module.css";

const ProduceItem = (props) => {
  const [isActive, setIsActive] = useState(false);
  const activeToggleHandler = () => {
    setIsActive(!isActive);
  };
  const itemRef = useRef(null);

  useEffect(() => {
    if(itemRef.current.id === "produceItem0") {
      setTimeout(() => {
        setIsActive(true);
      }, 300);
    }
  }, []);

  return (
    <li className={`${styles.produce__item} ${isActive ? styles["active"] : ""}`} ref={itemRef} id={props.id}>
      <div className={styles.produce__title} onClick={activeToggleHandler}>
        <p>{props.itemTitle}</p>
        <img src="" alt="" className={styles.arrow_img} />
      </div>
      <div className={styles.produce__content}>
        <div className={styles.content}>
          {props.itemContent}
        </div>
      </div>
    </li>
  )
}

export default ProduceItem;