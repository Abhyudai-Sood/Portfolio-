import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { SpotlightCard } from '@/components/react-bits/SpotlightCard';
import { Code2, Terminal, Globe, Wrench, Sparkles } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 1:
        return <Terminal className="w-4 h-4 text-amber-400" />;
      case 2:
        return <Globe className="w-4 h-4 text-emerald-400" />;
      default:
        return <Wrench className="w-4 h-4 text-violet-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools &amp; Technologies
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Backed by real project implementations, hardware prototypes, and capstone documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <SpotlightCard
              key={cat.title}
              className="h-full"
              spotlightColor="rgba(6, 182, 212, 0.12)"
            >
              <div className="flex items-center gap-2.5 border-b border-white/[0.08] pb-3 mb-5">
                <span className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  {getCategoryIcon(idx)}
                </span>
                <h3 className="text-lg font-bold text-white">{cat.title}</h3>
              </div>

              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="w-2.5 h-2.5 rounded-full inline-block shrink-0 shadow-sm"
                        style={{ backgroundColor: skill.brandColor }}
                      />
                      <span className="font-bold text-slate-100 text-xs">
                        {skill.name}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-snug pl-4">
                      {skill.proof}
                    </p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
