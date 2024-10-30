/* Import */
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
/* Component */
import Container from "../layout/Container";
import ButtonWrapper from "../layout/ButtonWrapper";
import Button from "../layout/Button";
import BasicModalHeader from "../layout/modal/BasicModalHeader.js";
import MetaTag from "../../components/common/MetaTag";
/* CSS Module */
import styles from "../../css/module/common/Header.module.scss";
/* Image */
import iconHomeArrowImg from "../../img/icon/icon_header_home_arrow.svg"
import iconHomeImg from "../../img/icon/icon_header_home.svg"

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);  
  const headerNav = useNavigate();
  const previewHandler = () => {
    headerNav('/Preview');  
  };
  return (
    <>
      <MetaTag title="청첩장 만들기" description="설명" imageUrl="" />
      <header className={styles.header}>
        <Container>
          <Link to="#" onClick={(e => e.preventDefault())} className={styles.header__home}>
            <img src={iconHomeArrowImg} alt="" />
            <img src={iconHomeImg} alt="" />
          </Link>
          <div className={styles.header__title}>
            <h2>청첩장 만들기</h2>
            <p>선택 항목은 메뉴명 앞에 체크박스 표시가 있습니다.</p>
          </div>
          <ButtonWrapper>
            <Button type="button" styleType="default" content="미리보기" onClick={previewHandler} />
            <Button type="button" styleType="primary" content="저장" onClick={handleOpen} />
          </ButtonWrapper>
        </Container>

        <BasicModalHeader openvar={open} onClose={handleClose}></BasicModalHeader>
      </header>
    </>
  )
}

export default Header;