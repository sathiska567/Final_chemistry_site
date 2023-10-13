/* eslint-disable no-unused-vars */
import React from 'react';
import aboutModule from '../About/about.module.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



export const About = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div>
        <div className={aboutModule.trapezoidClasses}>
          <h1 className={aboutModule.classesTitle}><span className={aboutModule.FirstLetterEffect}>A</span>bout</h1>
          <Carousel interval={7000} pause="hover" keyboard activeIndex={index} onSelect={handleSelect} className={aboutModule.Carousel} >

            <Carousel.Item>
              <video
                className={aboutModule.carousalImage}
                src="/caro2.mp4"
                autoPlay
                loop
                muted
                controls
              />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/caro1.jpg" alt="First slide" className={aboutModule.carousalImage} />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/caro3.jpg" alt="Third slide" className={aboutModule.carousalImage} />
            </Carousel.Item>
          </Carousel>

        </div>
      </div>

    </div>
  )
}
