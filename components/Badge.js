import React from "react";

export default function Badge({ children, variant = "neutral", className = "" }) {
  const variantStyles = {
    neutral: "bg-slate-800 text-slate-300 border border-slate-700",
    brand: "bg-orange-950/60 text-orange-400 border border-orange-800/40",
    success: "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40",
    warning: "bg-amber-950/60 text-amber-400 border border-amber-800/40",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
