import dayjs  from 'dayjs';

function Pokemon (name, types, evolution, generation, color, body, habitat, imageURL){
    this.name = name;
    this.types = types;
    this.evolution = evolution;
    this.generation = generation;
    this.color = color;
    this.body = body;
    this.habitat = habitat;
    this.imageURL = imageURL;
}

function Pokedex(){
    this.list = []

    this.add_pokemon = (pokemon) =>{
        this.list.push(pokemon)
    }
}


function User(name){
    this.name = name;
    this.id //to-do

    this.games = [];
    this.total_score = 0;

    this.add_games = (game) =>{
        this.games.push(game);
        this.total_score += game.score;
    }
}

function Guess(feature, value){
    this.feature = feature;
    this.value = value;
}

function Game(user, difficulty){
    this.id //to-do
    this.user = user
    this.difficulty = difficulty;
    this.date = dayjs();

    //to-do initialize list
    this.initial_list_pokemons = [];
    this.secret_pokemon_id;
    this.remained_pokemon_list = [];

    this.guesses = []

    this.makeGuess = (guess) => {
        this.remained_pokemon_list.filter(p => p.name === this.secret_pokemon_id)[guess.feature] === guess.value;
        this.guesses.push({guess})
    }
    this.score = 0;
}
export {Pokemon, Pokedex, User, Guess, Game};