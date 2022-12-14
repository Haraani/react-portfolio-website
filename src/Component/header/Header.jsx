import React from 'react'
import '../header/header.css'
import CTA from './CTA'
import dev from '../../images/dev.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
    <div className="container header__container">
      <h5>Hello I am</h5>
      <h1>Anirudh Harathi</h1>
      <h5 className="text-light">Software Engineer</h5>
      <CTA/>
      <HeaderSocials/>

      {/* <div className="me">
        <img src={dev} alt="dev"></img>
      </div> */}

      <a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
    </header>
  )
}

export default Header