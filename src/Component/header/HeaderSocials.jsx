import React from 'react'
import '../header/header.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/anirudh-harathi/' target='__blank' alt="linkedIn Profile"> <BsLinkedin/></a>
        <a href="https://www.github.com/Haraani" target= '__blank' alt="github profile"> <FaGithub/> </a>
    </div>
  )
}

export default HeaderSocials