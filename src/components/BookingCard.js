"use client"
import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";

export default function BookingCard() {
  const slideDownVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      variants={slideDownVariant}
      initial="hidden"
      animate="visible"
      className="flex"
    >
      <div className="w-[80%] top-[2rem] md:w-[30%] lg:w-[25vw] xl:h-[12vh] xl:w-[18vw] lg:h-[13vh] md:h-[12vh] bg-white rounded-xl xl:p-3 p-4 lg:p-2 md:p-3 m-7">
        <div>
          <div className="flex gap-2 p-1">
            <CheckSquare className="text-green-500" />
            <p className="text-2xl">Booked</p>
          </div>
          <p className="text-sm text-gray-500 ml-9 -mt-2">Your table is booked for  10:00 AM</p>
        </div>
      </div>
    </motion.div>
  );
}
