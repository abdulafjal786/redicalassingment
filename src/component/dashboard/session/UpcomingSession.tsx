import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";

interface SessionCardProps {
    time: string;
    location: string;
    doctorName: string;
    profileImage: string;
    duration: string;
    mode: "Online" | "In-Person";
    previousSession: string;
    className?: string;
}

const SessionCard = ({
    time = "11:00 AM",
    location = "Bandra",
    doctorName = "Dr. Manjunath Naik",
    profileImage = "https://cdn.pixabay.com/photo/2024/09/03/15/21/ai-generated-9019520_1280.png",
    duration = "01:00 HR",
    mode = "Online",
    previousSession = "Tuesday, March 5, 2023",
    className = "",
}: SessionCardProps) => {
    return (
        <div
            className={`bg-white/80 mb-2 rounded-2xl shadow-lg border border-gray-100 overflow-hidden w-full max-w-[390px] ${className}`}
        >
          <div className="p-4 flex flex-col gap-4">
                {/* Top Row: Profile + Doctor Name + Time/Location */}
                <div className="flex items-center justify-between w-full">
                    {/* Left: Time & Location */}
                    <div className="flex flex-col">
                        <p className="text-gray-800 text-sm font-medium">{time || "11:30AM"}</p>
                        <p className="text-gray-600 text-sm">{location || "Bandra"}</p>
                    </div>

                    {/* Right: Profile + Name + Icons */}
                    <div className="flex items-center gap-3">
                        {/* Profile Image */}
                        <div className="w-12 h-12 rounded-full overflow-hidden relative">
                            <Image
                                src={profileImage || "https://cdn.pixabay.com/photo/2024/09/03/15/21/ai-generated-9019520_1280.png"}
                                alt={doctorName}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Doctor Name + Phone Icon */}
                        <div className="flex flex-col items-start">
                            <p className="text-gray-900 text-sm">{doctorName || "Dr Abdul Afjal"}</p>
                            <button className="bg-purple-950 p-2 rounded-full flex items-center justify-center">
                                <FaPhone className="text-gray-200 text-sm" />
                            </button>
                        </div>

                        {/* Dropdown Arrow */}
                        <div className="flex items-center justify-center">
                            <SlArrowDown className="text-gray-600" />
                        </div>
                    </div>
                </div>

                {/* Session Details */}
                <div className="">
                    <div className=" rounded-lg p-1 flex flex-col">
                        <p className="text-xs text-gray-500">Session Duration <span>{duration || "01:00 HR"}</span></p>
                        {/* <p className="text-sm font-medium text-gray-900"></p> */}
                    </div>
                    <div className=" rounded-lg p-1 flex flex-col">
                        <p className="text-xs text-gray-500">Session Mode:<span>{mode || "Online"}</span> </p>
                        <p className="text-sm font-medium text-gray-900"></p>
                    </div>
                </div>

                {/* Previous Session */}
                <div className="flex justify-between items-center">
                    <button
                        className="p-2 rounded-xl text-white text-sm"
                        style={{
                            background:
                                "linear-gradient(90deg, #B0A4F5 0%, #EDA197 100%)",
                        }}
                        // background: linear-gradient(90deg, #B0A4F5 0%, #EDA197 100%);

                    >
                        Mark as Completed
                    </button>
                    <div>
                        <p className="text-xs text-gray-500">Previous Session : <br /><span>{previousSession || "Tuesday, March 5, 2023"}</span></p>

                    </div>

                    {/* Mark as Completed Button */}

                </div>
            </div>
            
        </div>
    );
};




export default SessionCard;
