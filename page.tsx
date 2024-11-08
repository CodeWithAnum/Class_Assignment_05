import React from "react";
import Header from "./components/Header";
import Image from "next/image";


function Home () {
  return (
    <div className="h-screen">
      <Header />
      <section className="flex h-[189px]">
        <section className="w-1/2 flex flex-col items-start m-12">
          <h1 className="text-[40px] w-[496px]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
          <section>
            
            <p className="h-[147px] w-[902px] text-yellow-800">An example of intricate workmanship and detsil,elegant <br/> necklaces and long and short chains form a part of our <br/> desirable collection.</p>
            <button className="h-[58px] w-[288px] rounded-full p-10px gap-px" style={{backgroundColor:"rgb(162, 152, 117"}}>Explore Now</button>
           
          </section>

          </section>

          <div className="flex md:justify-start items-center h-screen">
            <Image className="border-r-yellow-700" src={"image/image.svg"} alt="image.svg" width={462} height={647} ></Image>
          </div>

        </section>

    </div>
  )
}

export default Home