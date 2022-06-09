import React from 'react'
import Service from './Service'

const Services = () => {
  return (
    <section id='services'>
      <h2>Nabízené služby</h2>
      <Service title='vzduchotechnika'>
        vzduchotechnika na klíč, od projektu přes výběr vhodných materiálů až po
        realizaci, montáž klimatizace, výroba vzduchotechnického potrubí z
        pozinku a materiálu CLIMAVER; maloprodej vzduchotechnického
        příslušenství, ventilátorů, digestoří
      </Service>
      <Service title='topení – topenářské práce'>
        montáž klasických i podlahových topení, rozvody topení, opravy a
        rekonstrukce, teplovzdušné vytápění
      </Service>
      <Service title='voda – instalatérství'>
        rozvody vody v objektech, opravy, rekonstrukce, montáže domovních
        vodáren, montáže kanalizačního a odpadního potrubí
      </Service>
      <Service title='plyn – plynoinstalace'>
        rozvody plynu, kompletní plynofikace objektů, plynofikace kotelen,
        opravy a rekonstrukce,
      </Service>
      <Service title='montáž solárních systémů'>
        poradenství, dodávka a kompletní montáž solárních systémů
      </Service>
    </section>
  )
}

export default Services
