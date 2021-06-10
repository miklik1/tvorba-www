import React from 'react';
import './ImageLink.sass';

const ImageLink = ({ onInputChange, onSubmit }) => {
    return (
        <div className="ImageLink">
            <input type='text' value="https://www.onlyu.cz/wp-content/uploads/2020/11/angelina_jolie-2.jpg" onChange={onInputChange}/>
            <button onClick={onSubmit}>DETECT</button>
        </div>
    );
}

export default ImageLink;