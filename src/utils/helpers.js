
import { PHONE_NUMBER_REGEX, PHONE_NUMBER_AUTO_HYPHEN_REGEX, NAME_REGEX } from "../constants/regex";

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
  