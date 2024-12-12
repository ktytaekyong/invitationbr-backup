/* Import */
import { useContext } from "react";
import { PHONE_NUMBER_REGEX, PHONE_NUMBER_AUTO_HYPHEN_REGEX, NAME_REGEX } from "../constants/regex";
/* Context */
import { IntroContext } from "../store/option-intro-context.js";


// ********** INPUT ********** //
export const autoHyphenHandler = (number) => ( // FUNC: 전화번호 자동 하이픈(-) 처리
  number.replace(PHONE_NUMBER_REGEX, "")
  .replace(PHONE_NUMBER_AUTO_HYPHEN_REGEX, (match, p1, p2, p3) => {
    if (p3) return `${p1}-${p2}-${p3}`;
    if (p2) return `${p1}-${p2}`;
    return p1;
  })
)
export const nameHandler = (data) => ( // FUNC: 이름에 숫자 입력 차단
  data.replace(NAME_REGEX, "")
)


// ********** PHOTO(INTRO) ********** //
export const IntroPhotoChangeHandler = (introIdx, type) => { // FUNC: 인트로 사진 - 테스트 이미지/내 이미지 구분 로직
  const { selectIntroPhoto } = useContext(IntroContext);
  if(selectIntroPhoto.length === 0) {
    if(type === "img") {
      return <img src="/img/intro/intro_photo_empty.png" alt="표지 사진" />;
    } else if(type === "bg") {
      return "/img/intro/intro_photo_empty.png";
    }
  } if(selectIntroPhoto.length === 1) {
    if(type === "img") {
      return <img src={selectIntroPhoto[0].src} alt={selectIntroPhoto[0].alt} />;
    } else if(type === "bg") {
      return selectIntroPhoto[0].src;
    }
  } else {
    if(type === "img") {
      return <img src={selectIntroPhoto[introIdx].src} alt={selectIntroPhoto[introIdx].alt} />;
    } else if(type === "bg") {
      return selectIntroPhoto[introIdx].src;
    }
  }
}
