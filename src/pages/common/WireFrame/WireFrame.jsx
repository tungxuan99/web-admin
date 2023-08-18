import React from 'react';
import WireFrameImage from '../../../shared/assets/images/WireFrame.png';
import Image1 from '../../../shared/assets/images/image1.png';
import "./WireFrame.scss"

export const WireFrame = () => {
    return (
        <div className='wire-frame__container'>
            <img src={Image1} alt="Image1" />
            <img className='wire-frame__container__image-2' src={WireFrameImage} alt="Image2" />
        </div>
    )
}