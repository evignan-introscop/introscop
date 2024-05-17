import React from "react";
import Media from "./components/media/Media.js";
import Jobs from "./components/jobs/Jobs.js";
import Modal from "../../components/modal/Modal";

import JobItem1 from "./components/jobs/job-pop-up/JobItem1";
import Hero from "./components/hero/Hero/Hero";

export default function Vacancies({ isOpen, setIsOpen }) {
  const [activeModal, setActiveModal] = React.useState(false);

  const [isItem, setIsItem] = React.useState(false);

  const button__ref = React.useRef();

  const getValue = () => {
    switch (button__ref) {
      case "Şef Secţie marketing":
        return <JobItem1 />;

      case "Audit Intern":
        return <JobItem1 />;
      default:
        break;
    }
  };

  const handlerItemClicked = () => {
    return setIsItem(!isItem);
  };

  const closedJobModal = () => {
    setIsItem(false);
  };

  const onClickVisible = () => {
    setActiveModal(true);
  };
  return (
    <section>
      <Hero />
      <Media onClickVisible={onClickVisible} />

      <Jobs
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handlerItemClicked={handlerItemClicked}
        getValue={getValue}
        button__ref={button__ref}
      />

      <Modal activeModal={activeModal} setActiveModal={setActiveModal} />

      {isItem && (
        <JobItem1
          isItem={isItem}
          setIsItem={setIsItem}
          closedJobModal={closedJobModal}
        />
      )}
    </section>
  );
}
