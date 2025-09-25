"use client";

import BookNow from "@/component/booknow/BookNow";
import Dashboard from "@/component/dashboard/DashboardHeader";
import Button from "@/component/dashboard/session/Button";
import PastSession from "@/component/dashboard/session/PastSession";
import SessionCard from "@/component/dashboard/session/UpcomingSession";
import Link from "next/link";

const Page = () => {
    const upcomingSessions = [1, 2, 3];
    const pastSessions = [1, 2, 3, 4, 5, 6];

    return (
        <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-purple-100 to-pink-100">

            <header>
                <Dashboard />
            </header>

            <main className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 md:p-8">

                <section className="space-y-4" aria-labelledby="upcoming-sessions">
                    <h2 id="upcoming-sessions" className="text-sm font-bold text-black">
                        Upcoming Sessions
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                        {upcomingSessions.map((_, index) => (
                            <SessionCard
                                key={index}
                                time=""
                                location=""
                                duration=""
                                mode="Online"
                                previousSession=""
                                doctorName=""
                                profileImage=""
                            />
                        ))}
                    </div>
                </section>

                {/* Past Sessions */}
                <section className="space-y-4" aria-labelledby="past-sessions">
                    <h2 id="past-sessions" className="text-sm font-bold text-black">
                        Past Sessions
                    </h2>
                    <div className="space-y-3">
                        {pastSessions.map((_, index) => (
                            <PastSession
                                key={index}
                                time=""
                                location=""
                                doctorName=""
                                profileImage=""
                                duration=""
                                mode="Online"
                                previousSession=""
                            />
                        ))}
                    </div>
                </section>
                <section className="w-full flex flex-col items-center mt-5">
                   
                    <div className="hidden lg:flex w-full max-w-md">
                        <BookNow />
                    </div>

                    
                    <Link href="/doctors" className="w-full">
                        <div className="flex w-full">
                            <button
                                type="submit"
                                className="mt-2 m-auto w-[90%] py-3 rounded-lg font-semibold text-white text-sm sm:text-base"
                                style={{
                                    background: "linear-gradient(90deg, #BBA3E4 0%, #E7A1A0 100%)",
                                }}
                            >
                                Schedule Now
                            </button>
                        </div>
                    </Link>
                </section>
            </main>

            <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%]">
                <Button />
            </div>
        </div>
    );
};

export default Page;
