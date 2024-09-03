/* Import */
import React from "react";
import { Link } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/common/TabItem.module.css";

const TabItem = (props) => {
  return (
    <li className={styles.tab__Item}>
      <Link to="/">{props.content}</Link>
    </li>
  )
}

export default TabItem;