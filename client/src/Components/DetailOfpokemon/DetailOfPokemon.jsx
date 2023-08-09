import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import style from '../DetailOfpokemon/DetailOfpokemonCss/DetailOfpokemon.module.css'
import styles from '../DetailOfpokemon/DetailOfpokemonCss/DetailOfpokemonbackground.module.css'
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import axios from 'axios';
import global from './../../utils/lenguaje.json'

function DetailOfPokemon() {

    const lenguaje = useSelector(state => state.lenguaje)

    const { id } = useParams();
    const state = useSelector(state => state.PokemonsDetails)
    const [pokemon, setPokemon] = useState(null)



    useEffect(() => {


        console.log(pokemon)
        axios(`/pokemons/${id}`)
            .then(e => setPokemon(e.data))



    }, [])


    return (

        <div className={styles.container}>

            {!pokemon ? <Loading LadingPage={false}></Loading> : (


                <div className={`${styles.containerDetail} ${styles[pokemon.types[0]]}`}>
                    <div className={styles.nameandimg}>
                        <div className={styles.containerName}>
                            <h2>{pokemon.name}</h2>
                            <ul>

                                <li> <p>heigth</p>   <p>  {pokemon.height ? pokemon.height : 0}M</p></li>
                                <li> <p>weigth</p>   <p>  {pokemon.weigth ? pokemon.weigth : 0}KG</p></li>
                                <li> <p>type</p>   <p>  {pokemon.types[0]}</p></li>
                            </ul>

                        </div>
                        <div className={styles.containerDetailImg}>
                            <div>
                                <img src={pokemon.img} alt="" />
                            </div>

                        </div>
                    </div>


                    <div className={styles.containerAbility}>
                        <div>
                            <Link to='/Home'><button className={styles.boton}>Home</button></Link>
                        </div>

                        <h2>Stats</h2>
                        <li>
                            <ul> <p>  {global[lenguaje].DetailOfPokemonhp}     </p> <div><div style={{ width: `${pokemon.hp}%` }}></div></div >     <p> {pokemon.hp}  </p></ul>

                            <ul> <p>  {global[lenguaje].DetailOfPokemonattack} </p> <div><div style={{ width: `${pokemon.attack}%` }}></div></div>  <p> {pokemon.attack}  </p></ul>
                            <ul> <p>  {global[lenguaje].DetailOfPokemondefense}</p> <div><div style={{ width: `${pokemon.defense}%` }}></div></div> <p> {pokemon.defense}  </p></ul>
                            <ul> <p>  {global[lenguaje].DetailOfPokemonspeed}  </p> <div><div style={{ width: `${pokemon.speed}%` }}></div></div>   <p> {pokemon.speed}  </p></ul>


                        </li>
                    </div>


                </div>


            )
            }
        </div>





        // <div className={styles.detail}>

        //     {!pokemon ? <Loading></Loading> : (

        //         <div className={styles[pokemon.types[0]]}  >

        //             <div className={styles.content}>

        //                 <div>
        //                     <img src={pokemon.img} className={style.image} alt="" />
        //                 </div>

        //                 <div>
        //                     <ul className={style.types} >
        //                         {pokemon.types && pokemon.types.map((e, i) => (<li key={i} className={style[e]}> </li>))}
        //                     </ul>
        //                 </div>

        //             </div>


        //             <div className={styles.viewDetail}>


        //                 <div className={styles.d}>  <label htmlFor="">id</label><p>{pokemon.id}</p></div>
        //                 <div className={styles.d}>  <label htmlFor="">{global[lenguaje].DetailOfPokemonattack}</label><p>{pokemon.attack}</p></div>
        //                 <div className={styles.d}>  <label htmlFor="">{global[lenguaje].DetailOfPokemondefense}</label><p>{pokemon.defense}</p></div>
        //                 <div className={styles.d}>  <label htmlFor="">{global[lenguaje].DetailOfPokemonheight}</label><p>{pokemon.height}</p> </div>
        //                 <div className={styles.d}>  <label htmlFor="">{global[lenguaje].DetailOfPokemonspeed}</label><p>{pokemon.speed}</p></div>
        //                 <div className={styles.d}>  <label htmlFor="">{global[lenguaje].DetailOfPokemonweigth}</label><p>{pokemon.weigth}</p></div>
        //                 <div className={styles.d}>  <label htmlFor="">{global[lenguaje].DetailOfPokemonhp}</label><p>{pokemon.hp}</p></div>
        //                 <div className={styles.d}>  <label htmlFor="">{global[lenguaje].DetailOfPokemonname}</label><p>{pokemon.name}</p></div>

        //                 <div>
        //                     <Link to='/Home'><button className={style.bottun}>Home</button></Link>
        //                 </div>
        //             </div>



        //         </div>
        //     )}



        // </div>

    );
}


export default DetailOfPokemon;

// if hay juego mostrar sino loading