import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { SpotlightCard } from '@/components/react-bits/SpotlightCard';
import { User, MapPin, Code2, Brain, ArrowUpRight, Award } from 'lucide-react';

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

        {/* ONE SINGLE, UNIFIED, LARGE ABOUT ME TILE (4 blocks removed, narrative fully expanded!) */}
        <div className="max-w-5xl mx-auto">
          <SpotlightCard
            className="p-8 sm:p-12 border-white/[0.1] bg-[#0c1019]/95"
            spotlightColor="rgba(6, 182, 212, 0.12)"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Casual Photo Column */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="relative group w-full max-w-sm">
                  {/* Glowing Ambient Halo */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 opacity-30 group-hover:opacity-60 blur-xl transition-all duration-500" />
                  
                  {/* Casual Photo */}
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
                      <span className="text-[10px] font-mono text-cyan-300 font-semibold">
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

              {/* Comprehensive Narrative Column (Rich, authentic CV & LinkedIn details) */}
              <div className="md:col-span-7 space-y-4 text-left">
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
                    I am a Computer Science &amp; Engineering undergraduate specializing in <strong className="text-cyan-300 font-semibold">Artificial Intelligence and Machine Learning</strong> at Lovely Professional University. Having completed my foundational schooling at the prestigious <strong className="text-white">St. Edward's School, Shimla</strong>, I have cultivated a strong dedication to computational rigor, problem-solving, and building high-impact software systems.
                  </p>
                  
                  <p>
                    My technical expertise centers on <strong className="text-white">C++, Java, Python, SQL, and JavaScript</strong>, alongside frontend development with <strong className="text-white">React, HTML5, and CSS3</strong>. I focus extensively on asymptotic optimization and data structure design—engineering systems utilizing <span className="font-mono text-cyan-300 font-semibold">Nested HashMaps for O(1) average lookup</span>, PriorityQueues for emergency scheduling, and C++ STL for high-performance memory operations.
                  </p>

                  <p>
                    My engineering work spans practical domains: from developing the <strong className="text-white">Smart Blood Donation &amp; Emergency Matching Network</strong> and simulating POSIX kernel calls in <strong className="text-white">TraceX</strong>, to applying <strong className="text-white">Linear Regression</strong> for village distress scoring and <strong className="text-white">Genetic Algorithms</strong> for rural doctor-slot routing in <strong className="text-white">Opti-Reach</strong>.
                  </p>

                  <p>
                    In addition to software systems, I am an official co-inventor of an Indian Patent (<span className="text-amber-300 font-mono font-semibold">App #202411039860</span>) for an autonomous sensor-guided electromechanical cleaning mechanism. I believe in writing modular, type-safe, maintainable code and am actively looking to contribute as a Software Engineering or Full-Stack &amp; AI/ML engineer.
                  </p>
                </div>

                {/* Footer status */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for SWE &amp; AI Roles
                  </span>
                  <a
                    href="#projects"
                    className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors flex items-center gap-1"
                  >
                    <span>View Projects</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
