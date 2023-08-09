import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import style from './CssHome/Home.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, } from '../../redux/actions';
import Pokemon from './Pokemon';
import { Link } from "react-router-dom";
import Paginado from './Paginado';
import Loading from '../Loading/Loading';
import git from '../../img/IconosFooter/github.svg';
import linkedin from '../../img/IconosFooter/linkedin.svg';
import Pokeball from '../../img/IconosFooter/Pokeball.png';
import global from './../../utils/lenguaje.json'

function Home(props) {

    const loading = useSelector(state => state.loading)
    const paginado = useSelector(state => state.paginado)
    const lenguaje = useSelector(state => state.lenguaje)
    const dispatch = useDispatch()


    useEffect(() => {

        console.log(props)
        console.log(localStorage.getItem('LG'))
        console.log(typeof localStorage.getItem('LG'))
        console.log(localStorage.getItem('LG') == "undefined")
        if (localStorage.getItem('LG') == "undefined") {
            localStorage.setItem('LG', 'es');
            props.selectLenguaje = 'es'


        }

        dispatch(Loading(true))
        dispatch(getPokemons())

    }

        , [])





    const [currentPages, setCurrentPages] = useState(1)
    const [PokemonsPerPages, setPokemonsPerPages] = useState(12)
    const indexOfLastPokemons = currentPages * PokemonsPerPages;
    const indexOfFirstPokemons = indexOfLastPokemons - PokemonsPerPages;
    const currentPokemons = paginado.slice(indexOfFirstPokemons, indexOfLastPokemons)

    const paginadoo = (pageNumber) => setCurrentPages(pageNumber)




    return (

        <div className={style.container}>
            <div className={style.home}>


                <SearchBar
                    global={global}
                    lenguaje={lenguaje}
                    paginadoo={paginadoo}
                />

                <Paginado
                    PokemonsPerPages={PokemonsPerPages}
                    Pokemons={paginado}
                    paginado={paginadoo}
                ></Paginado>


                <div className={style.Pokemons}>


                    {currentPokemons.length ? currentPokemons.map(e => (<Pokemon global={global} lenguaje={lenguaje} key={e.id} id={e.id} attack={e.attack} gifback={e.gifback} gif={e.gif} img={e.img} types={e.types} name={e.name}   ></Pokemon>)) :
                        <Loading LadingPage={true}></Loading>}



                </div>






            </div>

            <div className={style.footer}>
                <div style={{ display: 'flex', justifyContent: 'start', width: '5%' }}>
                    <img style={{ width: '50px', height: '50px' }} src={Pokeball} alt="" />


                </div>
                <div>
                    <p> {new Date().getFullYear()} Pokedex. Todos los derechos reservados.</p>

                </div>


                <ul >
                    <a href="https://www.linkedin.com/in/david-natanael-gomez/">

                        <img style={{ width: '50px', height: '50px' }} src={git} alt="" />
                    </a>
                    <a href='https://github.com/davidnatanel'>

                        <img style={{ width: '50px', height: '50px' }} src={linkedin} alt="" />
                    </a>
                </ul>
            </div>
        </div>


    );
}

export default Home
