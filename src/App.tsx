// import Animation1 from "./Components/Animation1";
// import { Animation2 } from "./Components/Animation2";
// import Drag from "./Components/Drag";
// import SequencingAndStaggering from "./Components/SequencingAndStaggering";

import { AnimatePresence, motion, useScroll } from "motion/react";
import { useState } from "react";
// import ScrollAnimations from "./Components/ScrollAnimations";

const App = () => {
  // const {scrollYProgress} = useScroll();
  const [btnClicked, setBtnClicked] = useState<Boolean>(false);
  const btnClicking: () => void = () => {
    setBtnClicked(!btnClicked);
    console.log(btnClicked);
  };
  return (
    <>
      {/* <motion.div style={{scaleX:scrollYProgress}} className="w-full h-1 rounded-full bg-green-500 fixed origin-left"></motion.div> */}
      <div className="w-screen min-h-screen bg-[#111] text-white p-10">
        {/* <Animation1/> */}
        {/* <Animation2/> */}
        {/* <Drag/> */}
        {/* <SequencingAndStaggering/> */}
        {/* <div className="bg-[#111]">
          <ScrollAnimations />
          <ScrollAnimations />
          <ScrollAnimations />
          <ScrollAnimations />
        </div> */}
        <AnimatePresence>
          <motion.div
            layout
            className={`${btnClicked ? "h-[500px]" : "h-[200px]"} ${
              btnClicked ? "w-[1000px]" : "w-[400px]"
            } rounded-2xl bg-red-600`}
          ></motion.div>
          <button
            onClick={() => btnClicking()}
            className={`bg-emerald-500 mt-4 active:scale-95 font-bold rounded-xl px-6 py-2`}
          >
            Click
          </button>
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
