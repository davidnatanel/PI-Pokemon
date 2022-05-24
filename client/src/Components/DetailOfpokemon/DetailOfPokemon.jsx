import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { GetPokemonsForID  } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Pokemon from '../Home/Pokemon';
import style from '../DetailOfpokemon/DetailOfpokemonCss/DetailOfpokemon.module.css'
import styles from '../DetailOfpokemon/DetailOfpokemonCss/DetailOfpokemonbackground.module.css'


function DetailOfPokemon() {
    const {id} =useParams();
    const state = useSelector(state => state.PokemonsDetails)

    const dispatch =useDispatch()


    useEffect(() => {
        
        dispatch(GetPokemonsForID(id))

        
    }, [])
    

    return (
        <div className={styles.detail} >



           <div className={styles.container}>
        {state.length && state.map(e=>  ( 
        
        <div className={ styles[e.types[0]]   }  >
            {/* <button onClick={()=>{console.log(state)}}>detail</button> */}

<div >
        <div className={styles.d}>  <label htmlFor="">id<p>{e.id}</p> </label></div>

        <p>{e.attack}</p>
        <p>{e.defense}</p>
        <p>{e.height}</p>
        <p>{e.speed}</p>
        <p>{e.weigth}</p>
        <p>{e.hp}</p>
        <p>{e.name}</p>
        </div>

        <img src={e.img} alt="" />

        <ul className={style.types} >
            {e.types && e.types.map(e=>(  <li className={style[e]}> </li> ) )}
            </ul>
        </div>
        
        
        
        )     )     }

</div>


            
        </div>
    );
}

export default DetailOfPokemon;

// if hay juego mostrar sino loading