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

const PastSession = ({
  time = "11:00 AM",
  doctorName = "Dr. Manjunath Naik",
  previousSession = "Tuesday, March 5, 2023",
  className = "",
}: SessionCardProps) => {
  return (
    <div
      className={`bg-white/80 rounded-2xl mb-2 shadow-lg border border-gray-100 overflow-hidden w-full max-w-[390px] ${className}`}
    >
      <div className="p-4 flex flex-col">
        <div className="flex items-start justify-between w-full">
    
          <div className="w-1/4">
            <p className="text-gray-800 text-sm font-medium">
              {time || "11:30AM"}
            </p>
          </div>

          <div className="w-3/4 flex flex-col">
            <p className="text-gray-900 text-sm font-semibold">
              {doctorName || "Dr Abdul Afjal"}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Previous Session:{" "}
              <span className=" text-gray-500"><br/>
                {previousSession || "Tuesday, March 5, 2023"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastSession;
