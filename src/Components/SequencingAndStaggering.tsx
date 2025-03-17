import { motion } from "motion/react";

const parentVariants = {
  visible: { opacity: 1,transition:{
    staggerChildren:0.2,
    delayChildren:0.5
  } },
  hidden: { opacity: 0 },
};

const childVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
const SequencingAndStaggering = () => {
  const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 2, delay: 1, ease: "circInOut" }}
      className="h-full bg-pink-500 p-10 text-center text-zinc-900 flex flex-wrap items-center justify-center font-bold"
    >
      {arr.map((_, index) => (
        <motion.div
          variants={childVariants}
          key={index}
          className="bg-yellow-200 flex items-center justify-center rounded-2xl h-52 w-52 m-5"
        >
          Child {index + 1}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SequencingAndStaggering;
