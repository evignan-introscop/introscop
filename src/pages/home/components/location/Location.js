import React from "react";
import s from "./Location.module.scss";
import map from "../../../../assets/images/home/location.jpg";
import map_webp from "../../../../assets/images/home/location.webp";
import locIcon from "../../../../assets/images/home/loc-icon.svg";

export default function Location() {
  return (
    <React.Fragment>
      <div>
        <article className={s.location}>
          <h2 className={s.location__title}>Harta amplasării</h2>
        </article>
      </div>
      <article className={s.location__map}>
        <a 
          className={s.location__map_link}
          href="https://www.google.com/maps/place/Strada+Me%C8%99terul+Manole+20,+Chi%C8%99in%C4%83u+2044,+%D0%9C%D0%BE%D0%BB%D0%B4%D0%B0%D0%B2%D0%B8%D1%8F/@47.0157995,28.8863468,21z/data=!4m13!1m7!3m6!1s0x40c97c755c9b8f83:0x5f1c8519c23d8c8!2zU3RyYWRhIE1lyJl0ZXJ1bCBNYW5vbGUgMjAsIENoaciZaW7Eg3UgMjA0NCwg0JzQvtC70LTQsNCy0LjRjw!3b1!8m2!3d47.0158448!4d28.8863642!3m4!1s0x40c97c755c9b8f83:0x5f1c8519c23d8c8!8m2!3d47.0158448!4d28.8863642"
          target="_blank"
          rel="noreferrer"
        >
        <img className="img-fluid" src={map} srcSet={map_webp} alt="" />
        <img className={s.location__map_mark} src={locIcon} alt="" />
        </a>
      </article>
      <div className={s.location__bottom}>
        <div className={s.container}>
          <h6 className={s.location__bottom_title}>Ne găsești aici</h6>
          <div className={s.location__bottom_inner}>
            <p className={s.location__bottom_address}>
              <span>Adresa: </span>
              <a
                href="https://www.google.com/maps/place/Strada+Me%C8%99terul+Manole+20,+Chi%C8%99in%C4%83u+2044,+%D0%9C%D0%BE%D0%BB%D0%B4%D0%B0%D0%B2%D0%B8%D1%8F/@47.0157995,28.8863468,21z/data=!4m13!1m7!3m6!1s0x40c97c755c9b8f83:0x5f1c8519c23d8c8!2zU3RyYWRhIE1lyJl0ZXJ1bCBNYW5vbGUgMjAsIENoaciZaW7Eg3UgMjA0NCwg0JzQvtC70LTQsNCy0LjRjw!3b1!8m2!3d47.0158448!4d28.8863642!3m4!1s0x40c97c755c9b8f83:0x5f1c8519c23d8c8!8m2!3d47.0158448!4d28.8863642"
                target="_blank"
                rel="noreferrer"
              >
                Chișinău, Ciocana, str. Meșterul Manole, 20
              </a>
            </p>
            <p className={s.location__bottom_phone}>
              <span>Număr de contact: </span>
              <a href="tel:+37360202320" rel="noreferrer">
                060 20 23 20
              </a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
