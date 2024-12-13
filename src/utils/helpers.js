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


// ********** DATA CHANGER ********** //
export const DataChanger_NestedObject = (e, infoType, changer) => { // FUNC: 이중 객체 데이터 입력 제어(onChange) - 이벤트 대상의 name(e), 데이터 name(InfoType), 바꿀 상태 함수(changer) 
  const { name, value } = e.target;
  changer(prev => ({
    ...prev,
    [infoType]: {
      ...prev[infoType],
      [name]: value
    }
  }))
}
export const DataChanger_Object = (e, changer) => { // FUNC: 객체 데이터 입력 제어(onChange) - 이벤트 대상의 name(e), 데이터 name(InfoType), 바꿀 상태 함수(changer) 
  const { name, value } = e.target;
  changer((prev) => ({
    ...prev,
    [name]: value
  }))
}
export const DataChanger_ObjectArray = (e, selectedIndex, changer) => { // FUNC: 인덱스가 있는 객체의 배열 데이터 입력 제어(onChange), 이벤트 대상의 name(e), 이벤트 대상의 idx(selectedIndex), 바꿀 상태 함수(changer)
  const { name, value } = e.target;
  changer(prev => (
    prev.map((item, idx) => 
      idx === selectedIndex ? { ...item, [name]: value } : item 
    )
  ))
}
// export const DataChanger_Array


// ********** PHOTO(INTRO) ********** //
export const IntroImgSeparator = (introIdx, type) => { // FUNC: 인트로 사진 - 업로드 이미지 구분 로직
  const { selectIntroPhoto } = useContext(IntroContext);
  const defaultImg = "/img/intro/intro_photo_empty.png";
  if (selectIntroPhoto.length === 0) {
    return type === "img" ? <img src={defaultImg} alt="표지 사진" /> : defaultImg;
  }
  const selectedPhoto = selectIntroPhoto[Math.min(introIdx, selectIntroPhoto.length - 1)];
  return type === "img" 
    ? <img src={selectedPhoto.src} alt={selectedPhoto.alt} /> 
    : selectedPhoto.src;
}


// ********** DATE ********** //
export const DayConverter = (date) => { // FUNC: 숫자 데이터 날짜 -> 요일 변환
  const dateObj = new Date(date);
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토']; 
  const dayOfWeek = daysOfWeek[dateObj.getDay()]; 
  return dayOfWeek;
}
export const DayConverterENG = (date) => { // FUNC: 숫자 데이터 월 -> 영어 요일 변환
  const [, month] = date.split('-');
  const monthEng = (month) => {
    switch(month) {
      case "01":
        return "January";
      case "02":
        return "February";
      case "03":
        return "March";
      case "04":
        return "April";
      case "05":
        return "May";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "August";
      case "09":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
      default:
        return;
    }
  }
  return monthEng(month);
}
export const DayConverterSlash = (date) => { // FUNC: 숫자 데이터 날짜 -> MM / DD 변환
  const selectedDate = date; 
  const formattedDate = selectedDate.split('-').join(' / ');
  return formattedDate;
};
export const DateConverter = (date) => { // FUNC: 숫자 데이터 날짜 -> 연월일 변환
  const selectedDate = date;
  const [year, month, day] = selectedDate.split('-');
  const formattedDate = `${year}년 ${month}월 ${day}일`;
  return formattedDate;
}
export const DateConverterDot = (date) => { // FUNC: 숫자 데이터 날짜 -> YYYY. MM. DD. 변환
  const selectedDate = date; 
  const formattedDate = selectedDate.split('-').join('.');
  return formattedDate;
}
export const DateConverterMonth = (date) => {
  const selectedDate = date; 
  return selectedDate.substring(5, 7);
};
export const DateConverterDay = (date) => {
  const selectedDate = date; 
  return selectedDate.substring(8, 10);
};
export const DDayCalculator = (date) => { // FUNC: 디 데이 계산기
  const today = new Date();
  const selectedDate = new Date(date);
  const diffTime = selectedDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

