/* Import */
import { createContext } from "react";

export const TabContext = createContext({
  basicTabList: [],
  selectTabList: [],
  setSelectTabList: () => {},
  isTabActive: "",
  setIsTabActive: () => {},
});