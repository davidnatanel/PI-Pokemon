import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import style from './CssEsxtras/ControllerPokemon.module.css'

function ControllerPokemon(props) {
const    navigate=useNavigate()
useEffect(() => {
   
    if( localStorage.getItem('key') == 'david'){return}
    else{navigate('/admin')}
    

}, [])

const[data ,setData]=useState([])
const[idPokemon ,setidIdPokemon]=useState('')
const[put ,setPut]=useState({
    id:"",
    hp:0,
    attack:0,
    defense:0

})



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
        <div className={style.container2} >
        <form action="" className={style.form2} >
                <div className={style.form2id}>
                 <label htmlFor="" className={style.L1} > delete by id</label>
                 <input type="text"className={style.I1} name='user' onChange={(e)=>{ setidIdPokemon(e.target.value) }}  />
                 <input type="submit"className={style.I2}  onClick={(e)=>{handleDelete(e) }}/>
                 </div>
                 
                 <div className={style.form2DeletedAll}>
                 <label htmlFor="" className={style.L2}> erase all</label>
                 <input type="submit" className={style.I3}  onClick={(e)=>{ handleDeleteAll(e)  }}/>
                 </div>

                 <div className={style.form2change}>

                 <div className={style.form2change1}>
                 <label htmlFor="" className={style.L3}> update by id </label>
                 </div>

                 <div className={style.form2change2}>
                    <div>
                <div>
                <div>
                <label htmlFor="" className={style.L3}> Id</label>
                </div>
                <input type="text"className={style.I4} name='id' onChange={(e)=>{ handleInputput(e) }}  />
                </div>

                 <div>  
                <div>
                 <label htmlFor="" className={style.L3}> HP</label>
                </div>
                 <input type="number"className={style.I5} name='hp' onChange={(e)=>{ handleInputput(e) }}  />
                 </div>
                 </div>

                 <div>
                 <div>
                <div>
                 <label htmlFor="" className={style.L3}> Attack </label>
                 </div>
                 <input type="number"className={style.I6} name='attack' onChange={(e)=>{ handleInputput(e) }}  />
                 </div>

                 <div>
                <div>
                 <label htmlFor="" className={style.L3}> Defense</label> 
                 </div>
                 <input type="number"className={style.I7} name='defense' onChange={(e)=>{ handleInputput(e) }}  />
                 </div> 
                 </div>
                 
               
                 </div>

             
                 <div className={style.form2change4}>
                <input  type="" value={'go to home'} onClick={(e)=>{  navigate('/Home')}}/>

                 <input type="submit"className={style.I8}  onClick={(e)=>{  handlePut(e)  }  }  />
                 </div>
                 </div>
             
        </form>
        </div>
         
    );
}

export default ControllerPokemon;