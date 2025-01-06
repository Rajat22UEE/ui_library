import React from "react";
import classNames from "classnames";

const Button = ({
  type = "button",
  variant = "primary",
  size = "medium",
  isDisabled = false,
  children,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium ";

  const variantStyles = {
    static1: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 rounded-full shadow-md shadow-blue-300",
    static2: "bg-[#1E293B] text-[#3b82f6] border-none cursor-pointer rounded-lg w-24 h-11 transition duration-300 hover:bg-[#3b82f6] hover:text-white hover:shadow-lg hover:shadow-[#3b82f65f] focus:ring-2 focus:ring-[#3b82f6] focus:ring-opacity-50",
    static3: "cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-2",
    static4: "bg-[#9333EA] text-black hover:bg-blue-400 focus:ring-blue-200 rounded-full shadow-lg shadow-[#9333EA]/30 transform active:translate-y-1 transition duration-300",

    static5: "border-2 border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black",
    static6: "h-[50px] m-[5px] w-[120px] flex justify-center items-center cursor-pointer font-mono border border-[#404c5d] text-[16px] text-[rgb(161,161,161)] transition-all duration-500 rounded bg-gradient-to-br from-[#2e2d2d] to-[#212121] shadow-[1px_1px_10px_#41465b] hover:shadow-lg hover:text-[#d6d6d6] active:shadow-none active:text-[#d6d6d6]",
    static7: "relative px-8 py-2 rounded-md bg-white z-0 border-2 border-red-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#A12347] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-black bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none",
    static8: "text-[#090909] px-7 py-3 text-[18px] rounded-lg bg-[#e8e8e8] cursor-pointer border border-[#e8e8e8] transition-all duration-300 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] active:text-[#666] active:shadow-inner",
    
    static9: "relative w-[10em] h-[3.5em] border-[3px] border-ridge-[#149CEA] outline-none bg-transparent text-white transition-all duration-1000 rounded-[0.3em] text-[16px] font-bold cursor-pointer hover:shadow-[inset_0px_0px_25px_#1479EA] before:absolute before:top-[-10px] before:left-[3%] before:w-[95%] before:h-[40%] before:bg-[#111111] before:transition-transform before:duration-500 before:origin-center after:absolute after:top-[80%] after:left-[3%] after:w-[95%] after:h-[40%] after:bg-[#111111] after:transition-transform after:duration-500 after:origin-center hover:before:scale-0 hover:after:scale-0",
    static10: "relative text-xl px-4 py-2 bg-rose-400 rounded-md text-white font-semibold z-0 after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c] hover:[text-shadow:2px_2px_2px_#fda4af]",
    static11: "relative inline-flex items-center justify-center font-semibold text-lg rounded-full cursor-pointer border-none bg-gradient-to-r from-[#00bf63] to-[#5ce1e6] text-ghostwhite py-2 px-6 overflow-hidden transition-colors duration-400 active:scale-95",
    static12: "relative inline-flex items-center justify-center font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 px-6 cursor-pointer transition-transform duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 active:scale-95",

    static13: "w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]",
    static14: "relative w-[140px] h-[40px] border-0 rounded-[10px] bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] bg-[length:250%] bg-left text-black flex items-center justify-center cursor-pointer transition-all duration-1000 overflow-hidden group hover:bg-[position:right] active:scale-[0.95]",
    static15: "w-[160px] h-[50px] flex justify-center items-center bg-transparent text-[#1D4ED8] border-2 border-[#1D4ED8] rounded-[30px] shadow-md transition-all duration-300 ease-in-out hover:bg-[#1D4ED8] hover:text-white focus:ring-4 focus:ring-[#1D4ED8] focus:ring-opacity-50",
    static16: "text-white hover:text-green-600 w-24 h-12 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700",

    static17: "relative w-40 h-8 text-center font-poppins text-[17px] font-light tracking-[5px] uppercase text-white cursor-pointer bg-[rgba(3,3,3,0.5)] border-none transition-[color,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:shadow-[0_0_50px_#fff] hover:bg-[rgba(255,255,255,0.4)] hover:text-[#111] hover:font-medium before:content-[''] before:absolute before:pointer-events-none before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:top-[-2px] before:transition-[width,left] before:duration-[250ms] before:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:before:w-full hover:before:left-0 after:content-[''] after:absolute after:pointer-events-none after:left-1/2 after:w-0 after:h-[2px] after:bg-white after:bottom-[-2px] after:transition-[width,left] after:duration-[250ms] after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0",
    static18: "inline-block border border-white py-3 px-8 rounded-[5px] bg-transparent text-white text-[1rem] transition-all duration-300 cursor-pointer relative hover:shadow-[4px_4px_10px_rgb(184,_184,_184)] hover:translate-y-[-5px] before:content-[''] before:absolute before:left-[5px] before:top-[5px] before:border-t-[2px] before:border-l-[2px] before:border-white before:w-0 before:h-0 before:opacity-0 before:transition-all before:duration-300 hover:before:w-[20px] hover:before:h-[20px] hover:before:opacity-100 after:content-[''] after:absolute after:right-[5px] after:bottom-[5px] after:border-b-[2px] after:border-r-[2px] after:border-white after:w-0 after:h-0 after:opacity-0 after:transition-all after:duration-300 hover:after:w-[20px] hover:after:h-[20px] hover:after:opacity-100",
    static19: "font-montserrat text-white w-28 h-12 border-2 border-black rounded-[7px] px-[0.5rem] py-[0.3rem] bg-blue-600 shadow-[5px_5px_0px_white] cursor-pointer text-center font-bold flex items-center justify-center gap-[0.5rem] transition-all ease-in-out hover:shadow-none hover:translate-[3px_3px]",
    static20: "mky-btn3 relative hover:text-black py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-white",

    Animated1: "cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600 hover:bg-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 duration-300  focus:bg-transparent",
    Animated2: "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce",
    Animated3: "px-8 py-2 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-2xl focus:outline-none",
    Animated4: "cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]",

    Animated5: "relative text-white font-extrabold text-[16px] py-[1em] px-[3.3em] cursor-pointer rounded-[5px] bg-gradient-to-t from-[#3f5efb] to-[#4687fc] shadow-[0px_40px_29px_0_rgba(63,94,251,0.2)] transform perspective-[200px] rotate-x-[15deg] transition-all duration-300 ease-in-out border-b-2 border-[#4687fc] group hover:translate-y-[2px] hover:rotate-x-[30deg] active:translate-y-[5px] active:rotate-x-[36deg]",
    Animated6: "relative flex items-center justify-start w-[100px] h-[40px] px-[20px] bg-[rgb(168,38,255)] text-white font-medium cursor-pointer rounded-lg shadow-[5px_5px_0px_rgb(140,32,212)] transition duration-300  active:translate-x-[3px] active:translate-y-[3px] active:shadow-[2px_2px_0px_rgb(140,32,212)]  ",
    Animated7: "cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-0 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]",
    Animated8: "relative bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium px-4 py-2 rounded-md overflow-hidden hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group before:absolute before:content-[''] before:bg-red-400 before:shadow-red-400 before:-top-[150%] before:left-0 before:w-80 before:h-[5px] before:rounded-md before:opacity-50 before:duration-500 before:shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] group-hover:before:top-[150%]",

    Animated9: "relative w-[160px] h-[50px] flex justify-center items-center bg-transparent rounded-[30px] text-red-500 border-t border-b border-white/10 shadow-[4px_4px_6px_0_rgba(255,255,255,.2),_-4px_-4px_6px_0_rgba(116,125,136,.2),_inset_-4px_-4px_6px_0_rgba(255,255,255,.1),_inset_4px_4px_6px_0_rgba(0,0,0,.2)] transition-all duration-500 ease-in-out hover:text-white hover:bg-red-500 hover:tracking-[1.5px]",
    Animated10: "bg-white w-24 h-12 text-black border border-black rounded-full text-sm font-semibold py-2 px-4 cursor-pointer transition-all ease-in-out duration-300 hover:translate-x-[-2px] hover:translate-y-[-4px] hover:shadow-[2px_5px_0_0_black] active:translate-x-[1px] active:translate-y-[2px] active:shadow-none",
    Animated11: "cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-green-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none",
    Animated12: "relative w-[4rem] h-12 rounded-full bg-[#333333] font-semibold flex items-center justify-center shadow-sm shadow-white cursor-pointer overflow-hidden duration-300 group hover:w-36 hover:rounded-full hover:bg-red-500 group-hover:before:opacity-100 group-hover:before:translate-y-7 group-hover:before:text-xs group-hover:before:font-medium group-hover:before:transition-all group-hover:before:transform group-hover:before:translate-y-7 group-hover:transition-all",
    
    Animated13: "w-[130px] h-[40px] text-[1.1em] cursor-pointer bg-[#171717] text-white border-none rounded-md transition-all duration-400 hover:translate-y-[-10px] hover:shadow-[0_7px_0_-2px_#f85959,_0_15px_0_-4px_#39a2db,_0_16px_10px_-3px_#39a2db] active:translate-y-[-5px] active:shadow-[0_2px_0_-2px_#f85959,_0_8px_0_-4px_#39a2db,_0_12px_10px_-3px_#39a2db]",
    Animated14: "w-28 h-12 cursor-pointer text-white text-[17px] rounded-[1rem] border-0 relative bg-[#100720] transition-all duration-500 active:scale-[0.9] active:rotate-[3deg] active:bg-gradient-to-r active:from-[#ff5ef7] active:to-[#02f5ff] shadow-lg",
    Animated15: "relative w-32 p-0 border-none text-[15px] cursor-pointer rounded-[5px] bg-[#5cdb95] font-[Gochi Hand] transition-all duration-[300ms] ease-[cubic-bezier(0.175,_0.885,_0.32,_1.275)] transform shadow-[0_2px_0_#494a4b] active:translate-y-[5px] active:pb-0 flex items-center justify-center",
    Animated16: "flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]",
  
    Animated17: "relative px-[20px] py-[15px] text-[16px] bg-transparent border-none text-[#f0f0f0] z-0 h-12 transition-all duration-400 before:absolute before:bottom-0 before:right-0 before:rounded-[10px] before:bg-[#28282d] before:w-full before:h-full before:z-[-1] before:transition-all before:duration-700 before:transform before:translate-x-0 before:translate-y-0 after:absolute after:bottom-0 after:right-0 after:rounded-[50px] after:bg-[#ffffff15] after:backdrop-blur-[5px] after:w-[35px] after:h-[35px] after:z-[-1] after:transition-all after:duration-300 after:transform after:translate-x-[10px] after:translate-y-[10px] hover:before:translate-x-[5%] hover:before:translate-y-[20%] hover:before:w-[110%] hover:before:h-[110%] hover:after:translate-x-0 hover:after:translate-y-0 hover:after:w-full hover:after:h-full hover:after:rounded-[10px] active:after:transition-none active:after:translate-y-[5%]",
    Animated18: "relative bg-[rgb(255,209,81)] text-black text-[1.1rem] w-[120px] h-[45px] px-[20px] py-[10px] border-none transition-[background-color,transform] duration-200 ease-in after:content-['Hover'] after:flex after:items-center after:justify-center after:w-[120px] after:h-[45px] after:absolute after:top-0 after:left-0 after:bg-[rgb(255,187,0)] after:transform after:translate-x-[5px] after:translate-y-[5px] after:transition-all after:duration-150 hover:after:translate-x-[-5px] hover:after:translate-y-[-5px] hover:transform hover:translate-x-[5px] hover:translate-y-[5px] active:after:bg-[rgb(207,152,0)]",
    Animated19: "border border-black px-[30px] py-[12px] rounded-[30px] bg-[#fdceb6] text-black font-bold text-[15px] shadow-sm transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-[0px_7px_1px_rgba(0,_0,_0,_0.5)] active:translate-y-[10px] active:shadow-sm",
    Animated20: "",
  };
  

  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-5 py-3 text-lg",
  };

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={classNames(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size]
      )}
    >
      {children}
    </button>
  );
};

export default Button;
