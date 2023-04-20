import axios from "axios"
import { useEffect, useRef } from "react"

const About = ({ pokemon }) => {
  const { weight, height, genera, habitat } = pokemon
  const about = pokemon.flavor_text_entries[0].flavor_text

  return (
    <div className='about'>
      <section className='about_infos'>
        <span className='info_name'>About</span>
        <span className='info_value'>{about}</span>

        <span className='info_name'>Avg Weight</span>
        <span className='info_value'>{weight / 10}Kg</span>

        <span className='info_name'>Avg Height</span>
        <span className='info_value'>{height * 10}cm</span>

        <span className='info_name'>Species</span>
        <span className='info_value'>{genera[7].genus}</span>

        <span className='info_name'>Habitat</span>
        <span className='info_value'>
          {habitat.name.replace(/^\w/g, (c) => c.toUpperCase())}
        </span>
      </section>
      <section className='species'></section>
    </div>
  )
}
export default About
