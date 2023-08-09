import React from 'react';
import style from './CssHome/Pokemon.module.css'
import s from './CssHome/Types.module.css'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom';
import Poke from '../../img/card/deivid.png'





function Pokemon({ global, lenguaje, attack, defense, height, hp, id, name, speed, weigth, types, img, gif, gifback }) {


    const PokemonCard = styled.div`

    position: relative;
    background-position: center;
    background-size:250px;
    background-repeat: no-repeat;
    width: 300px;
    height: 14em;
    border-radius: 10px 10px 10px 10px;

    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-direction: row;
    box-shadow:  5px 5px 6px 3px #4f4d4dc7;



    &:hover{
       cursor: pointer;
       transition: all 1s;
        transform: scale(1.1);
    box-shadow:  inset 12px 16px 1px 150px #dbe0c49b;
    box-shadow:  5px 5px 6px 3px #dbe0c49b;

        

    }


`;






    return (
        <PokemonCard className={`${s[types[0]]} ${s.styleBackground}`} >
            <div className={style.detail}>
                <h1 className={style.name} >{name} </h1>
                <div className={style.boximg}>
                    {img && <img className={style.img} src={img} alt="" />}


                </div>
                <div className={style.lin}>
                    {lenguaje && <Link key={id} to={`DetailOfPokemon/${id}`} > <button className={style.buttonSeeMore}>{global[lenguaje].PokemonSee}</button></Link>}


                </div>
            </div>


            <ul className={style.types} >
                {types ? <li> {types.map((e, i) => (<div key={i} className={style[e]} />))}</li> : null}
            </ul>






        </PokemonCard>
    );
}

export default Pokemon;
