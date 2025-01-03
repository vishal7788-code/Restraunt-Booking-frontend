"use client";
import Image from "next/image";
import homeImg from "../../../public/main.jpg";
import BookingForm from "@/components/BookingForm";

export default function Booking() {
  return (
    <div>
      <div>
        <div className="w-full h-screen">
          <Image
            src={homeImg}
            alt="restaurant booking"
            layout="fill"
            className="bg-cover bg-center object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black  bg-opacity-30 backdrop-blur-sm">
        <BookingForm/>
        </div>
      </div>
    </div>
  );
}
