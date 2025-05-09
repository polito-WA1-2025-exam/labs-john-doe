import Header from './components/Header.jsx'
import Footer from './components/Footer'
import Grid from './components/Grid.jsx'
import MakeGuess from './components/MakeGuess.jsx'
import Login from './components/Login.jsx'
import Layout from './components/Layout.jsx'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Pokemon, Pokedex, User, Guess, Game } from './models/gwModels.mjs'
import { Routes, Route, useNavigate } from 'react-router'

function App() {
  const [game, setGame] = useState(null)
  const [guessFeature, setGuessFeature] = useState('');
  const [guessValue, setGuessValue] = useState('');
 // try with a fake database
  const fakePokemons = []
  fakePokemons.push(new Pokemon("Pikachu", ["Electric"], 1, 1, "Yellow", "Small", "Forest", "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/375px-0025Pikachu.png"))
  fakePokemons.push(new Pokemon("Charizard", ["Fire", "Flying"], 3, 1, "Red", "Large", "Mountain", "https://archives.bulbagarden.net/media/upload/thumb/3/38/0006Charizard.png/900px-0006Charizard.png"))
  fakePokemons.push(new Pokemon("Bulbasaur", ["Grass", "Poison"], 1, 1, "Green", "Small", "Grassland", "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/800px-0001Bulbasaur.png"))
  fakePokemons.push(new Pokemon("Squirtle", ["Water"], 1, 1, "Blue", "Small", "Lake", "https://archives.bulbagarden.net/media/upload/thumb/5/54/0007Squirtle.png/375px-0007Squirtle.png"))

 // const [pokemons, setPokemons] = useState(fakePokemons)
    
 //initialize a new game
  useEffect(() => {
    const user = {name: "Anonymous Player"};
    const newGame = new Game(user, 1);
    newGame.initial_list_pokemons = fakePokemons;
    newGame.secret_pokemon_id = newGame.initial_list_pokemons[0].name; //to-modify
    newGame.remained_pokemon_list = [...newGame.initial_list_pokemons];
    setGame(newGame);
  })

  const handleGuessSubmit = () => {
    if (!game || !guessFeature || !guessValue) return;

    const guess = new Guess(guessFeature, guessValue);
    game.makeGuess(guess)

    setGame({...game}); //force re-render
    setGuessFeature('');
    setGuessValue('');
  }
  const selectPokemon = (pokemonName) => {
    console.log('Selected Pokémon:', pokemonName);
    // You can add more logic here if needed
  };
  return (
   <>
  <Routes>
    <Route path='/' element={ <Layout />} >
      <Route index element={<Login />}/>       
      <Route path='game/:gid' element={
        <>
          <MakeGuess 
            guessFeature={guessFeature} 
            guessValue={guessValue} 
            setGuessFeature={setGuessFeature} 
            setGuessValue={setGuessValue} 
            onSubmit={handleGuessSubmit}
          />
          {game && <Grid pokemons={game.remained_pokemon_list} selectPokemon={selectPokemon} />}
        </>
      } />
    </Route>
   </Routes>    
   </>
  )
}

export default App;