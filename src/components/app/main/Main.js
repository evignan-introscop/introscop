import React from "react";
import { Home, Requisites, Info, Terms } from "../../../pages/index";
import s from "./Main.module.scss";
import SuccessForm from "../common/success-form/SuccessForm";
import SocialForm from "../common/social-form/SocialForm";
import {  Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

export default function Main() {
  
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className={s.main}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/requisites" element={<Requisites />} />
        <Route exact path="/info" element={<Info />} />
        <Route exact path="/thanks" element={<SuccessForm />} />
        <Route exact path="/terms" element={<Terms />} />
      </Routes>
      <SocialForm />
    </main>
  );
}
