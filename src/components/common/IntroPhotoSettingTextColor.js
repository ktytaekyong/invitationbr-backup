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
import { InfoContext } from "../../store/option-info-context.js";

const IntroPhotoSettingTextColor = ({ isActive }) => {
  const { selectIntroColor, setSelectIntroColor, prevIntroColor, setPrevIntroColor, presetColors, setPresetColors, setintroSample } = useContext(IntroContext);
  const { selectOptionList } = useContext(SetContext);
  const { basicInfoList } = useContext(InfoContext);
  const [ pickerActive, setPickerActive ] = useState([false, false, false, false, false]);
  // 누른 곳 감지
  const pickerRef = useRef([]);
  const lastIdx = useRef(null);
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
  const changeSampleText = (e, idx) => {
    const { value } = e.target;
    setintroSample((prev) => 
      prev.map((item, prevIdx) => (
        prevIdx === idx ? value : item
      ))
    )
  }
  const handleDateChange = (date) => {
    const selectedDate = date; 
    const formattedDate = selectedDate.split('-').join('.');
    return formattedDate;
  };
  const handleDateChangeTheme2M = (date) => {
    const selectedDate = date; 
    return selectedDate.substring(5, 7);
  };
  const handleDateChangeTheme2D = (date) => {
    const selectedDate = date; 
    return selectedDate.substring(8, 10);
  };
  const handleDateChangeTheme4 = (date) => {
    const selectedDate = date; 
    const formattedDate = selectedDate.split('-').join(' / ');
    return formattedDate;
  };
  const handleDaysChange = (date) => {
    const dateObj = new Date(date);
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토']; // 요일 배열
    const dayOfWeek = daysOfWeek[dateObj.getDay()]; // 요일 계산
    return dayOfWeek;
  }
  const placeholderRenderer = (idx) => {
    if(selectOptionList.theme === "themeModernBasic"){
      switch(selectOptionList.introFillType) {
        case "basicTemplate1":
          const listB1 = [
            "저희 결혼합니다", 
            `${basicInfoList.groomInfo.lastname || basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname : "이보람"} ${basicInfoList.brideInfo.lastname || basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.lastname + basicInfoList.brideInfo.firstname : "김신우"}`,
            basicInfoList.dateInfo.date ? `${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date)}요일 ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}` : "2024.11.30 토요일 오후 2시",
            basicInfoList.placeInfo.placeName ? `${basicInfoList.placeInfo.placeName} ${basicInfoList.placeInfo.placeDetail}` : "보람컨벤션 카리나홀(4층)"
          ];
          return listB1[idx];
        case "basicTemplate2":
          const listB2 = [
            `${handleDateChangeTheme2M(basicInfoList.dateInfo.date)} / ${handleDateChangeTheme2D(basicInfoList.dateInfo.date)}`,
            `${basicInfoList.groomInfo.lastname || basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname : "이보람"} ${basicInfoList.brideInfo.lastname || basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.lastname + basicInfoList.brideInfo.firstname : "김신우"}`,
            basicInfoList.dateInfo.date ? `${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date)}요일 ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}` : "2024.11.30 토요일 오후 2시",
            basicInfoList.placeInfo.placeName ? `${basicInfoList.placeInfo.placeName} ${basicInfoList.placeInfo.placeDetail}` : "보람컨벤션 카리나홀(4층)"
          ];
          return listB2[idx];
        case "basicTemplate3":
          const listB3 = [
            `${basicInfoList.groomInfo.lastname || basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname : "이보람"} ${basicInfoList.brideInfo.lastname || basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.lastname + basicInfoList.brideInfo.firstname : "김신우"}`,
            basicInfoList.dateInfo.date ? `${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date)}요일 ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}` : "2024.11.30 토요일 오후 2시",
            basicInfoList.placeInfo.placeName ? `${basicInfoList.placeInfo.placeName} ${basicInfoList.placeInfo.placeDetail}` : "보람컨벤션 카리나홀(4층)"
          ];
          return listB3[idx];
        case "basicTemplate4":
          const listB4 = [
            `${handleDateChangeTheme4(basicInfoList.dateInfo.date)}`,
            `${basicInfoList.groomInfo.lastname || basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname : "이보람"} ${basicInfoList.brideInfo.lastname || basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.lastname + basicInfoList.brideInfo.firstname : "김신우"}`,
            basicInfoList.dateInfo.date ? `${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date)}요일 ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}` : "2024.11.30 토요일 오후 2시",
            basicInfoList.placeInfo.placeName ? `${basicInfoList.placeInfo.placeName} ${basicInfoList.placeInfo.placeDetail}` : "보람컨벤션 카리나홀(4층)"
          ];
          return listB4[idx];
        case "fillTemplate1":
          const listF1 = [
            "결혼합니다", 
            `${basicInfoList.groomInfo.lastname || basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname : "이보람"} ${basicInfoList.brideInfo.lastname || basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.lastname + basicInfoList.brideInfo.firstname : "김신우"}`,
            basicInfoList.dateInfo.date ? `${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date)}요일 ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}` : "2024.11.30 토요일 오후 2시",
            basicInfoList.placeInfo.placeName ? `${basicInfoList.placeInfo.placeName} ${basicInfoList.placeInfo.placeDetail}` : "보람컨벤션 카리나홀(4층)"
          ];
          return listF1[idx];
        case "fillTemplate2":
          const listF2 = [
            `${basicInfoList.groomInfo.lastname || basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname : "이보람"} ${basicInfoList.brideInfo.lastname || basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.lastname + basicInfoList.brideInfo.firstname : "김신우"}`,
            basicInfoList.dateInfo.date ? `${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date)}요일 ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}` : "2024.11.30 토요일 오후 2시",
            basicInfoList.placeInfo.placeName ? `${basicInfoList.placeInfo.placeName} ${basicInfoList.placeInfo.placeDetail}` : "보람컨벤션 카리나홀(4층)"
          ];
          return listF2[idx];
        case "fillTemplate3":
          const listF3 = [
            `${basicInfoList.groomInfo.lastname || basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname : "이보람"} ${basicInfoList.brideInfo.lastname || basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.lastname + basicInfoList.brideInfo.firstname : "김신우"}`,
            basicInfoList.dateInfo.date ? `${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date)}요일 ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}` : "2024.11.30 토요일 오후 2시",
            basicInfoList.placeInfo.placeName ? `${basicInfoList.placeInfo.placeName} ${basicInfoList.placeInfo.placeDetail}` : "보람컨벤션 카리나홀(4층)"
          ];
          return listF3[idx];
        case "fillTemplate4":
          const listF4 = [
            `${basicInfoList.groomInfo.lastname || basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname : "이보람"} ${basicInfoList.brideInfo.lastname || basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.lastname + basicInfoList.brideInfo.firstname : "김신우"}`,
            basicInfoList.dateInfo.date ? `${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date)}요일 ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}` : "2024.11.30 토요일 오후 2시",
            basicInfoList.placeInfo.placeName ? `${basicInfoList.placeInfo.placeName} ${basicInfoList.placeInfo.placeDetail}` : "보람컨벤션 카리나홀(4층)"
          ];
          return listF4[idx];
        default:
          return;
      }
    }
  }
  useEffect(() => {
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
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  useEffect(()=> {
    setPrevIntroColor([...selectIntroColor]);
  }, [pickerActive, selectIntroColor, setPrevIntroColor])
  useEffect(() => {
    let typeNumber = null;
    if(selectOptionList.introFillType === "basicTemplate1"
      || selectOptionList.introFillType === "basicTemplate2"
      || selectOptionList.introFillType === "basicTemplate4"
      || selectOptionList.introFillType === "fillTemplate1"
    ) {
      typeNumber = 4;
    } else if(selectOptionList.introFillType === "basicTemplate3"
      || selectOptionList.introFillType === "fillTemplate2"
      || selectOptionList.introFillType === "fillTemplate3"
      || selectOptionList.introFillType === "fillTemplate4"
    ) {
      typeNumber = 3;
    }
    const newColorArray = Array.from({ length: typeNumber }, () => "");
    const newSampleIntro = Array.from({ length: typeNumber }, () => "");
    setSelectIntroColor(newColorArray);
    setintroSample(newSampleIntro);
  }, [selectOptionList.introFillType, setSelectIntroColor, setintroSample])
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
                        }, 200);
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
                          }, 200);
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
                        <Button content="취소" styleType="picker" onClick={() => pickerCancel()} />
                        <Button content="적용" styleType="picker" onClick={() => pickerAccept(coloridx)} />
                      </ButtonWrapper>
                    </div>
                  </div>
                  : null
                }
                <div className={`${styles.txt__wrapper}`}>
                  <input 
                    type="text" 
                    id={`settingTxt${coloridx + 1}`} 
                    onChange={(e) => changeSampleText(e, coloridx)} 
                    placeholder={placeholderRenderer(coloridx)}
                    style={{color: selectIntroColor[coloridx]}} 
                  />
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