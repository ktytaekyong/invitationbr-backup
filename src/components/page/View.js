/* Import */
import { useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
/* Component */
import Container from "../layout/Container";
import Invitation from "../page/Invitation";
import Produce from "../page/Produce";
import ScrollComponent from "./ScrollComponent";
/* CSS Module */
import styles from "../../css/module/page/View.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const View = () => {
  const previewLocation = useLocation();
  const isTargetPage = previewLocation.pathname === '/Produce/Preview';
  const { selectOptionList } = useContext(SetContext);
  useEffect(() => {
    document.documentElement.style.setProperty('--touch-option', selectOptionList.zoomOption ? "pan-y" : "auto");
  }, [selectOptionList.zoomOption]);
  return (
    <section className={`${styles.view} ${isTargetPage ? styles.preview : ""}`}>
      <ScrollComponent />
      <Container>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Invitation></Invitation>
                <Produce></Produce>
              </>
            } 
          />
          <Route 
            path="/Preview" 
            element={
              <>
                <Invitation />
              </>
            } 
          />
        </Routes>
      </Container>
    </section>
  )
}

export default View;