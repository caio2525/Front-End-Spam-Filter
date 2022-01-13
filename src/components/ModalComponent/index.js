import React from 'react';
import Modal from 'react-modal';
import Botao from '../Button';
import './index.css';

function ModalComponent({background, modalIsOpen, predict, closeModal})
{
  return(
    <Modal

      isOpen={modalIsOpen}
      contentLabel="Example Modal"
      className="Modal"
      //overlayClassName="Overlay"
    >
      <div
      style={{
        background: background
      }}
        className="modalDiv">

        <div className="modalTitle">
          {predict}
        </div>

        <div className="modalText">
          Your Email has been classified as {predict}
        </div>

        <Botao
          content="Close"
          background="orange"
          color="white"
          onClick={closeModal}
        />

      </div>
    </Modal>
  )
}

export default ModalComponent;
