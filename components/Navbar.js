"use client";

import React from "react";
import Link from "next/link";
import { useProjects } from "@/context/ProjectContext";
import Button from "./Button";

export default function Navbar() {
  const { searchQuery, setSearchQuery, setIsSubmitModalOpen } = useProjects();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center font-black text-white text-lg shadow-md group-hover:scale-105 transition-transform">
            🔥
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors">
              PeerRoast
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-orange-950/80 text-orange-400 border border-orange-800/40">
              MVP Stage
            </span>
          </div>
        </Link>

        {/* Global Search */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
              🔍
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, niches, or tech stacks..."
              className="w-full pl-9 pr-4 py-1.5 text-sm rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block"
          >
            Explore
          </Link>
          <Button onClick={() => setIsSubmitModalOpen(true)} size="md">
            + Pitch Your MVP
          </Button>
        </div>
      </div>
    </header>
  );
}
