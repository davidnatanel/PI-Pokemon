import axios from "axios";

export  const  GETPOKEMONSFORNAME= "GETPOKEMONSFORNAME";
export  const  GETPOKEMONSFORID= "GETPOKEMONSFORID";
export  const  GETTYPES= "GETTYPES";
export  const  GETPAGES= "GETPAGES";

export  const  PAGESFILTRE= "PAGESFILTRE";
export  const  FILTERTYPE= "FILTERTYPE";

export  const  GETPOKEMONS= "GETPOKEMONS";
export  const  PAGINA= "PAGINA";
export  const  ORDERPOKEMON= "ORDERPOKEMON";
export  const  PAGINADOSUPER= "PAGINADOSUPER";







export const GetTypes=   ()=>{

  return async (dispatch)=>{ 
   axios(`/types`)     
   .then(r=>dispatch({type:GETTYPES, payload:r.data}) 
   
   )}}



export const getPokemons= ()=>{

return async(dispatch)=>{

let Pokemons= await axios(`/pokemons`)
return dispatch({type:GETPOKEMONS, payload:Pokemons.data})

}}



export const GetPokemonsForName=(name)=>{
    return(dispatch)=>{
        
     axios(`/pokemons?name=${name}`)
     .then(r=>dispatch({type:GETPOKEMONSFORNAME, payload:r.data} ))
    
    }}

export const GetPokemonsForID=(id)=>{
    return(dispatch)=>{
        
     axios(`/pokemons/${id}`)
     .then(r=>dispatch({type:GETPOKEMONSFORID, payload:r.data} ))
    
    }}





export const   PagesFiltre= (type,AZ)=>{
  

  return async(dispatch)=>{
         
      return dispatch({type:PAGESFILTRE, payload:{type:type,AZ:AZ}})
 
     }
  }

  
export const orderPokemon= (n)=>{
  return (dispatch)=>{

  return dispatch({type:ORDERPOKEMON, payload:n})

}}
    
export const  filterType=(value)=>{

  return async(dispatch)=>{

  dispatch({type:FILTERTYPE, payload:value})

  }
}


