import PokeContainer from "./components/PokeContainer"
import usePokeList from "./apiCalls"

const App = () => {
  const interval = {
    limit: 30,
    offset: 0,
  }
  const { pokeList, isLoading, error } = usePokeList(interval)

  console.log(pokeList)
  return (
    <div className='App'>
      {isLoading && <h2>Loading...</h2>}

      <PokeContainer pokelist={pokeList} />
    </div>
  )
}
export default App
