
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  link: string;  // ✅ Added link prop
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags, link }) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-slate-200 border-4 rounded-3xl border-purple-800 w-full sm:w-[350px] lg:w-[300px] hover:scale-105 transition-transform duration-300" data-aos="zoom-in-up">
        <div>
          <Image
            className="w-full h-[200px] object-cover object-center rounded-2xl"
            src={img}
            width={400}
            height={400}
            alt={title}
          />
        </div>

        <div className="p-4 space-y-4">
          <h3 className="text-2xl font-extrabold underline text-neutral-700">{title}</h3>
          <p className="text-black text-base">{desc}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-purple-700 text-white py-1 px-3 rounded-lg text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
