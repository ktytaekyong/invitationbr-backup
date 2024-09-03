/* Import */
import { useState, useRef, useEffect } from "react";
/* CSS Module */
import styles from "../../css/module/common/ProduceItem.module.css";

const ProduceItem = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const activeToggleHandler = () => {
    setIsActive(!isActive);
  };
  
  const contentRef = useRef(null);
  const itemRef = useRef(null);

  useEffect(() => {
    if(itemRef.current.id === "produceItem0") {
      setTimeout(() => {
        setIsActive(true);
      }, 300);
    }
  }, []);

  useEffect(() => {
    if(isActive === true) {
      contentRef.current.style.height = contentRef.current.scrollHeight + "px";
    } else {
      contentRef.current.style.height = 0 + "px";
      setIsLoad(false);
    }
  }, [isActive, isLoad, contentRef]);

  return (
    <li className={`${styles.produce__item} ${isActive ? styles["active"] : ""}`} ref={itemRef} id={props.id}>
      <div className={styles.produce__title} onClick={activeToggleHandler}>
        <p>{props.itemTitle}</p>
        <img src="" alt="" className={styles.arrow_img} />
      </div>
      <div className={styles.produce__content} ref={contentRef}>
        {props.itemContent}
      </div>
    </li>
  )
}

export default ProduceItem;