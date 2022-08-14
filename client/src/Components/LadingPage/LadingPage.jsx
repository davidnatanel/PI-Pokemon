import React from 'react';
import { Link } from "react-router-dom";
import style from './LadingPage.module.css'
import video from '../LadingPage/video/videoplayback.mp4'
import start from '../LadingPage/video/start.png'
import pokemon from '../LadingPage/video/pokemon.png'
import PikachuRun from '../LadingPage/video/PikachuRun.gif'
import left from '../LadingPage/video/left.png'
import right from '../LadingPage/video/right.png'
import poke from '../../img/background/Pokeball.svg'



function LadingPage(props) {
    return (
        <div className={style.container}>
            
    <img className={style.poke} src={poke} alt="" />
<Link to='Home'>

<button className={style.button} >Press Start</button>
</Link>


        {/* <video className={style.video} src={video} loop autoPlay muted type='video/mp4' /> */}
        {/* <video className={style.videoCopia} src={video} loop autoPlay muted type='video/mp4' /> */}

{/* 
        <img src={PikachuRun} className={style.PikachuRun} alt="" />

           <img src={right} className={style.right}alt="" />
           <img src={left} className={style.left} alt="" />
          <img src={pokemon} className={style.pokemon} alt="" />

       
             */}
     
            
            </div>
    );
}

export default LadingPage;