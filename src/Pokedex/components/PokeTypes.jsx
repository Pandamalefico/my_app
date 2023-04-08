const PokeTypes = ({ types }) => {
  const typesList = types.map((type) => (
    <div
      className={`type ${type}`}
      key={type}
    >
      {type}
    </div>
  ))
  return <>{typesList}</>
}
export default PokeTypes
