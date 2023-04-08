import { useState } from "react"
import PokeContainer from "./Pokedex/components/PokeContainer"
import pokelist from "./Pokedex/pokelist.json"

const App = () => {
  const [pokeList, setPokeList] = useState(pokelist)
  return (
    <div className='App'>
      <PokeContainer pokelist={pokeList} />
    </div>
  )
}
export default App
