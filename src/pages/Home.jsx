import React from "react";
import { Hero } from "../components/home/Hero";
import ServicesIcon from "../components/home/ServicesIcon";



export const Home = () => {
  

  return(
    <>
     <Hero/>
     <ServicesIcon/>

     <section className="grid grid-cols-12 gap-4">
      <aside className="col-span-2">
        <h3>Left side</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat hic sint sapiente, ad iusto incidunt sequi omnis esse assumenda amet eum est aperiam culpa doloremque totam minima, possimus dolorum ex? Labore iste et asperiores eum dolores modi facilis incidunt temporibus ad velit laboriosam illo at earum ut veniam expedita voluptate pariatur dolor fugit, vel possimus suscipit explicabo quaerat! Doloribus, veritatis ullam veniam placeat numquam culpa. Minima obcaecati laboriosam illum minus excepturi, necessitatibus eum perferendis officiis doloremque voluptates nostrum eos aliquid ex earum doloribus, animi nesciunt sint, assumenda atque ad distinctio quas debitis dolor dignissimos. Voluptas unde vitae laudantium quia nam.</p>
      </aside>
      <div className="col-span-8">
        <h3>This is center</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem?</p>
      </div>
      <aside className="col-span-2">
        <h3>Right side</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem?</p>
      </aside>
     </section>

     
    </>
  )
  
};
