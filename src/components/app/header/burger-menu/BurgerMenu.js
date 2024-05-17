import React from "react";
import s from "./burgerMenu.module.scss";

import viber from "../../../../assets/images/home/viber.svg";
import wa from "../../../../assets/images/home/watts-app.svg";
import fb from "../../../../assets/images/home/fb.svg";
import phone from "../../../../assets/images/home/phone.svg";
import { NavLink } from "react-router-dom";

export default function BurgerMenu({ active, setActive, toggleMenu }) {
  return (
    <div className={s.burger__menu}>
      <div
        className={active ? s.burger__active : s.burger__inner}
        onClick={() => setActive(!active)}
      >
        <nav className={s.burger__nav} onClick={(e) => e.stopPropagation()}>
          <ul className={s.burger__list}>
            <li className={s.burger__item} onClick={() => setActive(false)}>
              <NavLink to="/">Acasă</NavLink>
            </li>
            <li className={s.burger__item} onClick={() => setActive(false)}>
              <NavLink to="/requisites">Date Fiscale și Bancare</NavLink>
            </li>
            <li className={s.burger__item} onClick={() => setActive(false)}>
              <NavLink to="/info">Dezvăluirea Informației</NavLink>
            </li>
          </ul>
        </nav>
        <div className={s.burger__socials}>
        <a 
        href="viber://chat?number=%2B37360202320" 
        target="_blank" 
        rel="noreferrer">
            <img src={viber} alt="viber introscop" />
          </a>
          <a href="https://wa.me/+37360202320?text=I'm%20interested%20in%20your%20car%20for%20sale" target="_blank" rel="noreferrer">
            <img src={wa} alt="whatsapp introscop" />
          </a>
          <a href="https://www.messenger.com/t/217125445358820/?messaging_source=source%3Apages%3Amessage_shortlink" target="_blank" rel="noreferrer">
            <img src={fb} alt="facebook introscop" />
          </a>
          <a href='tel:+37360202320' rel="noreferrer">
            <img src={phone} alt="phone introscop" />
          </a>
        </div>
      </div>
    </div>
  );
}
