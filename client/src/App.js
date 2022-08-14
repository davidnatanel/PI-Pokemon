

import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import LadingPage from './Components/LadingPage/LadingPage';
import Home from './Components/Home/Home';
import PokemonCreater from './Components/PokemonCreater/PokemonCreater';
import DetailOfPokemon from './Components/DetailOfpokemon/DetailOfPokemon';
import WhoIsThisPokemon from './Components/Extras/WhoIsThisPokemon';
import Error404 from './Components/Error404/Error404';
import LoginAdim from './Components/Extras/LoginAdim';
import ControllerPokemon from './Components/Extras/ControllerPokemon';



function App() {
  return (
    <div className="App">


      
          
    <Routes>
      <Route   path='/' element= {<LadingPage/>}  />
      
      <Route exact path='/Home' element= {<Home/>} />
      
      <Route exact path='/Home/PokemonCreate' element= {<PokemonCreater/>} />
      <Route exact path='/Home/DetailOfPokemon/:id' element= {<DetailOfPokemon/>} />
      <Route exact path='/Home/quienEsEstePokemon' element= {<WhoIsThisPokemon/>} />
      <Route exact path='/admin' element= {<LoginAdim/>} />
      <Route exact path='/ControllerPokemon' element={<ControllerPokemon/>}/>

      
      <Route exact path='*' element= {<Error404/>} />


    </Routes>


    </div>
  );
}

export default App;


//filtro azul alti revex