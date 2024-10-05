import React from "react";

// Defining props (can be empty if no props are needed)
interface MainTitleProps {
  dynamic: any;
}

const MainTitle: React.FC<MainTitleProps> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center p-20">
      <h1 className="text-white text-[40px] leading-tight">
        HELLO MY NAME IS{" "}
        <span className="text-[#2b2b2b] underline">DEVON STURDIVANT</span>
      </h1>
      <h2 className="text-white text-[40px] leading-tight">
        THIS IS FILLER IDK WHAT TO PUT
      </h2>
      <p className="text-white">I am a frontend developer</p>
      <p className="text-white">&& this is more filler</p>
      {/* This is the links for the contact and projects */}
      <div className="flex gap-5 mt-10">
        <a href="" className="text-white">
          -- See my projects
        </a>
        <a href="" className="text-white">
          -- Contact me
        </a>
      </div>
    </div>
  );
};

export default MainTitle;
