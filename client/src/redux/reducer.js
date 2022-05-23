import { GETTYPES,GETPOKEMONSFORNAME,GETPOKEMONSFORID,PAGESFILTRE,FILTERTYPE,GETPOKEMONS,PAGINA,ORDERPOKEMON,PAGINADOSUPER } from "./actions";



// function getNumberPages(array, ) {


//   let nue =Math.round(array.length / 12)
//   if(nue == 0){  return [0]}

//   var element=[]



//   for (let i = 0; i < Math.round(array.length / 12); i++) {
//     element.push ( i) ;
//   }


//   return element
// }

let initialState={

    Pokemons:[],
    pagina:0,
    paginado:[],
    npages:[],

    PokemonsDetails:[],

    Types:[],

    paginadosuper:[]
    
};


const Reducer = (state=initialState,action)=>{

    switch (action.type) {
       
            
        case GETTYPES:

            return {...state, Types:action.payload };
                
        case GETPOKEMONSFORNAME:

            return {...state, paginado:[action.payload] };
        
        case GETPOKEMONSFORID:

            return {...state, PokemonsDetails:[action.payload] };

        case  FILTERTYPE:

              let es=state.Pokemons.map(e=> {if( e.types && e.types.includes(action.payload) == true){return e} } )
              let lo=es.filter( e=> e !== undefined)

           
          
              return {...state, paginado:lo, }
  
  
        case GETPOKEMONS:
          
              return{...state, Pokemons:action.payload, paginado:action.payload}    
          
        
  
          case ORDERPOKEMON:
            let pokemonOrden;
  
              if(action.payload == "Api")
              {pokemonOrden= state.Pokemons.filter(e=>  !e.createdInDb )}
              if(action.payload == "Created")
              {pokemonOrden= state.Pokemons.filter(e=>  e.createdInDb)}
                            
                  return {...state,paginado:pokemonOrden }




        case  PAGESFILTRE:

        let {type,AZ}=action.payload
        if(!type,!AZ){return state}
          
       if(type == 'AZ' || AZ ){

        if(AZ === 'ascendentemente'  ){ 

            var filtre=  state.Pokemons.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return 1;
                }
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return -1;
                }
                return 0;
              })
        }

        if(AZ === 'descendentemente' ){ 
            var filtre=  state.Pokemons.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return 1;
                }
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return -1;
                }
                return 0;
              }).reverse()   
        }}
 

        if( type == 'attack' || AZ ){
        var filtre=  state.Pokemons.sort( (a, b)=> {
        
        if(AZ =='ascendentemente'){
        if (a[type] < b[type]) {
          return 1;
        }
        if (a[type] > b[type]) {
          return -1;
        }}
        
          if(AZ =='descendentemente'){
        if (a[type] > b[type]) {
          return 1;
        }
        if (a[type] < b[type]) {
          return -1;
        }}
        return 0;
        
        })}

   
            return {...state, paginado:filtre }


              
        default:
            return state
            
    }

} 

export default Reducer;


///traer todos los pokemon
//guardalo en el estado
//hacer un dispatch de numero