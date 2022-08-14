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
    const[supermixin,setSupermixin]=useState([])
    const[mezclado,setMezclado]=useState(Math.ceil(Math.random()*  supermixin.length))


    const dispatch =useDispatch()

    useEffect(async ()  => {
      await dispatch( getPokemons()) 
      dispatch( orderPokemon('Api'))
      var generador =Math.ceil(Math.random()*  state.length)

      var nomixin =[]
      nomixin.push(generador)
      nomixin.push(generador+1 )
      nomixin.push(generador+5)
      var mixin= nomixin.sort(()=> Math.random() - 0.5);
      setSupermixin(mixin)
      setFirstoption(mixin[0])
      setSecondoption(mixin[1])
      setThirdoption(mixin[2])
    }, [])
    

    return (
        <div className={style.fondo}>
        <div className={style.container}>
          
<button onClick={()=>console.log(mezclado,secondoption,thirdoption)}>sii</button>
        <div className={style.pokemonTrue}>

        {state[mezclado] &&  <div key={state[mezclado].id} className={style.cardP}>   <img className={ match == state[mezclado].name?style.imgv:style.img} src={state[mezclado].img}/>  <h1 className={ match == state[mezclado].name?style.letter:style.letternone}>{state[mezclado].name}</h1>     </div>    }
       
       
        <div className={style.fonts} >who is this pokemon?</div>
        </div>

 { state[mezclado]? match === state[mezclado].name && <p className={style.Right}>Right</p>:null  } 

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