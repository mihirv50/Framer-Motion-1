// import Animation1 from "./Components/Animation1";
// import { Animation2 } from "./Components/Animation2";
// import Drag from "./Components/Drag";
// import SequencingAndStaggering from "./Components/SequencingAndStaggering";

import { motion, useScroll } from "motion/react";
import ScrollAnimations from "./Components/ScrollAnimations";

const App = () => {
  const {scrollYProgress} = useScroll();
  return (
    <>
      <motion.div style={{scaleX:scrollYProgress}} className="w-full h-1 rounded-full bg-green-500 fixed origin-left"></motion.div>
      <div className="w-screen min-h-screen bg-[#111] text-white px-80 p-20 text-center">
        {/* <Animation1/> */}
        {/* <Animation2/> */}
        {/* <Drag/> */}
        {/* <SequencingAndStaggering/> */}
        <div className="bg-[#111]">
          <ScrollAnimations />
          <ScrollAnimations />
          <ScrollAnimations />
          <ScrollAnimations />
        </div>
      </div>
    </>
  );
};

export default App;
