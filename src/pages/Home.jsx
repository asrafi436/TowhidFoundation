import React from "react";
import { Hero } from "../components/home/Hero";
import ServicesIcon from "../components/home/ServicesIcon";
import { HomeDetails } from "../components/home/HomeDetails";
import { ShortCommitee } from "../components/home/ShortCommitee";
import { ShortTraining } from "../components/home/ShortTraining";
import { ShortNotice } from "../components/home/ShortNotice";
import { UpcomingCourses } from "../components/home/UpcomingCourses";
import { Reviews } from "../components/home/Reviews";
import { RecentActivities } from "../components/activities/RecentActivities";
import { LuPhoneCall } from "react-icons/lu";



export const Home = () => {
  
  const callNow = "https://img.freepik.com/premium-vector/ambulance-emergency-car-automobile-flat-cartoon-medical-vehicle-auto_599062-3744.jpg";
  const festival = "https://img.freepik.com/free-vector/realistic-eid-mubarak-festival-wide-banner-with-text-space_1017-37997.jpg";
  const cleaning = "https://as1.ftcdn.net/v2/jpg/03/74/26/36/1000_F_374263688_PT1LWMRPYztv98vExPt7CuQA32WNBGBR.jpg";
  const medical = "https://www.lexingtondoctors.org/wp-content/uploads/2017/09/icon-dark-call.png"; 

  return (
    <>
      <Hero />
      <ServicesIcon />

      <section className="grid md:grid-cols-12 grid-cols-6 gap-4">
        <aside className="md:col-span-2 col-span-6 p-4">
          <ShortCommitee />
          <ShortTraining />
        </aside>

        <div className="md:col-span-7 col-span-6 py-8 px-2">

          <div className="h-[160vh] overflow-y-auto">
          <img src={festival} alt="" className="w-full" />
          <HomeDetails />
          </div> 
          <Reviews />
        </div>

        <aside className="md:col-span-3 col-span-6 p-1 m-1 flex flex-col items-center justify-items-center ">
          <div className="bg-red-100">
            <div className="flex flex-row gap-5 items-center justify-content-center">
              <img src={callNow} alt="" className="w-20" />
              <img src={cleaning} alt="" className="w-20" />
              <img src={medical} alt="" className="w-20" />
            </div>
            <h3 className="text-center bg-red-600 text-white my-2">
              To Get Our Ambulance Service, Free Dead Body Cleaning Service &
              Free Medical Service Call Now: <strong>0182133..558</strong>
            </h3>
            
          </div>
          <ShortNotice />
          <UpcomingCourses />
        </aside>
      </section>
      <section className="bg-teal-100">
        <RecentActivities />
      </section>
    </>
  );
  
};
