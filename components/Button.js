"use client";

import React from "react";

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base font-semibold",
  };

  const variantStyles = {
    primary: "bg-orange-600 hover:bg-orange-500 text-white focus:ring-orange-500 shadow-lg shadow-orange-600/20 active:scale-95",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 focus:ring-slate-500",
    outline: "border border-orange-500/40 text-orange-400 hover:bg-orange-500/10 focus:ring-orange-500",
    ghost: "text-slate-400 hover:text-white hover:bg-slate-800/60 focus:ring-slate-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  );
}
