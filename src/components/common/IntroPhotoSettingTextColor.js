/* Import */
import { useState, useEffect, useRef } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
/* CSS Module */
import styles from "../../css/module/common/IntroPhotoSettingTextColor.module.css";
import Button from "../layout/Button";

const IntroPhotoSettingTextColor = () => {
  const [isActive, setIsActive] = useState(false);
  const setActiveHandler = () => {
    setIsActive(!isActive);
  }
  useEffect(() => {
    setIsActive(0);
  }, []);

  const [color, setColor] = useState(["#000", "#000", "#000", "#000"]);
  const [pickerActive, setPickerActive] = useState([false, false, false, false]);
  const presetColors = ["#cd9323", "#1a53d8", "#9a2151", "#0d6416"];
  const [themeType, setThemeType] = useState([1, 2, 3, 4]);
  const pickerOpen = (clickIdx) => {
    setPickerActive((prevList) => {
      return prevList.map((item, idx) => (
        clickIdx === idx ? true : false
      ))
    });
  }
  
  const pickerClose = () => {
    setPickerActive((prevList) => {
      console.log("Closing all pickers");
      return prevList.map((item) => (
        item ? false : false
      ))
    });
  }

  const pickerRef = useRef([]);
  const handleClick = (e) => {
    if (pickerRef.current.includes(e.target)) {
      pickerOpen(pickerRef.current.indexOf(e.target)); 
      console.log(32425);
    } else if (
      e.target.classList.contains("react-colorful__interactive") || 
      e.target.classList.contains(styles.picker__input) || 
      e.target.classList.contains(styles.preset__item)
    ) {
      return;
    } else {
      pickerClose();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const repeatCount = [null, null, null, null];
  const changeColorList = (repeatidx, color) => {
    setColor((prevList) => {
      return prevList.map((item, idx) => {
        return idx === repeatidx ? color : item;
      });
    });
  }

  return (
    <>
      <Button type="button" content="+" className={styles.add_btn} onClick={setActiveHandler} />

      <ul className={`${styles.option__list} ${isActive ? styles["active"] : ""}`}>
        {
          repeatCount.map((_, repeatidx) => {
            return (
              <li className={`${styles.option__item} ${styles.style__date}`}>
                <div ref={el => (pickerRef.current[repeatidx] = el)} className={styles.txt__picker} style={{backgroundColor: color[repeatidx]}} onClick={() => pickerOpen(repeatidx)}>
                  {repeatidx}
                </div>
                {
                  pickerActive[repeatidx] ?
                  <div className={styles.picker__active}>
                    <HexColorPicker 
                      color={color[repeatidx]} 
                      onChange={(newColor) => {changeColorList(repeatidx, newColor);}} 
                    />
                    <HexColorInput className={styles.picker__input} color={color[repeatidx]} 
                      onChange={(newColor) => {changeColorList(repeatidx, newColor);}}
                    />
                    <div className={styles.picker__preset}>
                      {presetColors.map((presetColor) => {
                        return <button key={presetColor} className={styles.preset__item} style={{backgroundColor: presetColor}} 
                        onClick={() => {changeColorList(repeatidx, presetColor);}} 
                        ></button>
                      })}
                    </div>
                  </div>
                  : null
                }
                {
                  themeType[repeatidx] === 1 ?
                  <div className={`${styles.txt__wrapper} ${styles.style__date}`}>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                  </div>
                  : null
                }
                {
                  themeType[repeatidx] === 2 ?
                  <div className={`${styles.txt__wrapper} ${styles.style__day}`}>
                    <input type="text" />
                  </div>
                  : null
                }
                {
                  themeType[repeatidx] === 3 ?
                  <div className={`${styles.txt__wrapper} ${styles.style__name}`}>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                  </div>
                  : null
                }
                {
                  themeType[repeatidx] === 4 ?
                  <div className={`${styles.txt__wrapper} ${styles.style__txtarea}`}>
                    <textarea name="" id=""></textarea>
                  </div>
                  : null
                }
              </li>
            )
          })
        }
      </ul>
    </>

  )
}

export default IntroPhotoSettingTextColor;