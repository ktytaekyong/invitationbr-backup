/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/Intro.module.scss";
/* Image */
import intro1Ring from "../../img/intro/intro_theme_1_ring.png";
import intro1Letter from "../../img/intro/intro_theme_1_lettering.png";
import intro2Letter from "../../img/intro/intro_theme_2_lettering.png";
import intro3Letter from "../../img/intro/intro_theme_3_flower.png";
import intro4Letter from "../../img/intro/intro_theme_4_lettering.png";
import introPhoto1 from "../../img/intro/intro_photo_test1.png";
import introPhoto2 from "../../img/intro/intro_photo_test2.png";
import introPhoto3 from "../../img/intro/intro_photo_test3.png";
import introPhoto4 from "../../img/intro/intro_photo_test4.png";
import introPhoto5 from "../../img/intro/intro_photo_test5.png";
import introPhoto6 from "../../img/intro/intro_photo_test6.png";
import introPhoto7 from "../../img/intro/intro_photo_test7.png";
import introPhoto8 from "../../img/intro/intro_photo_test8.png";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
import { InfoContext } from "../../store/option-info-context.js";
import { IntroContext } from "../../store/option-intro-context.js";

const Intro = () => {
  const { selectOptionList } = useContext(SetContext);
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const { selectIntroPhoto, setSelectIntroPhoto, selectIntroColor, prevIntroColor } = useContext(IntroContext);
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
  const nameInitHandler = (data, defaultData) => {
    const { lastname, firstname } = data;
    return (lastname || firstname) ? `${lastname}${firstname}` : defaultData;
  }
  const placeInitHandler = (data, defaultData) => {
    const { placeName, placeDetail } = data;
    return (placeName || placeDetail) ? `${placeName} ${placeDetail}` : defaultData;
  }
  const renderIntroHandler = (id) => {
    switch(id) {
      case "basicTemplate1":
        return (
          <div className={styles.intro__wrap}>
            <div className={styles.intro__headline}>
              <div className={styles.img__wrap}>
                <img src={intro1Letter} alt="" />
              </div>
              <div className={styles.txt__wrap}>
                <p style={{color: prevIntroColor[0]}}>저희 결혼합니다</p>
              </div>
            </div>
            <div className={styles.intro__photo}>
              {
                selectIntroPhoto.length === 0 ?
                <img src={introPhoto1} alt="표지 사진" />
                : <img src={selectIntroPhoto[0].src} alt="표지 사진" />
              }
            </div>
            <div className={styles.intro__title}>
              <div className={styles.intro__title_couple}>
                <h2 className={styles.groom} style={{color: prevIntroColor[1]}}>{nameInitHandler(basicInfoList.groomInfo, "이보람")}</h2>
                <p className={styles.divide}></p>
                <h2 className={styles.bride} style={{color: prevIntroColor[1]}}>{nameInitHandler(basicInfoList.brideInfo, "김신우")}</h2>
              </div>
              <div className={styles.intro__title_date}>
                <h3 className={styles.date} style={{color: prevIntroColor[2]}}>
                  {`
                    ${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}
                  `}
                </h3>
              </div>
              <div className={styles.intro__title_place}>
                <h4 className={styles.groom} style={{color: prevIntroColor[3]}}>{placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}</h4>
              </div>
            </div>
          </div>
        );
      case "basicTemplate2":
        return (
          <div className={styles.intro__wrap}>
            <div className={styles.intro__headline}>
              <div className={styles.img__wrap}>
                <img src={intro2Letter} alt="" />
              </div>
              <div className={styles.txt__wrap}>
                <p style={{color: prevIntroColor[0]}}>
                  {`${handleDateChangeTheme2M(basicInfoList.dateInfo.date)}`}
                  <span>/</span>
                  {`${handleDateChangeTheme2D(basicInfoList.dateInfo.date)}`}
                </p>
              </div>
            </div>
            <div className={styles.intro__photo}>
              <p>getting</p>
              {
                selectIntroPhoto.length === 0 ?
                <img src={introPhoto2} alt="표지 사진" />
                : <img src={selectIntroPhoto[0].src} alt="표지 사진" />
              }
              <p>married</p>
            </div>
            <div className={styles.intro__title}>
              <div className={styles.intro__title_couple}>
                <h2 style={{color: prevIntroColor[1]}} className={styles.groom}>{nameInitHandler(basicInfoList.groomInfo, "이보람")}</h2>
                <p className={styles.divide}></p>
                <h2 style={{color: prevIntroColor[1]}} className={styles.bride}>{nameInitHandler(basicInfoList.brideInfo, "김신우")}</h2>
              </div>
              <div className={styles.intro__title_date}>
                <h3 style={{color: prevIntroColor[2]}} className={styles.date}>
                  {`${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}`}
                </h3>
              </div>
              <div className={styles.intro__title_place}>
                <h4 style={{color: prevIntroColor[3]}} className={styles.groom}>{placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}</h4>
              </div>
            </div>
          </div>
        );
      case "basicTemplate3":
        return (
          <div className={styles.intro__wrap}>
            <div className={styles.intro__headline}>
              <div className={styles.img__wrap}>
                <img src={intro3Letter} alt="" />
              </div>
            </div>
            <div className={styles.intro__title}>
              <div className={styles.intro__title_couple}>
                <h2 style={{color: prevIntroColor[0]}} className={styles.groom}>{nameInitHandler(basicInfoList.groomInfo, "이보람")}</h2>
                <p className={styles.divide}>그리고</p>
                <h2 style={{color: prevIntroColor[1]}} className={styles.bride}>{nameInitHandler(basicInfoList.brideInfo, "김신우")}</h2>
              </div>
              <div className={styles.intro__title_date}>
                <h3 style={{color: prevIntroColor[2]}} className={styles.date}>
                  {`${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}`}
                </h3>
              </div>
              <div className={styles.intro__title_place}>
                <h4 style={{color: prevIntroColor[3]}} className={styles.groom}>{placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}</h4>
              </div>
            </div>
            <div className={styles.intro__photo}>
              {
                selectIntroPhoto.length === 0 ?
                <img src={introPhoto3} alt="표지 사진" />
                : <img src={selectIntroPhoto[0].src} alt="표지 사진" />
              }
            </div>
          </div>
        );
      case "basicTemplate4":
        return (
          <div className={styles.intro__wrap}>
            <div className={styles.intro__headline}>
              <div className={styles.txt__wrap}>
                <p style={{color: prevIntroColor[0]}}>
                  {`${handleDateChangeTheme4(basicInfoList.dateInfo.date)}`}
                </p>
              </div>
            </div>
            <div className={styles.intro__photo}>
              {
                selectIntroPhoto.length === 0 ?
                <img src={introPhoto4} alt="표지 사진" />
                : <img src={selectIntroPhoto[0].src} alt="표지 사진" />
              }
            </div>
            <div className={styles.intro__title}>
              <div className={styles.intro__title_couple}>
                <h2 style={{color: prevIntroColor[1]}} className={styles.groom}>{nameInitHandler(basicInfoList.groomInfo, "이보람")}</h2>
                <img src={intro4Letter} alt="" />
                <h2 style={{color: prevIntroColor[1]}} className={styles.bride}>{nameInitHandler(basicInfoList.brideInfo, "김신우")}</h2>
              </div>
              <div className={styles.intro__title_date}>
                <h3 style={{color: prevIntroColor[2]}} className={styles.date}>
                  {`${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}`}
                </h3>
              </div>
              <div className={styles.intro__title_place}>
                <h4 style={{color: prevIntroColor[3]}} className={styles.groom}>{placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}</h4>
              </div>
            </div>
          </div>
        );
      case "fillTemplate1":
        return (
          <div className={styles.intro__wrap}>
            <div style={{backgroundImage: `url(${selectIntroPhoto.length === 0 ? introPhoto5 : selectIntroPhoto[0].src})`}} className={styles.intro__photo}>
              <div className={styles.intro__headline}>
                <div className={styles.txt__wrap}>
                  <p style={{color: prevIntroColor[0]}}>결혼합니다</p>
                </div>
              </div>
            </div>
            <div className={styles.intro__title}>
              <div className={styles.intro__title_couple}>
                <h2 style={{color: prevIntroColor[1]}} className={styles.groom}>{nameInitHandler(basicInfoList.groomInfo, "이보람")}</h2>
                <p className={styles.divide}></p>
                <h2 style={{color: prevIntroColor[1]}} className={styles.bride}>{nameInitHandler(basicInfoList.brideInfo, "김신우")}</h2>
              </div>
              <div className={styles.intro__title_date}>
                <h3 style={{color: prevIntroColor[2]}} className={styles.date}>
                  {`${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}`}
                </h3>
              </div>
              <div className={styles.intro__title_place}>
                <h4 style={{color: prevIntroColor[3]}} className={styles.groom}>{placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}</h4>
              </div>
            </div>
          </div>
        );
      case "fillTemplate2":
        return (
          <div className={styles.intro__wrap}>
            <div style={{backgroundImage: `url(${selectIntroPhoto.length === 0 ? introPhoto6 : selectIntroPhoto[0].src})`}} className={styles.intro__photo}>
              <div className={styles.intro__title_couple}>
                <h2 style={{color: prevIntroColor[0]}} className={styles.groom}>{nameInitHandler(basicInfoList.groomInfo, "이보람")}</h2>
                <img src={intro4Letter} alt="" />
                <h2 style={{color: prevIntroColor[0]}} className={styles.bride}>{nameInitHandler(basicInfoList.brideInfo, "김신우")}</h2>
              </div>
            </div>
            <div className={styles.intro__title}>
              <div className={styles.intro__title_date}>
                <h3 style={{color: prevIntroColor[1]}} className={styles.date}>
                  {`${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}`}
                </h3>
              </div>
              <div className={styles.intro__title_place}>
                <h4 style={{color: prevIntroColor[2]}} className={styles.groom}>{placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}</h4>
              </div>
            </div>
          </div>
        );
      case "fillTemplate3":
        return (
          <div className={styles.intro__wrap}>
            <div style={{backgroundImage: `url(${selectIntroPhoto.length === 0 ? introPhoto7 : selectIntroPhoto[0].src})`}} className={styles.intro__photo}>
            </div>
            <div className={styles.intro__title}>
              <div className={styles.intro__title_couple}>
                <h2 style={{color: prevIntroColor[0]}} className={styles.groom}>{nameInitHandler(basicInfoList.groomInfo, "이보람")}</h2>
                <img src={intro4Letter} alt="" />
                <h2 style={{color: prevIntroColor[0]}} className={styles.bride}>{nameInitHandler(basicInfoList.brideInfo, "김신우")}</h2>
              </div>
              <div className={styles.intro__title_date}>
                <h3 style={{color: prevIntroColor[1]}} className={styles.date}>
                  {`${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}`}
                </h3>
              </div>
              <div className={styles.intro__title_place}>
                <h4 style={{color: prevIntroColor[2]}} className={styles.groom}>{placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}</h4>
              </div>
            </div>
          </div>
        );
      case "fillTemplate4":
        return (
          <div className={styles.intro__wrap}>
            <div style={{backgroundImage: `url(${selectIntroPhoto.length === 0 ? introPhoto8 : selectIntroPhoto[0].src})`}} className={styles.intro__photo}>
            </div>
            <div className={styles.intro__title}>
              <div className={styles.intro__title_couple}>
                <h2 style={{color: prevIntroColor[0]}} className={styles.groom}>{nameInitHandler(basicInfoList.groomInfo, "이보람")}</h2>
                <h2>&</h2>
                <h2 style={{color: prevIntroColor[0]}} className={styles.bride}>{nameInitHandler(basicInfoList.brideInfo, "김신우")}</h2>
              </div>
              <div className={styles.intro__title_date}>
                <h3 style={{color: prevIntroColor[1]}} className={styles.date}>
                  {`${handleDateChange(basicInfoList.dateInfo.date)} ${handleDaysChange(basicInfoList.dateInfo.date) + "요일"} ${basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} ${basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 ${basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}`}
                </h3>
              </div>
              <div className={styles.intro__title_place}>
                <h4 style={{color: prevIntroColor[2]}} className={styles.groom}>{placeInitHandler(basicInfoList.placeInfo, "보람컨벤션 카리나홀(4층)")}</h4>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  }
  return (
    <div 
      key={selectOptionList.introFillType}
      id={selectOptionList.introFillType}
      className={`${styles.intro} ${styles[selectOptionList.introFillType]}`}
    >
      {renderIntroHandler(selectOptionList.introFillType)}
    </div>
  )
}

export default Intro;