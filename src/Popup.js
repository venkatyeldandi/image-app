import React from 'react';
import PopupContent from './PopupContent';

function Popup({ image, onClose, onDownload }) {
  return (
    <div className='Popup'>
      <div className='PopupOverlay' onClick={onClose}></div>
      <PopupContent image={image} onClose={onClose} onDownload={onDownload} />
    </div>
  );
}

export default Popup;