/* Import */
import React from "react";
/* Component */
import Container from "../layout/Container";
import Tab from "../invitationSection/Tab";
import Intro from "../invitationSection/Intro";
import Date from "../invitationSection/Date";
import Location from "../invitationSection/Location";
import Gallery from "../invitationSection/Gallery";
import Movie from "../invitationSection/Movie";
import Gift from "../invitationSection/Gift";
import Notice from "../invitationSection/Notice";
import BgMusic from "../invitationSection/BgMusic";
import Attend from "../invitationSection/Attend";
import Outro from "../invitationSection/Outro";
/* CSS Module */
import styles from "../../css/module/page/Invitation.module.css";

const Invitation = () => {
  return (
    <div className={styles.invitation}>
      <Container>
        <Tab></Tab>
        <Intro></Intro>
        <Date></Date>
        <Location></Location>
        <Gallery></Gallery>
        <Movie></Movie>
        <Gift></Gift>
        <Notice></Notice>
        <BgMusic></BgMusic>
        <Attend></Attend>
        <Outro></Outro>
      </Container>
    </div>
  )
}

export default Invitation;