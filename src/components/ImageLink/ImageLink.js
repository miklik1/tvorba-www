import React from 'react';
import './ImageLink.sass';

const ImageLink = ({ onInputChange, onSubmit }) => {
    return (
        <div className="ImageLink">
            <input type='text' onChange={onInputChange}/>
            <button onClick={onSubmit}>DETECT</button>
        </div>
    );
}

export default ImageLink;