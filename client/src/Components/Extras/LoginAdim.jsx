import React, { useState } from 'react';
import { Navigate } from 'react-router';
import axios from "axios";
import style from './CssEsxtras/loginAdmin.module.css'


function LoginAdim(props) {
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
        
        const {user,password} = input;


        if( user == 'David'  || password == 1234){
            console.log("dentro")
            setAdmin(true)
        }
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

        admin? 
        <div className={style.container2} >
       <form action="" className={style.form2} >

                <label htmlFor="" className={style.L1} > borrar Por Id</label>
                <input type="text"className={style.I1} name='user' onChange={(e)=>{ setidIdPokemon(e.target.value) }}  />
                <input type="submit"className={style.I2}  onClick={(e)=>{handleDelete(e) }}/>


                <label htmlFor="" className={style.L2}> borrar todos</label>
                <input type="submit" className={style.I3}  onClick={(e)=>{ handleDeleteAll(e)  }}/>


                <label htmlFor="" className={style.L3}> actualizar por Id</label>
                <input type="text"className={style.I4} name='id' onChange={(e)=>{ handleInputput(e) }}  />
                <input type="number"className={style.I5} name='hp' onChange={(e)=>{ handleInputput(e) }}  />
                <input type="number"className={style.I6} name='attack' onChange={(e)=>{ handleInputput(e) }}  />
                <input type="number"className={style.I7} name='defense' onChange={(e)=>{ handleInputput(e) }}  />
                <input type="submit"className={style.I8}  onClick={(e)=>{  handlePut(e)  }  }  />

            
       </form>
       </div>
        
        
        
        :
        <div className={style.container} >
            
            <form action="" onSubmit={(e)=>{handleSubmit(e)}} className={style.form}   > 

                <label  className={style.l1}  htmlFor=""> User</label>
                <input  className={style.i1}  type="text" name='user' onChange={(e)=>{ handleInput(e)}}  />
                
                <label  className={style.l2} htmlFor=""> Password</label>
                <input  className={style.i2} type="password" name='password'onChange={(e)=>{ handleInput(e)}} />
            
            <input className={style.S} type="submit" />
            </form>
        </div>
    );
}

export default LoginAdim;