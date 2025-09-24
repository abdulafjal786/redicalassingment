"use client"; 
import dynamic from "next/dynamic";
import DoctorsList from "@/component/Doctores/DoctoraList";
import NavigationBar from "@/component/Doctores/NavigationBar";

const AppointmentForm = dynamic(() => import("@/component/booknow/BookNow"), {
  ssr: false,
});

const DoctorsPage = () => {
  const doctors = [
    {
      doctorName: "Dr. Abdul Afjal",
      profileImage:
        "https://cdn.pixabay.com/photo/2024/09/03/15/21/ai-generated-9019520_1280.png",
      mobile: "+91 9876543210",
      specialist: "Gynecologist",
      time: "10:00 AM - 2:00 PM",
    },
    {
      doctorName: "Dr. Manjunath Naik",
      profileImage:
        "https://cdn.pixabay.com/photo/2023/12/14/20/12/doctor-8442165_1280.jpg",
      mobile: "+91 9876501234",
      specialist: "Orthopedic",
      time: "3:00 PM - 7:00 PM",
    },
  ];

  const allDoctors = [doctors[0], ...Array.from({ length: 9 }, () => doctors[1])];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="pb-20 md:mb-5 mb-15">
        <NavigationBar title="Doctors Available" />
      </div>

      <p className="text-center text-4xl mb-5 text-gray-500">Our Best Doctors</p>

      <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-20 gap-6">
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allDoctors.map((doc, index) => (
              <DoctorsList
                key={index}
                doctorName={doc.doctorName}
                profileImage={doc.profileImage}
                mobile={doc.mobile}
                specialist={doc.specialist}
                time={doc.time}
              />
            ))}
          </div>
        </div>

        <div className="md:col-span-1 hidden md:block">
          <div className="sticky top-24">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
