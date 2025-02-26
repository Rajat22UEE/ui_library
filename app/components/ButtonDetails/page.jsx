import React from "react";
import Link from 'next/link';
import { FaCode } from "react-icons/fa";
import Button from "../../../components/ui/Button";

const buttonData = [
  {
    type: "Static",
    buttons: [
      { variant: "default", text: "Submit" },
      { variant: "destructive", text: "Sign-up" },
      { variant: "outline", text: "Save" },

      { variant: "secondary", text: "Cancel" },
      { variant: "ghost", text: "Button" },
      { variant: "link", text: "Read More.." },
    ],
  },
  
];

export default function ButtonDetails() {
  return (
    <div className="flex-1 p-4 ">
      <main className="ml-4">
        {buttonData.map((section, index) => (
          <section className="mb-8" key={index}>
            <h2 className="text-lg font-semibold mb-4">{section.type} Buttons</h2>
            <div className="grid grid-cols-3 gap-4">
              {section.buttons.map((button, buttonIdx) => (
                <div
                  key={buttonIdx}
                  className="bg-[#111111] border border-[#27272A] rounded p-4 h-80 group relative"
                >
                  <div className="flex items-center justify-center h-60">
                    <Button
                      variant={button.variant}
                      size={button.size}
                      isDisabled={button.isDisabled}
                    >
                      {button.text}
                    </Button>
                  </div>
                  <div className="flex justify-end w-full">
                    <Link href={{
                      pathname: "../getCode/CodeButton",
                      query: { variant: button.variant, text: button.text },
                    }}
                     passHref>
                      <div className=" flex items-center px-3 py-2 w-32 bg-[#111111] text-white text-md rounded-lg cursor-pointer hover:bg-[#0a0909] transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                        <FaCode className="mr-2" size={20} />
                        <span className="font-medium">Get Code</span>
                      </div>
                    </Link>
                  </div>
                </div>

              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
