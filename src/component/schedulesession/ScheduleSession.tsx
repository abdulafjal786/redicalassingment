"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, Clock, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScheduleSession() {
  const [sessionMode, setSessionMode] = useState<"Online" | "In-Person">(
    "In-Person"
  );
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const timeSlots = {
    Morning: ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"],
    Afternoon: ["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"],
    Evening: ["04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"],
    Night: ["08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"],
  };



    const unavailableTimes: Record<string, string[]> = {
    "2025-09-26": ["09:00 AM", "02:00 PM", "06:00 PM"], // date => blocked times
    "2025-09-27": ["08:00 AM", "12:00 PM"],
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    setSelectedTime(""); // reset time if date changes
  };

useEffect(() => {
    setShowTimePicker(true)
  }, [selectedDate]);

  const isSlotDisabled = (slot: string) => {
    if (!selectedDate) return false;
    return unavailableTimes[selectedDate]?.includes(slot) ?? false;
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-purple-100 to-pink-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-5 relative mt-32 sm:mt-24">
       
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Schedule Session
        </h2>

        <section aria-label="Patient Information" className="mb-3">
          <p className="text-sm font-medium text-gray-700 mb-1">Patient</p>
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
            <Image
              src="https://cdn.pixabay.com/photo/2024/09/03/15/21/ai-generated-9019520_1280.png"
              alt="Patient"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-gray-900 text-sm font-medium">Shubham Naik</p>
              <p className="text-gray-500 text-xs">+91 9876543210</p>
            </div>
          </div>
        </section>
        <section aria-label="Practitioner Information" className="mb-3">
          <p className="text-sm font-medium text-gray-700 mb-1">
            Assign Practitioner
          </p>
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
            <Image
              src="https://cdn.pixabay.com/photo/2024/09/03/15/21/ai-generated-9019520_1280.png"
              alt="Doctor"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-gray-900 text-sm font-medium">Saria Dilon</p>
              <p className="text-gray-500 text-xs">+91 9876543210</p>
            </div>
          </div>
        </section>
        <section className="mb-3">
          <label className="text-gray-700 text-sm font-medium">
            Session Type
          </label>
          <select className="w-full mt-1 p-2 rounded-xl border border-gray-300 text-gray-700 text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none">
            <option>Counselling (1 hour)</option>
            <option>Follow-up (30 mins)</option>
          </select>
        </section>
        <section className="mb-3">
          <label className="text-gray-700 text-sm font-medium">
            Session Mode
          </label>
          <div className="flex gap-6 mt-2">
            {["In-Person", "Online"].map((mode) => (
              <label
                key={mode}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="sessionMode"
                  value={mode}
                  checked={sessionMode === mode}
                  onChange={() => setSessionMode(mode as "Online" | "In-Person")}
                  className="accent-purple-500"
                />
                <span className="text-gray-700 text-sm">{mode}</span>
              </label>
            ))}
          </div>
        </section>
        <section className="grid grid-cols-2 gap-3 mb-3">
         
            <div>
            <label className="text-gray-700 text-sm font-medium">
              Session Date
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl mt-1 px-2">
              <input
                type="date"
                className="w-full p-2 text-sm border-0 focus:ring-0 focus:outline-none"
                value={selectedDate}
                onChange={handleDateChange}
              />
              <Calendar className="w-4 h-4 text-gray-400" />
            </div>
          </div>

           <div>
            <label className="text-gray-700 text-sm font-medium">
              Session Time
            </label>
            <div
              onClick={() => setShowTimePicker(true)}
              className="flex items-center border border-gray-300 rounded-xl mt-1 px-2 cursor-pointer"
            >
              <input
                type="text"
                readOnly
                placeholder="Select Time"
                value={selectedTime}
                className="w-full p-2 text-sm border-0 focus:ring-0 focus:outline-none cursor-pointer"
              />
              <Clock className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </section>

        {sessionMode === "Online" && (
          <section className="mb-3">
            <label className="text-gray-700 text-sm font-medium">
              Online Session Link
            </label>
            <input
              type="url"
              placeholder="Enter meeting link"
              className="w-full mt-1 p-2 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </section>
        )}

        <section className="mb-3">
          <label className="text-gray-700 text-sm font-medium">
            Session Details (Optional)
          </label>
          <textarea
            placeholder="Enter session details here"
            className="w-full mt-1 p-2 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
            rows={3}
          />
        </section>

        <div className="flex gap-3 mt-4">
          <button
            className="flex-1 py-2 rounded-xl border border-red-400 text-red-500 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300"
            aria-label="Cancel session"
          >
            Cancel
          </button>
          <button
            className="flex-1 py-2 rounded-xl text-white font-medium text-sm bg-gradient-to-r from-purple-300 to-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
            aria-label="Confirm session"
          >
            Confirm
          </button>
        </div>
      </div>

      <AnimatePresence>
          {showTimePicker && (
            <motion.div
              className="fixed inset-0 bg-black/30 flex justify-center items-end z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-modal="true"
              role="dialog"
            >
              <motion.div
                className="w-full max-w-md rounded-t-2xl p-5 bg-white/70 backdrop-blur-xl shadow-lg border border-white/40"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-gray-900 font-medium text-sm">
                    Select Session Time
                  </h3>
                  <button
                    onClick={() => setShowTimePicker(false)}
                    aria-label="Close time picker"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                  {Object.entries(timeSlots).map(([period, slots]) => (
                    <div key={period}>
                      <h4 className="text-gray-800 font-medium text-sm mb-2">
                        {period}
                      </h4>
                      <div className="grid grid-cols-4 gap-2">
                        {slots.map((slot) => (
                          <button
                            key={slot}
                            disabled={isSlotDisabled(slot)}
                            className={`px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-300 ${
                              selectedTime === slot
                                ? "bg-pink-200/80 border-pink-500 text-pink-700"
                                : isSlotDisabled(slot)
                                ? "bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed"
                                : "border-gray-300 text-gray-700"
                            }`}
                            onClick={() => {
                              if (!isSlotDisabled(slot)) {
                                setSelectedTime(slot);
                                setShowTimePicker(false);
                              }
                            }}
                            aria-pressed={selectedTime === slot}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
}
