import React from "react";
import Button from "../../components/ui/Button";

const buttonData = [
  {
    type: "Static",
    buttons: [
      { variant: "static1", text: "Submit" },
      { variant: "static2", text: "Sign-up" },
      { variant: "static3", text: "Save" },
      { variant: "static4", text: "Log-in" },

      { variant: "static5", text: "Cancel" },
      { variant: "static6", text: "Button" },
      { variant: "static7", text: "Read More.." },
      { variant: "static8", text: "Click" },

      { variant: "static9", text: "Close" },
      { variant: "static10", text: "Edit" },
      { variant: "static11", text: "Search" },
      { variant: "static12", text: "Find" },

      { variant: "static13", text: "Close" },
      { variant: "static14", text: "Subscribe" },
      { variant: "static15", text: "Reset" },
      { variant: "static16", text: "Redo" },

      { variant: "static17", text: "Button" },
      { variant: "static18", text: "Hover" },
      { variant: "static19", text: "Button" },
      { variant: "static20", text: "Hover Me" },
    ],
  },
  {
    type: "Animated",
    buttons: [
      { variant: "Animated1", text: "Hover Me" },
      { variant: "Animated2", text: "Keep Holding" },
      { variant: "Animated3", text: "button" },
      { variant: "Animated4", text: "Click" },

      { variant: "Animated5", text: "Close" },
      { variant: "Animated6", text: "Click" },
      { variant: "Animated7", text: "Hover me" },
      { variant: "Animated8", text: "Hover Me" },

      { variant: "Animated9", text: "Delete" },
      { variant: "Animated10", text: "Hover" },
      { variant: "Animated11", text: "Click" },
      { variant: "Animated12", text: "Hover" },

      { variant: "Animated13", text: "Hover" },
      { variant: "Animated14", text: "Hold Me" },
      { variant: "Animated15", text: "Click" },
      { variant: "Animated16", text: "Hover" },

      { variant: "Animated17", text: "Hover Me" },
      { variant: "Animated18", text: "Hover" },
      { variant: "Animated19", text: "Hover Me" },
      { variant: "Animated20", text: "Hover Me" },
      
    ],
  },
];

export default function ButtonDetails() {
  return (
    <div className="flex-1 p-4 bg-[#0a0909] text-white rounded-lg border border-[#27272A] overflow-y-auto max-h-[calc(120vh-full)]">
      <main className="ml-4">
        {buttonData.map((section, index) => (
          <section className="mb-8" key={index}>
            <h2 className="text-lg font-semibold mb-4">{section.type} Buttons</h2>
            <div className="grid grid-cols-4 gap-4">
              {section.buttons.map((button, buttonIdx) => (
                <div
                  key={buttonIdx}
                  className="bg-[#111111] border border-[#27272A] rounded p-4 flex items-center justify-center h-72"
                >
                  <Button
                    variant={button.variant}
                    size={button.size}
                    isDisabled={button.isDisabled}
                  >
                    {button.text}
                  </Button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
