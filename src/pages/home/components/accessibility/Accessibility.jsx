import React from "react";
import s from "./accessibility.module.scss";
import MultipleSlider from "./slider/Slider";

export default function Accessibility() {
  return (
    <section className={s.accessibility__section}>
      <div className={s.container}>
        <article className={s.accessibility} data-aos="fade-up" smooth="true">
          <div className={s.accessibility__wrapper}>
            <h2 className={s.accessibility__title}>Accesibilitate</h2>
            <p className={s.accessibility__description}>
              INTROSCOP BUSINESS SPACES are o poziționare centrală, cu acces
              către sectoarele: Botanica, Ciocana, Râșcani. Gr. Botanică spre
              Telecentru, prin Calea Basarabiei spre Sculeni sau Buiucani.
              Spațiile au ieșire la străzile M. Manole, M. Drăgan, Otovasca. De
              asemenea, spațiile la sol beneficiază de intrare separată.
            </p>
          </div>
          <div className={s.accessibility__slider} style={{ zIndex: 1 }}>
            <MultipleSlider />
          </div>
        </article>
      </div>
    </section>
  );
}
