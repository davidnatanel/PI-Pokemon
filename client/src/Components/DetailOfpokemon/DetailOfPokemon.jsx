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

<div className={styles.detail}>

        {state.length && state.map(e=>  ( 
        
        <div className={ styles[e.types[0]]   }  >
        
        
        <div className={style.content}>
        <img src={e.img} className={style.image} alt="" />

        <ul className={style.types} >
            {e.types && e.types.map(e=>(  <li className={style[e]}> </li> ) )}
            </ul>
            </div>
        
        
            {/* <button onClick={()=>{console.log(state)}}>detail</button> */}

        <div className={styles.viewDetail}>
        <div className={styles.d}>  <label htmlFor="">id</label><p>{e.id}</p></div>
        <div className={styles.d}>  <label htmlFor="">attack</label><p>{e.attack}</p></div>
        <div className={styles.d}>  <label htmlFor="">defense</label><p>{e.defense}</p></div>
        <div className={styles.d}>  <label htmlFor="">height</label><p>{e.height}</p> </div>
        <div className={styles.d}>  <label htmlFor="">speed</label><p>{e.speed}</p></div>
        <div className={styles.d}>  <label htmlFor="">weigth</label><p>{e.weigth}</p></div>
        <div className={styles.d}>  <label htmlFor="">hp</label><p>{e.hp}</p></div>
        <div className={styles.d}>  <label htmlFor="">name</label><p>{e.name}</p></div>

    
        </div></div>
        
        
        )     )     }


</div>
            
    );
}

export default DetailOfPokemon;

// if hay juego mostrar sino loading