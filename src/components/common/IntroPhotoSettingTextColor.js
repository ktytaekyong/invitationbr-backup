/* Import */
import { useState, useEffect, useRef } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
/* CSS Module */
import styles from "../../css/module/common/IntroPhotoSettingTextColor.module.css";
import Button from "../layout/Button";
/* Image */
import { ReactComponent as IconColorPickerImg } from "../../img/icon/icon_color_picker.svg";

const IntroPhotoSettingTextColor = (isActive) => {
  const [color, setColor] = useState(["", "", "", "", ""]);
  const [pickerActive, setPickerActive] = useState([false, false, false, false, false]);
  const [themeType, setThemeType] = useState([1, 2, 3, 4, 5]);
  const presetColors = ["#cd9323", "#1a53d8", "#9a2151", "#0d6416"];
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
    } else if (
      e.target.closest(`.${styles.picker__active}`)
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

  const repeatCount = [null, null, null, null, null];
  const changeColorList = (repeatidx, color) => {
    setColor((prevList) => {
      return prevList.map((item, idx) => {
        return idx === repeatidx ? color : item;
      });
    });
  }

  return (
    <>
      <ul className={`${styles.option__list} ${isActive ? styles["active"] : ""}`}>
        {
          repeatCount.map((_, repeatidx) => {
            return (
              <li key={`textInput${repeatidx}`} className={`${styles.option__item}`}>
                <div 
                  ref={el => (pickerRef.current[repeatidx] = el)} 
                  className={styles.txt__picker} 
                  // style={{backgroundColor: color[repeatidx]}} 
                  onClick={() => pickerOpen(repeatidx)}
                >
                  {color[repeatidx] !== "" ?
                    <IconColorPickerImg fill={color[repeatidx]} />
                    :
                    "색상"
                  }
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
                <div className={`${styles.txt__wrapper}`}>
                  <input type="text" id={`settingTxt${repeatidx + 1}`} defaultValue="예시" style={{color: color[repeatidx]}}/>
                </div>
              </li>
            )
          })
        }
      </ul>
    </>

  )
}

export default IntroPhotoSettingTextColor;