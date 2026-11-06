"use client";

import React from "react";
import { useProjects } from "@/context/ProjectContext";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";

const categories = ["All", "AI", "DevTools", "Productivity", "Design", "SaaS"];

export default function HomePage() {
  const {
    projects,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setIsSubmitModalOpen,
  } = useProjects();

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Section */}
      <section className="text-center py-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-800/50 text-orange-400 text-xs font-semibold mb-6">
          <span>🚀 Pre-Launch Validation</span>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
          <span>Zero Fluff Critique</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          Get honest roasts before <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
            Product Hunt launch day.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          Post your prototype, gather constructive teardowns from fellow makers, and fix your blind spots before your users see them.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" onClick={() => setIsSubmitModalOpen(true)}>
            Post Your MVP for Roast
          </Button>
          <a href="#explore">
            <Button size="lg" variant="secondary">
              Review Submitted MVPs
            </Button>
          </a>
        </div>

        {/* Live Counters */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-12 pt-8 border-t border-slate-800/80">
          <div>
            <p className="text-2xl font-black text-white">{projects.length}</p>
            <p className="text-xs text-slate-400">MVPs Listed</p>
          </div>
          <div>
            <p className="text-2xl font-black text-orange-400">
              {projects.reduce((acc, p) => acc + p.roasts.length, 0)}
            </p>
            <p className="text-xs text-slate-400">Roasts Given</p>
          </div>
          <div>
            <p className="text-2xl font-black text-emerald-400">100%</p>
            <p className="text-xs text-slate-400">Free & Open</p>
          </div>
        </div>
      </section>

      {/* Explorer Feed */}
      <section id="explore" className="mt-14">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-orange-600 text-white shadow-md shadow-orange-600/30"
                    : "bg-slate-800 hover:bg-slate-700/80 text-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-xs text-slate-400 font-medium">
            Showing {filteredProjects.length} projects
          </span>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-800/30 rounded-2xl border border-slate-800 mt-6">
            <span className="text-4xl block mb-3">🔍</span>
            <h3 className="text-lg font-bold text-white mb-1">No products found</h3>
            <p className="text-sm text-slate-400 mb-4">
              Try adjusting your category filter or search keywords.
            </p>
            <Button variant="secondary" onClick={() => { setSelectedCategory("All"); }}>
              Reset Filters
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
