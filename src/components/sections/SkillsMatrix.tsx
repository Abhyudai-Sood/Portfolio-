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

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: skill.brandColor }}
                          />
                          <span className="font-semibold text-slate-100">
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] text-slate-400">
                          {skill.proof}
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.brandColor,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified through practical capstones
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};
