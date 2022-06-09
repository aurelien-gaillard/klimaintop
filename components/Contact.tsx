import React from 'react'

const Contact = () => {
  return (
    <>
      <section id='contact'>
        <h2>Kontakt</h2>
        Contact Jednatel společnosti: Martin Borák Nádražní 2612, 397 01 Písek
        IČ: 450 229 25, DIČ: CZ450 229 25
        <div></div>
      </section>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9981.932451012037!2d14.136621243051126!3d49.30565300873283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b4ff23aca8e6b%3A0x8237780f84a7cc12!2sKlimaintop!5e0!3m2!1sfr!2scz!4v1654795991059!5m2!1sfr!2scz'
        width='100%'
        height='450'
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </>
  )
}

export default Contact
