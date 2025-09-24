'use client';
import Image from "next/image";
import { FaFilter, FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

const Dashboard = () => {

    const [greeting, setGreeting] = useState("Good morning,");

    useEffect(() => {
        const now = new Date();
        const hour = now.getHours();

        if (hour >= 5 && hour < 12) {
            setGreeting("Good morning,");
        } else if (hour >= 12 && hour < 17) {
            setGreeting("Good afternoon,");
        } else {
            setGreeting("Good evening,");
        }
    }, []);
    return (
        <div className="w-full">
            {/* Gradient Background */}
            <div
                className="w-full h-44 sm:h-52 md:h-23 rounded-b-3xl"
                style={{
                    background:
                        "linear-gradient(90deg, #B0A4F5 0%, #EDA197 100%)",
                }}
            >
                {/* Inner Padding Container */}
                <div className="px-4 sm:px-6 pt-6 pb-4 flex flex-col gap-4 h-full">

                    {/* Header Row: Greeting + Search (Desktop) + Profile */}
                    <div className="flex justify-between items-center gap-4">
                        {/* Greeting */}
                        <div className="flex-1 min-w-0">
                            <p className="text-sm sm:text-base text-white opacity-90">
                                {greeting},
                            </p>
                            <h1 className="text-lg sm:text-xl font-semibold text-white truncate">
                                Manjunath Naik
                            </h1>
                        </div>

                        {/* Search Bar - Hidden on mobile, visible on desktop */}
                        <div className="hidden md:flex flex-1 max-w-md justify-center">
                            <div className="relative w-full max-w-xs bg-white rounded-xl flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search Psychologists..."
                                    className="w-full py-3 pl-4 pr-12 rounded-xl text-sm placeholder-gray-400 focus:outline-none"
                                    style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                                />
                                {/* Search icon */}
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-sm">
                                    <FaSearch />
                                </span>
                                {/* Filter icon */}

                            </div>
                            <div className="bg-white p-4 rounded-xl ml-2 flex items-center justify-center">
                                <span className="text-gray-600 text-sm">
                                    <FaFilter />
                                </span>
                            </div>
                        </div>

                        {/* Profile */}
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full overflow-hidden relative flex-shrink-0">
                            <Image
                                src="https://cdn.pixabay.com/photo/2024/09/03/15/21/ai-generated-9019520_1280.png"
                                alt="Profile"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Search Bar - Visible on mobile, hidden on desktop */}
                    <div className="md:hidden flex">
                        <div className="relative bg-white rounded-xl">
                            <input
                                type="text"
                                placeholder="Search Psychologists..."
                                className="w-full py-3 pl-4 pr-12 rounded-xl text-sm placeholder-gray-400 focus:outline-none"
                                style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                            />
                            {/* Search icon */}
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-sm">
                                <FaSearch />
                            </span>
                            {/* Filter icon */}

                        </div>
                        <div className="bg-white rounded-xl ms-2 p-4">
                            <span className="text-gray-600 text-sm">
                                <FaFilter />
                            </span>
                        </div>
                    </div>

                    {/* Additional Content Space */}

                </div>
            </div>
        </div>
    );
};

export default Dashboard;