import { useEffect, useState } from "react"
import Pokemodal from "./Pokemodal"
import PokeTypes from "./PokeTypes"

const Pokemon = (pokemon) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [poke, setPoke] = useState({})

  const toggleModalOpen = () => {
    setModalOpen(!modalOpen)
  }

  const { name, id, types, sprites } = pokemon

  const urlImg = sprites.other["official-artwork"].front_default
  return (
    <div
      className='pokemon'
      onClick={toggleModalOpen}
    >
      <img
        src={urlImg}
        alt={name}
      />
      <div className='pokemon_infobox'>
        <div className='pokemon_infos'>
          <h5 className='pokemon_name'>{name}</h5>
          <p className='pokemon_id'>N° {id}</p>
        </div>
        <div className='pokemon_types'>
          <PokeTypes types={types} />
        </div>
      </div>
      <Pokemodal
        isOpen={modalOpen}
        handleClose={toggleModalOpen}
        pokemon={pokemon}
        img={urlImg}
      />
    </div>
  )
}
export default Pokemon
