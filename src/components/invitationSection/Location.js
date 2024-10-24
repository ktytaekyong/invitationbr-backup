/* Import */
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
/* Component */
import Traffic from "./Traffic.js";
import InvitationModalLocation from "../layout/modal/InvitationModalLocation.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Location.module.scss";
/* Image */
import tempMapImg from "../../img/location/temp_map.png";
import iconMapTImg from "../../img/icon/icon_map_t.png";
import iconMapNaverImg from "../../img/icon/icon_map_naver.png";
import iconMapKakaoImg from "../../img/icon/icon_map_kakao.png";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const Location = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const { selectLocationFile, setSelectLocationFile } = useContext(InfoContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  // useEffect(()=>{
  //   console.log(selectLocationFile);
  // }, [selectLocationFile])
  return (
    <div className={`${styles.location} ${styles.style_theme_1}`}>
      <div className={styles.location__wrap}>
        <HeadLine title="오시는 길" content="location"></HeadLine>
        <div className={styles.location__content}>
          <div className={styles.place}>
            <p>{`${basicInfoList.placeInfo.placeName} ${basicInfoList.placeInfo.placeDetail}`}</p>
            <p>울산광역시 남구 왕생로160</p>
          </div>
          {
            selectLocationFile.length > 0 ?
            <ButtonWrapper styleType="center">
              <Button content="약도보기" styleType="invitation__map" onClick={handleOpen} />
            </ButtonWrapper>
            : null
          }
          <div className={styles.map}>
            <div className={styles.map__wrap}>
              <img src={tempMapImg} alt="" />
              <ul className={styles.map__search_list}>
                <li className={styles.map__search_item}>
                  <Link to="/">
                    <img src={iconMapTImg} alt="" />
                    <p>티맵</p>
                  </Link>
                </li>
                <li className={styles.map__search_item}>
                  <Link to="/">
                    <img src={iconMapNaverImg} alt="" />
                    <p>네이버</p>
                  </Link>
                </li>
                <li className={styles.map__search_item}>
                  <Link to="/">
                    <img src={iconMapKakaoImg} alt="" />
                    <p>카카오</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Traffic></Traffic>
      </div>
      <InvitationModalLocation openvar={open} onClose={handleClose}></InvitationModalLocation>
    </div>
  )
}

export default Location;