/* eslint-disable no-unused-vars */
import React from 'react';
import homeModule from '../Home/home.module.css';
import { TypeAnimation } from 'react-type-animation';


export const Home = () => {
  return (
    <div>
      <div className={`${homeModule.trapezoid} text-white`}>
        <div className={homeModule.parent}>
          <img className={homeModule.home} src="../../../public/home.jpg" />
          <img className={homeModule.tutor} src="../../../public/tutor.png" />
          <TypeAnimation
           className={homeModule.typeAnime}
           sequence={[
            'I am a Tutor',
            1100,
            'Spd Chem ...',
            1100,
            'Hello World',
            1100,
            'Hello World 2',
            1100,
          ]}
            speed={2}
            repeat={Infinity}
          />
          <svg className={homeModule.arrows}>
            <path className={homeModule.a1} d="M0 0 L30 32 L60 0"></path>
            <path className={homeModule.a2} d="M0 20 L30 52 L60 20"></path>
            <path className={homeModule.a3} d="M0 40 L30 72 L60 40"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
