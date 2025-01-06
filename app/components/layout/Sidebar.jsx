"use client"; 

import Link from 'next/link'; 

const uiComponents = [
  { name: "Button", path: "../Pages/components/ButtonPage" },  
  { name: "Forms", path: "/" },
  { name: "Navigation Bars", path: "/" },
  { name: "Cards", path: "/" },
  { name: "Modals", path: "/" },
];

export default function Sidebar() {
  return (
    <div className="sticky top-[4rem] w-64 p-4 rounded-lg border border-[#27272A] h-screen">
      <h2 className="text-xl font-bold text-white">UI Components</h2>
      <ul className="mt-4 text-[#FAFAFA] overflow-y-auto max-h-[calc(110vh-160px)]">
        {uiComponents.map((component, index) => (
          <li
            key={index}
            className="py-2 px-4 w-full rounded-lg hover:bg-[#27272A] transition-colors duration-200"
          >
            <Link href={component.path}>{component.name}</Link> 
          </li>
        ))}
      </ul>
    </div>
  );
}
