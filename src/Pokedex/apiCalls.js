import Pokedex from "pokedex-promise-v2"
import { useEffect, useState } from "react"

const usePokeList = (interval) => {
  const [pokeList, setPokeList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const baseApiUrl = "/api/v2/"

  const getResourcesUrls = (name) => [
    `${baseApiUrl}pokemon/${name}`,
    `${baseApiUrl}pokemon-species/${name}`,
    /* `${baseApiUrl}evolution-chain/${name}`, */
  ]
  const P = new Pokedex()

  useEffect(() => {
    setIsLoading(true)
    P.getPokemonsList(interval)
      .then((response) => {
        response.results.map((p) =>
          P.getResource(getResourcesUrls(p.name))
            .then((response) => {
              const pok = Object.assign({}, ...response)
              setPokeList((prev) => [...prev, pok])
            })
            .catch((err) => setError(err))
        )
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false))
  }, [])

  return { pokeList, isLoading, error }
}

export default usePokeList
