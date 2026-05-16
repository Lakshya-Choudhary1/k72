import React from "react";
import Video from "./Video";

const HomeHeroSection = () => {
  return (
    <>
      <div className="font-[font1] w-full px-2 sm:px-4">
        <div
          className="
            uppercase
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            text-amber-50
            font-bold
            text-center
            leading-[0.95]
          "
        >
          <div>The spark for</div>

          <div className="flex justify-center items-center gap-2 flex-wrap">
            <span>all</span>

            <div
              className="
                h-16
                w-28
                sm:h-20
                sm:w-40
                md:h-28
                md:w-56
                lg:h-36
                lg:w-72
                rounded-full
                overflow-hidden
                my-2
              "
            >
              <Video />
            </div>

            <span>things</span>
          </div>

          <div>Creative</div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8">
        <p
          className="
            max-w-[320px]
            sm:max-w-md
            ml-auto
            text-[0.7rem]
            sm:text-xs
            md:text-sm
            text-amber-50/90
            font-[font2]
            leading-relaxed
          "
        >
          <span className="pl-6"></span>
          K72 is an agency that builds brands from every angle. Today,
          tomorrow and years from now. We think the best sparks fly when
          comfort zones get left behind and friction infuses our strategies,
          brands and communications with real feeling. We’re transparent,
          honest and say what we mean, and when we believe in something,
          we’re all in.
        </p>
      </div>
    </>
  );
};

export default HomeHeroSection;