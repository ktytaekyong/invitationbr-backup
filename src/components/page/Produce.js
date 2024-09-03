/* Import */
import React from "react";
/* Component */
import Container from "../layout/Container";
import ProduceList from "../common/ProduceList";
/* CSS Module */
import styles from "../../css/module/page/Produce.module.css";

const Produce = () => {
  return (
    <section className={styles.produce}>
      <Container>
        <ProduceList />
      </Container>
    </section>
  )
}

export default Produce;