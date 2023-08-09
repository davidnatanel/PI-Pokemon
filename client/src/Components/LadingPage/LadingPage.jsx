import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import style from './LadingPage.module.css'

import poke from '../../img/background/Pokeball.svg'


import global from './../../utils/lenguaje.json'
import { LenguajeAc } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function LadingPage(props) {


    const dispatch = useDispatch()
    const lenguaje = useSelector(state => state.lenguaje)


    useEffect(() => {


        localStorage.setItem('LG', navigator.language.split("-")[0]);
        props.setSelectLenguaje(localStorage.getItem('LG'))




    }, [])



    const ChangeLenguaje = (e) => {

        dispatch(LenguajeAc(e.target.name))

        localStorage.setItem('LG', e.target.name);

        props.setSelectLenguaje(localStorage.getItem('LG'))


    }



    return (

        <div className={style.container}>
            {props.selectLenguaje ?
                <div className={style.Lenguaje} >
                    <button name='es' onClick={(e) => ChangeLenguaje(e)}>{global[lenguaje].lenguajeEs}</button>
                    <button name='en' onClick={(e) => ChangeLenguaje(e)}>  {global[lenguaje].lenguajeEn}</button>

                </div> : null}



            <img className={style.poke} src={poke} alt="" />
            <Link to='Home'>
                {
                    props.selectLenguaje ? <button className={style.button} >{global[props.selectLenguaje].LadingPageStart}</button> : null}
            </Link>




        </div>
    );
}

export default LadingPage;