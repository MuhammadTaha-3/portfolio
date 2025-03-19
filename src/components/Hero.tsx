

// import React from 'react'
// import Image from 'next/image'
// import Navbar from './Navbar'

// export default function Hero() {
//   return (
//     <div>
//       <Navbar />

//       <div id="hero" className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
//         <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
//           <Image className=" object-cover object-center  rounded-full border-[4px] " alt="hero" src="/Taha cv pic.jpg" height={300}
//         width={350}/>
//         </div>

        
//         <div className="flex flex-col items-center lg:items-start lg:ml-10 text-center lg:text-left">
//         <p className="text-xs sm:text-xl md:text-xs  text-black font-semibold font-serif"  data-aos="zoom-up-left">
//             Hey👋..
//           </p>
//           <h1 className="text-5xl sm:text-5xl text-black md:text-5xl lg:text-5xl font-serif font-bold leading-tight mb-4"  data-aos="zoom-in-left">
//             I&apos;m Muhammad Taha!
//           </h1>
//           <p className="text-xl sm:text-xl md:text-xl font-light text-black"  data-aos="zoom-up-left">
//             And I&apos;m a Frontend-Web Developer
//   Passionate about crafting visually stunning and highly functional web applications. 
//   Dedicated to delivering seamless user experiences through innovative frontend solutions.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }



import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <div>
      <Navbar />

      <div id="hero" className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image 
            className="object-cover object-center rounded-full border-[4px]" 
            alt="hero" 
            src="/Taha cv pic.jpg" 
            height={300}
            width={350}
          />
        </div>

        <div className="flex flex-col items-center lg:items-start lg:ml-10 text-center lg:text-left">
          <p className="text-xs sm:text-xl md:text-xs text-black font-semibold font-serif" data-aos="zoom-up-left">
            Hey👋..
          </p>
          <h1 className="text-5xl sm:text-5xl text-black md:text-5xl lg:text-5xl font-serif font-bold leading-tight mb-4" data-aos="zoom-in-left">
            I&apos;m Muhammad Taha!
          </h1>
          <p className="text-xl sm:text-xl md:text-xl font-light text-black" data-aos="zoom-up-left">
            And I&apos;m a Frontend-Web Developer<br />
            Passionate about crafting visually stunning and highly functional web applications. <br />
            Dedicated to delivering seamless user experiences through innovative frontend solutions.
          </p>

          {/* Resume Button */}
          <a 
            href="/Grey Clean CV Resume Photo.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            id="resume-button"
            className="mt-6 px-6 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-900 transition duration-300"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}
