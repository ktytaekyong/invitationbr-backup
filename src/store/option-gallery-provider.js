/* Import */
import { useState } from "react";
import initList from "./option-list.json";
/* Context */
import { GalleryContext } from "./option-gallery-context.js"

const GalleryProvider = ({ children }) => {
  const [selectGalleryPhotoList, setSelectGalleryPhotoList] = useState(initList.selectGalleryPhotoList);
  const [selectGalleryType, setSelectGalleryType] = useState(initList.selectGalleryType);
  return (
    <GalleryContext.Provider
      value={{
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