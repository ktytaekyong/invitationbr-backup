/* import */
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/sub/SubTitle.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import logoImg from "../../img/main/logo.svg";
import myInfo from "../../img/icon/icon_info.png";

const SubTitle = ({ subTitle, subContent, subPhoto, type }) => {
  const { isMobile } = useContext(SetContext);
  const photoRef = useRef(null);
  const dragHandler = () => {
    const currentPos = window.scrollY;
    if(currentPos > 10 && currentPos < 600) {
      photoRef.current.style.maxWidth = `calc(${41.66 + currentPos / 5}%)`;
    }
    if(currentPos > 10 && currentPos < 600) {
      photoRef.current.style.height = `calc(${32.75 + currentPos * 5}px)`;
    }
  }
  useEffect(() => {
    if(type !== "mng") {
      photoRef.current.style.backgroundImage = `url(${subPhoto})`;
      photoRef.current.style.height = `340px`;
      window.addEventListener("scroll", dragHandler);
      return () => {
        window.removeEventListener("scroll", dragHandler); 
      };
    } else {
      return;
    }
  }, []);
  return (
    <div className={styles.sub__title}>
      <div className={styles.sub__title_wrap}>
        <h2>{subTitle}</h2>
        {subContent ? <p>{subContent}</p> : null}
      </div>
      {
        type !== "mng" ?
        <div 
          ref={photoRef} 
          className={styles.sub__title_photo} 
          style={{maxWidth: "800px", height: "380px", backgroundImage: `url(${subPhoto})`}}
        >
        </div> : null
      }
    </div>
  )
}

export default SubTitle;