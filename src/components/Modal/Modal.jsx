import { useEffect } from 'react';
import { ButtonCross, ModalContainer, Overlay } from './Modal.styled';
import sprite from '../../images/sprite.svg';

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <Overlay onClick={handleBackdropClick}>
        <ModalContainer>
          <ButtonCross onClick={onClose}>
            <svg width={24} height={24} style={{stroke: '#121417'}}>
              <use href={`${sprite}#icon-cross`}></use>
            </svg>
          </ButtonCross>
          {children}
        </ModalContainer>
      </Overlay>
    </>
  );
};

export default Modal;
