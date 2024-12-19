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

const SubTitle = ({ subTitle, subContent, subPhoto }) => {
  const { isMobile } = useContext(SetContext);
  const photoRef = useRef(null);
  const dragHandler = () => {
    const currentPos = window.scrollY;
    if(currentPos > 0 && currentPos < 700) {
      photoRef.current.style.maxWidth = `calc(${58.75 + currentPos / 5}%)`;
      if(photoRef.current.style.maxWidth === "100%" ) {
        return;
      }
    }
    if(currentPos > 10 && currentPos < 700) {
      photoRef.current.style.height = `calc(${32.75 + currentPos * 3.5}px)`;
    }
  }
  useEffect(() => {
    photoRef.current.style.backgroundImage = `url(${subPhoto})`;
    photoRef.current.style.height = `380px`;
    window.addEventListener("scroll", dragHandler);
    console.log("dragHandler");
    return () => {
      window.removeEventListener("scroll", dragHandler); 
    };
  }, [])
  return (
    <div className={styles.sub__title}>
      <div className={styles.sub__title_wrap}>
        <h2>{subTitle}</h2>
        <p>{subContent}</p>
      </div>
      <div 
        ref={photoRef} 
        className={styles.sub__title_photo} 
        style={{maxWidth: "800px", height: "380px", backgroundImage: `url(${subPhoto})`}}
      >
        {/* <img src={subPhoto} alt="" /> */}
      </div>
    </div>
  )
}

export default SubTitle;