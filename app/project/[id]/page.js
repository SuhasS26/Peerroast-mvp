"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useProjects } from "@/context/ProjectContext";
import Badge from "@/components/Badge";
import Button from "@/components/Button";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { projects, toggleUpvote, addRoast } = useProjects();

  const project = projects.find((p) => p.id === id);

  const [roastContent, setRoastContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [role, setRole] = useState("Maker");
  const [rating, setRating] = useState("UX Teardown");

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Project Not Found</h2>
        <p className="text-slate-400 mb-6">The requested product could not be located in state.</p>
        <Link href="/">
          <Button variant="secondary">Back to Feed</Button>
        </Link>
      </div>
    );
  }

  const handleRoastSubmit = (e) => {
    e.preventDefault();
    if (!roastContent.trim()) return;

    addRoast(project.id, {
      author: authorName.trim() || "Anonymous Contributor",
      role: role.trim() || "Peer Reviewer",
      content: roastContent.trim(),
      rating: rating,
    });

    setRoastContent("");
    setAuthorName("");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white mb-6 transition-colors"
      >
        ← Back to all MVPs
      </Link>

      {/* Main Pitch Card */}
      <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xl mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-700/60">
          <div className="flex items-center gap-4">
            <img
              src={project.founderAvatar}
              alt={project.founder}
              className="w-14 h-14 rounded-full border-2 border-orange-500/50 object-cover"
            />
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-black text-white">{project.title}</h1>
                <Badge variant="brand">{project.category}</Badge>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Founded by <span className="text-slate-200 font-semibold">{project.founder}</span> • {project.dateAdded}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="md">
                  ↗ Live Demo
                </Button>
              </a>
            )}
            <button
              onClick={() => toggleUpvote(project.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                project.hasUpvoted
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-600/30 scale-105"
                  : "bg-slate-700 hover:bg-slate-600 text-slate-200"
              }`}
            >
              <span>▲</span>
              <span>{project.upvotes} Upvotes</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">Tagline</h3>
            <p className="text-lg font-semibold text-slate-100">{project.tagline}</p>
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">About the MVP</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
          </div>
        </div>
      </div>

      {/* Roasts & Feedback Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Roast Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>🔥 Peer Roasts & Critiques</span>
              <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700">
                {project.roasts.length}
              </span>
            </h2>
          </div>

          {project.roasts.length > 0 ? (
            <div className="space-y-4">
              {project.roasts.map((roast) => (
                <div
                  key={roast.id}
                  className="bg-slate-800/40 border border-slate-700/70 rounded-xl p-5 hover:border-slate-600 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                        {roast.author[0]}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-200">{roast.author}</span>
                        <span className="text-[11px] text-slate-400 ml-2">({roast.role})</span>
                      </div>
                    </div>
                    <Badge variant="warning">{roast.rating}</Badge>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{roast.content}</p>
                  <span className="block text-[10px] text-slate-500 mt-3">{roast.createdAt}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-800/30 rounded-xl border border-slate-800">
              <span className="text-3xl block mb-2">🎯</span>
              <p className="text-sm font-semibold text-slate-300">No critiques yet!</p>
              <p className="text-xs text-slate-500 mt-1">Be the first to inspect this MVP and drop candid feedback.</p>
            </div>
          )}
        </div>

        {/* Submit Roast Form */}
        <div className="lg:col-span-1">
          <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-6 sticky top-24">
            <h3 className="text-base font-bold text-white mb-1">Roast This Project</h3>
            <p className="text-xs text-slate-400 mb-4">Give direct, constructive teardowns.</p>

            <form onSubmit={handleRoastSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Your Specialty / Role
                </label>
                <input
                  type="text"
                  placeholder="e.g. Frontend Dev, UX Designer"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Roast Category
                </label>
                <select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="UX Teardown">UX Teardown</option>
                  <option value="Positioning">Positioning / Copy</option>
                  <option value="Bug / Flaw">Bug / Flaw</option>
                  <option value="Feature Idea">Feature Idea</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Your Critique *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="What works well? What is confusing? Where is the friction point?"
                  value={roastContent}
                  onChange={(e) => setRoastContent(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <Button type="submit" variant="primary" size="md" className="w-full">
                Submit Roast 🔥
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
