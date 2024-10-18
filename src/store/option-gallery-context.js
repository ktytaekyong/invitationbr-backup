/* Import */
import { createContext } from "react";

export const GalleryContext = createContext({
  selectGalleryView: false,
  setSelectGalleryView: () => {}, 
  selectGalleryType: "",
  setSelectGalleryType: () => {}, 
  selectGalleryPhotoList: [],
  setSelectGalleryPhotoList: () => {}, 
});