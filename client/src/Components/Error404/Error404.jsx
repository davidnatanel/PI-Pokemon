import React from 'react';
import error from '../../img/background/404.webp';
import style from './Error404.module.css'
import { Link } from 'react-router-dom';


function Error404(props) {
    return (
        <div className={style.container}>
            <img  src={error} alt="" />
            

        <Link to='/Home'><button className={style.boton}>Home</button></Link>

        </div>
    );
}

export default Error404;

