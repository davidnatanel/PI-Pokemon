import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, orderPokemon } from '../../redux/actions';
import style from './CssEsxtras/WhoIsThisPokemon.module.css'

function WhoIsThisPokemon(props) {
    const[match,Setmatch]=useState("")

    const state = useSelector(state => state.paginado)
    const[firstoption,setFirstoption]=useState(null)
    const[secondoption,setSecondoption]=useState(null)
    const[thirdoption,setThirdoption]=useState(null)


    const dispatch =useDispatch()

    useEffect(async ()  => {
      await dispatch( getPokemons()) 
      dispatch( orderPokemon('Api'))
      setFirstoption(Math.ceil(Math.random()*  50))
      setSecondoption(Math.ceil(Math.random()*  50))
      setThirdoption(Math.ceil(Math.random()*  50))
    }, [])
    

    return (
        <div className={style.fondo}>
        <div className={style.container}>
          

        <div className={style.pokemonTrue}>

        {state[firstoption] &&  <div key={state[firstoption].id} className={style.cardP}>   <img className={ match == state[firstoption].name?style.imgv:style.img} src={state[firstoption].img}/>  <h1 className={ match == state[firstoption].name?style.letter:style.letternone}>{state[firstoption].name}</h1>     </div>    }
       
       
        <div className={style.fonts} >who is this pokemon?</div>
        </div>

 { state[firstoption]? match === state[firstoption].name && <p className={style.Right}>Right</p>:null  } 

        <div className={style.opcions}>
        {state[firstoption] &&  <div key={state[firstoption].id}   onClick={()=>{Setmatch(state[firstoption].name)}}>  <h1>{state[firstoption].name}</h1>     </div>    }


        {state[secondoption] &&  <div key={state[secondoption].id}  onClick={()=>{Setmatch(state[secondoption].name)}}> <h1>{state[secondoption].name}</h1>     </div>    }

        {state[thirdoption] &&  <div key={state[thirdoption].id}  onClick={()=>{Setmatch(state[thirdoption].name)}}>  <h1>{state[thirdoption].name}</h1>     </div>    }
        </div>
        </div>
            
            
        </div>
    );
}

export default WhoIsThisPokemon;