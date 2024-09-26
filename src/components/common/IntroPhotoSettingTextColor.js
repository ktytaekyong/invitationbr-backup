/* Import */
import { useState, useEffect, useRef } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
/* CSS Module */
import styles from "../../css/module/common/IntroPhotoSettingTextColor.module.css";
import ButtonWrapper from "../layout/ButtonWrapper";
import Button from "../layout/Button";
/* Image */
import { ReactComponent as IconColorPickerImg } from "../../img/icon/icon_color_picker.svg";

const IntroPhotoSettingTextColor = ({ isActive }) => {
  const [color, setColor] = useState(["", "", "", "", ""]);
  const [prevColor, setPrevColor] = useState(["", "", "", "", ""]);
  const [pickerActive, setPickerActive] = useState([false, false, false, false, false]);
  const [themeType, setThemeType] = useState([1, 2, 3, 4, 5]);
  // const [presetColors, setPresetColors] = ["#cd9323", "#1a53d8", "#9a2151", "#0d6416", "#53426d"];
  const presetColors = ["#cd9323", "#1a53d8", "#9a2151", "#0d6416", "#53426d"];
  /* 프리셋: 컬러가 눌리면 순서대로 들어가야 함(가장 처음 색 삭제) */
  const pickerOpen = (clickIdx) => {
    setPickerActive((prevList) => {
      return prevList.map((_, idx) => (
        clickIdx === idx ? true : false
      ))
    });
  }
  // 닫기만
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
    pickerClose();
  }
  // 취소
  const pickerCancel = (repeatidx) => {
    setColor((prevList) => {
      return prevList.map((item, idx) => {
        return idx === repeatidx ? prevColor[idx] : item;
      });
    });
    pickerClose();
  }
  const changeColorList = (repeatidx, color) => {
    setColor((prevList) => {
      return prevList.map((item, idx) => {
        return idx === repeatidx ? color : item;
      });
    });
  }
  // 누른 곳 감지
  const pickerRef = useRef([]);
  const lastIdx = useRef(null);
  // const [lastIdx, setLastIdx] = useState(null);
  const handleClick = (e) => {
    if (pickerRef.current.includes(e.target)) {
      pickerOpen(pickerRef.current.indexOf(e.target));
      lastIdx.current = pickerRef.current.indexOf(e.target);
      // setLastIdx(pickerRef.current.indexOf(e.target));
    } else if (e.target.closest(`.${styles.picker__active}`)) {
      return;
    } else if (e.target) {
      console.log(e.target);
      lastIdx.current = null;
    }
    // if (pickerOpen(pickerRef.current.indexOf(e.target))) {}
    // if (e.target.closest(`.${styles.picker__active}`)) return;
    else {
      if(lastIdx.current !== null) {
        pickerCancel(lastIdx.current);
      }
    }
  };
  {console.log(lastIdx.current);}

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
                    <div className={styles.picker__input_wrap}>
                      <span>#</span>
                      <HexColorInput className={styles.picker__input} 
                        color={color[repeatidx]} 
                        onChange={(newColor) => {changeColorList(repeatidx, newColor);}}
                      />
                      <div className={styles.picker__select} style={{backgroundColor: `${color[repeatidx]}`}}></div>
                    </div>
                    <div className={styles.picker__preset}>
                      {presetColors.map((presetColor) => {
                        return <button 
                          key={presetColor} 
                          className={`${styles.preset__item} ${presetColor === color[repeatidx] ? styles.active : null}`} 
                          style={{backgroundColor: presetColor}} 
                          onClick={() => {changeColorList(repeatidx, presetColor);}} 
                        >
                        </button>
                      })}
                    </div>
                    <div className={styles.picker__button_wrapper}>
                      <ButtonWrapper>
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