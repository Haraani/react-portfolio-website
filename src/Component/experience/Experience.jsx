import React from 'react';
import './experience.css';
import { FaUserCheck } from 'react-icons/fa';

const experience = () => {
  return (
    <section id="Experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaUserCheck className='experience__details-icons' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FaUserCheck className='experience__details-icons' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FaUserCheck className='experience__details-icons' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FaUserCheck className='experience__details-icons' />
              <div>
                <h4>React</h4>
                <small className="text-light">Novice</small>
              </div>
            </article>
            <article className="experience__details">
              <FaUserCheck className='experience__details-icons' />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Novice</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Software/Firmware Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaUserCheck className='experience__details-icons' />
              <div>
                <h4>Embedded C</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FaUserCheck className='experience__details-icons' />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FaUserCheck className='experience__details-icons' />
              <div>
                <h4>LabView</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
