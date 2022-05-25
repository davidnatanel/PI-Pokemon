import React from 'react';
import style from './CssHome/Pokemon.module.css'
import s from './CssHome/Types.module.css'
import styled,{keyframes} from 'styled-components'
import { Link } from 'react-router-dom';
import Poke from '../../img/card/deivid.png'

function TypesColor(Type){

    switch (Type[0]) {
        case 'normal':
            
            return 'rgba(242, 230, 6, 0.824)'

        case 'fighting':

            return 'rgba(244, 17, 17, 0.824)'
        default:
            break;
    }

}



function Pokemon({attack, defense, height,hp,id,name, speed, weigth ,types,img,gif, gifback, hola}) {


    var TypesColor=(types[0])
    
const PokemonCard=styled.div`
    
    position: relative;
    background-position: center;
    background-size:250px;
    background-repeat: no-repeat;

    width: 20em;
    height: 14em;
    border-radius: 3em 0em 0em 3em;

    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-direction: row;
    box-shadow:  12px 16px 20px 10px #000000c8;
    /* box-shadow: inset 12px 12px 20px 2px rgba(19, 7, 7, 0.185); */

    


    &:hover{
       
        transform: scale(1.2);
        
    }


`;




    

    return (
        <PokemonCard className={ s[types[0]]  } > 
            <div className={style.detail}>
            <h1 className={style.name } >{name} </h1>
            {img && <img className={style.img} src={img} alt="" />}
            <Link key={id} to= {`DetailOfPokemon/${id}`} > <botton>See more</botton></Link>
            </div>

            {/* {attack? <p>attack: {attack}</p>:null} */}
            
            <ul className={style.types} >
            {types? <li> {types.map(e=>( <div className={style[e]}/> ) )}</li> :null}
            </ul>

            
            


          
        </PokemonCard>
    );
}

export default Pokemon;

//     var res=0;
//     var este=null
//     if(types.length  ){types.length > 10?res=120: res=12;}
   
//    const sli=keyframes`
// 0%{margin-left: 0%;}

// 25%{margin-left: -25%;}

// 70%{margin-left: -30%;}

// 95%{margin-left: -45%;} 

// `
// const sli2=keyframes`
// 0%{margin-left: -5%;}

// 25%{margin-left: -15%;}


// 40%{margin-left: -70%;}



// `
// types.length > 10?este=sli: este=sli2;

  

// const Slider=styled.div`
// width: 100%;
// background-color: yellow;
// height:7em;
// /* padding-bottom:1em ; */
// overflow: hidden;

// `;

// const SliderConteiner=styled.ul`
//     display: flex;
//     width:   ${res}em;
//     animation: ${este} 2s infinite alternate  ease-in-out;;

// `

// const Sliderimg=styled.li`
//   width:${res}em;
//  list-style: none;

// `


/////////////detalle
/* import React from 'react';
import style from './CssHome/Pokemon.module.css'
import styled,{keyframes} from 'styled-components'
import { Link } from 'react-router-dom';


function Pokemon({attack, defense, height,hp,id,name, speed, weigth ,types,img,gif, gifback, hola}) {


    return (
        <div className={style.Pokemon}>

            <h1>{name}</h1>
            {attack? <p>attack: {attack}</p>:null}
            {defense? <p>defense: {defense}</p>:null}
            {height? <p>height: {height}</p>:null}
            {hp? <p>hp: {hp}</p>:null}
            {id? <p>id: {id}</p>:null}
            {speed? <p>speed: {speed}</p>:null}
            {weigth? <p>weigth: {weigth}</p>:null}

           {img && <img className={style.img} src={img} alt="" />}
            <img src={gif} alt="" />
            <img src={gifback} alt="" />
            
            <ul >
            {types? <li> {types.map(e=>( <div className={style[e]}/> ) )}</li> :null}
            </ul>

            
            <Link key={id} to= {`DetailOfPokemon/${id}`} > <botton>b</botton></Link>
            


          
        </div>
    );
}

export default Pokemon; */
