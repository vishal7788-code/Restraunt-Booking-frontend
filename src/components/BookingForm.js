"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import axios from "axios";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    guests: "",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const validate = () => {
    if (!formData) {
      setErrors({ form: "Form data is not initialized." });
      return false;
    }
  
    const newErrors = {};
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
  
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.guests.trim() || formData.guests <= 0) {
      newErrors.guests = "Number of guests must be at least 1.";
    }
    if (!formData.date.trim()) newErrors.date = "Date is required.";
    if (!formData.time.trim()) newErrors.time = "Time is required.";
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BOOKING_API_ENDPOINT}/bookTable`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.success) {
        setSuccessMessage("Booking successfully created!");
        setTimeout(() => router.push("/"), 1500);
      } else {
        setErrors({ form: response.data.message || "Booking failed. Try again later." });
      }
    } catch (error) {
      setErrors({ form: error.response?.data?.message || "Error submitting the form. Please try again later." });
    }
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center max-h-screen px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto mt-2 xl:mt-15"
      >
        <form className="space-y-3 lg:space-y-2 md:space-y-2" onSubmit={handleSubmit}>
          <h3 className="text-lg xl:text-xl font-bold text-center">Book Your Table</h3>
          <div>
            <label htmlFor="fullName" className="block font-medium text-sm sm:text-base">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block font-medium text-sm sm:text-base">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-sm sm:text-base">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="guests" className="block font-medium text-sm sm:text-base">Guests</label>
            <input
              id="guests"
              name="guests"
              type="number"
              min="1"
              placeholder="Number of guests"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.guests}
              onChange={handleChange}
            />
            {errors.guests && <p className="text-red-500 text-sm">{errors.guests}</p>}
          </div>
          <div className="flex justify-between px-1 gap-2">
            <div>
              <label htmlFor="date" className="block font-medium text-sm sm:text-base">Date</label>
              <input
                id="date"
                name="date"
                type="date"
                className="w-[30vw] xl:w-[20vw] lg:w-[25vw] md:w-[25vw] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.date}
                onChange={handleChange}
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>
            <div>
              <label htmlFor="time" className="block font-medium text-sm sm:text-base">Time</label>
              <input
                id="time"
                name="time"
                type="time"
                className="w-[20vw] xl:w-[15vw] lg:w-[15vw] md:w-[15vw] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.time}
                onChange={handleChange}
              />
              {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
            </div>
          </div>
          {errors.form && <p className="text-red-500 text-center">{errors.form}</p>}
          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={handleCancel} className="px-3 py-2 bg-gray-200 text-sm sm:text-base rounded-lg hover:bg-gray-300">Cancel</button>
            <button type="submit" className="px-3 py-2 bg-black text-white text-sm sm:text-base rounded-lg">Submit</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
