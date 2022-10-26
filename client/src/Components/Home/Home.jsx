import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import style from './CssHome/Home.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons,   } from '../../redux/actions';
import Pokemon from './Pokemon';
import { Link } from "react-router-dom";
import Paginado from './Paginado';
import Loading from '../Loading/Loading';
import git from '../../img/IconosFooter/github.svg';
import linkedin from '../../img/IconosFooter/linkedin.svg';

import global from './../../utils/lenguaje.json'

function Home(props) {


    const dispatch =useDispatch()
    

    useEffect( ()  => {

        console.log(props)
        console.log(localStorage.getItem('LG'))
  dispatch( Loading(true))
        dispatch( getPokemons())
        
    }
      
        , [])


    const loading = useSelector(state => state.loading)
    const paginado = useSelector(state => state.paginado)


    const [currentPages,setCurrentPages]=useState(1)
    const [PokemonsPerPages,setPokemonsPerPages]=useState(12)
    const indexOfLastPokemons = currentPages * PokemonsPerPages;
    const indexOfFirstPokemons = indexOfLastPokemons - PokemonsPerPages;
    const currentPokemons = paginado.slice(indexOfFirstPokemons,indexOfLastPokemons)
    
    const paginadoo = (pageNumber)=>setCurrentPages(pageNumber)
    
  


    return (
    
<div className={style.container}>
<div className={style.home}>


<SearchBar 
 global={global} 
  lenguaje={props.selectLenguaje}
paginadoo={paginadoo}
/>
                    
<Paginado            
PokemonsPerPages={PokemonsPerPages} 
Pokemons={paginado}
paginado={paginadoo}
></Paginado>


<div className={style.Pokemons}>    


{currentPokemons.length? currentPokemons.map(e=>  ( <Pokemon global={global}  lenguaje={props.selectLenguaje} key={e.id}id={e.id}attack={e.attack} gifback={e.gifback} gif={e.gif} img={e.img} types={e.types}  name={e.name}   ></Pokemon>  )      ) :
<Loading></Loading>  }



</div>




    

</div> 
        
<div className={style.footer}>
    <div>
        <p>made in David</p>
    </div>
    
    <ul >
        <a  href="https://www.linkedin.com/in/david-natanael-gomez/">
            
            <img style={{width:'50px', height:'50px'}} src={git} alt="" />
        </a>
        <a href='https://github.com/davidnatanel'>
            
            <img style={{width:'50px',height:'50px'}} src={linkedin} alt="" />
        </a>
    </ul>
</div>
</div>

     
    );
}

export default Home
