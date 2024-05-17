import React from "react";
import s from "./footer.module.scss";
import logo from "../../../assets/images/header/logo-new.svg";
import phoneLight from "../../../assets/images/footer/phone-light-icon-.svg";
import toggleArrow from "../../../assets/images/footer/toggle-arrow.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footer__inner}>
          <div className={s.footer__logo}>
            <NavLink to="/" className="">
              <img className={s.footer__logo_image} src={logo} alt="logo" />
            </NavLink>
          </div>

          <nav className={s.nav}>
            <ul className={s.nav__items}>
              <li className={s.nav__item}>
                <NavLink
                  to="/"
                  className=""
                  onClick={() => scroll.scrollToTop()}
                  smooth="true"
                  duration={50}
                >
                  Acasă
                </NavLink>
              </li>
              <li className={s.nav__item}>
                <NavLink
                  to="/requisites"
                  className=""
                  onClick={() => scroll.scrollToTop()}
                  smooth="true"
                  duration={50}
                >
                  Date Fiscale și Bancare
                </NavLink>
              </li>
              <li className={s.nav__item}>
                <NavLink
                  to="/info"
                  className=""
                  onClick={() => scroll.scrollToTop()}
                  smooth="true"
                  duration={50}
                >
                  Dezvăluirea Informației
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className={s.footer__buttons}>
            <a
              href="https://www.google.com/maps/place/Strada+Me%C8%99terul+Manole+20,+Chi%C8%99in%C4%83u+2044,+%D0%9C%D0%BE%D0%BB%D0%B4%D0%B0%D0%B2%D0%B8%D1%8F/@47.0157995,28.8863468,21z/data=!4m13!1m7!3m6!1s0x40c97c755c9b8f83:0x5f1c8519c23d8c8!2zU3RyYWRhIE1lyJl0ZXJ1bCBNYW5vbGUgMjAsIENoaciZaW7Eg3UgMjA0NCwg0JzQvtC70LTQsNCy0LjRjw!3b1!8m2!3d47.0158448!4d28.8863642!3m4!1s0x40c97c755c9b8f83:0x5f1c8519c23d8c8!8m2!3d47.0158448!4d28.8863642"
              target="_blank"
              rel="noreferrer"
              className={s.button__address}
            >
              <span>
                Chișinău, Ciocana,
                <br /> str. Meșterul Manole, 20
              </span>
            </a>
            <a
              href="tel:+37360202320"
              rel="noreferrer"
              className={s.button__phone}
            >
              <img
                className={s.button__phone_icon}
                src={phoneLight}
                alt="phone-icon"
              />
              <span className={s.button__phone_text}>060 20 23 20</span>
            </a>
            <Link
              to="/"
              className={s.button__toggle}
              onClick={() => scroll.scrollToTop(0)}
              smooth="true"
            >
              <img
                className={s.button__toggle_icon}
                src={toggleArrow}
                alt="toggle-arrow"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
