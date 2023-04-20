import Pokemon from "./Pokemon"

const PokeContainer = ({ pokelist }) => {
  const pokemons = pokelist.map((pokemon) => (
    <Pokemon
      {...pokemon}
      key={pokemon.name}
    />
  ))
  return <div className='pokemon_container'>{pokemons}</div>
}
export default PokeContainer
