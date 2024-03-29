import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterType, GetPokemonsForName, GetTypes, PagesFiltre, orderPokemon, orderByForce, Loading } from '../../redux/actions';
import style from './CssHome/SearchBar.module.css'
import { Link } from "react-router-dom";
import img from '../../img/Home/Pokeball.svg'
import lupa from '../../img/Home/Lupa.png'
import LP from '../../img/logoNav/pikachu.png'
import LC from '../../img/logoNav/charmander.png'
import LE from '../../img/logoNav/eevee.png'
import LB from '../../img/logoNav/bulbasaur.png'
import LM from '../../img/logoNav/meowth.png'
import LS from '../../img/logoNav/squirtle.png'
import LPS from '../../img/logoNav/psyduck.png'
import LSN from '../../img/logoNav/snorlax.png'
var Change;

(function () {
    var delayInSeconds = 2;                            // set number of seconds delay
    // list image names
    var Logos = [LP, LC, LE, LB, LM, LS, LPS, LSN]

    // don't change below this line
    var num = 0;
    var changeImage = function () {
        var len = Logos.length;
        Change = Logos[num++];
        if (num == len) {
            num = 0;
        }
    };
    setInterval(changeImage, delayInSeconds * 50);
})();





function SearchBar({ global, paginadoo }) {
    const lenguaje = useSelector(state => state.lenguaje)

    const [input, setInput] = useState('')
    const state = useSelector(state => state.Types)
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const cambiarTamaño = () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', cambiarTamaño)

        return () => {
            window.removeEventListener('resize', cambiarTamaño)

        }
    }, [])



    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(GetTypes())
    }, [])


    const CallPokemonName = () => {
        dispatch(Loading(true))


        if (input.length > 2)
            dispatch(GetPokemonsForName(input))




    }

    const handlefiltreAZ = (e) => {
        dispatch(PagesFiltre('AZ', e.target.value))
        paginadoo(1)


    }

    const handlefiltreattack = (e) => {
        dispatch(orderByForce('attack', e.target.value))

        paginadoo(1)
    }


    const handlefiltreOrder = (e) => {
        if (e.target.value == 'Order' || e.target.value == 'null') return
        dispatch(orderPokemon(e.target.value))
        paginadoo(1)

    }
    const handlefiltreTypes = (e) => {

        dispatch(filterType(e.target.value))
        paginadoo(1)

    }





    return (

        <div className={style.SearchBar}>
            {width < 700 ?
                <div className={style.reposiveContainer}>

                    <div className={style.reposiveContainerleft} >
                        <img className={Change ? style.Logo : style.Logonone} src={Change}></img>

                        <div className={style.search}>
                            <img src={img} alt="" />
                            <input type='text' onChange={(e) => setInput(e.target.value)}></input>
                            <button onClick={() => { CallPokemonName(); }}> <img className={style.lupa} src={lupa} alt="" /></button>
                        </div>

                        <div className={style.link}>


                            <Link to='PokemonCreate'><button>{global[lenguaje]?.SearchBarCreate}</button></Link>
                            <Link to='quienEsEstePokemon'><button>{global[lenguaje]?.SearchBarVideogame}</button> </Link>

                        </div>

                    </div>
                    <div className={style.reposiveContainerright}>
                        <div className={style.filtresresponsive}>

                            <select name="Type" onChange={e => { handlefiltreTypes(e); }}>

                                <option value="null">Type</option>

                                {state && state.map(e => (<option key={e.id} value={e.name}>{e.name}</option>))}
                            </select>


                            <select name="Order" onChange={e => { handlefiltreOrder(e); }}>

                                <option value="null">{global[lenguaje]?.SearchBarOrder}</option>
                                <option value="Api">Api</option>
                                <option value="Created">{global[lenguaje]?.SearchBarOrderCreate}</option>

                            </select>




                            <select name="alfabético" onChange={e => { handlefiltreAZ(e); }}>

                                <option value="null">{global[lenguaje]?.SearchBarAlphabetic}</option>
                                <option value="ascendentemente">{global[lenguaje]?.SearchBarOrderascending}</option>
                                <option value="descendentemente">{global[lenguaje]?.SearchBarOrderdescending}</option>

                            </select>


                            <select name="Fuerza" onChange={e => { handlefiltreattack(e); }}>

                                <option value="null">{global[lenguaje]?.SearchBarStrength}</option>
                                <option value="ascendentemente">{global[lenguaje]?.SearchBarOrderascending}</option>
                                <option value="descendentemente">{global[lenguaje]?.SearchBarOrderdescending}</option>

                            </select>
                        </div>
                    </div>


                </div>




                :

                <><img className={Change ? style.Logo : style.Logonone} src={Change}></img>

                    <div className={style.filtres}>

                        <div className={style.filtresbox}>
                            <select name="Type" onChange={e => { handlefiltreTypes(e); }}>

                                <option value="null">{global[lenguaje]?.SearchBarType}</option>

                                {state && state.map(e => (<option key={e.id} value={e.name}>{e.name}</option>))}
                            </select>


                            <select name="Order" onChange={e => { handlefiltreOrder(e); }}>

                                <option value="null">{global[lenguaje]?.SearchBarOrder}</option>
                                <option value="Api">Api</option>
                                <option value="Created">{global[lenguaje]?.SearchBarOrderCreate}</option>

                            </select>

                        </div>


                        <div className={style.filtresbox}>
                            <select name="alfabético" onChange={e => { handlefiltreAZ(e); }}>

                                <option value="null">{global[lenguaje]?.SearchBarAlphabetic}</option>
                                <option value="ascendentemente">{global[lenguaje]?.SearchBarOrderascending}</option>
                                <option value="descendentemente">{global[lenguaje]?.SearchBarOrderdescending}</option>

                            </select>


                            <select name="Fuerza" onChange={e => { handlefiltreattack(e); }}>

                                <option value="null"> {global[lenguaje]?.SearchBarStrength}</option>
                                <option value="ascendentemente"> {global[lenguaje]?.SearchBarOrderascending}</option>
                                <option value="descendentemente"> {global[lenguaje]?.SearchBarOrderdescending}</option>

                            </select>

                        </div>


                    </div>


                    <div className={style.search}>

                        <img src={img} alt="" />
                        <input type='text' onChange={(e) => setInput(e.target.value)}></input>
                        <button onClick={() => { CallPokemonName(); }}> <img className={style.lupa} src={lupa} alt="" /></button>

                    </div>

                    <div className={style.link}>



                        <Link to='PokemonCreate'><button>  {global[lenguaje]?.SearchBarCreate}</button></Link>
                        <Link to='quienEsEstePokemon'><button>{global[lenguaje]?.SearchBarVideogame}</button> </Link>

                    </div></>
            }



        </div>
    );
}

export default SearchBar

