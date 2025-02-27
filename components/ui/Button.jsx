import React from "react";
import classNames from "classnames";

export const variantStyles = {
        Default: "bg-blue-600 rounded-md text-white shadow-md h-10 w-24",
        Destructive: "bg-red-600 text-white rounded-md shadow-sm hover:bg-red-500 h-10 w-24",
        Outline: "border border-gray-600 bg-transparent rounded-md text-white hover:bg-gray-700 h-10 w-20",
        Secondary: "bg-gray-700 text-white shadow-sm rounded-md hover:bg-gray-600 h-10 w-24",
        Ghost: "text-gray-300 hover:bg-gray-700 rounded-md hover:text-white h-10 w-24",
        Link: "text-blue-400 underline-offset-4 rounded-md hover:underline h-10 w-32",
};

const Button = ({
  type = "button",
  variant = "primary",
  size = "medium",
  isDisabled = false,
  children,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium ";




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
