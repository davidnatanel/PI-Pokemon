import React from 'react';
import style from './CssHome/Pokemon.module.css'
import s from './CssHome/Types.module.css'
import styled,{keyframes} from 'styled-components'
import { Link } from 'react-router-dom';
import Poke from '../../img/card/deivid.png'





function Pokemon({attack, defense, height,hp,id,name, speed, weigth ,types,img,gif, gifback}) {

    
const PokemonCard=styled.div`
    position: relative;
    background-position: center;
    background-size:250px;
    background-repeat: no-repeat;
width: 300px;
    height: 14em;
    border-radius: 3em 0em 0em 3em;

    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-direction: row;
    box-shadow:  12px 16px 20px 10px #000000c8;

    


    &:hover{
       
        transform: scale(1.2);
    box-shadow:  inset 12px 16px 1px 150px #dbe0c49b;

        

    }


`;




    

    return (
        <PokemonCard className={ s[types[0]]  } > 
            <div className={style.detail}>
            <h1 className={style.name } >{name} </h1>
            {img && <img className={style.img} src={img} alt="" />}
            <Link key={id} to= {`DetailOfPokemon/${id}`} > <button className={style.buttonSeeMore}>See more</button></Link>
            </div>

            
            <ul className={style.types} >
            {types? <li> {types.map((e,i)=>( <div key={i} className={style[e]}/> ) )}</li> :null}
            </ul>

            
            


          
        </PokemonCard>
    );
}

export default Pokemon;
