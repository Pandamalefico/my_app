import PokeTypes from "./PokeTypes"
import Tabs from "./Tabs"
import Tab from "./Tab"
import About from "./About"
import Evolutions from "./Evolutions"
import Stats from "./Stats"

const Pokemodal = ({ isOpen, handleClose, pokemon, img }) => {
  const { name, id, types, generation, stats } = pokemon
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
            <header className='pokemon_modal_header'>
              <h2>{`${name}`}</h2>
              <h3>{`${generation.name
                .replace(/\w$/g, (c) => c.toUpperCase())
                .replace("-", " ")}`}</h3>
              <div className='types_container'>
                <PokeTypes types={types} />
              </div>
              <img
                src={img}
                alt={name}
              />
            </header>

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
                  <Stats stats={pokemon.stats} />
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
