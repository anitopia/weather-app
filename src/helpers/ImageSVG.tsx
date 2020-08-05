import React from 'react';
import windSVG from './../assets/weather/wind.svg';
import hotSVG from './../assets/weather/hot.svg';
import clockSVG from './../assets/weather/clock.svg';
import wsunSVG from './../assets/weather/wsun.svg';
import RainSVG from './../assets/weather/rain.svg';
import CloudySVG from './../assets/weather/cloudy.svg';
import ClearSVG from './../assets/weather/ysun.svg';
import RainGirlSVG from '../assets/girlrain.svg';
import SunGirlSVG from '../assets/girlsun.svg';

export interface ImageSVGProps {
  srcImage: 'Clouds' | 'Clear' | 'Rain' | 'Wind' | 'Hot' | 'WSun' | 'Clock' | 'RainGirl' | 'SunGirl';
  className?: string;
}

export const ImageSVG: React.FC<ImageSVGProps> = (props) => {
  let svg;
  switch (props.srcImage) {
    case 'Clouds': svg = CloudySVG; break;
    case 'Clear': svg = ClearSVG; break;
    case 'Rain': svg = RainSVG; break;
    case 'Wind': svg = windSVG; break;
    case 'Hot': svg = hotSVG; break;
    case 'WSun': svg = wsunSVG; break;
    case 'Clock': svg = clockSVG; break;
    case 'RainGirl': svg = RainGirlSVG; break;
    case 'SunGirl': svg = SunGirlSVG; break;

  }
  return <img src={svg} alt={props.srcImage} className={props.className}/>;
};
