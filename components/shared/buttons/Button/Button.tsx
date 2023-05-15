import React, { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button
      className="w-full mb-6 p-5 bg-blue-500 text-white text-2xl rounded-3xl hover:bg-blue-600 transition-colors"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
