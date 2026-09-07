import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { SpotlightCard } from '@/components/react-bits/SpotlightCard';
import { Code, Layers, Sparkles, Brain, CheckCircle2 } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL &amp; PROFESSIONAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Programming languages, algorithmic libraries, engineering tools, and professional soft skills.
          </p>
        </div>

        {/* Symmetric 4-Card Skills Grid (2x2 on desktop for perfect balance) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor="rgba(6, 182, 212, 0.12)"
              className="p-6 sm:p-8 flex flex-col justify-between border-white/[0.08] bg-[#0c1019]/90"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-5">
                  <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>{category.title}</span>
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">
                    {category.skills.length} Competencies
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-1.5 group"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: skill.brandColor }}
                        />
                        <span className="font-bold text-xs text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
                        {skill.proof}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Applied across projects &amp; verified coursework
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};
