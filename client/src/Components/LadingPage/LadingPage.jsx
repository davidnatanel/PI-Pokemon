import React from 'react';
import { Link } from "react-router-dom";
import style from './LadingPage.module.css'


function LadingPage(props) {
    return (
        <div className={style.color} >

        <h1>Henry Pokemon</h1>


            <Link to='Home'>

                <button className={style.boton} >Home</button>

            </Link>
            
        </div>
    );
}

export default LadingPage;