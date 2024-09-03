/* Import */
import React from "react";
/* Component */
import Container from "../layout/Container";
import Tab from "../common/Tab";
/* CSS Module */
import styles from "../../css/module/page/Invitation.module.css";

const Invitation = () => {
  return (
    <div className={styles.invitation}>
      <Container>
        <Tab></Tab>
        
      </Container>
    </div>
  )
}

export default Invitation;