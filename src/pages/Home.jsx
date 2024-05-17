import React from "react";
import { Hero } from "../components/home/Hero";
import ServicesIcon from "../components/home/ServicesIcon";
import { LeftAside, RightAside } from "../components/home/aside";



export const Home = () => {
  

  return(
    <>
     <Hero/>
     <ServicesIcon/>

     <section className="grid grid-cols-12 gap-4">

      <aside className="col-span-2">
        <LeftAside/>
      </aside>

      <div className="col-span-7">
        <h3>This is center</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem?</p>
      </div>

      <aside className="col-span-3">
        <RightAside/>
      </aside>

     </section>

     
    </>
  )
  
};
