"use client";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

export default function HeroButton() {
  return (
    <div className="relative xl:top-[-5rem] top-[5rem] md:top-[-1.5rem]  lg:top-[-5rem]">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="border-2 border-white xl:w-[7rem] xl:h-[7rem] w-[6rem] h-[6rem]  lg:w-[6rem] lg:h-[6rem] rounded-full relative lg:left-[50%] left-[38%] md:left-[40%]  xl:left-[50%]"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileTap={{
            scale: 1.1,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          className="bg-white xl:w-[6rem] xl:h-[6rem] lg:w-[5rem] top-[0.38rem]  w-[5rem] h-[5rem] lg:h-[5rem] rounded-full mx-auto relative xl:top-[0.35rem] lg:top-[0.4rem] hover:bg-gray-300 ease-in duration-200 cursor-pointer"
        >
          <Link href="/Booking"><button className="flex relative xl:top-7 xl:left-5 left-3 lg:top-5 top-4 lg:left-3 flex-col cursor-pointer">
            Book Your <br /> <span> Table</span>
            <ArrowDownRight className=" absolute top-5 left-9 xl:text-lg lg:text-lg hover:rotate-45 ease-in duration-200" />
          </button></Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
