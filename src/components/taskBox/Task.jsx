import React from "react";
import "../home/body.css";
import { motion, useAnimation } from "framer-motion";

const Task = () => {
  const controlTask = useAnimation();
  const controlX = useAnimation();

  const xVar = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { when: "afterParent" },
    },
  };

  return (
    <div>
      <motion.div className="box" id="task" animate={controlTask}>
        <motion.div
          className="out"
          variants={xVar}
          initial="hidden"
          animate={controlX}
          onClick={() => {
            controlX.start({
              opacity: 0,
            });
            controlTask.start({
              width: "100%",
              height: "50vh",
              x: 0,
              zIndex: 0,
            });
          }}
        >
          X
        </motion.div>
        <motion.h1
          onClick={() => {
            controlX.start({
              opacity: 1,
              transition: { delay: 0.5 },
            });
            controlTask.start({
              x: " -50%",
              width: "200%",
              height: "200%",
              zIndex: 5,
            });
          }}
        >
          TASKMASTER
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Task;
