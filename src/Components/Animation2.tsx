import { motion } from "motion/react";

export const Animation2 = () => {
  return (
    <div>
      <motion.div
        animate={{
          x: [0, 1200, 1200, 0, 0],
          y: [0, 0, 500, 500, 0],
          rotate:[0,360,720,360,0],
          backgroundColor: ["red", "blue", "pink", "yellow", "green"],
        }}
        transition={{ duration: 5, delay: 1 , ease:"linear" ,times: [0, 0.2, 0.4, 0.6, 0.8, 1], }}
        className="h-52 w-52 absolute bg-emerald-600 rounded-2xl"
      ></motion.div>
    </div>
  );
};
