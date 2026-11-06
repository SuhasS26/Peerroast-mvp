"use client";

import React from "react";
import Link from "next/link";
import { useProjects } from "@/context/ProjectContext";
import Badge from "./Badge";

export default function ProjectCard({ project }) {
  const { toggleUpvote } = useProjects();

  return (
    <div className="group bg-slate-800/50 hover:bg-slate-800/90 border border-slate-700/70 hover:border-orange-500/40 rounded-xl p-5 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-orange-950/10">
      <div>
        {/* Header Row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <img
              src={project.founderAvatar}
              alt={project.founder}
              className="w-10 h-10 rounded-full border border-slate-700 object-cover"
            />
            <div>
              <Link href={`/project/${project.id}`}>
                <h3 className="font-bold text-white text-base group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
              </Link>
              <p className="text-xs text-slate-400">By {project.founder} • {project.dateAdded}</p>
            </div>
          </div>
          <Badge variant="brand">{project.category}</Badge>
        </div>

        {/* Tagline & Pitch */}
        <p className="text-sm font-medium text-slate-200 mb-2">
          {project.tagline}
        </p>
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      {/* Footer Info & Actions */}
      <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between">
        <Link
          href={`/project/${project.id}`}
          className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1 transition-colors"
        >
          <span>💬 {project.roasts.length} Roasts</span>
        </Link>

        {/* Upvote Pill */}
        <button
          onClick={() => toggleUpvote(project.id)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            project.hasUpvoted
              ? "bg-orange-600 text-white shadow-sm shadow-orange-600/30 scale-105"
              : "bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white"
          }`}
        >
          <span>▲</span>
          <span>{project.upvotes}</span>
        </button>
      </div>
    </div>
  );
}
