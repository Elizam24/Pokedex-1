import PokemonCard from "./PokemonCard"

function PokemonList (prop) {
return (
    <>
   {
    prop.pokemons?.map(pokemon => {
        return( 
     <PokemonCard key={pokemon?.name} url={pokemon?.url}/>
       )
        
    })

  }

 </>

)

}
export default PokemonList
