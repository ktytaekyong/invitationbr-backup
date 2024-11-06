/* Import */
import { useState, useEffect, useContext, useRef } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
/* Component */
import ButtonWrapper from "../layout/ButtonWrapper";
import Button from "../layout/Button";
/* CSS Module */
import styles from "../../css/module/common/IntroPhotoSettingTextColor.module.scss";
/* Image */
import { ReactComponent as IconColorPickerImg } from "../../img/icon/icon_color_picker.svg";
/* Context */
import { IntroContext } from "../../store/option-intro-context.js";
import { SetContext } from "../../store/option-set-context.js";

const initTextType = [
  ["저희 결혼합니다", "이보람 김신우", "2024.11.30 토요일 오후 2시", "보람컨벤션 카리나홀(4층)"],

]
const IntroPhotoSettingTextColor = ({ isActive }) => {
  const { selectIntroColor, setSelectIntroColor, prevIntroColor, setPrevIntroColor, presetColors, setPresetColors, selectIntroWord, setSelectIntroWord } = useContext(IntroContext);
  const { selectOptionList } = useContext(SetContext);
  const [pickerActive, setPickerActive] = useState([false, false, false, false, false]);
  const [themeType, setThemeType] = useState([1, 2, 3, 4, 5]);
  // 누른 곳 감지
  const pickerRef = useRef([]);
  const lastIdx = useRef(null);
  const handleClick = (e) => {
    if (pickerRef.current.includes(e.target)) { 
      lastIdx.current = pickerRef.current.indexOf(e.target);
    } else if (e.target.closest(`.${styles.picker__active}`)) { 
      return; 
    } 
    else { 
      pickerClose(); 
    }
  };
  const pickerOpen = (clickIdx) => {
    // setPrevColor(selectIntroColor);
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
  const pickerAccept = (coloridx) => {
    setSelectIntroColor(prev => (
      prev.map((item, idx) => (
        coloridx === idx ? prevIntroColor[coloridx] : item
      ))
    ))
    lastIdx.current = null;
    pickerClose();
  }
  // 취소
  const pickerCancel = () => {
      setSelectIntroColor((prev) => prev);
    lastIdx.current = null;
    pickerClose();
  }
  // 변경(onChange, onClick)
  const changeColorList = (coloridx, color) => {
    setPrevIntroColor((prev) => {
      return prev.map((item, idx) => {
        return idx === coloridx ? color : item;
      });
    });
  }
  const changePresetColorList = (color) => {
    let newColor = color;
    if(presetColors.length === 5) {
      setPresetColors((prev) => {
        const updatedColors = [...prev.slice(1), newColor];
        return updatedColors;
      });
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  // useEffect(()=> {
  //   console.log(prevIntroColor);
  //   console.log(selectIntroColor);
  // }, [prevIntroColor, selectIntroColor])
  useEffect(()=> {
    setPrevIntroColor([...selectIntroColor]);
  }, [pickerActive])
  useEffect(() => {
    let typeNumber = null;
    if(selectOptionList.introFillType === "basicTemplate1"
      || selectOptionList.introFillType === "basicTemplate2"
      || selectOptionList.introFillType === "basicTemplate3"
      || selectOptionList.introFillType === "basicTemplate4"
      || selectOptionList.introFillType === "fillTemplate1"
    ) {
      typeNumber = 4;
    } else if(selectOptionList.introFillType === "fillTemplate2"
      || selectOptionList.introFillType === "fillTemplate3"
      || selectOptionList.introFillType === "fillTemplate4"
    ) {
      typeNumber = 3;
    }
    const newColorArray = Array.from({ length: typeNumber }, () => "");
    setSelectIntroColor(newColorArray);
  }, [selectOptionList.introFillType])

  return (
    <>
      <ul className={`${styles.option__list} ${isActive ? styles["active"] : ""}`}>
        {
          selectIntroColor.map((_, coloridx) => {
            return (
              <li key={`textInput${coloridx}`} className={`${styles.option__item}`}>
                <div 
                  ref={el => (pickerRef.current[coloridx] = el)} 
                  className={styles.txt__picker} 
                  onClick={() => pickerOpen(coloridx)}
                >
                  {selectIntroColor[coloridx] !== "" ?
                    <IconColorPickerImg 
                      fill={prevIntroColor[coloridx]} 
                    />
                    : "색상"
                  }
                </div>
                {
                  pickerActive[coloridx] ?
                  <div className={styles.picker__active}>
                    <HexColorPicker 
                      color={prevIntroColor[coloridx]} 
                      onChange={(newColor) => {
                        changeColorList(coloridx, newColor);
                        clearTimeout(window.lastColorChangeTimeout);
                        window.lastColorChangeTimeout = setTimeout(() => {
                          changePresetColorList(newColor);
                        }, 300);
                      }}
                    />
                    <div className={styles.picker__input}>
                      <span>#</span>
                      <HexColorInput className={styles.picker__input_wrap} 
                        color={prevIntroColor[coloridx]} 
                        onChange={(newColor) => {
                          changeColorList(coloridx, newColor);
                          clearTimeout(window.lastColorChangeTimeout);
                          window.lastColorChangeTimeout = setTimeout(() => {
                            changePresetColorList(newColor);
                          }, 300);
                        }}
                      />
                      <div 
                        className={styles.picker__select}
                        style={{backgroundColor: prevIntroColor[coloridx]}}
                      ></div>
                    </div>
                    <div className={styles.picker__preset}>
                      {presetColors.map((presetColor) => {
                        return <button 
                          key={presetColor} 
                          className={`${styles.picker__preset_item} ${presetColor === prevIntroColor[coloridx] ? styles["active"] : ""}`} 
                          style={{backgroundColor: presetColor}} 
                          onClick={() => {
                            changeColorList(coloridx, presetColor);
                            return false;
                          }} 
                        >
                        </button>
                      })}
                    </div>
                    <div className={styles.picker__button_wrapper}>
                      <ButtonWrapper styleType="center">
                        <Button content="취소" styleType="picker" onClick={() => pickerCancel()}></Button>
                        <Button content="적용" styleType="picker" onClick={() => pickerAccept(coloridx)}></Button>
                      </ButtonWrapper>
                    </div>
                  </div>
                  : null
                }
                <div className={`${styles.txt__wrapper}`}>
                  <input type="text" id={`settingTxt${coloridx + 1}`} defaultValue="예시" style={{color: selectIntroColor[coloridx]}}/>
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