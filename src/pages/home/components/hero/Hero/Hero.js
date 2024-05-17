import React from 'react';
import s from './Hero.module.scss';
import scrollBtn from '../../../../../assets/images/home/scroll-btn.svg';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Hero() {
  return (
    <article className={s.hero}>
      <div className={s.container}>
        <div className={s.hero__wrapper}>
        <div className={s.hero__inner}>
          <h1 className={s.hero__title}>
            CHIRIE <br/>SPAȚII INDUSTRIALE
          </h1>
          <div className={s.hero__description}>
            <span className={s.hero__description_size}>
              20 m<sup>2</sup> - 3000 m<sup>2</sup>
            </span>
            <span className={s.hero__description_text}>
              Un ecosistem întreg, unde afacerile cresc dinamic 
            </span>
            <a className={s.hero__contact_btn}
              href="tel:+37360202320" 
              rel="noreferrer"
            >
            Contactează-ne acum
          </a>
          </div>
        </div>
        </div>
      </div>

      <Link to="" className={s.hero__scroll__button} onClick={() => scroll.scrollTo(400)} smooth="true">         
          <img className={s.hero__scroll__image} src={scrollBtn} alt="scroll-btn"/>
      </Link>
      
    </article>
  )
}
