import express from 'express'
import morgan from 'morgan';

const app = express() ;

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) =>	res.send('Hello World!')) ;

app.get('/pokemon', (req, res) => {
    dao.listPokemons().then((pokemons) =>
    {res.json(pokemons);});
})

app.get('/pokemon/:name', (req, res) => {
    dao.getPokemon(req.params.name).then((pokemons) =>
    {res.json(pokemons);});
})

app.get('/pokemon/:evolution', (req, res) => {
    dao.getPokemonFromEvolution(req.params.evolution).then((pokemons) =>
    {res.json(pokemons);});
})
app.get('/pokemon/:generation', (req, res) => {
    dao.getPokemonFromGeneration(req.params.generation).then((pokemons) =>
    {res.json(pokemons);});
})

app.post('/pokemon', (req, res) => {
    console.log(req.body)
    res.end()
})

app.listen(3000, () =>	console.log('Server	ready')) ;