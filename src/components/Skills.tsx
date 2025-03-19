
// import React from "react";

// function Skills() {
//   return (
//     <div id="skills" className="container mx-auto px-6 py-16 sm:py-24">
//       <div className="grid sm:grid-cols-2 gap-12 items-start">
//         <div >
//           <h2 className="text-3xl md:text-4xl font-semibold text-purple-700" data-aos="zoom-in-up">My Skills...</h2>
//           <p className="text-black pt-2">~
//           I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript.  
// My expertise extends to modern frameworks like Next.js and styling libraries such as Tailwind CSS,  
// which allow me to build highly responsive, dynamic, and visually appealing web applications.  
// I am passionate about writing clean, efficient, and maintainable code while keeping up with the  
// latest industry trends and best practices. My continuous learning mindset drives me to explore new  
// technologies, optimize performance, and enhance user experiences in every project I work on.  
// I enjoy problem-solving and transforming ideas into functional, scalable applications that  
// deliver seamless and engaging interactions for users.

//           </p>
//         </div>

//         <div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div className="space-y-4">
//               <div>
//                 <h3 className="text-purple-700 text-xl sm:text-2xl " data-aos="zoom-in-up">HTML</h3>
//                 <div className="w-full bg-gray-300 rounded-full h-2.5">
//                   <div
//                     className="bg-purple-700 h-2.5 rounded-full"
//                     style={{ width: "90%" }}
//                   ></div>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-purple-700 text-xl sm:text-2xl" data-aos="zoom-in-up">CSS</h3>
//                 <div className="w-full bg-gray-300 rounded-full h-2.5">
//                   <div
//                     className="bg-purple-700 h-2.5 rounded-full"
//                     style={{ width: "85%" }}
//                   ></div>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-purple-700 text-xl sm:text-2xl" data-aos="zoom-in-up">
//                   JavaScript
//                 </h3>
//                 <div className="w-full bg-gray-300 rounded-full h-2.5">
//                   <div
//                     className="bg-purple-700 h-2.5 rounded-full"
//                     style={{ width: "60%" }}
//                   ></div>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <h3 className="text-purple-700 text-xl sm:text-2xl" data-aos="zoom-in-up">Next.js</h3>
//                 <div className="w-full bg-gray-300 rounded-full h-2.5">
//                   <div
//                     className="bg-purple-700 h-2.5 rounded-full"
//                     style={{ width: "80%" }}
//                   ></div>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-purple-700 text-xl sm:text-2xl" data-aos="zoom-in-up">
//                   Tailwind CSS
//                 </h3>
//                 <div className="w-full bg-gray-300 rounded-full h-2.5">
//                   <div
//                     className="bg-purple-700 h-2.5 rounded-full"
//                     style={{ width: "90%" }}
//                   ></div>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-purple-700 text-xl sm:text-2xl" data-aos="zoom-in-up">
//                   TypeScript
//                 </h3>
//                 <div className="w-full bg-gray-300 rounded-full h-2.5">
//                   <div
//                     className="bg-purple-700 h-2.5 rounded-full"
//                     style={{ width: "60%" }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Skills;


import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaCode } from "react-icons/fa";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" />, level: "90%" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" />, level: "85%" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: "40%" },
  { name: "Next.js", icon: <FaReact className="text-black" />, level: "90%" },
  { name: "Tailwind CSS", icon: <FaBootstrap className="text-teal-500" />, level: "90%" },
  { name: "TypeScript", icon: <FaCode className="text-blue-500" />, level: "90%" },
];

const Skills = () => {
  return (
    <div id="skills" className="container mx-auto px-6 py-16 sm:py-24">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-12" data-aos="zoom-in-up">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
            </div>
            <div className="mt-4 w-full bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-purple-700 h-2.5 rounded-full transition-all duration-500"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
