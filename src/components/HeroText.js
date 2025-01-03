"use client";
import { motion } from "framer-motion";
import HeroButton from "./HeroButton";

export default function HeroText() {
  const slideDownVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div>
      <motion.div
        variants={slideDownVariant}
        initial="hidden"
        animate="visible"
        className="text-white text-[0.7rem]  md:text-[1.1rem] w-[50%] md:w-[45%] lg:my-[1rem] ml-[5rem] lg:w-[15rem]  md:ml-[3rem] p-2"
      >
        <span>We offer an exclusive restaurant</span>{" "}
        <span>reservation service tailored</span>{" "}
        <span>to the refined traveler</span>{" "}
        <span>seeking elegance and luxury.</span>
      </motion.div>
      {/* button */}
      <HeroButton />
      
      <motion.div
        variants={slideDownVariant}
        initial="hidden"
        animate="visible"
        className="flex gap-3 relative top-[4rem] lg:w-[47%] md:top-[-0.5rem]  lg:h-0 xl:h-0 text-white w-full xl:w-[50%] md:w-[90%] xl:top-[-3rem] lg:-top-12 xl:left-[3rem] md:left-[3rem]"
      >
        <span className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] md:bottom-3 md:left-0 relative bottom-2 left-2">
          *
        </span>

        <div>
          <span className="text-[2rem] xl:text-[3.8rem] md:text-[3rem] lg:text-[3rem] leading-tight">
            Reserve the Perfect Table
          </span>
          <br />
          <span className="text-[1.5rem] md:text-[2.5rem] lg:text-[2.4rem] xl:text-[3.5rem] relative right-[0rem] md:right-[2.5rem] xl:bottom-5 bottom-2 lg:bottom-4 md:bottom-2">
            For Your Culinary Journey
          </span>
        </div>
      </motion.div>
    </div>
  );
}
