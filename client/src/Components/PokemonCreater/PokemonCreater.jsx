import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { GetTypes } from '../../redux/actions';
import Styled from './PokemonCreaterCss/PokemonCreater.module.css'
import PokemonInput from './PokemonInput';
import LM from '../../gif/LoadingM.gif'
import { Link } from 'react-router-dom';
import global from './../../utils/lenguaje.json'

const validate = (e, s) => {
    let error = {}

    // console.log(e)

    if (e >= 2) { error.types = s }



    return error
}


function PokemonCreater() {


    const lenguaje = useSelector(state => state.lenguaje)

    const history = useNavigate()
    const [data, setData] = useState([])
    const [select, setSelect] = useState(false)


    const [input, setInput] = useState({
        name: '',
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        heigth: 0,
        weigth: 0,
        types: [],
        img: ""
    })

    const [error, setError] = useState({

    })

    const state = useSelector(state => state.Types)

    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(GetTypes())


    }, [])



    const changeCheck = (e) => {

        var nombre = e.target.name
        setError(validate(input.types.length, global[lenguaje].CreatePokemonError))


        if (input.types.length < 2) {
            if (!input.types.includes(e.target.name)) { setInput({ ...input, types: [...input.types, e.target.name] }) }
            if (!e.target.checked) {

                let filt = input.types.filter(e => e !== nombre)
                setInput({
                    ...input
                    , types: [...filt]
                })



            }
        }
        if (!e.target.checked) {

            let filt = input.types.filter(e => e !== nombre)

            setInput({
                ...input
                , types: [...filt]

            })
        }

    }


    const OnSubmit = async (e) => {
        const { name, hp, attack, defense, speed, heigth, weigth, types, img } = input;
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
                setData(response.data);
            })

        history('/Home')

    }


    return (
        // state ?


        <div className={Styled.PokemonBody} >


            <form className={Styled.PokemonCreater} onSubmit={(e) => { OnSubmit(e) }}>

                <div className={Styled.detailsPokemon}>
                    <div className={Styled.detailsPokemonleft}>
                        <PokemonInput
                            selectLenguaje={lenguaje}

                            state={input}
                            setState={setInput}
                            name={global[lenguaje]?.DetailOfPokemonname}
                            type='text'
                            textError=''
                            regularExpression=''
                            setError={setError}
                            error={error}
                            styled={error.name && Styled.error}
                        />
                        <PokemonInput
                            selectLenguaje={lenguaje}
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
                            selectLenguaje={lenguaje}

                            state={input}
                            setState={setInput}
                            name={global[lenguaje]?.DetailOfPokemonhp}
                            type='number'
                            textError=''
                            regularExpression=''
                            setError={setError}
                            error={error}
                            styled={error.hp && Styled.error}

                        />

                        <PokemonInput
                            selectLenguaje={lenguaje}

                            state={input}
                            setState={setInput}
                            name={global[lenguaje]?.DetailOfPokemonattack}
                            type='number'
                            textError=''
                            regularExpression=''
                            setError={setError}
                            error={error}
                            styled={error.attack && Styled.error}

                        /> </div>
                    <div className={Styled.detailsPokemonrigth}>

                        <PokemonInput
                            selectLenguaje={lenguaje}

                            state={input}
                            setState={setInput}
                            name={global[lenguaje]?.DetailOfPokemondefense}
                            type='number'
                            textError=''
                            regularExpression=''
                            setError={setError}
                            error={error}
                            styled={error.defense && Styled.error}

                        />
                        <PokemonInput
                            selectLenguaje={lenguaje}

                            state={input}
                            setState={setInput}
                            name={global[lenguaje]?.DetailOfPokemonspeed}
                            type='number'
                            textError=''
                            regularExpression=''
                            setError={setError}
                            error={error}
                            styled={error.speed && Styled.error}

                        />
                        <PokemonInput
                            selectLenguaje={lenguaje}

                            state={input}
                            setState={setInput}
                            name={global[lenguaje]?.DetailOfPokemonheight}
                            type='number'
                            textError=''
                            regularExpression=''
                            setError={setError}
                            error={error}
                            styled={error.heigth && Styled.error}

                        />
                        <PokemonInput
                            selectLenguaje={lenguaje}

                            state={input}
                            setState={setInput}
                            name={global[lenguaje]?.DetailOfPokemonweigth}
                            type='number'
                            textError=''
                            regularExpression=''
                            setError={setError}
                            error={error}
                            styled={error.weigth && Styled.error}

                        />
                    </div>
                </div>



                <div className={Styled.TypesContainer}>

                    <div className={Styled.Types}>
                        {state && state.map(e => (<div key={e.id}> <img className={Styled[e.name]}></img> <div> <input type="checkbox" value={e.name} name={e.name} onChange={(e) => { changeCheck(e) }} /></div> </div>))}
                    </div>

                </div>

                <div className={Object.entries(error).length === 0 ? Styled.button : Styled.buttonerror}   >


                    <input disabled={Object.entries(error).length === 0 ? false : true} type="submit" value="Crear" />

                </div>



                {error.name ? <div className={Styled.errorInput}><p>{error.name}</p></div> : null}
                {error.hp ? <div className={Styled.errorInput}><p>{error.hp}</p></div> : null}
                {error.attack ? <div className={Styled.errorInput}><p>{error.attack}</p></div> : null}
                {error.defense ? <div className={Styled.errorInput}><p>{error.defense}</p></div> : null}
                {error.speed ? <div className={Styled.errorInput}><p>{error.speed}</p></div> : null}
                {error.heigth ? <div className={Styled.errorInput}><p>{error.heigth}</p></div> : null}
                {error.weigth ? <div className={Styled.errorInput}><p>{error.weigth}</p></div> : null}
                {error.types ? <div className={Styled.errorInput}><p>{error.types}</p></div> : null}
                {error.img ? <div className={Styled.errorInput}><p>{error.img}</p></div> : null}



            </form>



            <div className={Styled.ViewPokemonCreated}>
                <div className={Styled.ViewPokemonCreatedcontainer}>
                    <img className={Styled.img1} src={input.img ? input.img : LM} alt="" />

                    <div className={Styled.detailsView}>
                        <div className={Styled.detailsViewleft}>
                            <div> <label htmlFor="">{global[lenguaje]?.DetailOfPokemonname}</label> <p>{input.name}</p></div>
                            <div><label htmlFor="">{global[lenguaje]?.DetailOfPokemonhp}</label>     <p>{input.hp}</p></div>
                            <div><label htmlFor="">{global[lenguaje]?.DetailOfPokemondefense}</label>     <p>{input.defense}</p></div>
                            <div><label htmlFor="">{global[lenguaje]?.DetailOfPokemonattack}</label>     <p>{input.attack}</p></div>
                        </div>
                        <div className={Styled.detailsViewrigth}>
                            <div><label htmlFor="">{global[lenguaje]?.DetailOfPokemonspeed}</label>     <p>{input.speed}</p></div>
                            <div><label htmlFor="">{global[lenguaje]?.DetailOfPokemonweigth}</label>     <p>{input.weigth}</p></div>
                            <div><label htmlFor="">{global[lenguaje]?.DetailOfPokemonheight}</label> <   p>{input.heigth}</p></div>
                            <Link to='/Home'><button>Home</button></Link>
                        </div>
                    </div>
                </div>
                <div className={Styled.ViewTypes}>
                    {error.types ? <div className={Styled.errortypes2}>
                        <p  >{global[lenguaje]?.CreatePokemonError} </p>
                    </div> : null}
                    {input.types.map(e => < img key={e.id} className={Styled[e]} />)}

                </div>

            </div>


        </div>

    );
}

export default PokemonCreater;


//falta campos por rellenar 