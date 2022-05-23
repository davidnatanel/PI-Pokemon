import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { GetPokemonsForID  } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Pokemon from '../Home/Pokemon';


function DetailOfPokemon() {
    const {id} =useParams();
    const state = useSelector(state => state.PokemonsDetails)

    const dispatch =useDispatch()


    useEffect(() => {
        
        dispatch(GetPokemonsForID(id))

        
    }, [])
    

    return (
        <div>
            DetailOfPokemon

        {state.length && state.map(e=>  (  <Pokemon  types={e.types} gifback={e.gifback} gif={e.gif} img={e.img}    key={e.id}  attack={e.attack}  defense={e.defense} height={e.height} hp={e.hp} id={e.id} name={e.name} speed={e.speed}  weigth={e.weigth}  ></Pokemon>  )     )}

            
        </div>
    );
}

export default DetailOfPokemon;

// if hay juego mostrar sino loading