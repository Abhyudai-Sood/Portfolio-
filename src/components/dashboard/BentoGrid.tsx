import React from 'react';
import { SpotlightCard } from '@/components/react-bits/SpotlightCard';
import { StatusWidget } from '@/components/dashboard/StatusWidget';
import { PatentSpotlight } from '@/components/dashboard/PatentSpotlight';
import { PERSONAL_INFO, PROJECTS } from '@/data/portfolioData';
import { Award, FolderGit2, Code2, Sparkles, Cpu, CheckCircle2, ArrowUpRight, Brain, Zap } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <section id="dashboard" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMMAND CENTER &amp; OVERVIEW</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineering Dashboard
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Verified intellectual property, full-stack architectural highlights, and live availability.
            </p>
          </div>

          {/* Quick Metric Badges (NO CGPA HERE - ONLY IN EDUCATION!) */}
          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <div className="px-3.5 py-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2.5 shadow-sm">
              <Brain className="w-4 h-4 text-cyan-400" />
              <div className="text-left">
                <span className="text-[10px] text-slate-400 font-mono block">SPECIALIZATION</span>
                <span className="text-sm font-bold font-mono text-cyan-300">Full-Stack &bull; AI</span>
              </div>
            </div>

            <div className="px-3.5 py-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2.5 shadow-sm">
              <Award className="w-4 h-4 text-amber-400" />
              <div className="text-left">
                <span className="text-[10px] text-slate-400 font-mono block">INDIAN PATENT</span>
                <span className="text-sm font-bold font-mono text-amber-300">#202411039860</span>
              </div>
            </div>

            <div className="px-3.5 py-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2.5 shadow-sm">
              <FolderGit2 className="w-4 h-4 text-emerald-400" />
              <div className="text-left">
                <span className="text-[10px] text-slate-400 font-mono block">PROJECTS</span>
                <span className="text-sm font-bold font-mono text-emerald-300">5 Built</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Card Clean Executive Bento Grid (No separate public repos card as requested) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          
          {/* Card 1: Patent Spotlight (5 cols) */}
          <SpotlightCard
            className="lg:col-span-5 h-[340px] p-6 sm:p-7"
            spotlightColor="rgba(245, 158, 11, 0.15)"
          >
            <PatentSpotlight />
          </SpotlightCard>

          {/* Card 2: Full-Stack Engineering Highlights (7 cols) */}
          <SpotlightCard
            className="lg:col-span-7 h-[340px] p-6 sm:p-7 flex flex-col justify-between"
            spotlightColor="rgba(6, 182, 212, 0.15)"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Code2 className="w-4 h-4" />
                  <span>Full-Stack &amp; Systems Architecture</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Production Standards
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Building scalable web architectures with modern JavaScript (ES6+), React, Tailwind CSS, and robust backend integrations with Java and Python.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Algorithmic Optimization</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    O(1) average lookup engines, PriorityQueue dispatch, and graph traversals.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Frontend &amp; Visualization</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Responsive interfaces, interactive Leaflet geospatial maps, and Chart.js telemetry.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono">
              <span className="text-slate-400">Targeting: SWE &amp; Full-Stack Roles</span>
              <a
                href="#projects"
                className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <span>Browse Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </SpotlightCard>

          {/* Card 3: Live Status & Telemetry (5 cols) */}
          <SpotlightCard
            className="lg:col-span-5 h-[320px] p-6 sm:p-7"
            spotlightColor="rgba(16, 185, 129, 0.15)"
          >
            <StatusWidget />
          </SpotlightCard>

          {/* Card 4: Algorithmic & AI Engineering Foundation (7 cols) - Replaced public repo card! */}
          <SpotlightCard
            className="lg:col-span-7 h-[320px] p-6 sm:p-7 flex flex-col justify-between"
            spotlightColor="rgba(139, 92, 246, 0.15)"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                <div className="flex items-center gap-2 text-violet-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Brain className="w-4 h-4" />
                  <span>Algorithmic &amp; AI Engineering Core</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Data Structures &bull; Machine Learning
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>DSA &amp; Optimization</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Implementation of Nested HashMaps for O(1) emergency donor retrieval, PriorityQueues for triage, and C++ STL memory management.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Applied AI &amp; Heuristics</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Linear Regression models for rural village distress scoring and Genetic Algorithms for multi-doctor schedule and route optimization.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono">
              <span className="text-slate-400">Active LeetCode problem solver</span>
              <a
                href="#skills"
                className="text-violet-400 hover:text-violet-300 flex items-center gap-1 font-semibold"
              >
                <span>Inspect Skills Matrix</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
};
