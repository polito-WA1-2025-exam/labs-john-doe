const dayjs = require('dayjs')

function Pokemon (name, types, sex, evolution, generation, abilities, region){
    this.name = name;
    this.types = types;
    this.sex = sex;
    this.evolution = evolution;
    this.generation = generation;
    this.abilities = abilities;
    this.region = region;
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

function Game(difficulty){
    this.id //to-do
    this.difficulty = difficulty;
    this.date = dayjs();

    this.pokedex = Pokedex();
    //to-do initialize list

    this.secret_pokemon;
    this.remained_pokemon_list = Array.from(this.pokemon_initial_list)

    this.guess = (guess) => this.answers.filter(a => a.username === name)

    this.score = 0;
}