import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import axios from "axios";
import style from './CssEsxtras/loginAdmin.module.css'


function LoginAdim(props) {
const    navigate=useNavigate()

    const[data ,setData]=useState([])
    const[idPokemon ,setidIdPokemon]=useState('')
    const[put ,setPut]=useState({
        id:"",
        hp:0,
        attack:0,
        defense:0

    })

    const [input,setInput]=useState({
        user:"",
        password:0

    })


    const [admin,setAdmin]=useState(false)

    const handleInputput=(e)=>{setPut({...put,[e.target.name]:e.target.value})}

    

    
    const handlePut = (e) => {

        e.preventDefault()
        
        const {hp,attack,defense} = put;

    axios.put(`/${put.id}`, {

        hp:hp,attack:attack,defense:defense
            
    })

    .then(response => {
        setData( response.data );
             })
          }
        
    const handleInput=(e)=>{setInput({...input,[e.target.name]:e.target.value})}

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("hola")
        
        const {user,password} = input;
        axios.post('/admin',{user,password})
        .then(e=> {if(e.data.msg == 'true' ){
            localStorage.setItem("key",user) 
            
            navigate('/ControllerPokemon')

        
        }
    } )
        .catch(e=>console.log(e.data))


        // if( user == 'David'  || password == 1234){
        //     console.log("dentro")
        //     setAdmin(true)
        // }
    }


    
   const handleDelete = (e) => {
       console.log(idPokemon);

    e.preventDefault()
        axios.delete(`/pokemons/${idPokemon}`)
        .then(response => {
            setData( response.data );
        })
        console.log("Uno");
    }
    const handleDeleteAll = (e) => {

        e.preventDefault()
            axios.delete(`/pokemons`)
            .then(response => {
                setData( response.data );
            })
            console.log("Todos");



    }


    return (

    
       
        
        
       
        <div className={style.container} >
            
            <form action="" onSubmit={(e)=>{handleSubmit(e)}} className={style.form}   > 
                <div className={style.containerform}>
                <div className={style.containerinput}>
                <div>
                <div>                    
                <label   htmlFor=""> User</label>
                </div>
                <input   type="text" name='user' onChange={(e)=>{ handleInput(e)}}  />
                </div>

                <div>

                <div>
                <label  htmlFor=""> Password</label>
                </div>

                <input  type="password" name='password'onChange={(e)=>{ handleInput(e)}} />
                </div>
                </div>

                <div className={style.containerbutton}>
                <input  type="submit" value={'Send'} onClick={(e)=>{handleSubmit(e)}}/>
                <input  type="" value={'go to home'} onClick={(e)=>{  navigate('/Home')}}/>
                </div>
                </div>
            </form>

        </div>
    );
}

export default LoginAdim;