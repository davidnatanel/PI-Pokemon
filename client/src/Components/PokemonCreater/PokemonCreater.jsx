import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { GetTypes } from '../../redux/actions';
import Styled from './PokemonCreaterCss/PokemonCreater.module.css'
import PokemonInput from './PokemonInput';
import LM from '../../gif/LoadingM.gif'


function PokemonCreater(props) {



    const history=useNavigate()
    const[data ,setData]=useState([])
    const[select ,setSelect]=useState(false)


    const[input ,setInput]=useState({
        name:'',
        hp:0,
        attack:0,
        defense:0,
        speed:0,
        heigth:0,
        weigth:0,
        types:[],
        img:""  
    })

    const[error,setError]=useState({
        
    })

    const state = useSelector(state => state.Types)

    const dispatch =useDispatch()
  
    useEffect(() => {

        dispatch(GetTypes())

        
    }, [])

  

    const changeCheck=(e)=>{
        var nombre=e.target.name

            if(!input.types.includes(e.target.name)){setInput({...input, types:[...input.types,e.target.name] })}
            if(!e.target.checked ){
               
                let filt=input.types.filter(e=> e !==nombre)
                 setInput({input,types:[...filt]})
            }
        
    }
    
  
    
     const OnSubmit=async (e)=>{
        const { name, hp, attack,defense,speed,heigth,weigth,types,img } = input;
        e.preventDefault()
        
        await axios.post(`/pokemons`, {
            name,
            hp,
            attack,
            defense,
            speed,
            heigth,
            weigth,
            types,
            img



        })
        .then(response => {
            setData( response.data );
        })

        history('/Home')
        
    }


    return (
        state ?


        <div className={Styled.PokemonContainer} >

            <button onClick={()=>{console.log(error,input)}}>x</button>
          

            <form className={Styled.PokemonCreater} onSubmit={(e)=>{OnSubmit(e) }}>
            Crea tu Pokemon

            <div className={Styled.detailsPokemon}>
                <PokemonInput 
                state={input}
                setState={setInput}
                name='name'
                type='text'
                textError=''
                regularExpression=''
                setError={setError}
                error={error}
                styled={error.name && Styled.error}
                />
                 <PokemonInput 
                state={input}
                setState={setInput}
                name='img'
                type='text'
                textError=''
                regularExpression=''
                setError={setError}
                error={error}
                styled={error.img && Styled.error}

                />

                  <PokemonInput 
                state={input}
                setState={setInput}
                name='hp'
                type='number'
                textError=''
                regularExpression=''
                setError={setError}
                error={error}
                styled={error.hp && Styled.error}

                />
                  <PokemonInput 
                state={input}
                setState={setInput}
                name='attack'
                type='number'
                textError=''
                regularExpression=''
                setError={setError}
                error={error}
                styled={error.attack && Styled.error}

                />
                  <PokemonInput 
                state={input}
                setState={setInput}
                name='defense'
                type='number'
                textError=''
                regularExpression=''
                setError={setError}
                error={error}
                styled={error.defense && Styled.error}

                />
                 <PokemonInput 
                state={input}
                setState={setInput}
                name='speed'
                type='number'
                textError=''
                regularExpression=''
                setError={setError}
                error={error}
                styled={error.speed && Styled.error}

                />
                  <PokemonInput 
                state={input}
                setState={setInput}
                name='heigth'
                type='number'
                textError=''
                regularExpression=''
                setError={setError}
                error={error}
                styled={error.heigth && Styled.error}

                />
                   <PokemonInput 
                state={input}
                setState={setInput}
                name='weigth'
                type='number'
                textError=''
                regularExpression=''
                setError={setError}
                error={error}
                styled={error.weigth && Styled.error }

                />
            </div>
            
      

            {/* <div className={Styled.Types}>
            
            {state && state.map(e=>(<label key={e.id} value="Api">  <input   type="checkbox" value={e.name} name={e.name}  onChange={(e)=>{changeCheck(e)} }  />{e.name}</label>  ))}
            
            </div> */}
            

            

            <div className={Styled.Types}>
            
            {state && state.map(e=>( <div key={e.id}> <img className={Styled[e.name]}></img>  <input   type="checkbox" value={e.name} name={e.name}  onChange={(e)=>{changeCheck(e)} }  /> </div>  ))}
            
           </div>

           <input  className={Styled.button}   disabled={Object.entries(error).length === 0 ?false:true   } type="submit" value="Submit" />



            </form>



            <div className={Styled.ViewPokemonCreated}>
                
            <img className={Styled.img1}  src={   input.img?input.img:LM } alt="" />
            <div className={Styled.detailsView}>
            <p>{input.name}</p>
            <p>{input.hp}</p>
            <p>{input.defense}</p>
            <p>{input.attack}</p>
            <p>{input.speed}</p>
            <p>{input.weigth}</p>
            <p>{input.heigth}</p>
            </div>
            {input.types &&  input.types.map(e=> < img key={e.id} className={Styled[e.name]}></img>)}


            </div>
            

         

        </div>: <img src={LM} alt="" />
    );
}

export default PokemonCreater;


//falta campos por rellenar 