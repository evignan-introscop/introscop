import s from "./app.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";

import Preloader from "../preloader";
import React from "react";

import { motion } from "framer-motion";

function App() {
  const [isShow, setIsShow] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 3000);
  });
  return (
    <>
      {isShow ? (
        <Preloader />
      ) : (
        <motion.div
          className={s.app}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <Header />
          <Main />
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
