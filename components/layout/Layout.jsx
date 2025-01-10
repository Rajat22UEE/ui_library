"use client";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0909] text-white">
     
      <Navbar />

      
      <div className="flex flex-1 p-[1rem] gap-2">
        
        <Sidebar />

        
        <div className="flex-1 p-4 bg-[#0a0909] text-white rounded-lg border border-[#27272A] overflow-y-auto max-h-full">
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
}
