import axios from "axios";

export const GETPOKEMONSFORNAME = "GETPOKEMONSFORNAME";
export const GETPOKEMONSFORID = "GETPOKEMONSFORID";
export const GETTYPES = "GETTYPES";
export const GETPAGES = "GETPAGES";

export const PAGESFILTRE = "PAGESFILTRE";
export const FILTERTYPE = "FILTERTYPE";

export const GETPOKEMONS = "GETPOKEMONS";
export const PAGINA = "PAGINA";
export const ORDERPOKEMON = "ORDERPOKEMON";
export const PAGINADOSUPER = "PAGINADOSUPER";
export const ORDERBYFORCE = "ORDERBYFORCE";
export const LOADING = "LOADING";
export const LENGUAJE = "LENGUAJE";

export const LenguajeAc = (lenguaje) => {
  return (dispatch) => dispatch({ type: LENGUAJE, payload: lenguaje })

}


export const Loading = (playandstop) => {
  return (dispatch) => dispatch({ type: LOADING, payload: playandstop })

}






export const GetTypes = () => {


  return async (dispatch) => {



    axios(`/types`)
      .then(r => dispatch({ type: GETTYPES, payload: r.data }),


      )
  }
}



export const getPokemons = () => {

  return async (dispatch) => {

    let Pokemons = await axios(`/pokemons`)
    dispatch({ type: GETPOKEMONS, payload: Pokemons.data })

    dispatch(Loading(false))
  }
}



export const GetPokemonsForName = (name) => {

  return (dispatch) => {

    axios(`/pokemons?name=${name}`)
      .then(r => dispatch({ type: GETPOKEMONSFORNAME, payload: r.data }))


    setTimeout(() => {
      dispatch(Loading(false))


    }, 1000);





  }
}

export const GetPokemonsForID = (id) => {


  return (dispatch) => {



    axios(`/pokemons/${id}`)
      .then(r => dispatch({ type: GETPOKEMONSFORID, payload: r.data }))





  }
}





export const PagesFiltre = (type, AZ) => {

  return async (dispatch) => {

    return dispatch({ type: PAGESFILTRE, payload: { type: type, AZ: AZ } })

  }
}




export const orderByForce = (type, AZ) => {

  return async (dispatch) => {

    return dispatch({ type: ORDERBYFORCE, payload: { attack: type, ZA: AZ } })

  }
}




export const orderPokemon = (n) => {
  return (dispatch) => {

    return dispatch({ type: ORDERPOKEMON, payload: n })

  }
}

export const filterType = (value) => {
  console.log(value);
  return async (dispatch) => {

    dispatch({ type: FILTERTYPE, payload: value })

  }
}


