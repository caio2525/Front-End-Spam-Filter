import React from 'react';
import Modal from 'react-modal';
import Botao from '../Button';
import './index.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function ModalCircularProgress({modalIsOpen})
{
  return(
    <Modal

      isOpen={modalIsOpen}
      contentLabel="Example Modal"
      className="Modal"
      //overlayClassName="Overlay"
    >
      <Box justifyContent="center" alignItems="center"
        sx={{
          display: 'flex',
          width: 300,
          height: 300,
        }}>
        <CircularProgress
        style={{width: 200,height: 200,}}
           />
      </Box>

    </Modal>
  )
}

export default ModalCircularProgress;
