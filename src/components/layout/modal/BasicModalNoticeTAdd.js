/* Component */
import BasicModal from './BasicModal';

const BasicModalNoticeTAdd = ({ openvar, onClose, addTitle, addFunction }) => {
  return (
    <>
      <BasicModal 
        openvar={openvar} 
        className=""
        onClose={onClose} 
        notice={true} 
        noticeContent="탭 추가"
        ButtonWrapperUse={true}
        btnContent1="취소"
        btnContent2="탭 추가"
        onClick={addFunction}
      >
        <input type="text" placeholder="사용할 탭의 이름을 입력해 주세요" onChange={addTitle} />
      </BasicModal>
    </>
  );
}

export default BasicModalNoticeTAdd;