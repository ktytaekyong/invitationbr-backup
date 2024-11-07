// Component
import Snackbar from '@mui/material/Snackbar';
/* Image */
import copyIcon from "../../img/icon/icon_toast_copy.png";
import regIcon from "../../img/icon/icon_toast_reg.png";

const Toast = ({ message, open, setOpen, type }) => {
  const msgRenderer = (type) => {
    switch (type) {
      case "copy":
        return <img src={copyIcon} /> 
      case "reg":
        return <img src={regIcon} /> 
    }
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={
          <div className="mui-message">{msgRenderer(type)}{message}</div>
        }
      />
    </div>
  );
}

export default Toast;