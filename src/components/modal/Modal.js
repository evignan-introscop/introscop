import React from 'react';
import s from './Modal.module.scss';
import closeBtn from './close-btn.svg';

export default function Modal({activeModal, setActiveModal}) {

  const offClickVisible = () => {
    setActiveModal(false)
  }

  return (
    <div className={activeModal ? s.job__modal : s.job__modal_hide}>
      <div className={s.job__modal_wrapper}>
      <button
            className={s.job__modal_close_button}
            onClick={offClickVisible}
          >
            <img src={closeBtn} alt="close-button" />
          </button>
        <div className={s.job__modal_content}>
        
          <div className={s.left__side}>
          <h1 className={s.title}>
            INTROSCOP
            <div className={s.separator}>
            </div> te așteaptă în echipa sa</h1>
          <p className={s.description}> 
            Aplică și fă parte dintr-o echipă de profesioniști energică,
            orientată spre progres și rezultat. 
            </p>
            <p className={s.description}> 
            Realizează-ți potențialul maxim
            alături de oameni care împărtășesc aceleași valori și atinge noi
            obiective profesionale în domeniul tău de activitate alături de
            INTROSCOP.
          </p>
          </div>
          
          <div className={s.right__side}>
            <h3 className={s.form__title}>Lăsați-ne datele de contact și revenim cu informații</h3>
          <form 
            className={s.form}
            action="https://formsubmit.co/enujnenco@ready.partners" method="POST"
          >
            <input type="text" name="Nume" placeholder="Nume" required/>
            <input type="email" name="Email" placeholder="Email" required/>
            <input type="tel" name="Telefon" placeholder="Nr. telefon" required/>
            <input type="hidden" name="_captcha" value="false"/>
            <button type="submit">Trimite</button>
          </form>
          </div>
          
        </div>
      </div>
    </div>
  )
}
