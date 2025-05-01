import { Table, Button } from "react-bootstrap";
{/*
function Grid (props){
    const pk = props.pokemon
    return <Table>

        <tbody>
            {pk.map(a => <PokemonButton key={pk.id} pokemon={pk} selectPokemon={props.selectPokemon}  />)} 
            <td>Prova</td>
        </tbody>
        <tfoot>
            <tr><td>Guess Who - Pokemons</td></tr>
        </tfoot>
    </Table>
}*/}
function Grid(props){
    const pk = props.pokemons
    const diff = props.difficulty
    const selectPokemon = props.selectPokemon
    const columnsPerRow = 4

    const rows = [];
    for (let i = 0; i<pk.length; i+=columnsPerRow){
        rows.push(pk.slice(i, i+columnsPerRow));
    }
    return(
        <Table>


            <tbody>
                {rows.map((row, idx) => (
                    <GridRow key={idx} rowPokemons={row} selectPokemon={selectPokemon} />
                    ))}
            </tbody>
        </Table>

    )
}

function GridRow(props) {

    const rowPokemons = props.rowPokemons
    const selectPokemon = props.selectPokemon
    /*
    return (<td>
        <Button variant='primary' onClick={()=>props.selectPokemon(props.pokemon.id)}></Button> <></>
        <Button variant='primary' onClick={()=>props.selectPokemon(props.pokemon.id)}></Button> <></>
        <Button variant='primary' onClick={()=>props.selectPokemon(props.pokemon.id)}></Button> <></>
    </td>)*/
    return (
        <tr>
          {rowPokemons.map((pk, idx) => (
            <td key={idx}>
              <PokemonButton pokemon={pk} selectPokemon={selectPokemon} />
            </td>
          ))}
        </tr>
      );   

}
function PokemonButton(props) {

    const pk = props.pokemon
    const selectPokemon = props.selectPokemon
    /*
    return (<td>
        <Button variant='primary' onClick={()=>props.selectPokemon(props.pokemon.id)}></Button> <></>
        <Button variant='primary' onClick={()=>props.selectPokemon(props.pokemon.id)}></Button> <></>
        <Button variant='primary' onClick={()=>props.selectPokemon(props.pokemon.id)}></Button> <></>
    </td>)*/
    return   (
    <Button  onClick={() => selectPokemon(pk.name)}>
      <img 
        src={pk.imageURL}
        alt={pk.name}
        style={{ height: '100px', width: '100px' }}
      />
    </Button>
    )
}

export default Grid;
