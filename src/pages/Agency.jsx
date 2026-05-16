import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Fuji from "../assets/fujimountain.svg?react";

const Agency = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll("path");

    paths.forEach((path) => {
      const length = path.getTotalLength();

      const originalFill =
        path.getAttribute("fill") || "#e11d48";

      path.dataset.fill = originalFill;

      gsap.set(path, {
        fill: "transparent",
        stroke: "#f8fafc",
        strokeWidth: 1.5,
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1,
      });
    });

    const tl = gsap.timeline();

    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 4,
      ease: "none",
      stagger: 0.03,
    });

    tl.to(
      paths,
      {
        fill: (i, target) => target.dataset.fill,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.02,
      },
      "-=1"
    );

    
  }, []);

  return (
    <div
      className="
        relative
        w-full
        h-screen
        overflow-hidden
        bg-linear-to-b
        from-black
        via-[#1a0f0f]
        to-[#3b0a0a]
        flex
        items-center
        justify-center
      "
    >
      {/* japanese glow */}
      <div
        className="
          absolute
          w-[900px]
          h-[900px]
          rounded-full
          bg-red-700/20
          blur-3xl
        "
      />

      {/* sun */}
      <div
        className="
          absolute
          top-20
          right-32
          w-44
          h-44
          rounded-full
          bg-red-600
          blur-sm
          opacity-80
        "
      />

      {/* grain overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          mix-blend-soft-light
          bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]
        "
      />

      {/* fuji */}
      <div
        ref={svgRef}
        className="
          w-full
          h-full
          
        "
      >
        <Fuji
          className="
            h-full
            w-full
            object-contain
            bg-center
            overflow-visible
            drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]
          "
        />
      </div>

      {/* japanese text */}
      <div
        className="
          absolute
          bottom-10
          left-10
          text-white/70
          text-sm
          tracking-[0.4em]
          uppercase
          font-light
        "
      >
        富士山
      </div>
    </div>
  );
};

export default Agency;