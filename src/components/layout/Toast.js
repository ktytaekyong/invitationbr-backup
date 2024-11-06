// Import
import { useState } from "react";
// Component
import Snackbar from '@mui/material/Snackbar';

const Toast = ({ message }) => {
  const [state, setState] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      message={message}
      key={vertical + horizontal}
    />
  )
}

export default Toast;