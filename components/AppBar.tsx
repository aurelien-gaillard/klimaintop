import Image from 'next/image'
import React from 'react'
import logo from '../public/klimaintop-logo.png'
import S from './AppBar.module.scss'

const AppBar = () => {
  return (
    <div className={S.appbar}>
      <Image src={logo} alt='klimaintop logo' />
      <nav>
        <ul>
          <li>
            <a href='#company-info'>Profil firmy</a>
          </li>
          <li>
            <a href='#services'>Nabídka služeb</a>
          </li>
          <li>
            <a href='#reference'>Reference</a>
          </li>
          <li>
            <a href='#contact'>Kontakt</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default AppBar
