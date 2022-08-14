import React from 'react';
import Styled from './PokemonCreaterCss/PokemonCreater.module.css'
import LM from '../../gif/LoadingM.gif'

const validate =(input)=>{
    let error={}
    
    if(!input.name ){error.name='name is required'}
    else if(/^[0-9]/.test(input.name)){ error.name='name is invalid'}


    else if(!input.img ){error.img='img is required'}
    else if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(input.img)) 
    {error.img='img is invalid'}
    
    else if(!input.hp ){error.hp='hp is required'}
    else if (input.hp > 100 || input.hp < 0)
    {error.hp='hp is invalid'}


    else  if(!input.attack ){error.attack='attack is required'}
    else if (input.attack > 100 || input.attack < 0)
    {error.attack='attack is invalid'}


    else  if(!input.defense ){error.defense='defense is required'}
    else if (input.defense > 100 || input.defense < 0)
    {error.defense='defense is invalid'}

    else  if(!input.speed ){error.speed='speed is required'}
    else if (input.speed > 100 || input.speed < 0)
    {error.speed='speed is invalid'}

    else   if(!input.heigth ){error.heigth='heigth is required'}
    else if (input.heigth > 100 || input.heigth < 0)
    {error.heigth='heigth is invalid'}

    else   if(!input.weigth ){error.weigth='weigth is required'}
    else if (input.weigth > 100 || input.weigth < 0)

    {error.weigth='weigth is invalid'}
   
    return error

   
     
}


function PokemonInput({name ,type,textError, state,setState,setError,error,styled}) {

const Change=(e)=>{
    
    setState({...state,[e.target.name]:e.target.value  });

    setError(validate({...state,[e.target.name]:e.target.value}))
                    
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