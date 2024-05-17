import React from 'react';
import s from './Hero.module.scss';
import scrollBtn from '../../../../../assets/images/home/scroll-btn.svg';
import { animateScroll as scroll } from "react-scroll";

export default function Hero() {
  return (
    <article className={s.hero}>
        <div className={s.container}>
          <div className={s.hero__wrapper}>
            <div className={s.hero__crutch}></div>
            <div className={s.hero__inner}>
              <h1 className={s.hero__title}>
                Doreşti să faci parte din echipa noastră?
              </h1>
            </div>
          </div>
        </div>

        <button
          className={s.hero__scroll__button}
          onClick={() => scroll.scrollTo(30)}
          duration={2000}
          to=""
          smooth="true"
        >
          <img
            className={s.hero__scroll__image}
            src={scrollBtn}
            alt="scroll-btn"
          />
        </button>
      </article>
  )
}
