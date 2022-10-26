import React from 'react';
import Styled from './PokemonCreaterCss/PokemonCreater.module.css'
import LM from '../../gif/LoadingM.gif'
import global from './../../utils/lenguaje.json'
const validate =(input,selectLenguaje)=>{
    let error={}
    
    if(!input.name ){error.name=global[selectLenguaje].PokemonInputErrornameisrequired}
    else if(/^[0-9]/.test(input.name)){ error.name=global[selectLenguaje].PokemonInputErrornameisinvalid}


    else if(!input.img ){error.img=global[selectLenguaje].PokemonInputErrorimgisrequired}
    // else if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(input.img)) 
    // {error.img='img is invalid'}
    
    else if(!input.hp ){error.hp=global[selectLenguaje].PokemonInputErrorhpisrequired}
    else if (input.hp > 100 || input.hp < 0)
    {error.hp=global[selectLenguaje].PokemonInputErrorhpisinvalid}
    
    
    else  if(!input.attack ){error.attack=global[selectLenguaje].PokemonInputErrorattackisrequired}
    else if (input.attack > 100 || input.attack < 0)
    {error.attack=global[selectLenguaje].PokemonInputErrorattackisinvalid}


    else  if(!input.defense ){error.defense=global[selectLenguaje].PokemonInputErrordefenseisrequired}
    else if (input.defense > 100 || input.defense < 0)
    {error.defense=global[selectLenguaje].PokemonInputErrordefenseisinvalid}

    else  if(!input.speed ){error.speed=global[selectLenguaje].PokemonInputErrorspeedisrequired}
    else if (input.speed > 100 || input.speed < 0)
    {error.speed=global[selectLenguaje].PokemonInputErrorspeedisinvalid}

    else   if(!input.heigth ){error.heigth=global[selectLenguaje].PokemonInputErrorheigthisrequired}
    else if (input.heigth > 100 || input.heigth < 0)
    {error.heigth=global[selectLenguaje].PokemonInputErrorheigthisinvalid}

    else   if(!input.weigth ){error.weigth=global[selectLenguaje].PokemonInputErrorweigthhisrequired}
    else if (input.weigth > 100 || input.weigth < 0)

    {error.weigth=global[selectLenguaje].PokemonInputErrorweigthisinvalid}
   
    return error

   
     
}



function PokemonInput({selectLenguaje,name ,type,textError, state,setState,setError,error,styled}) {

const Change=(e)=>{
    
    setState({...state,[e.target.name]:e.target.value  });

    setError(validate({...state,[e.target.name]:e.target.value},selectLenguaje))
                    
                    }
    

    return (
        state ?
        <div>
            <label  htmlFor=''>{name}</label>
            <input 
            placeholder={ `  ${name}...` } name={name} type={type}  onChange={(e)=> {Change(e)}  }/>
            
            

        </div>
        : <img src={LM} alt="" />
    );
}

export default PokemonInput;