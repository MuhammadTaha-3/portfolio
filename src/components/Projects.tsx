// import React from 'react';
// import Heading from './Heading';
// import Card from './Card';

// const data = [
//   {
//     id: 0,
//     title: "BLOGGING-APP",
//     desc: "A TypeScript-based resume builder created with HTML and CSS.",
//     img: "/tblog.png",
//     tags: ["Next.js", "CSS", "TypeScript"],
//     link: "https://blogging-app-git-master-tahaqureshi-55s-projects.vercel.app/blog",
//   },
//   {
//     id: 1,
//     title: "Temp-Counter",
//     desc: "A JavaScript-based counter built with HTML and CSS.",
//     img: "/Temp.png",
//     tags: ["HTML", "CSS", "JavaScript"],
//     link: "https://temperature-counter-delta.vercel.app/",

//   },
//   {
//     id: 2,
//     title: "Beneficiary Management System",
//     desc: "A Next.js-based app built with Tailwind CSS.",
//     img: "/bms.png",
//     tags: ["Next.js", "CSS", "Tailwind CSS"],
//     link: "https://bms-gray-one.vercel.app/",
//   },
//   {
//     id: 3,
//     title: "Shopping Website",
//     desc: "A Next.js-based eCommerce website built with Tailwind CSS.",
//     img: "/tshop.png",
//     tags: ["Next.js", "Tailwind CSS"],
//     link: "https://shop-co-mocha-five.vercel.app/",
//   },
// ];

// export default function Projects() {
//   return (
//     <div id="projects" className="container pt-10">
//       <Heading title="My Projects" />
//       <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 place-items-center">
//         {data.map((project) => (
//           <Card
//             key={project.id}
//             title={project.title}
//             desc={project.desc}
//             img={project.img}
//             tags={project.tags}
//             link={project.link}  // ✅ Passing link properly
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
import React from 'react';
import Heading from './Heading';

const data = [
  {
    id: 0,
    title: "BLOGGING-APP",
    desc: "A TypeScript-based resume builder created with HTML and CSS.",
    img: "/tblog.png",
    tags: ["Next.js", "CSS", "TypeScript"],
    link: "https://blogging-app-git-master-tahaqureshi-55s-projects.vercel.app/blog",
  },
  {
    id: 1,
    title: "Temp-Counter",
    desc: "A JavaScript-based counter built with HTML and CSS.",
    img: "/Temp.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://temperature-counter-delta.vercel.app/",
  },
  {
    id: 2,
    title: "Beneficiary Management System",
    desc: "A Next.js-based app built with Tailwind CSS.",
    img: "/bms.png",
    tags: ["Next.js", "CSS", "Tailwind CSS"],
    link: "https://bms-gray-one.vercel.app/",
  },
  {
    id: 3,
    title: "Shopping Website",
    desc: "A Next.js-based eCommerce website built with Tailwind CSS.",
    img: "/tshop.png",
    tags: ["Next.js", "Tailwind CSS"],
    link: "https://shop-co-mocha-five.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="container mx-auto pt-10 px-4">
      <Heading title="My Projects" />
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-3xl shadow-lg transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl hover:scale-105"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover rounded-3xl transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 rounded-3xl"></div>
              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="text-2xl font-bold drop-shadow-md">{project.title}</h3>
                <p className="text-sm opacity-90">{project.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 rounded-full animate-bounce shadow-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white text-black px-4 py-2 rounded-full shadow-lg text-sm font-semibold transform transition-transform duration-300 hover:scale-110">
                  View Project
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
