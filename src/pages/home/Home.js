import React from 'react';
import {
      Hero, 
      Flexibility, 
      RequestForm, 
      Accessibility, 
      Details,
      Reserve,
      Location} from '../home/index';
import s from  './home.module.scss';

export default function Home() {
  
  return (
    <section className={s.home}>
      <Hero/>
      <Flexibility/>
      <RequestForm />
      <Accessibility/>
      <Details/>
      <Reserve/>
      <Location/>
    </section>
  )
}
