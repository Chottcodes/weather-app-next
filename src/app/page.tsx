'use client'

import HamburgerNav from "@/components/HamburgerNavComponent";

export default function Home() {
  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url('/assets/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:h-[90%] lg:w-[90%] lg:rounded-xl border-gray-300 border-4 drop-shadow-4xl bg-[#e5e5e5e4] flex justify-center">
        <div className="w-full h-16 flex justify-end items-center">
        <HamburgerNav />
        </div>
      </div>
    </div>
  );
}
