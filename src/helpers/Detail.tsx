import React from 'react';
import { ImageSVG, ImageSVGProps } from './ImageSVG';

const Detail: React.FC<ImageSVGProps> = (props) => (
    <div>
        <span>{props.children}</span>
        <ImageSVG srcImage={props.srcImage} />
    </div>);
export default Detail;
