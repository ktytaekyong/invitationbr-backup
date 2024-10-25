/* Import */
import { createContext } from "react";

export const GalleryContext = createContext({
  selectGalleryPhotoList: [],
  setSelectGalleryPhotoList: () => {}, 
});