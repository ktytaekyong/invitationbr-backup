/* Import */
import { useState, useEffect, useRef } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
/* Component */
import ButtonWrapper from "../layout/ButtonWrapper";
import Button from "../layout/Button";
/* CSS Module */
import styles from "../../css/module/common/IntroPhotoSettingTextColor.module.scss";
/* Image */
import { ReactComponent as IconColorPickerImg } from "../../img/icon/icon_color_picker.svg";

const IntroPhotoSettingTextColor = ({ isActive }) => {
  const [color, setColor] = useState(["", "", "", "", ""]);
  const [prevColor, setPrevColor] = useState(["", "", "", "", ""]);
  const [pickerActive, setPickerActive] = useState([false, false, false, false, false]);
  const [themeType, setThemeType] = useState([1, 2, 3, 4, 5]);
  // const [presetColors, setPresetColors] = ["#cd9323", "#1a53d8", "#9a2151", "#0d6416", "#53426d"];
  // 누른 곳 감지
  const pickerRef = useRef([]);
  const lastIdx = useRef(null);
  // const [lastIdx, setLastIdx] = useState(null);
  const handleClick = (e) => {
    if (pickerRef.current.includes(e.target)) { 
      lastIdx.current = pickerRef.current.indexOf(e.target);
    } else if (e.target.closest(`.${styles.picker__active}`)) { 
      return; 
    } 
    else { 
      pickerClose(); // 현재 취소 안됨(적용)
    }
  };
  
  const presetColors = ["#cd9323", "#1a53d8", "#9a2151", "#0d6416", "#53426d"];
  const pickerOpen = (clickIdx) => {
    setPrevColor(color);
    setPickerActive((prevList) => {
      return prevList.map((_, idx) => (
        clickIdx === idx ? true : false
      ))
    });
  }
  // 닫기
  const pickerClose = () => {
    setPickerActive((prevList) => {
      return prevList.map((item) => (
        item ? false : false
      ))
    });
  }
  // 확인
  const pickerAccept = (repeatidx) => {
    setPrevColor((prevList) => {
      return prevList.map((item, idx) => {
        return idx === repeatidx ? color[idx] : item;
      });
    });
    lastIdx.current = null;
    pickerClose();
  }
  // 취소
  const pickerCancel = (repeatidx) => {
    // if(color !== prevColor) {
      setColor((prevList) => {
        return prevList.map((item, idx) => {
          return idx === repeatidx ? prevColor[idx] : item;
        });
      });
    // }
    lastIdx.current = null;
    pickerClose();
  }
  const changeColorList = (repeatidx, color) => {
    setColor((prevList) => {
      return prevList.map((item, idx) => {
        return idx === repeatidx ? color : item;
      });
    });
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <ul className={`${styles.option__list} ${isActive ? styles["active"] : ""}`}>
        {
          color.map((_, repeatidx) => {
            return (
              <li key={`textInput${repeatidx}`} className={`${styles.option__item}`}>
                <div 
                  ref={el => (pickerRef.current[repeatidx] = el)} 
                  className={styles.txt__picker} 
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
                    <div className={styles.picker__input}>
                      <span>#</span>
                      <HexColorInput className={styles.picker__input_wrap} 
                        color={color[repeatidx]} 
                        onChange={(newColor) => {changeColorList(repeatidx, newColor);}}
                      />
                      <div className={styles.picker__select} style={{backgroundColor: `${color[repeatidx]}`}}></div>
                    </div>
                    <div className={styles.picker__preset}>
                      {presetColors.map((presetColor) => {
                        return <button 
                          key={presetColor} 
                          className={`${styles.picker__preset_item} ${presetColor === color[repeatidx] ? styles.active : null}`} 
                          style={{backgroundColor: presetColor}} 
                          onClick={() => {changeColorList(repeatidx, presetColor);}} 
                        >
                        </button>
                      })}
                    </div>
                    <div className={styles.picker__button_wrapper}>
                      <ButtonWrapper styleType="center">
                        <Button content="취소" styleType="picker" onClick={() => pickerCancel(repeatidx)}></Button>
                        <Button content="적용" styleType="picker" onClick={() => pickerAccept(repeatidx)}></Button>
                      </ButtonWrapper>
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