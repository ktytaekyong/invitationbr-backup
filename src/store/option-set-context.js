/* Import */
import { createContext } from "react";

export const SetContext = createContext({
  settingList: [],
  selectSettingList: [],
  setSelectSettingList: () => {}, 
  videoList: {},
  setVideoList: () => {}, 
});