import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-600 
        text-white rounded-lg hover:from-indigo-400 hover:via-purple-400 hover:to-fuchsia-500 
        transition ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
