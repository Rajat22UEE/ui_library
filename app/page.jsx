import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Details from "./Pages/Details";

export default function Home() {
  return (

    <div>
      <Navbar />
      <div className="flex min-h-screen bg-[#0a0909] p-[1rem] gap-2">
        <Sidebar/>

        
        <Details/>
      </div>
      <Footer/>
    </div>
  );
}
