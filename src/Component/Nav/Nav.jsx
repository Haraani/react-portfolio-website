import React from 'react';
import '../Nav/Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';
import { MdWork } from 'react-icons/md';
import { GoProject } from 'react-icons/go';
import { MdOutlineContactPhone } from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('');
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <SiAboutdotme />
      </a>
      <a
        href="#Experience"
        onClick={() => setActiveNav('#Experience')}
        className={activeNav === '#Experience' ? 'active' : ''}
      >
        <MdWork />
      </a>
      <a
        href="#Projects"
        onClick={() => setActiveNav('#Projects')}
        className={activeNav === '#Projects' ? 'active' : ''}
      >
        <GoProject />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <MdOutlineContactPhone />
      </a>
    </nav>
  );
};

export default Nav;
