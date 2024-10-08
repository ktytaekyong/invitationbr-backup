/* Import */
import React from "react";
import { Link } from "react-router-dom";
/* Component */
import Container from "../layout/Container";
import ButtonWrapper from "../layout/ButtonWrapper";
import Button from "../layout/Button";
/* CSS Module */
import styles from "../../css/module/common/Header.module.scss";
/* Image */
import iconHomeArrowImg from "../../img/icon/icon_header_home_arrow.svg"
import iconHomeImg from "../../img/icon/icon_header_home.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Link to="/" className={styles.header__home}>
          <img src={iconHomeArrowImg} alt="" />
          <img src={iconHomeImg} alt="" />
        </Link>
        <div className={styles.header__title}>
          <h2>청첩장 만들기</h2>
          <p>선택 항목은 메뉴명 앞에 체크박스 표시가 있습니다.</p>
        </div>
        <ButtonWrapper>
          <Button type="button" styleType="default" content="미리보기" />
          <Button type="button" styleType="primary" content="저장" />
        </ButtonWrapper>
      </Container>
    </header>
  )
}

export default Header;