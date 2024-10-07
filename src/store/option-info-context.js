/* Import */
import { createContext } from "react";

export const InfoContext = createContext({
  basicInfoList: [],
  setBasicInfoList: () => {}, 
});