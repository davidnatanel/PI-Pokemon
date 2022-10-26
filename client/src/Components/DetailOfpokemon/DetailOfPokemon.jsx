import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { GetPokemonsForID  } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Pokemon from '../Home/Pokemon';
import style from '../DetailOfpokemon/DetailOfpokemonCss/DetailOfpokemon.module.css'
import styles from '../DetailOfpokemon/DetailOfpokemonCss/DetailOfpokemonbackground.module.css'
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import axios from 'axios';
import global from './../../utils/lenguaje.json'

function DetailOfPokemon({selectLenguaje}) {
    const {id} =useParams();
    const state = useSelector(state => state.PokemonsDetails)
    const [pokemon,setPokemon]= useState(null)

    const dispatch =useDispatch()


    useEffect(() => {
        
        // dispatch(GetPokemonsForID(id))

        axios(`/pokemons/${id}`)
        .then(e=>  setPokemon(e.data)  )


        
    }, [])
    

    return (
        // pokemon?

 <div className={styles.detail}>

{!pokemon?<Loading></Loading> :(
      
      <div className={ styles[pokemon.types[0]]   }  >

        <div className={styles.content}>

            <div>
                <img src={pokemon.img} className={style.image} alt="" />
            </div>

            <div>
                <ul className={style.types} >
                {pokemon.types && pokemon.types.map((e,i)=>(  <li key={i} className={style[e]}> </li> ) )}
                </ul>
            </div>

        </div>


    <div className={styles.viewDetail}>
        

        <div className={styles.d}>  <label htmlFor="">id</label><p>{pokemon.id}</p></div>
        <div className={styles.d}>  <label htmlFor="">{global[selectLenguaje].DetailOfPokemonattack}</label><p>{pokemon.attack}</p></div>
        <div className={styles.d}>  <label htmlFor="">{global[selectLenguaje].DetailOfPokemondefense}</label><p>{pokemon.defense}</p></div>
        <div className={styles.d}>  <label htmlFor="">{global[selectLenguaje].DetailOfPokemonheight}</label><p>{pokemon.height}</p> </div>
        <div className={styles.d}>  <label htmlFor="">{global[selectLenguaje].DetailOfPokemonspeed}</label><p>{pokemon.speed}</p></div>
        <div className={styles.d}>  <label htmlFor="">{global[selectLenguaje].DetailOfPokemonweigth}</label><p>{pokemon.weigth}</p></div>
        <div className={styles.d}>  <label htmlFor="">{global[selectLenguaje].DetailOfPokemonhp}</label><p>{pokemon.hp}</p></div>
        <div className={styles.d}>  <label htmlFor="">{global[selectLenguaje].DetailOfPokemonname}</label><p>{pokemon.name}</p></div>

        <div>
            <Link to='/Home'><button className={style.bottun}>Home</button></Link>
        </div>
     </div>


        
        </div>
)}



</div>
            
    );
}


export default DetailOfPokemon;

// if hay juego mostrar sino loading