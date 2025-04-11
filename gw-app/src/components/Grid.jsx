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
    const pk = props.pokemon
    const diff = props.difficulty
    return(
        <Table>


            <tbody>
                    <GridRow/>

            </tbody>
        </Table>

    )
}

function GridRow(props) {

    const pks = props.pokemon
    /*
    return (<td>
        <Button variant='primary' onClick={()=>props.selectPokemon(props.pokemon.id)}></Button> <></>
        <Button variant='primary' onClick={()=>props.selectPokemon(props.pokemon.id)}></Button> <></>
        <Button variant='primary' onClick={()=>props.selectPokemon(props.pokemon.id)}></Button> <></>
    </td>)*/
    return   <td>
    <PokemonButton />
    <PokemonButton />
    <PokemonButton />

  </td>
}
function PokemonButton(props) {

    const pk = props.pokemon
    /*
    return (<td>
        <Button variant='primary' onClick={()=>props.selectPokemon(props.pokemon.id)}></Button> <></>
        <Button variant='primary' onClick={()=>props.selectPokemon(props.pokemon.id)}></Button> <></>
        <Button variant='primary' onClick={()=>props.selectPokemon(props.pokemon.id)}></Button> <></>
    </td>)*/
    return   (
    <Button>
      <img 
        src="https://archives.bulbagarden.net/media/upload/2/27/0004Charmander.png"
        alt="Charmander"
        style={{ height: '100px', width: '100px' }}
      />
    </Button>
    )
}

export default Grid;
