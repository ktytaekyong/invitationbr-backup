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
  // 누른 곳 감지
  const pickerRef = useRef([]);
  const lastIdx = useRef(null);
  // const [lastIdx, setLastIdx] = useState(null);
  const handleClick = (e) => {
    if (pickerRef.current.includes(e.target)) {
      lastIdx.current = pickerRef.current.indexOf(e.target);
    } else if (e.target.closest(`.${styles.picker__active}`)) {
      return;
    } else {
      // 피커 바깥 클릭 시
      if (color.some((item, index) => item !== prevColor[index])) {
        setColor(prevColor); // 현재 색상 배열을 이전 색상 배열로 덮어씀
      }
      pickerClose();
    }
  };
 
  const presetColors = ["#cd9323", "#1a53d8", "#9a2151", "#0d6416", "#53426d"];
  const pickerOpen = (clickIdx) => {
    setPickerActive((prevList) => {
      return prevList.map((_, idx) => (
        clickIdx === idx ? true : false
      ))
    });
  }
  // 닫기
  const pickerClose = () => {
    setPickerActive([false, false, false, false, false]);
    lastIdx.current = null;
  };
  // 확인
  const pickerAccept = () => {
    setPrevColor(color); // 이전 색상 배열을 현재 색상 배열로 덮어씀
    pickerClose();
  };
  // 취소
  const pickerCancel = () => {
    setColor(prevColor); // 현재 색상 배열을 이전 색상 배열로 덮어씀
    pickerClose();
  };

  useEffect(() => {
    // 초기 상태를 설정하고 싶다면 여기서 설정
    const initialColors = ["#e62323", "", "", "", ""]; // 예시 초기 색상
    setColor(initialColors);
    setPrevColor(initialColors); // 시작할 때 현재 색상과 이전 색상을 동일하게 설정
  }, []);

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
                        <Button content="취소" styleType="picker" onClick={pickerCancel}></Button>
                        <Button content="적용" styleType="picker" onClick={pickerAccept}></Button>
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