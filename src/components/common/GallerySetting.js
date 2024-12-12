/* Import */
import { useContext } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import GallerySettingType from "./GallerySettingType.js";
import GallerySettingPhoto from "./GallerySettingPhoto.js";
import CheckItem from "./CheckItem.js";
import SettingNotice from "../layout/SettingNotice.js";
import SettingNoticeContent from "../layout/SettingNoticeContent.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
import { GalleryContext } from "../../store/option-gallery-context.js";

const GallerySetting = () => {
  const { selectOptionList } = useContext(SetContext);
  const { selectGalleryPhotoList, setSelectGalleryPhotoList } = useContext(GalleryContext);
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>

        <CommonItemWrapper>
          <CommonItemContent title="타입">
            <GallerySettingType />
          </CommonItemContent>
          {
            selectOptionList.galleryType === "galleryBoardType" ?
            <CommonItemContent title="더보기">
              <CheckItem 
                id="galleryMoreOption"
                name="galleryMoreOption"
                content="사진이 3줄 이상일 경우 ‘더보기’ 버튼 생성"
              />
            </CommonItemContent>
            : null
          }
          <GallerySettingPhoto />
          <SettingNotice>
            <SettingNoticeContent>파일 확장자명은 jpg, jpeg, gif, png, 용량 5mb이하로 최대 20장까지 등록하실 수 있습니다.</SettingNoticeContent>
            <SettingNoticeContent>사진을 드래그하여 순서를 변경할 수 있습니다.</SettingNoticeContent>
          </SettingNotice>

        </CommonItemWrapper>
      </CommonOptionContent>
      {
        selectGalleryPhotoList.length > 0 ?
        <CommonOptionContent>
          <ButtonWrapper styleType="center">
            <Button content="사진 모두 삭제" styleType="point" onClick={() => setSelectGalleryPhotoList([])} />
          </ButtonWrapper>
        </CommonOptionContent>
        : null
      }

    </CommonOptionWrapper>
  )
}

export default GallerySetting;