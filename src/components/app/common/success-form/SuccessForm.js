import React from 'react';
import s from './SuccessForm.module.scss';
import successBig from '../../../../assets/images/info/success-icon-big.svg'
import { NavLink } from 'react-router-dom';

import { motion } from 'framer-motion';

export default function SuccessForm() {
  return (
    <motion.article 
    initial={{opacity: 0}}
    animate={{opacity:1, transition: {delay: 0.5}}}
    
    className={s.success__form}>
      <div className={s.success__form_wrapper}>
      <div className={s.success__form_image}>
        <img src={successBig} alt="success-icon-big"/>
      </div>
        <p className={s.success__form_title}>
        Mulțumim!
        </p>
        <p className={s.success__form_subtitle}>
        Formularul a fost trimis cu succes. 
        </p>
        <NavLink to="/">
        <button className={s.success__form_backBtn} type="button">Pagina de start</button>
        </NavLink>
      </div>
    </motion.article>
  )
}
