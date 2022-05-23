import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, orderPokemon } from '../../redux/actions';
import style from './CssEsxtras/WhoIsThisPokemon.module.css'

function WhoIsThisPokemon(props) {
    const[match,Setmatch]=useState("")

    const state = useSelector(state => state.paginado)
    const[truee,Setrue]=useState(null)

    const dispatch =useDispatch()

    useEffect(async ()  => {
      await dispatch( getPokemons()) 
      dispatch( orderPokemon('Api'))
      Setrue(Math.ceil(Math.random()*  100))
    }, [])
    

    return (
        <div className={style.fondo}>

        <div className={style.n1}>

<button onClick={()=>{console.log(truee)}}></button>
        <div>who is this pokemon?</div>
        {state[truee] &&  <div key={state[truee].id} className={style.cardP}>   <img className={ match == state[truee].name?style.imgv:style.img} src={state[truee].img}/>  <h1>{state[truee].name}</h1>     </div>    }
        </div>

        <div className={style.n2}>
        {state && state.map(e=>  (  <button key={e.id} name={e.name} onClick={()=>{Setmatch(e.name)}}>{e.name}</button>   )     )}
        {   state[truee]? match === state[truee].name && <p>Correcto</p>:null  }
        </div>      

            
            
        </div>
    );
}

export default WhoIsThisPokemon;