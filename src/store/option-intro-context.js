/* Import */
import { createContext } from "react";

export const IntroContext = createContext({
  selectIntroPhoto: [],
  setSelectIntroPhoto: () => {}, 
  presetColors: [],
  setPresetColors: () => {}, 
  selectIntroColor: [],
  setSelectIntroColor: () => {}, 
  prevIntroColor: [],
  setPrevIntroColor: () => {}, 
  selectIntroWord: [],
  setSelectIntroWord: () => {}, 
  introSmaple: [],
  setIntroSmaple: () => {}, 
});