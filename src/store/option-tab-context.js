/* Import */
import { createContext } from "react";
import initList from "./option-list.json";

export const TabContext = createContext({
  tabList: initList.tabList,
  basicTabList: initList.basicTabList,
});
