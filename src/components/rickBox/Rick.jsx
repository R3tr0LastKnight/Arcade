import React from "react";
import "../home/body.css";
import { motion, useAnimation } from "framer-motion";

const Rick = () => {
  const controlX = useAnimation();
  const controlRick = useAnimation();
  const addInfo = useAnimation();
  const controlHead = useAnimation();

  const xVar = {
    hidden: {
      opacity: 0,
      display: "none",
    },
    visible: {
      opacity: 1,
    },
  };
  const scrollVariants = {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div>
      <motion.div
        className="box"
        id="rick"
        animate={controlRick}
        onHoverStart={() => {
          controlHead.start({
            boxShadow: "10px 10px 10px #fff",
            y: -10,
          });
        }}
      >
        <motion.div
          className="out"
          variants={xVar}
          initial="hidden"
          animate={controlX}
          onClick={() => {
            controlX.start({
              opacity: 0,
            });
            controlRick.start({
              width: "100%",
              height: "50vh",
              x: 0,
              y: 0,
              zIndex: 0,
            });
            addInfo.start({
              display: "none",
              opacity: 0,
            });
            controlHead.start({
              display: "block",
            });
          }}
        >
          X
        </motion.div>
        <motion.h1
          className="hoverHead"
          variants={scrollVariants}
          initial="hidden"
          animate={(controlRick, "visible")}
          onClick={() => {
            controlX.start({
              opacity: 1,
              transition: { delay: 0.5 },
              display: "flex",
            });
            controlRick.start({
              x: " -50%",
              y: " -50%",
              width: "200%",
              height: "200%",
              zIndex: 5,
            });
            addInfo.start({
              opacity: 1,
              transition: { delay: 1 },
              display: "flex",
            });
          }}
        >
          HOVER
        </motion.h1>
        <motion.div
          className="info"
          variants={xVar}
          initial="hidden"
          animate={addInfo}
        >
          <p>This is a Hovering element website.</p>
          <a href="https://r3tr0lastknight.github.io/Web-Baka/">
            <motion.div
              className="btn"
              onClick={() => {
                controlHead.start({
                  display: "none",
                });
                addInfo.start({
                  opacity: 0,
                });
                controlX.start({
                  zIndex: 5,
                  top: "-300%",
                });
              }}
            >
              ENTER
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Rick;
