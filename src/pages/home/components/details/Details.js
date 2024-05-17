import React from "react";
import s from "./Details.module.scss";

import mark from "../../../../assets/images/home/mark-icon.svg";
import accordeonToggle from "../../../../assets/images/home/accordeon-toggle.svg";

export default function Details() {
  const [selected, setSelected] = React.useState(false);
  const toggleSelected = () => setSelected(!selected);
  const [selected2, setSelected2] = React.useState(false);
  const toggleSelected2 = () => setSelected2(!selected2);
  const [selected3, setSelected3] = React.useState(false);
  const toggleSelected3 = () => setSelected3(!selected3);

  return (
    <div className={s.details__wrapper}>
      <div className={s.details__bg_gradient}></div>
      <div className={s.details__section_wrapper}>
        <div className={s.container}>
          <div className={s.details__inner}>

            <div
              className={s.details__column}
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              smooth="true"
            >
              <h3 className={s.details__title}>
                <span>Detalii tehnice</span>
                  <span
                  className={selected ? s.details__toggle_rotate : s.details__toggle}
                  onClick={toggleSelected}
                >
                  <img src={accordeonToggle} alt="" />
                </span>
              </h3>

              <div
                className={selected ? s.details__content_show : s.details__hide}
              >
                <div
                  className={(s.details__item, s.details__item_m)}
                >
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                  Camere de supraveghere video în curte și pe întreg perimetrul proprietății
                  </p>
                </div>
                <div className={s.details__item}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                  Sistem individual de încălzire
                  </p>
                </div>
                <div className={(s.details__item, s.details__item_m)}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                  Sisteme de alimentare cu apă, asigurate din două magistrale separate și un canal de rezervă
                  </p>
                </div>
                <div className={s.details__item}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>Sistem de canalizare</p>
                </div>
                <div className={(s.details__item, s.details__item_m)}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                  Sisteme de iluminare interioare și exterioare cu LED
                  </p>
                </div>
                <div className={s.details__item}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                    Înălțimea tavanelor de la 2,5 m până la 9 m
                  </p>
                </div>
                <div className={(s.details__item, s.details__item_m)}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                  Pardoseală industrială cu fibră metalică sau plasă VR, cu grosimea minimă 12 cm
                  </p>
                </div>
                <div className={s.details__item}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                  Stație proprie de transformare a energiei electrice, precum și punctul strategic de distribuire Premier Energy
                  </p>
                </div>
                <div className={(s.details__item, s.details__item_m)}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                    Acoperișuri reparate cu garanție pentru 30 de ani
                  </p>
                </div>
                <div className={s.details__item}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                    Internet cu fibră optică și conexiune backup
                  </p>
                </div>
              </div>
            </div>

            <div
              className={s.details__column}
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              smooth="true"
            >
              <h3 className={s.details__title}>
                <span>Suport și facilități </span>
                <span
                  className={selected2 ? s.details__toggle_rotate : s.details__toggle}
                  onClick={toggleSelected2}
                >
                  <img src={accordeonToggle} alt="" />
                </span>
              </h3>
              <div
                className={
                  selected2 ? s.details__content_show : s.details__hide
                }
              >
                <div className={(s.details__item, s.details__item_m)}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                    Sistem parking pentru autoturisme, pentru camioane și tiruri
                  </p>
                </div>
                <div className={(s.details__item, s.details__item_m)}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                    Lifturi industriale — în unele clădiri cu capacitate pentru
                    2 palete
                  </p>
                </div>
                <div className={s.details__item}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                    Spațiile comune din interior sunt dotate cu hall, ascensor,
                    bloc sanitar, facilități de masă și bufet
                  </p>
                </div>
                <div className={(s.details__item, s.details__item_m)}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                    Spațiile comune exterioare au amenajate locuri speciale
                    pentru fumat, precum și locuri de parcare interne și externe
                  </p>
                </div>
                <div className={s.details__item}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                    Serviciu de colectare și evacuare a deșeurilor de 2 ori în
                    săptămână prestat de Regia Autosalubritate
                  </p>
                </div>
                <div className={(s.details__item, s.details__item_m)}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                    Echipă de mentenanță corectivă și preventivă, precum și
                    suport tehnic la cerere, lăcătuș, sudor electric
                  </p>
                </div>
                <div className={s.details__item}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                  Serviciu de pază fizică și video 24/24
                  </p>
                </div>
                <div className={(s.details__item, s.details__item_m)}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                    Sistem de alarmă
                  </p>
                </div>
              </div>
            </div>

            <div
              className={s.details__column}
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              smooth="true"
            >
              <h3 className={s.details__title}>
                <span>Dotări adiționale</span>
                <span
                  className={selected3 ? s.details__toggle_rotate : s.details__toggle}
                  onClick={toggleSelected3}
                >
                  <img src={accordeonToggle} alt="" />
                </span>
              </h3>
              <div
                className={
                  selected3 ? s.details__content_show : s.details__hide
                }
              >
                <div className={(s.details__item, s.details__item_m)}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                  Sisteme de ventilare și condiționare
                  </p>
                </div>
                <div className={s.details__item}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>Sistem antiincendiu</p>
                </div>
                <div className={(s.details__item, s.details__item_m)}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>Rampă încărcare</p>
                </div>
                <div className={s.details__item}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                    La solicitare — acces control la intrarea și ieșirea
                    autoturismelor
                  </p>
                </div>
                <div className={s.details__item}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                  Spații cu grindă-macara
                  </p>
                </div>
                <div className={(s.details__item, s.details__item_m)}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                  Parcare securizată 24/24 pentru orice tip de transport
                  </p>
                </div>
                <div className={s.details__item}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                  Oportunitatea de dotare cu mobilier și echipament tehnic
                  </p>
                </div>
                <div className={(s.details__item, s.details__item_m)}>
                  <img src={mark} alt="mark-icon" />
                  <p className={s.details__text}>
                  Posibilitatea de amenajare a propriului oficiu în nemijlocita apropiere
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
