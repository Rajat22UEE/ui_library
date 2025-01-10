'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { FaRegCopy } from "react-icons/fa6";
import { useSearchParams } from 'next/navigation';
import { variantStyles } from '../../../components/ui/Button';

function CopyButton({ appliedVariant, text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `<button className="${appliedVariant}">${text}</button>`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <button
      className="flex items-center bg-gray-200 hover:bg-gray-300 border text-black border-gray-300 rounded-md px-3 py-1"
      onClick={handleCopy}
    >
      {copied ? (
        <TiTick className="text-green-500 text-lg" />
      ) : (
        <FaRegCopy className="text-black text-lg" />
      )}
      <span className="ml-2">{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
}

export default function CodeButton() {
  const searchParams = useSearchParams();
  const variantKey = searchParams.get('variant') || "static1";
  const text = searchParams.get('text') || "Click Me";

  const appliedVariant = variantStyles[variantKey] || variantStyles.static1;

  return (
    <div className="p-5">
      <div className="text-2xl text-white font-bold mb-8">Button Code</div>
      <div className="flex justify-between mt-16">
        
        <div className="w-1/2 bg-[#111111] border border-[#27272A] rounded-lg shadow-md p-5 mr-2 h-96">
          <div className="text-lg font-bold text-white mb-3">Preview</div>
          <div className="flex justify-center items-center h-64">
            <button className={appliedVariant}>{text}</button>
          </div>
        </div>

       
        <div className="w-1/2 bg-[#111111] border border-[#27272A] rounded-lg shadow-md p-5 ml-2">
          <div className="flex justify-between items-center mb-3">
            <div className="text-lg font-bold text-white">Code</div>
            <CopyButton appliedVariant={appliedVariant} text={text} />
          </div>
          <div className="p-3 rounded-md w-full overflow-auto  h-72">
            <div className="bg-[#0a0909] text-white p-3 rounded-md font-mono w-auto">
              <span className="text-blue-400">{"<"}</span>
              <span className="text-blue-500">button</span>
              <span className="text-blue-400">{" "}</span>
              <span className="text-purple-400">className</span>
              <span className="text-blue-400">{"=\""}</span>
              <span className="text-orange-400">{appliedVariant}</span>
              <span className="text-blue-400">{"\">"}</span>
              <span className="text-green-400">{text}</span>
              <span className="text-blue-400">{"</"}</span>
              <span className="text-blue-500">button</span>
              <span className="text-blue-400">{">"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end m-2">
        <Link href=".././components/ButtonDetails" passHref>
          <button className="hover:bg-[#111111] transition duration-200 w-36 h-12 flex justify-center items-center text-xl rounded-lg gap-1">
            <div className="flex justify-center items-center">
              <IoIosArrowRoundBack className="text-4xl" />
            </div>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
