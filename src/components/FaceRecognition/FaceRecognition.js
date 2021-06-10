import React from 'react';
import './FaceRecognition.sass';

const FaceRecognition = ({ celebrity, imageUrl, last}) => {
    return (
        <div>
            <div className="FaceSection">
                <div className="FaceRecognition">
                    <img alt='' src={imageUrl} />
                </div>
                <div>
                    <p>{celebrity == '' ? '' : "Is this " + celebrity.name +"?"}</p>
                    <p>{celebrity == '' ? '' : "I'm " + Math.trunc(celebrity.value * 100) + "% sure."}</p>
                </div>
            </div>
            Last searched: {last}
        </div>
    );
}

export default FaceRecognition;