import React from "react";
import s from "./SocialForm.module.scss";
import viber from "../../../../assets/images/home/viber.svg";
import facebook from "../../../../assets/images/home/fb.svg";
import whatsApp from "../../../../assets/images/home/watts-app.svg";
import phone from "../../../../assets/images/home/phone.svg";

export default function SocialForm() {
  return (
    <div className={s.hero__social_group}>
      <a
        href="viber://add?number=%2B37360202320"
        target="_blank"
        rel="noreferrer"
      >
        <img className={s.hero__social} src={viber} alt="viber-icon" />
      </a>
      <a
        href="https://www.messenger.com/t/217125445358820/?messaging_source=source%3Apages%3Amessage_shortlink"
        target="_blank"
        rel="noreferrer"
      >
        <img className={s.hero__social} src={facebook} alt="facebook-icon" />
      </a>
      <a
        href="https://wa.me/+37360202320?text=I'm%20interested%20in%20your%20car%20for%20sale"
        target="_blank"
        rel="noreferrer"
      >
        <img className={s.hero__social} src={whatsApp} alt="whats-app-icon" />
      </a>
      <a href="tel:+3736202320" rel="noreferrer">
        <img className={s.hero__social} src={phone} alt="phone-icon" />
      </a>
    </div>
  );
}
