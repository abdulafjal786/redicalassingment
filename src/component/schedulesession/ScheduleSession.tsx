"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScheduleSession() {
  const [sessionMode, setSessionMode] = useState<"Online" | "In-Person">(
    "In-Person"
  );
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = {
    Morning: ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"],
    Afternoon: ["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"],
    Evening: ["04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"],
    Night: ["08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"],
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-purple-100 to-pink-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-5 relative mt-32 sm:mt-24">
        {/* Header */}
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Schedule Session
        </h2>

        {/* Patient Info */}
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

        {/* Practitioner Info */}
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

        {/* Session Type */}
        <section className="mb-3">
          <label className="text-gray-700 text-sm font-medium">
            Session Type
          </label>
          <select className="w-full mt-1 p-2 rounded-xl border border-gray-300 text-gray-700 text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none">
            <option>Counselling (1 hour)</option>
            <option>Follow-up (30 mins)</option>
          </select>
        </section>

        {/* Session Mode */}
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

        {/* Date & Time */}
        <section className="grid grid-cols-2 gap-3 mb-3">
          {/* Date Picker */}
          <div>
            <label className="text-gray-700 text-sm font-medium">
              Session Date
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl mt-1 px-2">
              <input
                type="date"
                className="w-full p-2 text-sm border-0 focus:ring-0 focus:outline-none"
              />
              <Calendar className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Time Picker */}
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
                aria-label="Select session time"
              />
              <Clock className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </section>

        {/* Online Session Link */}
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

        {/* Session Details */}
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

        {/* Actions */}
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

      {/* Time Picker Modal */}
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
              {/* Modal Header */}
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

              {/* Time Slots */}
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
                          className={`px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-300 ${
                            selectedTime === slot
                              ? "bg-pink-200/80 border-pink-500 text-pink-700"
                              : "border-gray-300 text-gray-700"
                          }`}
                          onClick={() => {
                            setSelectedTime(slot);
                            setShowTimePicker(false);
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

              {/* Modal Actions */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setShowTimePicker(false)}
                  className="flex-1 py-2 rounded-xl border border-red-400 text-red-500 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300"
                >
                  Cancel
                </button>
                <button
                  disabled={!selectedTime}
                  onClick={() => setShowTimePicker(false)}
                  className={`flex-1 py-2 rounded-xl font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 ${
                    selectedTime
                      ? "bg-purple-500 text-white"
                      : "bg-purple-200 text-purple-400 cursor-not-allowed"
                  }`}
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
