/* Import */
import { useState, useContext, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
/* Component */
import Container from "../layout/Container";
import ButtonWrapper from "../layout/ButtonWrapper";
import Button from "../layout/Button";
import MetaTag from "../../components/common/MetaTag";
/* CSS Module */
import styles from "../../css/module/common/HeaderPreview.module.scss";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";
import { RefContext } from "../../store/option-ref-context.js";
import { SetContext } from "../../store/option-set-context.js";

const HeaderPreview = () => {
  const { isMobile } = useContext(SetContext);
  const { basicInfoList } = useContext(InfoContext);
  const { invitationRef } = useContext(RefContext);
  
  const headerNav = useNavigate();
  const homeHandler = () => {
    headerNav('/');  
  };

  const headerRef = useRef(null); 
  const [lastPos, setLastPos] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentPos = window.scrollY; 
  //     const header = headerRef.current;
  //     if (!header) return;
  //     if (currentPos > 0) {
  //       header.classList.add("active");
  //     } else {
  //       header.classList.remove("active");
  //     }
  //     if (lastPos > currentPos) {
  //       header.style.transform = "translateY(0)"; 
  //     } else if (lastPos < currentPos) {
  //       header.style.transform = "translateY(-100%)"; 
  //       header.classList.remove("active");
  //     }
  //     setLastPos(currentPos);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll); 
  //   };
  // }, [lastPos, isMobile]);

  return (
    <>
      <MetaTag title="청첩장 만들기" description="설명" imageUrl="" />
      <header ref={headerRef} className={styles.header}>
        <Container>
          <div className={styles.header__title}>
            <p>미리보기 화면입니다.</p>
          </div>
          <ButtonWrapper>
            <Button 
              type="button" 
              styleType="header__preview" 
              onClick={homeHandler}
            />
          </ButtonWrapper>
        </Container>
      </header>
    </>
  )
}

export default HeaderPreview;