/* Import */
import { useEffect } from "react";
/* Component */
import Container from "../layout/Container";
import Invitation from "../page/Invitation";
import Produce from "../page/Produce";
/* CSS Module */
import styles from "../../css/module/page/View.module.scss";

const View = () => {
  return (
    <section className={styles.view}>
      <Container>
        <Invitation></Invitation>
        <Produce></Produce>
      </Container>
    </section>
  )
}

export default View;