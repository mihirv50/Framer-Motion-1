import { motion } from "motion/react";

const Animation1 = () => {
  return (
    <motion.div
      animate={{ x: 1000, y: 300, rotate: 360 }}
      transition={{ duration: 2, delay: 1, ease: "circIn" }}
      className="box w-[200px] h-[200px] bg-red-500 rounded-2xl p-3"
    ></motion.div>
  );
};

export default Animation1;
