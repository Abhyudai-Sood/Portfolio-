import React from 'react';
import { PERSONAL_INFO, PATENT_INFO } from '@/data/portfolioData';
import { SpotlightCard } from '@/components/react-bits/SpotlightCard';
import { User, Code2, Brain, Award, Heart, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND &amp; PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Engineering foundation, practical problem solving, and technological innovation.
          </p>
        </div>

        {/* ONE SINGLE, UNIFIED, LARGE ABOUT ME TILE (Removed the 4 sub-tiles as instructed!) */}
        <div className="max-w-5xl mx-auto">
          <SpotlightCard
            className="p-8 sm:p-12 border-white/[0.1] bg-[#0c1019]/95"
            spotlightColor="rgba(6, 182, 212, 0.15)"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Bigger Casual Picture Column */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="relative group w-full max-w-sm">
                  {/* Glowing Ambient Halo */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 opacity-30 group-hover:opacity-60 blur-xl transition-all duration-500" />
                  
                  {/* Casual Photo (Bigger than before!) */}
                  <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-2xl bg-[#080a0f] aspect-[4/5] w-full">
                    <img
                      src="/abhyudai_casual.jpg"
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Bottom Floating Badge */}
                    <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#080a0f]/85 backdrop-blur-md border border-white/[0.1] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[11px] font-mono text-slate-200 font-semibold">
                          Abhyudai Sood
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-300">
                        Full-Stack &bull; AI/ML
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Shimla, Himachal Pradesh &bull; Punjab</span>
                </div>
              </div>

              {/* Comprehensive Narrative Column */}
              <div className="md:col-span-7 space-y-5 text-left">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Hi, I'm Abhyudai Sood
                  </h3>
                  <p className="text-sm font-mono text-cyan-300 mt-1">
                    Computer Science Undergraduate &bull; Lovely Professional University
                  </p>
                </div>

                <div className="space-y-3.5 text-slate-300 text-sm leading-relaxed">
                  <p>
                    I am a Computer Science undergraduate specializing in <strong className="text-cyan-300 font-semibold">Artificial Intelligence &amp; Machine Learning</strong> at Lovely Professional University. Originally from Shimla, Himachal Pradesh, I am deeply passionate about engineering scalable software solutions, optimizing algorithmic logic, and bridging computational intelligence with real-world impact.
                  </p>
                  
                  <p>
                    My technical toolkit spans <strong className="text-white">C++, Java, Python, JavaScript, and React</strong>. I thrive on algorithmic problem solving—structuring high-performance systems with HashMap multi-indexing for <span className="font-mono text-cyan-300">O(1)</span> average retrieval, PriorityQueue emergency scheduling, and applying machine learning regression and genetic algorithms to optimize healthcare logistics.
                  </p>

                  <p>
                    Beyond software development, I am a co-inventor of an officially registered Indian Patent (<span className="text-amber-300 font-mono font-semibold">App #{PATENT_INFO.applicationNo}</span>) for an automated sensor-guided electromechanical cleaning carriage designed for architectural tracks.
                  </p>
                </div>

                {/* Core Pillars in a sleek unified horizontal layout */}
                <div className="pt-4 border-t border-white/[0.08] grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5">
                    <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <span className="text-[11px] font-bold text-white block">Algorithmic Rigor</span>
                      <span className="text-[10px] text-slate-400 font-mono">C++, Java, DSA O(1)</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5">
                    <Brain className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-[11px] font-bold text-white block">Applied AI / ML</span>
                      <span className="text-[10px] text-slate-400 font-mono">Regression &amp; Optimization</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-[11px] font-bold text-white block">Indian Patent</span>
                      <span className="text-[10px] text-slate-400 font-mono">Co-Inventor (#202411039860)</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5">
                    <Heart className="w-4 h-4 text-rose-400 shrink-0" />
                    <div>
                      <span className="text-[11px] font-bold text-white block">Social Impact</span>
                      <span className="text-[10px] text-slate-400 font-mono">WHTS NGO &amp; Healthcare</span>
                    </div>
                  </div>
                </div>

                {/* Footer status */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Available for Full-Stack &amp; AI Roles</span>
                  <a
                    href="#projects"
                    className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
                  >
                    View Selected Work &rarr;
                  </a>
                </div>

              </div>

            </div>
          </SpotlightCard>
        </div>

      </div>
    </section>
  );
};
