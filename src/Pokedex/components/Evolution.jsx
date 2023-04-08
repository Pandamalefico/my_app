import { useEffect, useState } from "react"

const Evolution = ({ evolutions }) => {
  const urlImg = (id) => {
    const pokeId = String(id).padStart(3, "0")
    return pokeId <= 151 && require(`../assets/img/${pokeId}.png`)
  }

  const evoList =
    evolutions &&
    evolutions.map((evo, index, { lenght }) => {
      console.log("index " + index + lenght)

      return (
        <>
          <img
            src={urlImg(evo.number)}
            alt=''
            className='evolution_actual'
          />
          {index <= lenght - 1 && <span className='requirements'> = </span>}
          <abbr>ATM</abbr>
        </>
      )
    })

  return <>{evoList}</>
}
export default Evolution
