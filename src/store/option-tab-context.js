/* Import */
import { createContext, useState } from "react";
import initList from "./option-list.json";

// export const TabContext = createContext({
//   selectTabList: initList.selectTabList,
//   basicTabList: initList.basicTabList,
// });

export const TabContext = createContext({
  basicTabList: [],
  selectTabList: [], // 빈 배열 또는 null로 초기화
  selectTabList2: [],
  setSelectTabList: () => {}, // 기본 함수는 빈 함수로 정의
  setSelectTabList2: () => {}, // 기본 함수는 빈 함수로 정의
  setBasicTabList: () => {},
});