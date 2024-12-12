export const NAME_REGEX = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\\u00A0\t]/g; // 숫자 차단

export const PHONE_NUMBER_REGEX = /[^0-9]/g; // 숫자만 입력
export const PHONE_NUMBER_AUTO_HYPHEN_REGEX = /^(\d{3})(\d{0,4})?(\d{0,4})?$/; // 자리 수 체크
