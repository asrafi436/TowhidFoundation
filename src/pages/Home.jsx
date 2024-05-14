import React from "react";
import { FaFacebookF, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

export const Home = () => {
  const images = [
    "https://www.aclu.org/wp-content/uploads/2023/09/education-equity-blog.jpg",
    "https://www.aclu.org/wp-content/uploads/2023/09/education-equity-blog.jpg",
    "https://www.aclu.org/wp-content/uploads/2023/09/education-equity-blog.jpg",
    "https://www.aclu.org/wp-content/uploads/2023/09/education-equity-blog.jpg",
  ];

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
   ];
   
  return (
    <header className="bg-blue-500 py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="md:w-1/2 md:text-left text-center mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            Explore and discover amazing things.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.facebook.com/your-facebook-page"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 hover:bg-blue-100 text-lg font-bold py-2 px-6 rounded-full shadow-md focus:outline-none focus:shadow-outline flex items-center"
            >
              <FaFacebookF className="mr-2" />
            </a>
            <a
              href="https://www.facebook.com/groups/your-facebook-group"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 hover:bg-blue-100 text-lg font-bold py-2 px-6 rounded-full shadow-md focus:outline-none focus:shadow-outline flex items-center"
            >
              <FaUsers className="mr-2" />
            </a>
            <a
              href="https://www.google.com/maps/place/your-location"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 hover:bg-blue-100 text-lg font-bold py-2 px-6 rounded-full shadow-md focus:outline-none focus:shadow-outline flex items-center"
            >
              <FaMapMarkerAlt className="mr-2" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative p-4 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-auto rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
