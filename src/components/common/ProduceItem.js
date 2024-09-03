/* Import */
import { useState } from "react";
/* CSS Module */
import styles from "../../css/module/common/ProduceItem.module.css";

const ProduceItem = (props) => {
  // const Section = document.querySelector(".Section");
  // const Title = document.querySelector(".Title");
  // const Content = document.querySelector(".Content");

  const [isActive, setIsActive] = useState(false);
  const activeToggleHandler = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  // Title.addEventListener("click", function(){
  //   if(Section.classList.contains("CLASSNAME")) {
  //     Section.classList.remove("CLASSNAME");
  //     Section.style.height = 0 + "px";
  //   } else {
  //     Section.classList.add("CLASSNAME");
  //     Content.style.height = Content.scrollHeight + "px";
  //   }
  // });

  return (
    <li className={styles.produce__item}>
      <div className={styles.produce__title} onClick={activeToggleHandler}>
        <p>{props.itemTitle}</p>
        <img src="" alt="" className={styles.arrow_img} />
      </div>
      <div className={styles.produce__content}>
        {props.itemContent}
      </div>
    </li>
  )
}

export default ProduceItem;