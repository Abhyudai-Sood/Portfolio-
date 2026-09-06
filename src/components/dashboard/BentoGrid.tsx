import React from 'react';
import { SpotlightCard } from '@/components/react-bits/SpotlightCard';
import { StatusWidget } from '@/components/dashboard/StatusWidget';
import { PERSONAL_INFO } from '@/data/portfolioData';
import {
  Code2,
  Sparkles,
  Cpu,
  CheckCircle2,
  ArrowUpRight,
  Brain,
  Zap,
  Layers,
  Database,
  GitBranch,
  Award
} from 'lucide-react';

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
              Architecture standards, algorithmic foundations, and current technical status.
            </p>
          </div>

          {/* Quick Metric Badges */}
          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <div className="px-3.5 py-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2.5 shadow-sm">
              <Brain className="w-4 h-4 text-cyan-400" />
              <div className="text-left">
                <span className="text-[10px] text-slate-400 font-mono block">SPECIALIZATION</span>
                <span className="text-sm font-bold font-mono text-cyan-300">Full-Stack &bull; AI</span>
              </div>
            </div>

            <div className="px-3.5 py-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2.5 shadow-sm">
              <Zap className="w-4 h-4 text-amber-400" />
              <div className="text-left">
                <span className="text-[10px] text-slate-400 font-mono block">PROBLEM SOLVING</span>
                <span className="text-sm font-bold font-mono text-amber-300">DSA &bull; LeetCode</span>
              </div>
            </div>

            <div className="px-3.5 py-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2.5 shadow-sm">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <div className="text-left">
                <span className="text-[10px] text-slate-400 font-mono block">LANGUAGES</span>
                <span className="text-sm font-bold font-mono text-emerald-300">6 Mastered</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Card Clean Executive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          
          {/* Card 1: Full-Stack & Systems Architecture (Enriched & fully detailed!) */}
          <SpotlightCard
            className="lg:col-span-7 h-[360px] p-6 sm:p-7 flex flex-col justify-between border-white/[0.08] bg-[#0c1019]/90"
            spotlightColor="rgba(6, 182, 212, 0.15)"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Code2 className="w-4 h-4" />
                  <span>Full-Stack &amp; Systems Architecture</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Production Engineering Standards
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Architecting modular web applications and high-throughput backends with type safety, responsive interfaces, and algorithmic data structures.
              </p>

              {/* Architecture Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Frontend Tier</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    React, Tailwind CSS, Chart.js telemetry, Leaflet.js geospatial mapping.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <Database className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Backend &amp; Logic</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Java Collections Framework, C++ STL, OOP design, relational SQL queries.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <GitBranch className="w-3.5 h-3.5 text-violet-400" />
                    <span>Workflow &amp; CI</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Git branch workflows, automated GitHub continuous deployment via Vercel.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono">
              <span className="text-slate-400">Primary focus: Full-Stack SWE &amp; AI Systems</span>
              <a
                href="#projects"
                className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
              >
                <span>Browse Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </SpotlightCard>

          {/* Card 2: Status Widget (Cleaned up as requested) */}
          <SpotlightCard
            className="lg:col-span-5 h-[360px] p-6 sm:p-7 border-white/[0.08] bg-[#0c1019]/90"
            spotlightColor="rgba(16, 185, 129, 0.15)"
          >
            <StatusWidget />
          </SpotlightCard>

          {/* Card 3: Algorithmic & AI Engineering Core (Complete & enriched!) */}
          <SpotlightCard
            className="lg:col-span-7 h-[340px] p-6 sm:p-7 flex flex-col justify-between border-white/[0.08] bg-[#0c1019]/90"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>DSA Optimization</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Engineered Nested HashMaps for <strong className="text-cyan-300">O(1) average lookup</strong> in donor matching, PriorityQueue emergency triage, and C++ STL memory management.
                  </p>
                  <div className="text-[10px] font-mono text-slate-400 pt-1">
                    Key structures: HashMaps, Heaps, Stacks, LinkedLists
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Applied AI &amp; Heuristics</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Implemented <strong className="text-cyan-300">Linear Regression</strong> for village healthcare distress scoring and <strong className="text-cyan-300">Genetic Algorithms</strong> for doctor-slot routing with conflict reduction.
                  </p>
                  <div className="text-[10px] font-mono text-slate-400 pt-1">
                    Key models: Regression, Genetic Heuristics, Scoring
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono">
              <span className="text-slate-400">Competitive programming &bull; LeetCode practice</span>
              <a
                href="https://github.com/Abhyudai-Sood/LeetCode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 flex items-center gap-1 font-semibold"
              >
                <span>github.com/Abhyudai-Sood/LeetCode</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </SpotlightCard>

          {/* Card 4: Operating System Simulation Core (TraceX Spotlight) */}
          <SpotlightCard
            className="lg:col-span-5 h-[340px] p-6 sm:p-7 flex flex-col justify-between border-white/[0.08] bg-[#0c1019]/90"
            spotlightColor="rgba(6, 182, 212, 0.15)"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>Systems &amp; Low-Level Sim</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 font-bold">
                  POSIX Kernel
                </span>
              </div>

              <h4 className="text-base font-bold text-white">
                TraceX: OS Syscall Simulation
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Interactive simulator demonstrating kernel system calls (<code className="text-cyan-300 font-mono">fork</code>, <code className="text-cyan-300 font-mono">exec</code>, <code className="text-cyan-300 font-mono">read</code>, <code className="text-cyan-300 font-mono">write</code>, <code className="text-cyan-300 font-mono">exit</code>), PID management, and memory allocation.
              </p>

              <div className="mt-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Syscall Dispatch</span>
                  <span className="text-cyan-300">POSIX Standard</span>
                </div>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Visualization</span>
                  <span className="text-emerald-300">Chart.js Analytics</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Systems programming</span>
              <a
                href="https://github.com/Abhyudai-Sood/TraceX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
              >
                <span>View TraceX Repo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
};
