"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, User2, Menu, X } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import BookingInfo from "./BookingInfo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bookingData, setBookingData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setBookingData(null); 
    setError("");
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BOOKING_API_ENDPOINT}/getBookings/${phoneNumber}`
      );

      if (response.data.success) {
        const { bookedSlots } = response.data;
        if (bookedSlots.length > 0) {
          setBookingData(bookedSlots[0]); 
          setError("")
          
        }
      } else {
        setError("Error fetching bookings. Please try again.");
        setBookingData(null);
      }
    } catch (err) {
      console.error("Error fetching booking:", err);
      setError("Booking not found. Please try again.");
      setBookingData(null);
    }
  };

  return (
    <>
      <motion.nav
        className="flex justify-between items-center px-4 py-2 bg-transparent relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-white text-2xl md:text-3xl">
          <h1>Book Your Table</h1>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-4 md:hidden">
          <Search
            aria-label="Search"
            className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full p-1 hover:bg-gray-300 ease-in duration-200 cursor-pointer"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          <div
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white text-black p-2 md:hidden"
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </motion.div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white text-black flex flex-col gap-4 p-4 md:hidden"
          >
            <li className="hover:text-gray-300 ease-in duration-200 cursor-pointer">
              Home
            </li>
            <li className="hover:text-gray-300 ease-in duration-200 cursor-pointer">
              About
            </li>
            <li className="hover:text-gray-300 ease-in duration-200 cursor-pointer">
              Contact us
            </li>
            <Link href="/Booking">
              <li className="hover:text-gray-300 ease-in duration-200 cursor-pointer">
                Booking
              </li>
            </Link>
          </motion.ul>
        )}

        {/* Desktop Menu with Fade-In */}
        <motion.ul
          className="hidden md:flex items-center gap-6 text-white text-base lg:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <li className="hover:text-gray-300 ease-in duration-200 cursor-pointer">
            Home
          </li>
          <li className="hover:text-gray-300 ease-in duration-200 cursor-pointer">
            About
          </li>
          <li className="hover:text-gray-300 ease-in duration-200 cursor-pointer">
            Contact us
          </li>
        </motion.ul>

        {/* Desktop Search with Fade-In */}
        <div className="hidden md:flex items-center gap-4 relative">
          <Search
            aria-label="Search"
            className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full p-1 hover:bg-gray-300 ease-in duration-200 cursor-pointer"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full right-0 mt-2 bg-white text-black p-4 rounded-lg shadow-lg w-96"
            >
              <p className="text-sm text-gray-500 ml-1">Enter Your Phone Number</p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search your table..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button
                  className="px-4 py-2 border-2 text-black rounded-lg hover:bg-gray-300 ease-in duration-200 cursor-pointer"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </motion.div>
          )}
          <User2
            aria-label="User Profile"
            className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full p-1 hover:bg-gray-300 ease-in duration-200 cursor-pointer"
          />
          <Link href="/Booking">
            <button className="text-sm md:text-base lg:text-lg bg-white px-4 py-1 md:px-6 md:py-2 rounded-2xl hover:bg-gray-300 ease-in duration-200 cursor-pointer">
              Booking
            </button>
          </Link>
        </div>
      </motion.nav>

      {/* Conditionally render BookingInfo if bookingData exists */}
      {bookingData ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <BookingInfo booking={bookingData} />
        </motion.div>
      ) : null}
     
    </>
  );
}
