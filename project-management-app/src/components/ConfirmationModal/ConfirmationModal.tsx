import React from 'react';
import Modal from 'react-modal';
import { StyledClose, StyledNo, StyledWrapper, StyledYes } from './styles';

Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    overflow: '0',
    transform: 'translate(-50%, -50%)',
  },
};
function ConfirmationModal() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledClose onClick={closeModal}>x</StyledClose>
        <div>Are You sure You want to continue?</div>
        <StyledWrapper>
          <StyledYes>Continue</StyledYes>
          <StyledNo>Cancel</StyledNo>
        </StyledWrapper>
      </Modal>
    </div>
  );
}

export default ConfirmationModal;
