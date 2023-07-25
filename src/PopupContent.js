import React from 'react';

function PopupContent({ image, onClose, onDownload }) {
  return (
    <div className='PopupContent'>
      <img src={image.largeImageURL} alt={image.tags} />
      <div className='ImageDetails'>
        <h2>{image.tags}</h2>
        <p>{`By ${image.user}`}</p>
        <p>{`${image.likes} likes`}</p>
        <p>{`${image.views} views`}</p>
        <p>{`Downloaded ${image.downloads} times`}</p>
      </div>
      <div className='PopupButtons'>
        <button onClick={onClose}>Close</button>
        <button onClick={onDownload}>Download</button>
      </div>
    </div>
  );
}

export default PopupContent;