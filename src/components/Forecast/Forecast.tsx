import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import style from './Forecast.less';
import { IRootState, IError } from '../../helpers/types';
import { ImageSVG } from '../../helpers/ImageSVG';
import ErrorBoundary from '../../helpers/ErrorBoundary';

const Forecast: React.FC<any> = () => {
    const dispatch = useDispatch();
    const units = useSelector((state: IRootState) => state.units);
    const location = useSelector((state: IRootState) => state.location);

    const [error, setError] = useState<IError>();
    const [forecast, setForecast] = useState([]);


    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + location + '&units=' + units + '&APPID='+process.env.REACT_APP_API_KEY)
            .then(res => res.json())
            .then(
                (res) => {
                    // setIsLoaded(true);
                    if (res.cod === "200") {
                        setError(undefined);
                        setForecast(res.list.slice(0, 5));
                    }
                    else {
                        setError(res);
                    }
                }
            );
            return ()=>{}
    }, [dispatch, location, units]);

    return <ErrorBoundary error={error}>
        <div className={style.Forecast}>
            {forecast && forecast.map((el: any) => (
                <div key={el.dt} className={style.day}>
                    <div> {el.main.temp}</div>
                    <ImageSVG srcImage={el.weather[0].main} />
                    <div className={style.wind}>
                        {el.wind.speed}
                    </div>
                    <span>
                        {(el.dt_txt).slice(11, 16)}
                    </span>
                </div>)
            )}
        </div>
    </ErrorBoundary>;
};
export default Forecast;