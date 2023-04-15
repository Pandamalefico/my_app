const PokeTypes = ({ types }) => {
  const typesList = types.map((type) => {
    const typeName = type.type.name
    return (
      <div
        className={`type ${typeName}`}
        key={typeName}
      >
        {typeName}
      </div>
    )
  })
  return <>{typesList}</>
}
export default PokeTypes
