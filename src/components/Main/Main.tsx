import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import style from './Main.less';
import { IError, IRootState } from '../../helpers/types';
import ErrorBoundary from '../../helpers/ErrorBoundary';
import Location from '../Location';

interface MainProps {
  err?: IError;
};

const Main: React.FC<MainProps> = ({ err }) => {
  const dispatch = useDispatch();
  const units = useSelector((state: IRootState) => state.units);
  const weather = useSelector((state: IRootState) => state.weather);

  const changeUnitsHandler = () => {
    dispatch({ type: 'SET_UNITS', data: units === 'metric' ? 'imperial' : 'metric' })
  }

  return <>
    <Location />
    <ErrorBoundary error={err}>
      <div className={style.temp} onClick={() => changeUnitsHandler()}>
        {weather?.main?.temp}°<sup  > {units === 'metric' ? 'C' : 'F'}</sup></div>
      <div className={style.weather}>{weather?.weather && weather.weather[0].main}</div>
    </ErrorBoundary>
  </>;
};

export default Main;
