/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
     
      animation: {
        bounce: "bounce 1s infinite",
        pulse: "pulse 1s infinite",
      },
      transformOrigin: {
        center: "center",
      },
      transitionProperty: {
        transform: "transform",
      },
    },
  },
  plugins: [],
};
