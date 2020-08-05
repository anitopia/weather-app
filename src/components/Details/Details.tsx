import React from 'react';
import { useSelector } from "react-redux";
import style from './Details.less'

import { IRootState } from '../../helpers/types';
import Detail from '../../helpers/Detail';

const Details: React.FC = () => {
  const weather = useSelector((state: IRootState) => state.weather);

  return <div className={style.Details}>
      <Detail srcImage='Wind'>m/s {weather?.wind.speed}</Detail>
      <Detail srcImage='Hot'>hPa {weather?.main.pressure}</Detail>
      <Detail srcImage='WSun'>{weather?.clouds.all}%</Detail>
      <Detail srcImage='Clock'> {weather?.main.humidity}%</Detail>
    </div>
};

export default Details;
