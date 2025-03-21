import sqlite from 'sqlite3';
import { Pokemon, Pokedex, User, Guess, Game } from './GuessWhoModels.mjs';

// open the database
const db = new sqlite.Database('questions.sqlite', (err) => {
  if (err) throw err;
});

export const listPokemons = () => {
    return new Promise ((resolve, reject) => {
        const sql = 'SELECT pokemon.* FROM Pokemon';
        db.all(sql,)
    })
  }

export const getPokemon = (name) => {
    return new Promise ((resolve, reject) => {
      const sql = 'SELECT pokemon.* FROM Pokemon WHERE pokemon.name = ?';
      db.get(sql, [name], (err, row) => {
        if (err) {
          reject(err);
        } else if (row === undefined) {
          resolve('Pokemon not available, check the inserted name.');
        } else {
          resolve(new Pokemon(row.name, row.type, row.evolution, row.generation, row.habitat, row.color, row.body));
        }
      });
    });
  }

export const getPokemonFromEvolution = (evolution) => {
    return new Promise ((resolve, reject) => {
      const sql = 'SELECT pokemon.* FROM Pokemon WHERE pokemon.evolution = ?';
      db.get(sql, [evolution], (err, row) => {
        if (err) {
          reject(err);
        } else if (row === undefined) {
          resolve('Pokemon not available, check the inserted evolution.');
        } else {
          resolve(new Pokemon(row.name, row.type, row.evolution, row.generation, row.habitat, row.color, row.body));
        }
      });
    });
  }

export const getPokemonFromGeneration = (generation) => {
    return new Promise ((resolve, reject) => {
      const sql = 'SELECT pokemon.* FROM Pokemon WHERE pokemon.generation = ?';
      db.get(sql, [generation], (err, row) => {
        if (err) {
          reject(err);
        } else if (row === undefined) {
          resolve('Pokemon not available, check the inserted generation.');
        } else {
          resolve(new Pokemon(row.name, row.type, row.evolution, row.generation, row.habitat, row.color, row.body));
        }
      });
    });
  }

export const addPokemon = (pokemon) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO pokemon(name, type, evolution, generation, habitat, color, body) VALUES (?,?,?,?,?,?,?)';
      db.run(sql, [pokemon.name, pokemon.type,pokemon.evolution, pokemon.generation, pokemon.habitat, pokemon.color, pokemon.body], function(err) {
        if (err)
          reject(err);
        else 
          resolve(this.lastID);
      });
    });
  }