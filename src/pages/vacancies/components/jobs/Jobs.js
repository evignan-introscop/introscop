import React from "react";
import s from "./Jobs.module.scss";
import data from "../../../../data/data-base.json";

import AOS from "aos";
AOS.init();

export default function Jobs({ handlerItemClicked,getValue,button__ref }) {

  return (
    <article className={s.jobs} data-aos="fade-up" smooth="true">
      <div className={s.jobs__container}>
        <h2 className={s.jobs__inner__title}>Vezi mai multe joburi</h2>
        <div className={s.jobs__inner}>
          {data.jobs.map((item) => (
            <button
              className={s.jobs__item}
              key={item.vacancy}
              name={item.vacancy}
              type="button"
              data-aos="fade-up"
              data-aos-delay={`(${item}) => ${item} + "300"`}
              data-aos-duration={`(${item}) => ${item} + "1000"`}
              data-aos-easing="ease-in-out"
              smooth="true"
              ref={button__ref.current}
              onClick={() => {
                handlerItemClicked(item);
                getValue();
              }}
            >
              {item.vacancy}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}
