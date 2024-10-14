import Link from "next/link";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative bg-gradient-to-b from-pink-500 to-purple-500 overflow-hidden">
      <div className="flex flex-col items-center gap-4 z-10">
        <h1 className="text-center font-bold text-4xl">lashes_by_marlena</h1>
        <Link
          href="#contact"
          className=" px-4 py-2 font-semibold rounded-full bg-gradient-to-b from-purple-300 to-purple-500 text-white">
          Skontaktuj się!
        </Link>
      </div>
      <Image
        src="/hero-lashes-2.png"
        width={1000}
        height={1000}
        alt="hello"
        className="absolute w-[60%]  -rotate-[30deg] top-24 left-20"
      />
    </div>
  );
};

export default HeroSection;
