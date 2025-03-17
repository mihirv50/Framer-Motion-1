import { motion } from "motion/react";

const Drag = () => {
  return (
    <div>
      <motion.div
        drag
        // dragConstraints={{top:0,left:0,bottom:300,right:300}}
        // dragDirectionLock={true}
        className="h-52 w-52 absolute bg-emerald-600 rounded-2xl"
      ></motion.div>
    </div>
  );
};

export default Drag;
