/* Import */
import { forwardRef } from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import ModalBasic from '@mui/material/Modal';
import ButtonWrapper from "../ButtonWrapper";
import Button from "../Button";
/* CSS Module */
import styles from "../../../css/module/layout/modal/InvitationModal.module.scss";

export default function InvitationModal(props) {
  return (
    <>
      <ModalBasic
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={props.openvar}
        className={`${props.className} ${styles.modal__invite}`}
        onClose={props.onClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={{ width: 325 }}>
          <div className={styles.border_wrapper}>
            <div className={styles.wrapper}>
              <Button styleType="invitation__close" onClick={props.onClose} />
              <div className={styles.modal__header}>
                <img src={props.headSrc} alt="" />
                <p>{props.headContent}</p>
              </div>
              <div id="unstyled-modal-description" className={styles.modal__description}>
                {props.children}
                {
                  props.ButtonWrapperUse ? 
                  <ButtonWrapper styleType="center">
                    <Button content={props.btnContent} styleType="invitation__default" 
                    onClick={() => {
                      props.onClick?.(); 
                      props.onClose?.();
                    }}/>
                  </ButtonWrapper>
                  :
                  null
                }
              </div>
            </div>
          </div>
        </ModalContent>
      </ModalBasic>
    </>
  );
}

const Backdrop = forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'base-Backdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled('div')(
  ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};
  `,
);