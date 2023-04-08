import Pokemon from "./Pokemon"

const PokeContainer = ({ pokelist }) => {
  const pokemons = pokelist.map((pokemon) => (
    <Pokemon
      {...pokemon}
      key={pokemon.id}
    />
  ))
  return <div className='pokemon_container'>{pokemons}</div>
}
export default PokeContainer
