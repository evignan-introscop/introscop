import React from "react";
import s from "./Reserve.module.scss";

import { NavLink, Navigate } from "react-router-dom";

export default function Reserve() {
  const [isSend, setIsSend] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
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
        Email: email,
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
      <article className={s.reserve} data-aos="fade-up" smooth="true">
        <div className={s.container}>
          <div className={s.reserve__inner}>
            <div className={s.reserve__form}>
              <h3 className={s.reserve__title}>Rezervă acum</h3>
              <form
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
                  type="email" 
                  name="email" 
                  placeholder="Mail" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <div className={s.reserve__check}>
                <input type="checkbox" defaultChecked readOnly />
                <label>
                  Sunt de acord cu
                  <NavLink className={s.reserve__agree} to="/terms">
                    {" "}
                    termenii și condițiile site-ului
                  </NavLink>
                </label>
              </div>
            </div>
            <div className={s.reserve__location}>
              {/* <h2 className={s.reserve__title}>Rezervă un spațiu</h2> */}
              {/* <p className={s.reserve__description}>
                INTROSCOP are, de asemenea, capacități extinse pentru
                prelucrarea metalelor și a plasticului de înaltă precizie.
                Această unitate de afaceri dezvoltă și produce produse proprii,
                cum ar fi echipamente de birou.
              </p> */}
              <div className={s.reserve__address}>
                <p className={s.reserve__address_title}>Ne găsești aici</p>
                <p className={s.reserve__address_city}>
                  <strong>Adresa:</strong>{" "}
                  <a
                    href="https://www.google.com/maps/place/Strada+Me%C8%99terul+Manole+20,+Chi%C8%99in%C4%83u+2044,+%D0%9C%D0%BE%D0%BB%D0%B4%D0%B0%D0%B2%D0%B8%D1%8F/@47.0157995,28.8863468,21z/data=!4m13!1m7!3m6!1s0x40c97c755c9b8f83:0x5f1c8519c23d8c8!2zU3RyYWRhIE1lyJl0ZXJ1bCBNYW5vbGUgMjAsIENoaciZaW7Eg3UgMjA0NCwg0JzQvtC70LTQsNCy0LjRjw!3b1!8m2!3d47.0158448!4d28.8863642!3m4!1s0x40c97c755c9b8f83:0x5f1c8519c23d8c8!8m2!3d47.0158448!4d28.8863642"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chișinău, Ciocana, str. Meșterul Manole, 20
                  </a>
                </p>
                <p className={s.reserve__address_phone}>
                  <strong>Număr de contact:</strong>{" "}
                  <a
                    href="tel:+37360202320"
                    target="_blank"
                    rel="noreferrer"
                    className={s.button__phone}
                  >
                    060 20 23 20
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      {isSend && <Navigate to="/thanks" replace={true} />}
    </>
  );
}
