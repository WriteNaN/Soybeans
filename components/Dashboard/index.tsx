"use client";

import { useEffect } from "react";
import Overview from "./Overview";
import { RadialGradient } from "react-text-gradients";
import { IoAdd as IoCreate } from "react-icons/io5";

export default function Dashboard() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.livecoinwatch.com/static/lcw-widget.js";
    script.defer = true;
    document.head.appendChild(script);
    script.onload = () => {
      console.log("loaded script");
    };
    return () => {
      // cleanup
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="manrope">
      <div
        className="livecoinwatch-widget-5 glow-blue"
        lcw-base="USD"
        lcw-color-tx="#0693e3"
        lcw-marquee-1="coins"
        lcw-marquee-2="movers"
        lcw-marquee-items="10"
        lcw-platform="SOL"
      ></div>

      <div className="pt-4">
        <h1 className="align-center justify-center flex w-screen text-4xl p-5">
            <RadialGradient gradient={['skyblue', 'pink']} className="audiowide glow-blue">
                OVERVIEW
                </RadialGradient>
        </h1>
        <Overview />
      </div>
      {/**  */}


      <div className="flex justify-end items-end absolute bottom-14 right-4">
  <button className="flex items-center text-white p-2 rounded-lg bg-gradient-to-r from-green-500 to-green-500 hover:opacity-80 glow-green">
    <IoCreate />
  </button>
</div>
{/** */}
    </div>
  );
}
