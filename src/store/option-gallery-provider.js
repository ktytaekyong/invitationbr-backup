/* Import */
import { useState } from "react";
import initList from "./option-list.json";
/* Context */
import { GalleryContext } from "./option-gallery-context.js"

const GalleryProvider = ({ children }) => {
  const [selectGalleryType, setSelectGalleryType] = useState(initList.selectGalleryType);
  const [selectGalleryView, setSelectGalleryView] = useState(initList.selectGalleryView);
  const [selectGalleryPhotoList, setSelectGalleryPhotoList] = useState(initList.selectGalleryPhotoList);
  return (
    <GalleryContext.Provider
      value={{
        selectGalleryView,
        setSelectGalleryView,
        selectGalleryType,
        setSelectGalleryType,
        selectGalleryPhotoList,
        setSelectGalleryPhotoList,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;