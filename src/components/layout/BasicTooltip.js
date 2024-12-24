/* Import */
import Tooltip from '@mui/material/Tooltip';

const BasicTooltip = ({ title, placement, open, onClose, onOpen }) => {
  return (
    <Tooltip 
      title={title} 
      placement={placement} 
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      arrow>
    </Tooltip>
  );
}

export default BasicTooltip;