/* Component */
import BasicModal from './BasicModal';

const BasicModalGalleryAllRemove = ({ openvar, onClose, onClick }) => {
  return (
    <>
      <BasicModal 
        openvar={openvar} 
        className=""
        onClose={onClose} 
        onClick={onClick}
        notice={true} 
        noticeContent="사진 모두 삭제"
        ButtonWrapperUse={true}
        btnContent1="취소"
        btnContent2="삭제"
      >
        <p>현재 갤러리에 등록된 사진을 모두 삭제하시겠습니까?</p>
      </BasicModal>
    </>
  );
}

export default BasicModalGalleryAllRemove;