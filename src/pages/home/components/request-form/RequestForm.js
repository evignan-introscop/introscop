import React from "react";
import s from "./RequestForm.module.scss";
import { NavLink, Navigate } from "react-router-dom";

export default function RequestForm() {
  const [isSend, setIsSend] = React.useState(false);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const useHandlerOnClickToSend = (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/corporate@ready.partners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Nume: name,
        Telefon: phone,
      }),
    })
      .then((response) => {
        setIsSend(true);
      })
      .then((data) => data)
      .catch((error) => error);
  };

  return (
    <>
      <article
        className={s.request}
        data-aos="fade-up"
        smooth="true"
        id="request-form"
      >
        <div className={s.container}>
          <div className={s.request__inner}>
            <p className={s.request__description}>
              Pentru siguranța afacerilor ambițioase, alege
            </p>
            <h2 className={s.request__title}>INTROSCOP BUSINESS SPACES</h2>
            <p className={s.request__subtitle}>Solicită oferta</p>
            <form
              className={s.request__form}
              action="https://formsubmit.co/corporate@ready.partners"
              method="POST"
              onSubmit={useHandlerOnClickToSend}
            >
              <input
                type="text"
                name="text"
                placeholder="Nume"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="tel"
                name="tel"
                placeholder="Telefon"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Everyone is important for as!"
              />
              <input type="hidden" name="_captcha" value="false" />
              <button type="submit">Contactează-ne</button>
            </form>
            <div className={s.request__check}>
              <input type="checkbox" defaultChecked readOnly />
              <label>
                Sunt de acord cu{" "}
                <NavLink className={s.request__agree} to="/terms">
                  termenii și condițiile site-ului
                </NavLink>
              </label>
            </div>
          </div>
        </div>
      </article>
      {isSend && <Navigate to="/thanks" replace={true} />}
    </>
  );
}
