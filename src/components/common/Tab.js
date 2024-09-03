/* Import */
import React from "react";
/* Component */
import TabItem from "./TabItem";
/* CSS Module */
import styles from "../../css/module/common/Tab.module.css";

const Tab = () => {
  return (
    <ul className={styles.tab}>
      <TabItem content="모시는 글" />
      <TabItem content="예식 일시" />
      <TabItem content="오시는 길" />
      <TabItem content="갤러리" />
    </ul>
  )
}

export default Tab;