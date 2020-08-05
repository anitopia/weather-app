
export interface IRootState {
    weather: IData,
    units: 'metric' | 'imperial',
    location: string,
    details: boolean,
    forecast: any
}

export interface IError {
    cod: number;
    message: string
};
export interface IDataWeather {
    id: number;
    main: string;
    description: string;
    icon: string
}
export interface IData {
    coord: {
        lon: number;
        lat: number;
    };
    weather: IDataWeather[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    },
    timezone: number;
    id: number;
    name: string;
    cod: number;
};