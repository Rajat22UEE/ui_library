"use client";

import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { FaRegCopy } from "react-icons/fa6";
import Button, { variantStyles } from "../../../components/ui/Button";

const buttonData = [
  { variant: "Default", text: "Button" },
  { variant: "Destructive", text: "Destructive" },
  { variant: "Outline", text: "Outline" },
  { variant: "Secondary", text: "Secondary" },
  { variant: "Ghost", text: "Ghost" },
  { variant: "Link", text: "Link.." },
];

function CopyButton({ appliedVariant, text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const code = `<button class="${appliedVariant}">${text}</button>`;
    navigator.clipboard.writeText(code);
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

export default function ButtonsShowcase() {
  return (
    <div className="p-5">
      <div className="text-3xl text-white font-bold mb-8">Button Showcase</div>

      <div className="space-y-10">
        {buttonData.map((button, index) => {
          const appliedVariant = variantStyles[button.variant] || variantStyles.default;
          return (
            <div key={index} className="flex flex-col space-y-3">
              
              <div className="text-2xl font-bold text-white">{button.variant} Button</div>

              <div className="bg-[#111111] border border-[#27272A] rounded-xl p-8 shadow-lg min-h-[250px] flex flex-col">
                
                <div className="grid grid-cols-2 gap-6">
                  
                  <div className="flex flex-col justify-between space-y-2">

                    <div className="text-md font-semibold text-gray-400">Preview</div>

                    <div className="flex justify-center items-center h-64  rounded-lg p-4">
                      <Button variant={button.variant}>{button.text}</Button>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    
                    <div className="flex justify-between items-center">
                      
                      <div className="text-md font-semibold text-gray-400">Code</div>
                      <CopyButton appliedVariant={appliedVariant} text={button.text} />
                    </div>

                    <div className="bg-[#0a0909] text-white p-4 rounded-md font-mono text-sm shadow-md h-64 ">
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-blue-500">button</span>
                      <span className="text-blue-400">{" "}</span>
                      <span className="text-purple-400">class</span>
                      <span className="text-blue-400">{"=\""}</span>
                      <span className="text-orange-400">{appliedVariant}</span>
                      <span className="text-blue-400">{"\">"}</span>
                      <span className="text-green-400">{button.text}</span>
                      <span className="text-blue-400">{"</"}</span>
                      <span className="text-blue-500">button</span>
                      <span className="text-blue-400">{">"}</span>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
