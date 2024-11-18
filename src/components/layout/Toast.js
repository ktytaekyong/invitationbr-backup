/* Component */
import Snackbar from '@mui/material/Snackbar';
/* Image */
import copyIcon from "../../img/icon/icon_toast_copy.png";
import regIcon from "../../img/icon/icon_toast_reg.png";
import warnIcon from "../../img/icon/icon_toast_warn.png";

const Toast = ({ message, open, setOpen, type }) => {
  const msgRenderer = (type) => {
    switch (type) {
      case "copy":
        return <img src={copyIcon} alt="copy" /> 
      case "reg":
        return <img src={regIcon} alt="reg" /> 
      case "warn":
        return <img src={warnIcon} alt="warn" />
      default:
        return;
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
          // <div className={`mui-message ${type}`}>{msgRenderer(type)}{message}</div>
          <div className={`mui-message`}>{msgRenderer(type)}{message}</div>
        }
        ContentProps={{
          style: {
            '--toast-bgcolor': type === 'warn' ? '#FF6550' : '#7197CF',
          },
        }}
      />
    </div>
  );
}

export default Toast;