import React from "react";
import s from "./flexibility.module.scss";
import flexibilityBg from "../../../../assets/images/home/flexibility-bg.jpg";
import flexibilityBg_webp from "../../../../assets/images/home/flexibility-bg.webp";
import image_1 from "../../../../assets/images/home/1.png";
import image_1_webp from "../../../../assets/images/home/1.webp";
import image_2 from "../../../../assets/images/home/2.png";
import image_2_webp from "../../../../assets/images/home/2.webp";
import image_3 from "../../../../assets/images/home/3.png";
import image_3_webp from "../../../../assets/images/home/3.webp";
import image_4 from "../../../../assets/images/home/4.png";
import image_4_webp from "../../../../assets/images/home/4.webp";

export default function Flexibility() {
  return (
    <article className={s.flexibility}>
      <div className={s.flexibility__wrapper}>
        <div className={s.flexibillity__section_wrapper}>
          <div className={s.container}>
            <div className={s.flexibility__bg}>
              <img
                src={flexibilityBg}
                srcSet={flexibilityBg_webp}
                alt="flexibility-bg"
              />
              <div className={s.flexibility__bg_gradient}></div>
            </div>
          </div>
          <div className={s.container}>
            <div className={s.flexibility__inner} data-aos="fade-up">
              <h2 className={s.flexibility__title}>
                Flexibilitate și mobilitate
              </h2>
              <p className={s.flexibility__description} data-aos="fade-up">
                INTROSCOP business spaces oferă spații spre închiriere cu o
                suită de dotări și facilități pentru utilizare mixtă. Sunt
                disponibile de la 20 m2 până la 3000 m2, spații industriale
                pentru producție sau depozitare, spații pentru oficii, spații
                comerciale și, desigur, terenul aferent întregii proprietăți.
                Spațiile beneficiază de poziționare strategică, cu acces rapid
                la arterele principale ale orașului. Amplasate pe strada
                Otovasca, 29 și M. Manole, 20, acestea sunt puncte de
                distribuție perfecte.
              </p>
            </div>
            <div
              className={s.flexibility__images}
              data-aos="fade-up"
              smooth="true"
            >
              <div className={s.flexibility__image}>
                <img
                  className="img-fluid"
                  src={image_1}
                  srcSet={image_1_webp}
                  alt="loc-image_1"
                />
              </div>
              <div className={s.flexibility__image}>
                <img
                  className="img-fluid"
                  src={image_2}
                  srcSet={image_2_webp}
                  alt="loc-image_2"
                />
              </div>
              <div className={s.flexibility__image}>
                <img
                  className="img-fluid"
                  src={image_3}
                  srcSet={image_3_webp}
                  alt="loc-image_3"
                />
              </div>
              <div className={s.flexibility__image}>
                <img
                  className="img-fluid"
                  src={image_4}
                  srcSet={image_4_webp}
                  alt="loc-image_4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
