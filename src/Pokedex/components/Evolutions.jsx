import Evolution from "./Evolution"

const Evolutions = ({ pokemon }) => {
  const evolutions = pokemon["next evolution(s)"]

  return (
    <div className='evolutions'>
      <Evolution evolutions={evolutions} />
    </div>
  )
}
export default Evolutions
