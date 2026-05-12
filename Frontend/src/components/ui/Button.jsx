import React from "react";
import { Link } from "react-router";

export const Button = ({
  children,
  variant = "primary",
  className = "",
  as: Component = "button",
  to,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center text-center box-border font-mono font-bold leading-normal tracking-[0.18em] uppercase transition-all duration-300 whitespace-nowrap align-middle disabled:opacity-40 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary-container text-black border border-primary-container px-6 py-3 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(0,240,255,0.35)]",
    secondary:
      "bg-black/35 border border-white/25 text-white px-6 py-3 hover:bg-white/8 backdrop-blur-sm",
    ghost:
      "bg-transparent border border-transparent text-white px-4 py-2 hover:border-white/20 hover:bg-white/5",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
};
