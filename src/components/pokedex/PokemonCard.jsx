import {Link} from 'react-router-dom'
import { useFetch } from "../../hooks/UseFetch"
import { useEffect } from "react"

function PokemonCard ({url}) {
    const [pokemon, setPokemon] =useFetch()

    useEffect (() => {
        if (url) getPokemons ()
    }, [url])
    
const getPokemons =  () => {
        setPokemon (url)
    }

    const types =pokemon?.types.map(type=> type.name)

    if (!types) return 

    return (
        <Link to= {`/pokedex/${pokemon?.name}`}>
        <div className={`pokemons_card type--${types[0]}`}>
         <img src={pokemon?.sprites?.other?.dream_world?.front_default}alt=""/>
          {pokemon?.name}              
         </div>   
        </Link>   
    )
}
export default PokemonCard
