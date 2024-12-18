/* import */
import { useContext, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
/* CSS */
import styles from "../../css/module/page/Invitation.module.scss";
// Context
import { SetContext } from "../../store/option-set-context.js";

const Management = () => {
  const { isMobile } = useContext(SetContext);
  return (
    <div>Management</div>
  )
}

export default Management;