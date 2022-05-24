import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import style from './CssHome/Home.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, Loading,  } from '../../redux/actions';
import Pokemon from './Pokemon';
import { Link } from "react-router-dom";
import LM from '../../gif/LoadingM.gif'
import Paginado from './Paginado';



function Home(props) {
    const dispatch =useDispatch()


    useEffect( ()  => {
        dispatch( Loading(true))
        dispatch( getPokemons())}  , [])


    const loading = useSelector(state => state.loading)
    const paginado = useSelector(state => state.paginado)


    const [currentPages,setCurrentPages]=useState(1)
    const [PokemonsPerPages,setPokemonsPerPages]=useState(12)
    const indexOfLastPokemons = currentPages * PokemonsPerPages;
    const indexOfFirstPokemons = indexOfLastPokemons - PokemonsPerPages;
    const currentPokemons = paginado.slice(indexOfFirstPokemons,indexOfLastPokemons)
    
    const paginadoo = (pageNumber)=>setCurrentPages(pageNumber)
    
  


    return (


        <div className={style.home}>

            {/* <button onClick={()=>{console.log(loading)}}>loading</button>
            <button onClick={()=>{  { dispatch( Loading(true)) } }}>loadingt</button>
            <button onClick={()=>{  { dispatch( Loading(false)) } }}>loadingf</button>
            */}

            <SearchBar  
            paginadoo={paginadoo}
            />
                                
            <Paginado            
            PokemonsPerPages={PokemonsPerPages} 
            Pokemons={paginado}
            paginado={paginadoo}
            ></Paginado>


            <div className={style.Pokemons}>    
            
            { loading ? <img src={LM} alt="" />:  

            
            
             currentPokemons.map(e=>  (          
            <Pokemon  id={e.id}attack={e.attack} gifback={e.gifback} gif={e.gif} img={e.img} types={e.types}  name={e.name}   ></Pokemon>  )      )
            }
            </div>


                    
            <div className={style.footer}>
                <div>
                    <p>made in David</p>
                </div>
                
                <ul>
                    <li>gitHub</li>
                    <li>Linkedin</li>
                </ul>
            </div>
                
            
            </div> 
    );
}

export default Home