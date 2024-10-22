/* Import */
import { createContext } from "react";

export const SetContext = createContext({
  settingList: [],
  selectSettingList: [],
  setSelectSettingList: () => {}, 
  accountInfoList: {},
  setAccountInfoList: () => {}, 
  videoList: {},
  setVideoList: () => {}, 
  noticeTList: [],
  setNoticeTList: () => {}, 
  noticeDList: {},
  setNoticeDList: () => {}, 
  selectNoticeT: {},
  setSelectNoticeT: () => {},
  outroList: {},
  setOutroList: () => {},
  letterList: {},
  setLetterList: () => {},
});