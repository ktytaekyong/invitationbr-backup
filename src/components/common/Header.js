/* Import */
import React from "react";
/* Component */
import Container from "./Container";
/* CSS Module */
import styles from "../../css/module/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <p>Header</p>
      </Container>
    </header>
  )
}

export default Header;