import React, { useEffect } from 'react';
import style from './CssHome/Home.module.css'

function Paginado({PokemonsPerPages, Pokemons,paginado}) {
    const pageNumbers=[];

    for (let i = 1; i <= Math.ceil(Pokemons.length/PokemonsPerPages); i++) {
        pageNumbers.push(i);
    }


  return (
    <nav >
        <ul  className={style.List}>
            {pageNumbers && pageNumbers.map(number => (
                <li key={number}  onClick={()=> paginado(number) }  >

            {number}

                </li>

            ))}
        </ul>
    </nav>
  )
}

export default Paginado;