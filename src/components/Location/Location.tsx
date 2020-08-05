import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import style from './Location.less';
import searchSVG from '../../assets/search.svg';

const Location: React.FC = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState<string>('Plovdiv');
    const [typing, setTyping] = useState<boolean>(false);

    const changeLocationHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setTyping(true);
        setSearch(e.currentTarget.value);
        setTimeout(() => setTyping(false), 1000);
    };

    useEffect(() => {
        if (!typing) {
            dispatch({ type: 'SET_LOCATION', data: search });
        }
        return clearTimeout()
    }, [dispatch, typing, search]);

    return (
        <label htmlFor="loc"
            className={style.location}
            onClick={() => dispatch({ type: 'TOGGLE_DETAILS', data: false })}>
            {search}
            <img src={searchSVG} alt='search' />
            <input type="text" name="loc" id="loc" onChange={(e) => changeLocationHandler(e)} />
        </label>);
};
export default Location
