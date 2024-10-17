/* Import */
import { createContext } from "react";

export const GalleryContext = createContext({
  selectGalleryType: "",
  setSelectGalleryType: () => {}, 
  selectGalleryPhotoList: [],
  setSelectGalleryPhotoList: () => {}, 
});