import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { IError, IRootState } from './helpers/types';
import Details from './components/Details';
import Main from './components/Main';

import style from './App.less';
import Forecast from './components/Forecast';
import { ImageSVG } from './helpers/ImageSVG';

const App: React.FC = () => {

  const dispatch = useDispatch();
  const units = useSelector((state: IRootState) => state.units);
  const location = useSelector((state: IRootState) => state.location);
  const showDetails = useSelector((state: IRootState) => state.details);

  const [error, setError] = useState<IError>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSunny, setIsSunny] = useState(false);

  useEffect(() => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=' + units + '&APPID='+process.env.REACT_APP_API_KEY)
      .then(res => res.json())
      .then(
        (res) => {
          setIsLoaded(true);
          if (res.cod === 200) {
            setError(undefined)
            setIsSunny(res.weather[0].main === 'Clouds' || res.weather[0].main === 'Clear');
            dispatch({ type: 'ADD_WEATHER', data: res });
          } else {
            setError(res)
          }
        }
      )
  }, [dispatch, location, units])

  return !isLoaded ? <div>Loading...</div> : (
    <div
      className={style.App + ' ' + (showDetails ? style.details : (isSunny ? style.sunny : style.rain))}>
      <Main err={error} />
      {showDetails ? <>
        <div onClick={() => dispatch({ type: 'SET_DETAILS', data: !showDetails })} className={style.moreBtn}>Less details </div>
        <Details />
        <Forecast />
      </> : <>
          <div onClick={() => dispatch({ type: 'SET_DETAILS', data: !showDetails })} className={style.moreBtn}>
            More details </div>
          <ImageSVG srcImage={isSunny ? 'SunGirl' : 'RainGirl'} className={style.girlImg}/>
        </>}
    </div>
  );
}

export default App;
