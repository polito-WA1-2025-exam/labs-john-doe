import sqlite from 'sqlite3';
import { Pokemon, Pokedex, User, Guess, Game } from './GuessWhoModels.mjs';

// open the database
const db = new sqlite.Database('questions.sqlite', (err) => {
  if (err) throw err;
});

export const listPokemons = () => {
    // write something clever
  }

export const getPokemon = (id) => {
    return new Promise ((resolve, reject) => {
      const sql = 'SELECT pokemon.* FROM Pokemon WHERE pokemon.id = ?';
      db.get(sql, [id], (err, row) => {
        if (err) {
          reject(err);
        } else if (row === undefined) {
          resolve('Pokemon not available, check the inserted id.');
        } else {
          resolve(new Pokemon(row.id, row.text, row.email, row.authorId, row.date));
        }
      });
    });
  }