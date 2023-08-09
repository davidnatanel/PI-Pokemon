import { LENGUAJE, GETTYPES, GETPOKEMONSFORNAME, GETPOKEMONSFORID, PAGESFILTRE, FILTERTYPE, GETPOKEMONS, ORDERPOKEMON, ORDERBYFORCE, LOADING } from "./actions";


let initialState = {

  Pokemons: [],
  pagina: 0,
  paginado: [],
  npages: [],

  PokemonsDetails: [],

  Types: [],

  loading: false,
  notFound: false,
  lenguaje: "es"


};


const Reducer = (state = initialState, action) => {

  switch (action.type) {

    case LENGUAJE:
      return { ...state, lenguaje: action.payload };


    case LOADING:

      return { ...state, loading: action.payload };

    case GETTYPES:

      return { ...state, Types: [...action.payload] };

    case GETPOKEMONSFORNAME:

      return { ...state, paginado: [action.payload] };

    case GETPOKEMONSFORID:

      return { ...state, PokemonsDetails: [action.payload] };

    case FILTERTYPE:
      if (action.payload == 'null') { return state }

      let es = state.Pokemons.map(e => { if (e.types && e.types.includes(action.payload) == true) { return e } })
      let lo = es.filter(e => e !== undefined)



      return { ...state, paginado: [...lo], }


    case GETPOKEMONS:

      return { ...state, Pokemons: action.payload, paginado: [...action.payload] }



    case ORDERPOKEMON:
      let pokemonOrden;

      if (!action.payload) { return state }

      if (action.payload == "Api") { pokemonOrden = state.Pokemons.filter(e => !e.createdInDb) }
      if (action.payload == "Created") { pokemonOrden = state.Pokemons.filter(e => e.createdInDb) }

      return { ...state, paginado: pokemonOrden }




    case PAGESFILTRE:

      let { type, AZ } = action.payload


      if (!type, !AZ) { return state }



      if (AZ === 'null') { return state }


      let filtre;

      if (type == 'AZ' || AZ) {

        if (AZ === 'ascendentemente') {

          filtre = state.Pokemons.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            }
            return 0;
          })
        }

        if (AZ === 'descendentemente') {
          filtre = state.Pokemons.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            }
            return 0;
          }).reverse()
        }
      }


      // })}


      return { ...state, paginado: [...filtre] }


    case ORDERBYFORCE:
      let force = [];
      let { attack, ZA } = action.payload


      if (!attack, !ZA) { return state }



      if (ZA === 'null') { return state }


      if (attack == 'attack' || ZA) {
        force = state.Pokemons.sort((a, b) => {

          if (ZA === 'ascendentemente') {
            if (a[attack] < b[attack]) {
              return 1;
            }
            if (a[attack] > b[attack]) {
              return -1;
            }
          }

          if (ZA === 'descendentemente') {
            if (a[attack] > b[attack]) {
              return 1;
            }
            if (a[attack] < b[attack]) {
              return -1;
            }
          }
          return 0;
        })
      }

      return { ...state, paginado: [...force] }




    default:
      return state

  }

}

export default Reducer;


///traer todos los pokemon
//guardalo en el estado
//hacer un dispatch de numero