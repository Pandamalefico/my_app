import axios from "axios"
import { useEffect, useRef } from "react"

const Infotag = ({ label, value }) => {
  return (
    <>
      <span className='info_name'>{label}</span>
      <span className='info_value'>{value}</span>
    </>
  )
}

const About = ({ pokemon }) => {
  const { weight, height, genera, habitat } = pokemon
  const about = pokemon.flavor_text_entries[0].flavor_text

  return (
    <div className='about'>
      <section className='about_infos'>
        <Infotag
          label='Avg Weight'
          value={`${weight / 10}Kg`}
        />

        <Infotag
          label='Avg Height'
          value={`${height * 10}cm`}
        />
        <Infotag
          label='Species'
          value={genera[7].genus}
        />
        <Infotag
          label='Habitat'
          value={habitat.name.replace(/^\w/g, (c) => c.toUpperCase())}
        />
      </section>
      <section className='species'></section>
    </div>
  )
}
export default About
