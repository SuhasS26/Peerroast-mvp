"use client";

import React, { createContext, useContext, useState } from "react";

const initialProjects = [
  {
    id: "1",
    title: "DocuBrief",
    tagline: "AI that distills 50-page legal docs into bullet-point briefs",
    description: "DocuBrief extracts clauses, liability flags, and actionable steps from enterprise contracts in seconds using local LLMs. Designed for founders signing agreements without legal counsel.",
    category: "AI",
    founder: "Arjun Verma",
    founderAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    demoUrl: "https://example.com/docubrief",
    upvotes: 42,
    hasUpvoted: false,
    dateAdded: "2 days ago",
    roasts: [
      {
        id: "r1",
        author: "DevPriya",
        role: "Fullstack Dev",
        content: "Love the UI clean contrast! However, the demo upload took over 12 seconds with no progress bar. Consider adding a skeleton loader.",
        rating: "UX Concern",
        createdAt: "1 day ago"
      },
      {
        id: "r2",
        author: "Marcus Vance",
        role: "Indie Maker",
        content: "Clear value prop. But be careful with legal liability disclaimers in your footer before launching on Product Hunt.",
        rating: "Positioning",
        createdAt: "18 hours ago"
      }
    ]
  },
  {
    id: "2",
    title: "SprintSync",
    tagline: "Async 2-minute daily standup bot for distributed dev squads",
    description: "Replaces 30-minute morning calls with async voice notes and Slack digest summaries. Keeps blockers visible without interrupting flow state.",
    category: "Productivity",
    founder: "Sanya Roy",
    founderAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
    demoUrl: "https://example.com/sprintsync",
    upvotes: 29,
    hasUpvoted: false,
    dateAdded: "3 days ago",
    roasts: [
      {
        id: "r3",
        author: "Karan Johal",
        role: "Tech Lead",
        content: "Tested the Slack integration test link. Very snappy. Would be cool to have timezone conversion badges on cards.",
        rating: "Feature Request",
        createdAt: "2 days ago"
      }
    ]
  },
  {
    id: "3",
    title: "KiteMetrics",
    tagline: "Lightweight privacy-friendly analytics for Next.js applications",
    description: "Cookieless, GDPR-compliant web analytics script that adds less than 1KB to your bundle size. View live visitors and referrers in a clean dashboard.",
    category: "DevTools",
    founder: "Leo Tanaka",
    founderAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    demoUrl: "https://example.com/kitemetrics",
    upvotes: 68,
    hasUpvoted: false,
    dateAdded: "5 days ago",
    roasts: [
      {
        id: "r4",
        author: "Sophie Claire",
        role: "Frontend Engineer",
        content: "Extremely fast dashboard! I would suggest displaying bounce rate and median session time alongside pageviews.",
        rating: "Feedback",
        createdAt: "3 days ago"
      }
    ]
  },
  {
    id: "4",
    title: "PaletteDeck",
    tagline: "Generate accessible, harmonized color systems with WCAG scores",
    description: "Stop guessing color contrast. PaletteDeck builds complete 10-shade design palettes with instant AA/AAA accessibility score verification.",
    category: "Design",
    founder: "Nadia Malik",
    founderAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    demoUrl: "https://example.com/palettedeck",
    upvotes: 51,
    hasUpvoted: false,
    dateAdded: "6 days ago",
    roasts: []
  }
];

const ProjectContext = createContext(null);

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const toggleUpvote = (id) => {
    setProjects((prev) =>
      prev.map((project) => {
        if (project.id === id) {
          const hasUpvoted = !project.hasUpvoted;
          return {
            ...project,
            hasUpvoted,
            upvotes: hasUpvoted ? project.upvotes + 1 : project.upvotes - 1,
          };
        }
        return project;
      })
    );
  };

  const addProject = (newProject) => {
    const formatted = {
      ...newProject,
      id: Date.now().toString(),
      upvotes: 1,
      hasUpvoted: true,
      dateAdded: "Just now",
      founderAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces",
      roasts: [],
    };
    setProjects((prev) => [formatted, ...prev]);
  };

  const addRoast = (projectId, roastData) => {
    setProjects((prev) =>
      prev.map((project) => {
        if (project.id === projectId) {
          const newRoast = {
            id: "r-" + Date.now(),
            author: roastData.author || "Anonymous Maker",
            role: roastData.role || "Peer Reviewer",
            content: roastData.content,
            rating: roastData.rating || "Constructive Critique",
            createdAt: "Just now",
          };
          return {
            ...project,
            roasts: [newRoast, ...project.roasts],
          };
        }
        return project;
      })
    );
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        isSubmitModalOpen,
        setIsSubmitModalOpen,
        toggleUpvote,
        addProject,
        addRoast,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
}
