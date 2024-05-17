import React from "react";
import s from "./Preloader.module.scss";

import { motion } from "framer-motion";
import logo from "../../assets/images/header/logo-new.svg";

export default function Index() {
  return (
    <div className={s.wrapper}>
      <motion.div
        className={s.inner}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1 },
          type: "tween",
          offset: 100,
        }}
      >
        <img src={logo} width="200" alt="logo intriscop" />
      </motion.div>
    </div>
  );
}
