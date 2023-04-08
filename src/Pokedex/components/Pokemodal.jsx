import PokeTypes from "./PokeTypes"
import Tabs from "./Tabs"
import Tab from "./Tab"
import About from "./About"
import Evolutions from "./Evolutions"

const Pokemodal = ({ isOpen, handleClose, pokemon, img }) => {
  return (
    <>
      {isOpen && (
        <div className='pokemon_modal'>
          <div
            className='overlay'
            onClick={handleClose}
          ></div>
          <div
            className='pokemon_modalContent'
            onClick={(e) => e.stopPropagation()}
          >
            <header>
              <h2>{`${pokemon.name}`}</h2>
              <h3>{`${pokemon.generation}`}</h3>
              <div className='types_container'>
                <PokeTypes types={pokemon.types} />
              </div>
            </header>
            <img
              src={img}
              alt={pokemon.name}
            />

            <div className='modal_infos'>
              <Tabs>
                <Tab
                  index='0'
                  name='about'
                >
                  <About pokemon={pokemon} />
                </Tab>
                <Tab
                  index='1'
                  name='stats'
                >
                  Stats
                </Tab>
                <Tab
                  index='2'
                  name='evolutions'
                >
                  <Evolutions pokemon={pokemon} />
                </Tab>
                <Tab
                  index='3'
                  name='moves'
                >
                  Moves
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Pokemodal
