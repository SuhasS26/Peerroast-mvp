"use client";

import React, { useState } from "react";
import { useProjects } from "@/context/ProjectContext";
import Button from "./Button";

export default function SubmitModal() {
  const { isSubmitModalOpen, setIsSubmitModalOpen, addProject } = useProjects();
  const [formData, setFormData] = useState({
    title: "",
    tagline: "",
    description: "",
    category: "AI",
    founder: "",
    demoUrl: "",
  });

  if (!isSubmitModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.tagline) return;

    addProject(formData);
    setFormData({
      title: "",
      tagline: "",
      description: "",
      category: "AI",
      founder: "",
      demoUrl: "",
    });
    setIsSubmitModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-white">Pitch Your MVP</h2>
            <p className="text-xs text-slate-400">Get roast feedback before you launch publicly</p>
          </div>
          <button
            onClick={() => setIsSubmitModalOpen(false)}
            className="text-slate-400 hover:text-white text-lg font-bold p-1 rounded hover:bg-slate-800"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Project Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. AcmeFlow"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              One-Line Tagline *
            </label>
            <input
              type="text"
              required
              placeholder="What does it do in plain English?"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="AI">AI</option>
                <option value="DevTools">DevTools</option>
                <option value="Productivity">Productivity</option>
                <option value="Design">Design</option>
                <option value="SaaS">SaaS</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Founder Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={formData.founder}
                onChange={(e) => setFormData({ ...formData, founder: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Demo / Prototype Link
            </label>
            <input
              type="url"
              placeholder="https://..."
              value={formData.demoUrl}
              onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Elevator Pitch & What you need feedback on
            </label>
            <textarea
              rows={3}
              placeholder="Tell builders what problem this solves and what specific questions you have..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
            <Button variant="ghost" onClick={() => setIsSubmitModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Submit MVP
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
