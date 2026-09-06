import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import { Github, FolderGit2, ArrowUpRight, Sparkles, Maximize2 } from 'lucide-react';
import { ProjectModal } from '@/components/modals/ProjectModal';

export const ProjectsShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>SELECTED WORK &amp; REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Click on any project tile to expand the full technical breakdown, algorithmic specs, and architecture.
          </p>
        </div>

        {/* Projects Grid (Symmetric, Uniform Height, Expands cleanly into Modal on click) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl border border-white/[0.08] bg-[#0c1019]/90 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 backdrop-blur-xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Timeline */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border"
                    style={{
                      backgroundColor: `${project.accentColor}15`,
                      color: project.accentColor,
                      borderColor: `${project.accentColor}30`,
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {project.timeline}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/80 mt-1">
                  {project.subtitle}
                </p>

                {/* Summary (Clean & Concise) */}
                <p className="text-xs text-slate-300 mt-3 leading-relaxed line-clamp-3">
                  {project.shortSummary}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-2 border-t border-white/[0.06]">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.02] text-slate-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Expand Trigger + Direct GitHub Repo Button Under Tile */}
              <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1 font-medium group-hover:underline">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Expand Details</span>
                </span>

                {/* Direct GitHub Repo link directly under tile */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.14] text-white text-xs font-mono font-medium border border-white/[0.1] flex items-center gap-1.5 transition-all shadow-sm"
                  title="View GitHub Repository"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Repo</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Expanded Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
