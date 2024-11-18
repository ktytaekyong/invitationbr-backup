/* Component */
import BasicModal from './BasicModal';

const BasicModalNoticeTDelete = ({ openvar, onClose, onClick }) => {
  return (
    <>
      <BasicModal 
        openvar={openvar} 
        className=""
        onClose={onClose} 
        onClick={onClick}
        notice={true} 
        noticeContent="탭 삭제"
        ButtonWrapperUse={true}
        btnContent1="취소"
        btnContent2="탭 삭제"
      >
        <p>해당탭을 삭제하시겠습니까?<br />
        탭 삭제 시 입력한 내용도 함께 삭제됩니다.</p>
      </BasicModal>
    </>
  );
}

export default BasicModalNoticeTDelete;