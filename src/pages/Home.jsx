import React from "react";


export const Home = () => {
  const heroImage = 'https://www.aclu.org/wp-content/uploads/2023/09/education-equity-blog.jpg';

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
          <button className="bg-white text-blue-500 hover:bg-blue-100 text-lg font-bold py-2 px-6 rounded-full shadow-md focus:outline-none focus:shadow-outline">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={heroImage} alt="NGO" className="w-full h-auto rounded-md shadow-lg" />
        </div>
      </div>
    </header>
  );
};

