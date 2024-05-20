import React from 'react'
import { FaAmbulance, FaChalkboardTeacher, FaStethoscope, FaHandsHelping} from "react-icons/fa";
import { LuHelpingHand } from "react-icons/lu";



export default function ServicesIcon() {
    const services = [
        {
          icon: <FaAmbulance />,
          title: "24/7 Ambulance Services",
        },
        {
          icon: <FaHandsHelping />,
          title: "Free Dead Body Cleaning",
        },
        {
          icon: <FaChalkboardTeacher />,
          title: "Free Training",
        },
        {
          icon: <FaStethoscope />,
          title: "Free Medical Services",
        },
        {
          icon: <LuHelpingHand />,
          title: "Social Services",
        },
      ];
      
  return (
    <section className="flex md:flex-row flex-col items-center justify-center md:mt-8">
      {
        services.map((service, index) => (
          <div key={index} className="flex items-center justify-center w-full  m-2 p-2 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center w-14 h-14 text-blue-500 bg-blue-100 rounded-full">
              {service.icon}
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-700">{service.title}</h3>
            </div>
          </div>
        ))
      }
     </section>
  )
}