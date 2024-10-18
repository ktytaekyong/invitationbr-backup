/* Import */
import { createContext } from "react";

export const InfoContext = createContext({
  basicInfoList: [],
  setBasicInfoList: () => {}, 
  groomParentsInfoList: [],
  setGroomParentsInfoList: () => {}, 
  brideParentsInfoList: [],
  setBrideParentsInfoList: () => {}, 
  selectLocationFile: [],
  setSelectLocationFile: () => {}, 
});