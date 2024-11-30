import { Link } from 'react-router-dom';

import Filters from '../components/pokedex/Filters';
import { useFetch } from '../hooks/UseFetch'; 
import { useCallback, useEffect, useState } from 'react';
import PokemonList from '../components/pokedex/PokemonList';
import PokemonCard from '../components/pokedex/PokemonCard';
import Search from '../components/pokedex/Search';

function Pokedex () {
  const [pokemons, setPokemons] = useFetch()
  const [pokemonUrl, setPokemonUrl] = useState(null)
  
  useEffect(() => {
    console.log('loquesea')
    getPokemon()
  }, [])

   const getPokemon = () => {  
    setPokemons('https://pokeapi.co/api/v2/pokemon')
   }
    
  const handleSearch  = (value) => {
    if (!value) {
      setPokemonUrl(null)
      setPokemonUrl(`https://pokeapi.co/api/v2/pokemon`)
     } else {
      value = value.tolowerCase().trim()
    setPokemonUrl (`https://pokeapi.co/api/v2/pokemon?name=${value}`)  // Search by name
  } 
}

console.log(pokemons)

  return (
    <div className='Pokedex'>   
      <div className='pokedex_header'>
        <Link to='/'>{'←'} VOLVER</Link>
        <div>
          <h2>Bienvenido Entrenador</h2>
          <p>Aquí podrás encontrar tu Pokémon favorito</p>
        </div>
      </div>

      <div className='form'>
        <Search handleSearch={handleSearch}/>
        <Filters />
        </div>

        <div className='pokemons'>
            {/* {pokemonUrl ? (
          <PokemonCard url ={pokemonUrl}/>
          ) : ( */}
        <PokemonList pokemons={pokemons?.results} />
          {/* ) } */}
        </div>
    </div>
  )
}

export default Pokedex
