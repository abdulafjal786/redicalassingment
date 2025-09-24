'use client';
import { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    disease: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // 🔹 You can add API call here
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 text-center mb-4">
        Book Free Appointment
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            placeholder="+91 9876543210"
            value={formData.mobile}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            maxLength={10}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Disease */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Disease / Problem</label>
          <select
            name="disease"
            value={formData.disease}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Select Disease</option>
            <option value="Gynecology">Gynecology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Urology">Urology</option>
            <option value="ENT">ENT</option>
            <option value="General Surgery">General Surgery</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 w-full py-3 rounded-lg font-semibold text-white text-sm sm:text-base"
          style={{
            background: "linear-gradient(90deg, #BBA3E4 0%, #E7A1A0 100%)",
          }}
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
