"use client"; 


import Footer from "./components/layout/Footer";
// import Layout from "./components/layout/Layout";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import ButtonDetails from "./Pages/components/ButtonDetails";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0909] text-white">
      <Navbar />
      <div className="flex flex-1 p-[1rem] gap-2">
        <Sidebar />
        <ButtonDetails/>
        {/* <Layout /> */}
      </div>
      <Footer />
    </div>
  );
}
