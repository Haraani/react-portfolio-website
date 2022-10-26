import React from 'react';
import './about.css';
import dev from '../../images/dev.jpg';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={dev} alt="developer" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ year working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Projects</small>
            </article>
          </div>
          <p>
            I have built many industry grade projects from scratch and am armed
            with many technological skills useful for tech projects. Check out
            my projects below. :)
          </p>
          <a herf="#contact" className="btn btn-primary">
            Let's Talk!!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
