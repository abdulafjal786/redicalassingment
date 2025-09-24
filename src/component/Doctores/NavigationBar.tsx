'use client';
import { SlArrowLeft, SlGrid } from "react-icons/sl";
import { FaFilter, FaSearch } from "react-icons/fa";
// import DoctorsList from "./DoctoraList";

interface Props {
  title?: string;
}

const NavigationBar = ({title}:Props) => {
  const handleBack = () => {
    window.history.back();
  };

  // Example array to represent 6 sessions

  return (
    <header
      className="w-full fixed z-50 shadow-md"
      style={{
        background: "linear-gradient(90deg, #B0A4F5 0%, #EDA197 100%)",
      }}
    >
      {/* Mobile View */}
      <div className="sm:hidden flex flex-col p-4">
        {/* Back + Title */}
        <div className="flex items-center gap-3">
          <button onClick={handleBack} className="p-1">
            <SlArrowLeft className="text-gray-700 text-lg" />
          </button>
          <h1 className="text-lg font-bold text-gray-800">{title}</h1>
        </div>

        {/* Search + Filter */}
        <div className="flex mt-4">
          <div className="relative bg-white rounded-xl flex-1">
            <input
              type="text"
              placeholder="Search Psychologists..."
              className="w-full py-3 pl-4 pr-10 rounded-xl text-sm placeholder-gray-400 focus:outline-none"
              style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-sm">
              <FaSearch />
            </span>
          </div>
          <button className="bg-white rounded-xl ms-2 p-3 flex items-center justify-center">
            <FaFilter className="text-gray-600 text-sm" />
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:flex items-center justify-between px-6 py-3">
        {/* Title */}
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>

        {/* Search + Icons */}
        <div className="flex items-center gap-3 flex-1 max-w-xl ml-6">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search Psychologists..."
              className="w-full py-2 pl-4 pr-10 rounded-lg text-sm placeholder-gray-400 focus:outline-none bg-white"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
              <FaSearch />
            </span>
          </div>
          <button className="bg-white p-2 rounded-lg shadow hover:bg-gray-100">
            <FaFilter className="text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-lg shadow hover:bg-gray-100">
            <SlGrid className="text-gray-600" />
          </button>
        </div>
      </div>
      {/* Doctor List */}


    </header>

  );
};

export default NavigationBar;
