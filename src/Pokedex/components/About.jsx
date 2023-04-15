import axios from "axios"
import { useEffect, useRef } from "react"

const About = ({ pokemon }) => {
  const avg_bodyStat = (bodyStat) => {
    const minStat = parseFloat(bodyStat.minimum.slice(0, -2))
    const maxStat = parseFloat(bodyStat.maximum.slice(0, -2))
    const unit =
      bodyStat === "weight"
        ? bodyStat.minimum.slice(-2)
        : bodyStat.minimum.slice(-1)
    return `${minStat + maxStat / 2}${unit}`
  }
  const about = pokemon.flavor_text_entries[0].flavor_text

  return (
    <div className='about'>
      <section className='about_infos'>
        <span className='info_name'>About</span>
        <span className='info_value'>{about}</span>

        <span className='info_name'>Avg Weight</span>
        <span className='info_value'>{pokemon.weight}</span>

        <span className='info_name'>Avg Height</span>
        <span className='info_value'>{pokemon.height}</span>
      </section>
      <section className='about_breeding'></section>
    </div>
  )
}
export default About
