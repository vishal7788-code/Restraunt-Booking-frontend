"use client";
import { CircleCheckBig, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import img from "../../public/samosa-on-a-plate-with-sauce-and-tomatoes-png.webp";

export default function BookingInfo({ booking }) {
  // Animation Variants
  const popupVariant = {
    hidden: { opacity: 0, scale: 0.8, y: -50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.3 } },
  };

  // State to manage popover visibility
  const [isPopoverOpen, setIsPopoverOpen] = useState(true);

  // Ensure booking data exists before rendering
  if (!booking || !isPopoverOpen) return null;

  return (
    <div className="h-0">
      {/* Booking Info Popover for Mobile View */}
      <motion.div
        variants={popupVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative  justify-end items-center w-full top-[11rem] p-2 z-50 left-[-1rem] lg:hidden xl:hidden md:hidden"
      >
        <div className="border-2 border-white w-[70%] mx-auto rounded-lg p-2">
          <div className="w-full bg-white rounded-lg p-2">
            <div className="flex justify-between">
              <CircleCheckBig size={55} className="text-gray-500" />
              <Image
                src={img}
                alt="samosa"
                className="w-[20vw] h-[20vw] rounded-lg"
              />
            </div>
            <div className="p-2 flex justify-between">
              <h2>Your Booking is Confirmed!</h2>
              <X
                className="w-4 h-4 mt-1 cursor-pointer text-gray-500 hover:text-red-500"
                onClick={() => setIsPopoverOpen(false)}
              />
            </div>
            <div className="bg-gray-300 w-full rounded-lg p-3">
              <div className="flex justify-between">
                <p>Name</p>
                <p>{booking.name || "N/A"}</p>
              </div>
              <div className="flex justify-between">
                <p>Phone Number</p>
                <p>{booking.phoneNumber || "N/A"}</p>
              </div>
              <div className="flex justify-between">
                <p>Date</p>
                <p>{booking.date || "N/A"}</p>
              </div>
              <div className="flex justify-between">
                <p>Time</p>
                <p>{booking.time  || "N/A"}</p>
              </div>
              <div className="flex justify-between">
                <p>Guests</p>
                <p>{booking.guests || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Desktop View (Static Layout) */}
      <div className="hidden md:block">
        <motion.div
          variants={popupVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative justify-end items-center w-[80%] top-[8rem] md:w-[50%] p-2 xl:top-[8rem] xl:w-[20rem] xl:left-[73%] z-50 md:left-[58%] lg:left-[49%] lg:flex xl:flex"
        >
          <div className="border-2 border-white w-[70%] xl:w-[20rem] rounded-lg p-2">
            <div className="w-full bg-white rounded-lg p-2">
              <div className="flex justify-between">
                <CircleCheckBig size={55} className="text-gray-500" />
                <Image
                  src={img}
                  alt="samosa"
                  className="w-[10vw] h-[10vw] rounded-lg"
                />
              </div>
              <div className="p-2 flex justify-between">
                <h2>Your Booking is Confirmed!</h2>
                <X
                  className="w-6 h-6 cursor-pointer text-gray-500 hover:text-red-500"
                  onClick={() => setIsPopoverOpen(false)}
                />
              </div>
              <div className="bg-gray-300 w-full rounded-lg p-3">
                <div className="flex justify-between">
                  <p>Name</p>
                  <p>{booking.name || "N/A"}</p>
                </div>
                <div className="flex justify-between">
                  <p>Phone Number</p>
                  <p>{booking.phoneNumber || "N/A"}</p>
                </div>
                <div className="flex justify-between">
                  <p>Date</p>
                  <p>{booking.date || "N/A"}</p>
                </div>
                <div className="flex justify-between">
                  <p>Time</p>
                  <p>{booking.time || "N/A"}</p>
                </div>
                <div className="flex justify-between">
                  <p>Guests</p>
                  <p>{booking.guests || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
