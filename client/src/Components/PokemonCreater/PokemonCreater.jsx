import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { GetTypes } from '../../redux/actions';
import Styled from './PokemonCreaterCss/PokemonCreater.module.css'
import PokemonInput from './PokemonInput';
import LM from '../../gif/LoadingM.gif'
import { Link } from 'react-router-dom';


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

        if(input.types.length < 2)
         {
            if(!input.types.includes(e.target.name)){setInput({...input, types:[...input.types,e.target.name] })}
            if(!e.target.checked ){
               
                let filt=input.types.filter(e=> e !==nombre)
                 setInput({...input,types:[...filt]})
            }}
        
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
        // state ?


        <div className={Styled.PokemonBody} >

          
         <div className={Styled.PokemonContainer}>
            <form className={Styled.PokemonCreater} onSubmit={(e)=>{OnSubmit(e) }}>

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


        
            <div className={Styled.TypesContainer}>

        <div className={Styled.Types}>    
            {state && state.map(e=>( <div key={e.id}> <img className={Styled[e.name]}></img>  <input   type="checkbox" value={e.name} name={e.name}  onChange={(e)=>{changeCheck(e)} }  /> </div>  ))}
            </div>
           </div>

            <div className={Object.entries(error).length === 0 ?Styled.button:Styled.buttonerror }   >


           <input  disabled={Object.entries(error).length === 0 ?false:true   } type="submit" value="Crear" />

           </div>

           
           {error.name? <p>{error.name}</p>:null}
           {error.hp? <p>{error.hp}</p>:null}
           {error.attack? <p>{error.attack}</p>:null}
           {error.defense? <p>{error.defense}</p>:null}
           {error.speed? <p>{error.speed}</p>:null}
           {error.heigth? <p>{error.heigth}</p>:null}
           {error.weigth? <p>{error.weigth}</p>:null}
           {error.types? <p>{error.types}</p>:null}
           {error.img? <p>{error.img}</p>:null}

          


            </form>



            <div className={Styled.ViewPokemonCreated}>
                
            <img className={Styled.img1}  src={   input.img?input.img:LM } alt="" />
            <div className={Styled.detailsView}>
           <div> <label htmlFor="">name</label> <p>{input.name}</p></div>
            <div><label htmlFor="">hp</label>     <p>{input.hp}</p></div>
            <div><label htmlFor="">defense</label>     <p>{input.defense}</p></div>
            <div><label htmlFor="">attack</label>     <p>{input.attack}</p></div>
            <div><label htmlFor="">speed</label>     <p>{input.speed}</p></div>
            <div><label htmlFor="">weigth</label>     <p>{input.weigth}</p></div>
            <div><label htmlFor="">heigth</label> <   p>{input.heigth}</p></div>
            <Link to='/Home'><button>Home</button></Link>

         
            
            
            
            
           
            </div>

            <div className={Styled.ViewTypes}>

            {  input.types.map(e=> < img key={e.id} className={Styled[e]}/>  )}

            </div>

            </div>
        

        </div>

        </div>
        // : <img src={LM} alt="" />
    );
}

export default PokemonCreater;


//falta campos por rellenar 