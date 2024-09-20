/* Import */
import { useState, useEffect, useRef } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
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
                  themeType.map((item, idx) => {
                    if(themeType[idx] === 1) {
                      return (
                        <div className={styles.txt__wrapper}>
                          <input type="text" />
                          <input type="text" />
                          <input type="text" />
                        </div>
                      )
                    } else if(themeType[idx] === 2) {
                      return (
                        <div className={styles.txt__wrapper}>
                          <input type="text" />
                        </div>
                      )
                    } else if(themeType[idx] === 3) {
                      return (
                        <div className={styles.txt__wrapper}>
                          <input type="text" />
                          <input type="text" />
                          <input type="text" />
                        </div>
                      )
                    } else if(themeType[idx] === 4) {
                      return (
                        <div className={styles.txt__wrapper}>
                          <textarea name="" id=""></textarea>
                        </div>
                      )
                    } else {
                      return null;
                    }
                  })
                  
                }
                
              </li>
            )
          })
        }

        {/* <li className={`${styles.option__item} ${styles.style__day}`}>
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
        </li> */}
        {/* <li className={`${styles.option__item} ${styles.style__name}`}>
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
        </li> */}
        {/* <li className={`${styles.option__item} ${styles.style__txtarea}`}>
          <div ref={el => (pickerRef.current[3] = el)} className={styles.txt__picker} style={{backgroundColor: color[3]}} onClick={() => pickerOpen(3)}>3</div>
          {
            pickerActive[3] ?
            <div className={styles.picker__active}>
              <input type="color" name="" id="" />
            </div>
            : null
          }
          <div className={styles.txt__wrapper}>
            <textarea name="" id=""></textarea>
          </div>
        </li> */}
      </ul>
    </>

  )
}

export default IntroTextSelector;