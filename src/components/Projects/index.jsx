import { useEffect, useRef, useState } from "react";

import Project from "./components/project";
import gsap from "gsap";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  const projects = [
    {
      src: "aboutball.png",

      year: "2023",
      location: "samundri",
    },

    {
      src: "aboutball.png",

      year: "2021",
      location: "samundri",
    },
    {
      src: "aboutball.png",

      year: "2020",
      location: "samundri",
    },
  ];

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <div className={styles.headingfixed} id="Timeline">
      {" "}
      <div>
        <h2 className="eleven__heading__prjct" style={{ paddingTop: "0.5em" }}>
          heading
        </h2>
      </div>
      <main
        onMouseMove={(e) => {
          moveItems(e.clientX, e.clientY);
        }}
        className={styles.projects}
      >
        {" "}
        <div className={styles.body}>
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                image={project.image}
                year={project.year}
                location={project.location}
                manageModal={manageModal}
                key={index}
              />
            );
          })}
        </div>
        <>
          <motion.div
            ref={modalContainer}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
            className={styles.modalContainer}
          >
            <div
              style={{ top: index * -100 + "%" }}
              className={styles.modalSlider}
            >
              {projects.map((project, index) => {
                const { src, color } = project;
                return (
                  <div
                    className={styles.modal}
                    style={{ backgroundColor: "#f5f5f5", objectFit: "cover" }}
                    key={`modal_${index}`}
                  >
                    <img
                      src={`/images/${src}`}
                      height={300}
                      style={{ objectFit: "cover" }}
                      alt="devscot, samundri"
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </>
      </main>{" "}
    </div>
  );
}
