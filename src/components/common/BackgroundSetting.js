/* Import */
import { useContext, useEffect } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import BackgroundSettingTheme from "./BackgroundSettingTheme.js";
import BackgroundSettingEffect from "./BackgroundSettingEffect.js";
import BackgroundSettingCheckbox from "./BackgroundSettingCheckbox.js";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const themeList = [
  {
    itemName: "[베이직] 모던",
    itemKey: "themeModernBasic"
  },
  // 241209: 주석 추가(사용할 가능성이 있는 항목)
  // {
  //   itemName: "[베이직] 클래식",
  //   itemKey: "themeClassicBasic"
  // },
  // {
  //   itemName: "[일러스트] 모던",
  //   itemKey: "themeModernIllust"
  // },
  // {
  //   itemName: "[일러스트] 클래식",
  //   itemKey: "themeClassicIllust"
  // },
  {
    itemName: "심플",
    itemKey: "themeSimple"
  },
  {
    itemName: "플라워",
    itemKey: "themeFlower"
  },
];
const fontList = [
  {
    itemName: "서울한강",
    itemKey: "SeoulHangang"
  },
  {
    itemName: "마루 부리",
    itemKey: "MaruBuri"
  },
  {
    itemName: "나눔명조 옛한글",
    itemKey: "NanumMyeongjoYetHangul"
  },
  {
    itemName: "프리텐다드",
    itemKey: "Pretendard"
  },
  {
    itemName: "나눔스퀘어 네오",
    itemKey: "NanumSquareNeo"
  },
  {
    itemName: "나눔스퀘어 라운드",
    itemKey: "NanumSquareRound"
  },
  {
    itemName: "카페24 써라운드 에어",
    itemKey: "Cafe24SsurroundAir"
  },
]
const fontSizeList = [
  {
    itemName: "보통",
    itemKey: "16px"
  },
  {
    itemName: "크게",
    itemKey: "19px"
  },
  {
    itemName: "작게",
    itemKey: "14px"
  }
]

// C: 배경 셋팅
const BackgroundSetting = () => {
  const { selectOptionList, isMobile } = useContext(SetContext);
  useEffect(() => { // 이하 useEffect: 옵션값에 따라 항목 스타일 수정
    document.documentElement.style.setProperty('--font-family--theme', selectOptionList.fontFamily);
  }, [selectOptionList.fontFamily]);
  useEffect(() => {
    document.documentElement.style.setProperty('--font-size--base', selectOptionList.fontSize);
  }, [selectOptionList.fontSize]);
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-select-color', selectOptionList.backgroundColor);
  }, [selectOptionList.backgroundColor]);

  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="테마" multi={isMobile}>
            <OptionSelector 
              selectID="themeSelector" 
              selectName="theme" 
              listName={themeList} 
              value={selectOptionList.theme} 
            />
            <BackgroundSettingTheme />
          </CommonItemContent>

          <CommonItemContent title="폰트" wrap={isMobile}>
            <OptionSelector 
              selectID="fontSelector" 
              selectName="fontFamily" 
              listName={fontList} 
              value={selectOptionList.fontFamily}
            />
            <OptionSelector 
              selectID="fontSizeSelector" 
              selectName="fontSize" 
              listName={fontSizeList} 
              value={selectOptionList.fontSize} 
            />
          </CommonItemContent>

          <CommonItemContent title="효과" multi={true}>
            <BackgroundSettingEffect />
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>

      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="옵션" multi={true}>
            <BackgroundSettingCheckbox />
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>

    </CommonOptionWrapper>
  )
}

export default BackgroundSetting;