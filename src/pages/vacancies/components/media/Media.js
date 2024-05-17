import React from "react";
import s from "./Media.module.scss";
import mark from "../../../../assets/images/vacancies/check-icon-big.svg";
import mediaBg from "../../../../assets/images/vacancies/media-bg.jpg";
import mediaBg_webp from "../../../../assets/images/vacancies/media-bg.webp";
import wi from "../../../../assets/images/vacancies/woman-img.png";
import wi_webp from "../../../../assets/images/vacancies/woman-img.webp";
import mi from "../../../../assets/images/vacancies/men-img.png";
import mi_webp from "../../../../assets/images/vacancies/men-img.webp";

export default function Media({ onClickVisible }) {
  return (
    <article className={s.media__section} data-aos="fade-up">
      <div className={s.media__section_wrapper}>
        <div className={s.media}>
          <div className={s.media__container}>
            <h2 className={s.media__title_mob}>Social Media</h2>
            <div className={s.media__inner}>
              <div className={s.media__description}>
                <h2 className={s.media__title}>Social Media</h2>

                <div className={s.media__content}>
                  <div className={s.media__item}>
                    <img src={mark} alt="mark-icon" />
                    <p className={s.media__text}>
                      Planificarea şi îndeplinirea strategiilor de social media
                    </p>
                  </div>
                  <div className={s.media__item}>
                    <img src={mark} alt="mark-icon" />
                    <p className={s.media__text}>
                      Dezvoltarea canalelor de comunicare în social media în
                      concordanţă cu strategia de brand
                    </p>
                  </div>
                  <div className={s.media__item}>
                    <img src={mark} alt="mark-icon" />
                    <p className={s.media__text}>
                      Propunerea de oportunităţi noi pentru creşterea
                      notorietăţii şi implicit creşterea vânzărilor
                    </p>
                  </div>
                  <div className={s.media__item}>
                    <img src={mark} alt="mark-icon" />
                    <p className={s.media__text}>
                      Monitorizarea constantă şi optimizarea campaniilor pentru
                      atingerea obiectivelor
                    </p>
                  </div>
                  <div className={s.media__item}>
                    <img src={mark} alt="mark-icon" />
                    <p className={s.media__text}>
                      Menţinerea paginilor pe reţelele sociale (Facebook,
                      Instagram)
                    </p>
                  </div>
                </div>

                <button
                  className={s.media__watch_btn}
                  type="button"
                  onClick={onClickVisible}
                >
                  Vezi mai multe
                </button>
              </div>

              <div className={s.media__image}>
                <img src={wi} srcSet={wi_webp} alt="" />
              </div>
            </div>
          </div>
          <img
            className={s.media__inner_image}
            src={mediaBg}
            srcSet={mediaBg_webp}
            alt="media-background"
          />
        </div>

        <div className={s.media}>
          <div className={s.media__container}>
            <div className={s.media__inner_rev}>
              <div className={s.media__description_rev}>
                <h2 className={s.media__title}>Designer Grafic</h2>

                <div className={s.media__content_rev}>
                  <div className={s.media__item}>
                    <img src={mark} alt="mark-icon" />
                    <p className={s.media__text}>
                      Elaborarea şi prelucrarea machetelor grafice pentru
                      diverse materiale publicitare
                    </p>
                  </div>
                  <div className={s.media__item}>
                    <img src={mark} alt="mark-icon" />
                    <p className={s.media__text}>
                      Elaborarea conceptelor creative în materie de design
                      pentru campaniile publicitare
                    </p>
                  </div>
                  <div className={s.media__item}>
                    <img src={mark} alt="mark-icon" />
                    <p className={s.media__text}>
                      Dezvoltare design pentru aplicaţii web
                    </p>
                  </div>
                  <div className={s.media__item}>
                    <img src={mark} alt="mark-icon" />
                    <p className={s.media__text}>
                      Studierea tendinţelor noi în domeniu şi participarea la
                      elaborarea şi implementarea proiectelor noi
                    </p>
                  </div>
                </div>

                <button
                  className={s.media__watch_btn}
                  type="button"
                  onClick={onClickVisible}
                >
                  Vezi mai multe
                </button>
              </div>

              <div className={s.media__image}>
                <img src={mi} srcSet={mi_webp} alt="" />
              </div>
              <h2 className={s.media__title_mob}>Designer Grafic</h2>
            </div>
          </div>
          <div className={s.media__decor}></div>
        </div>
      </div>
    </article>
  );
}
