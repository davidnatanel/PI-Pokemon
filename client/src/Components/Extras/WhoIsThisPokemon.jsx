import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemons, orderPokemon } from '../../redux/actions';
import style from './CssEsxtras/WhoIsThisPokemon.module.css'
import global from './../../utils/lenguaje.json'
var indice = 0;
var item = 0;
var si = []

function WhoIsThisPokemon() {
  const lenguaje = useSelector(state => state.lenguaje)

  const [pokemonInGame, setPokemonInGame] = useState([])

  const [pokemon, setPokemon] = useState([])
  const [match, setMatch] = useState()
  const [selection, setSelection] = useState()


  useEffect(() => {
    async function s() {
      let Pokemons = await axios(`/pokemons`)
      let Pokemonsfilter = await Pokemons.data.filter(e => !e.createdInDb)
      console.log(Pokemonsfilter)
      await setPokemon([...Pokemonsfilter])
    }
    s()
  }, [])
  useEffect(() => {

    async function generate() {
      for (let i = 0; i < 3; i++) {
        var indice = Math.floor(Math.random() * pokemon.length)
        item = await pokemon[indice]
        if (item) si.push(item)

        setPokemonInGame([...pokemonInGame, ...si])
      }

    }
    generate()

  }, [pokemon])

  useEffect(() => {
    indice = Math.floor(Math.random() * pokemonInGame.length)

    setMatch(indice)
  }, [pokemonInGame])


  return (
    <div className={style.fondo}>
      <Link to='/Home'><button className={style.backTohome}>Home</button></Link>

      {match ?
        <div className={style.container}>


          <div className={style.containerleft}>

            <div>
              <img className={selection == pokemonInGame[match].name ? style.sure : style.image} src={match && pokemonInGame[match].img} alt="" />
            </div>

            <div>
              <p className={style.fonts} >{global[lenguaje].whoisthispokemon} </p>
            </div>
          </div>

          <div className={style.containerrigth}>
            {pokemonInGame && pokemonInGame.map((e, i) => (<div key={i} className={style.letter} onClick={() => { setSelection(e.name) }}><p >{e.name}</p></div>))}
          </div>

          {selection == pokemonInGame[match].name && Rigth(match, pokemonInGame)}

        </div> : <h1>{global[lenguaje].whoisthispokemonLoading}</h1>
      }

    </div>
  );
}

export default WhoIsThisPokemon;


function Rigth(match, pokemonInGame) {
  return (
    <div className={style.right}>
      <img className={style.sure} src={match && pokemonInGame[match].img} alt="" />

      <h1  >well</h1>
      <button onClick={() => window.location.reload()}>Try again</button>
    </div>)
}