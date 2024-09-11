/* Import */
import React from "react";
/* Component */
import Container from "../layout/Container";
import Invitation from "../page/Invitation";
import Produce from "../page/Produce";
import ContextWrap from "../../store/option-context-wrap.js";
/* CSS Module */
import styles from "../../css/module/page/View.module.css";

const View = () => {
  return (
    <section className={styles.view}>
      <Container>
        <ContextWrap>
          <Invitation></Invitation>
          <Produce></Produce>
        </ContextWrap>
      </Container>
    </section>
  )
}

export default View;