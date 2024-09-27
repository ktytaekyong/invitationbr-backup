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
    if (pickerRef.current.includes(e.target)) { // 클릭한 곳이 pickerRef 배열에 포함되면
      lastIdx.current = pickerRef.current.indexOf(e.target);
    } else if (e.target.closest(`.${styles.picker__active}`)) { 
      return; 
    } 
    else { // 나머지는 닫아라
      if(lastIdx.current !== -1) {
        pickerCancel(lastIdx.current);
      } else {
        pickerClose();
      }
    }
  };
  {
    // 이전컬러로돌아가야하는데 초기화가된다는것은 라스트인덱스가 먼저 null로 변경되어서인거같다
    console.log(lastIdx.current);
    console.log("color:"+color);
    console.log("prevColor:"+prevColor);
  }
 
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
    setPickerActive((prevList) => {
      return prevList.map((item) => (
        item ? false : false
      ))
    });
    lastIdx.current = null;
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
    if(color.filter((item, index) => item !== prevColor[index]).length > 0) {
      setColor((prevList) => {
        return prevList.map((item, idx) => {
          return idx === repeatidx ? prevColor[idx] : item;
        });
      });
      console.log("color.filter((item, index) => item !== prevColor[index])" + color.filter((item, index) => item !== prevColor[index]));
      console.log("니네가안다르다고말하굇는거냐지금?")
    }
    pickerClose();
    // lastIdx.current = null;
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