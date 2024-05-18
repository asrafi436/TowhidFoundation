import React from "react";
import { Hero } from "../components/home/Hero";
import ServicesIcon from "../components/home/ServicesIcon";
import { LeftAside, RightAside } from "../components/home/aside";
import { CenterHome } from "../components/home/CenterHome";
import { ShortTraining } from "../components/home/ShortTraining";



export const Home = () => {
  

  return(
    <>
     <Hero/>
     <ServicesIcon/>

     <section className="grid md:grid-cols-12 grid-cols-6 gap-4">

      <aside className="md:col-span-2 col-span-6 p-4">
        <LeftAside/>
      </aside>

      <div className="md:col-span-7 col-span-6 p-4">
        <CenterHome />
      </div>

      <aside className="md:col-span-3 col-span-6 p-1 m-1 flex flex-col items-center justify-items-center ">
        <RightAside/>
        <ShortTraining/>
      </aside>

     </section>

     
    </>
  )
  
};
