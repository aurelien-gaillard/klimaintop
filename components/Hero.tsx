import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import S from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={S.hero}>
      <p className={S['hero-text']}>
        <strong>vzduchotechnika</strong>, voda, <strong>topení</strong> a plyn
        montáž <strong>solárních</strong> systémů
      </p>
      <div className={S.arrow}>
        <a href='#company-info'>
          <FaChevronDown />
        </a>
      </div>
    </div>
  )
}

export default Hero
