import { forwardRef } from "react";
import {motion} from "framer-motion"
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    const primaryGradient = "bg-gradient-to-r from-[#ff9966] to-[#ff5e62]";
    return (
      // <button
      //   ref={ref}
      //   className={`px-4 py-2 font-sans bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-600 
      //   text-white rounded-lg hover:from-indigo-400 hover:via-purple-400 hover:to-fuchsia-500 
      //   transition ${className}`}
      //   {...props}
      // >
      //   
      // </button>
      <motion.button
      ref={ref}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${primaryGradient} text-white px-2 py-2 md:px-4 md:py-2 rounded-full text-sm  font-medium hover:opacity-90 transition shadow-md md:text-base ${className}`}
      {...props}
    >
     {children}
    </motion.button>
    );
  }
);

Button.displayName = "Button";
