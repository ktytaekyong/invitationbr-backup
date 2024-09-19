/* Import */
import { useState, useEffect, useRef } from "react";
import { HexColorPicker } from "react-colorful";
/* CSS Module */
import styles from "../../css/module/common/IntroTextSelector.module.css";
import Button from "../layout/Button";

const IntroTextSelector = () => {
  const [isActive, setIsActive] = useState(false);
  const setActiveHandler = () => {
    setIsActive(!isActive);
  }
  useEffect(() => {
    setIsActive(0);
  }, []);

  const [color, setColor] = useState(["#000", "#000", "#000", "#000"]);
  const [pickerActive, setPickerActive] = useState([false, false, false, false]);
  const pickerOpen = (clickIdx) => {
    setPickerActive((prevList) => {
      return prevList.map((item, idx) => (
        clickIdx === idx ? !item : false
      ))
    });
  }

  const pickerClose = () => {
    setPickerActive((prevList) => {
      return prevList.map((item) => (
        item ? false : false
      ))
    });
  }

  const pickerRef = useRef([]);
  useEffect(() => {
    document.addEventListener("click", function(e){
      console.log(e.target);
      if (pickerRef.current.includes(e.target)) {
        pickerOpen(pickerRef.current.indexOf(e.target));
      } else if (e.target.classList.contains("react-colorful__interactive")) {
        return;
      } else {
        pickerClose();
      }
    });
  }, []);

  return (
    <>
      <Button type="button" content="+" onClick={setActiveHandler} />
      <ul className={`${styles.option__list} ${isActive ? styles["active"] : ""}`}>
        <li className={`${styles.option__item} ${styles.style__date}`}>
          <div ref={el => (pickerRef.current[0] = el)} className={styles.txt__picker} style={{backgroundColor: color[0]}} onClick={() => pickerOpen(0)}>0</div>
          {
            pickerActive[0] ?
            <div className={styles.picker__active}>
              <HexColorPicker color={color[0]} onChange={(newColor) => {
                setColor((prevList) => {
                  return prevList.map((item, idx) => {
                    return idx === 0 ? newColor : item;
                  });
                });
              }} />
            </div>
            : null
          }
          <div className={styles.txt__wrapper}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </li>
        <li className={`${styles.option__item} ${styles.style__day}`}>
          <div ref={el => (pickerRef.current[1] = el)} className={styles.txt__picker} style={{backgroundColor: color[1]}} onClick={() => pickerOpen(1)}>1</div>
          {
            pickerActive[1] ?
            <div className={styles.picker__active}>
              <HexColorPicker color={color[1]} onChange={(newColor) => {
                setColor((prevList) => {
                  return prevList.map((item, idx) => {
                    return idx === 1 ? newColor : item;
                  });
                });
              }} />
            </div>
            : null
          }
          <div className={styles.txt__wrapper}>
            <input type="text" />
          </div>
        </li>
        <li className={`${styles.option__item} ${styles.style__name}`}>
          <div ref={el => (pickerRef.current[2] = el)} className={styles.txt__picker} style={{backgroundColor: color[2]}} onClick={() => pickerOpen(2)}>2</div>
          {
            pickerActive[2] ?
            <div className={styles.picker__active}>
              <HexColorPicker color={color[2]} onChange={(newColor) => {
                setColor((prevList) => {
                  return prevList.map((item, idx) => {
                    return idx === 2 ? newColor : item;
                  });
                });
              }} />
            </div>
            : null
          }
          <div className={styles.txt__wrapper}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </li>
        <li className={`${styles.option__item} ${styles.style__txtarea}`}>
          <div ref={el => (pickerRef.current[3] = el)} className={styles.txt__picker} style={{backgroundColor: color[3]}} onClick={() => pickerOpen(3)}>3</div>
          {
            pickerActive[3] ?
            <div className={styles.picker__active}>
              <HexColorPicker color={color[3]} onChange={(newColor) => {
                setColor((prevList) => {
                  return prevList.map((item, idx) => {
                    return idx === 3 ? newColor : item;
                  });
                });
              }} />
            </div>
            : null
          }
          <div className={styles.txt__wrapper}>
            <textarea name="" id=""></textarea>
          </div>
        </li>
      </ul>
    </>

  )
}

export default IntroTextSelector;