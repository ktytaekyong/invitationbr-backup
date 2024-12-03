/* Import */
import { createContext, useState } from "react";
// export const TabContext = createContext({
//   selectTabList: initList.selectTabList,
//   basicTabList: initList.basicTabList,
// });

export const TabContext = createContext({
  basicTabList: [],
  selectTabList: [],
  setSelectTabList: () => {}
});