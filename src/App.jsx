import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import { Home } from "./pages/Home.jsx";
import  Agency  from "./pages/Agency.jsx";
import { Work } from "./pages/Work.jsx";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const App = () => {
  const cursorRef = useRef(null);
  const [cursorVisible,setCursorVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="cursor-none" onMouseEnter={()=>setCursorVisible(true)} onMouseLeave={()=>setCursorVisible(false)}>
      {/* global cursor */}
      <div
        ref={cursorRef}
        style={{"display": cursorVisible ? "block" : "none"}}
        className="
          fixed
          top-0
          left-0
          h-6
          w-6
          animate-pulse
          rounded-full
          bg-linear-to-br
          from-blue-500
          to-blue-950
          pointer-events-none
          z-9999
          -translate-x-1/2
          -translate-y-1/2
          will-change-transform
        "
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
};

export default App;