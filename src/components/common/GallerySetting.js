/* Import */
import { useEffect, useState, useContext } from "react";
/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import GallerySettingType from "./GallerySettingType.js";
import GallerySettingPhoto from "./GallerySettingPhoto.js";
import PhotoSelector from "./PhotoSelector.js";
import CheckItem from "./CheckItem.js";
/* CSS Module */
import styles from "../../css/module/common/CoupleInfomationSettingParents.module.css";

const GallerySetting = () => {
  return (
    <div className="content__wrapper">
      <ul className="option__list">
        <CommonItemWrapper>
          <CommonItemContent title="타입">
            <GallerySettingType />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="더보기">
            <div className={`${styles.radio__wrap}`}>
              <CheckItem id="galleryMoreOption" content="사진이 3줄 이상일 경우 ‘더보기’ 버튼 생성"></CheckItem>
            </div>
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <GallerySettingPhoto />
        </CommonItemWrapper>
      </ul>
    </div>
  )
}

export default GallerySetting;