"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import Link from "next/link";

interface DoctorCardProps {
  doctorName: string;
  profileImage: string;
  mobile: string;
  specialist: string;
  expertise?: string;
  gender?: "Male" | "Female";
  sessionMode?: "Online" | "In-Person" | "In-Person & Online";
  sessionFee?: string;
  time: string;
}

const DoctorDetails = ({
  expertise,
  gender,
  sessionMode,
  sessionFee,
}: Pick<DoctorCardProps, "expertise" | "gender" | "sessionMode" | "sessionFee">) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-gray-500">Expertise:</span>
      <span className="text-gray-900">{expertise}</span>
    </div>
    <div className="flex justify-between text-sm">
      <span className="text-gray-500">Gender:</span>
      <span className="text-gray-900">{gender}</span>
    </div>
    <div className="flex justify-between text-sm">
      <span className="text-gray-500">Session Mode:</span>
      <span className="text-gray-900">{sessionMode}</span>
    </div>
    <div className="flex justify-between text-sm">
      <span className="text-gray-500">Session Fee:</span>
      <span className="text-gray-900">{sessionFee}</span>
    </div>
  </div>
);

const DoctorCard = ({
  doctorName = "Dr. Abdul Afjal",
  profileImage = "https://cdn.pixabay.com/photo/2024/09/03/15/21/ai-generated-9019520_1280.png",
  mobile = "+91 9876543210",
  specialist = "Gynecologist",
  expertise = "Gynecology",
  gender = "Male",
  sessionMode = "In-Person & Online",
  sessionFee = "1500 Rs",
}: DoctorCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // detect screen size
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toggleDetails = () => {
    if (isDesktop) setExpanded(true); 
    else setExpanded((prev) => !prev); 
  };

  return (
    <>
      <div className="bg-gray-100 rounded-2xl shadow border border-gray-200 overflow-hidden w-full mb-3">
        {/* Header */}
        <button
          className="flex items-center justify-between w-full p-4"
          onClick={toggleDetails}
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image src={profileImage} alt={doctorName} fill className="object-cover" />
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-sm">{doctorName}</p>
              <p className="text-gray-600 text-xs">{mobile}</p>
              <p className="text-gray-500 text-xs">{specialist}</p>
            </div>
          </div>
          {expanded && !isDesktop ? (
            <SlArrowUp className="text-gray-600" />
          ) : (
            <SlArrowDown className="text-gray-600" />
          )}
        </button>
        {!isDesktop && expanded && (
          <div className="px-4 pb-4 border-t border-gray-200 animate-slideDown">
            <DoctorDetails
              expertise={expertise}
              gender={gender}
              sessionMode={sessionMode}
              sessionFee={sessionFee}
            />
            <Link href="/book-session">
              <button className="mt-3 w-full py-2 rounded-lg font-medium text-white bg-gradient-to-r from-[#BBA3E4] to-[#E7A1A0]">
                Book Now
              </button>
            </Link>
          </div>
        )}
      </div>
      {isDesktop && expanded && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="rounded-2xl shadow-lg max-w-md w-full p-6 relative 
                          bg-white/50 backdrop-blur-xl border border-white/30">
          
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setExpanded(false)}
            >
              ✕
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden relative">
                <Image src={profileImage} alt={doctorName} fill className="object-cover" />
              </div>
              <div>
                <p className="text-gray-900 font-semibold">{doctorName}</p>
                <p className="text-gray-600 text-sm">{mobile}</p>
                <p className="text-gray-500 text-sm">{specialist}</p>
              </div>
            </div>

            <DoctorDetails
              expertise={expertise}
              gender={gender}
              sessionMode={sessionMode}
              sessionFee={sessionFee}
            />

            <Link href="/book-session">
              <button className="mt-4 w-full py-2 rounded-lg font-medium text-white bg-gradient-to-r from-[#BBA3E4] to-[#E7A1A0]">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorCard;
