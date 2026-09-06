import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, PATENT_INFO } from '@/data/portfolioData';
import { DecryptedText } from '@/components/react-bits/DecryptedText';
import { SpecularButton } from '@/components/react-bits/SpecularButton';
import { Magnet } from '@/components/react-bits/Magnet';
import { ScrollIndicator } from '@/components/react-bits/ScrollIndicator';
import {
  Terminal,
  ArrowRight,
  Sparkles,
  Award,
  GraduationCap,
  Layers,
  Code2,
  Cpu,
  Brain
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        
        {/* 2-Column Symmetric Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Picture + Headline + Full Title */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Profile Avatar Pill + Status */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              
              {/* Formal Photo Framed with Ambient Glow (Restored as earlier!) */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative group shrink-0"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-[2px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-emerald-400 shadow-xl shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
                  <img
                    src="/abhyudai_formal.jpg"
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover rounded-[14px] bg-[#0c1019]"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-[#080a0f] border border-cyan-500/40 text-[10px] font-mono text-cyan-300 font-semibold shadow-md">
                  SWE &bull; AI
                </span>
              </motion.div>

              {/* Status Badge */}
              <div className="space-y-1.5 text-center sm:text-left">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-cyan-300 font-medium">
                    {PERSONAL_INFO.status}
                  </span>
                </motion.div>
                <p className="text-xs font-mono text-slate-400">
                  📍 Shimla, HP &bull; Lovely Professional University, Punjab
                </p>
              </div>

            </div>

            {/* Name & Full Decrypted Title */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              
              {/* Full Title without abbreviations: Artificial Intelligence and Machine Learning */}
              <div className="text-base sm:text-xl font-mono text-cyan-200 mt-3 flex items-start justify-center lg:justify-start gap-2">
                <span className="text-cyan-400 shrink-0 font-bold">&gt;</span>
                <DecryptedText
                  text={PERSONAL_INFO.title}
                  speed={25}
                  className="font-semibold text-cyan-200 leading-snug"
                />
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PERSONAL_INFO.headline}
            </p>

            {/* Symmetric 3-Card Highlight Strip (STRICTLY NO CGPA HERE - ONLY IN EDUCATION!) */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-3 p-1">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 block font-mono">University</span>
                  <span className="text-xs font-bold text-white">LPU Computer Science</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-1">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 block font-mono">Specialization</span>
                  <span className="text-xs font-bold text-emerald-300">Full-Stack &amp; AI/ML</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-1">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 block font-mono">Indian Patent</span>
                  <span className="text-xs font-bold text-amber-300">App #{PATENT_INFO.applicationNo}</span>
                </div>
              </div>
            </div>

            {/* Actions (NO redundant CV button below picture!) */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Magnet magnetStrength={4}>
                <a href="#about">
                  <SpecularButton
                    size="lg"
                    variant="primary"
                    icon={<Terminal className="w-4 h-4 text-white" />}
                  >
                    <span>Explore About Me</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </SpecularButton>
                </a>
              </Magnet>

              <Magnet magnetStrength={4}>
                <a href="#projects">
                  <SpecularButton
                    size="lg"
                    variant="secondary"
                    icon={<Layers className="w-4 h-4 text-cyan-400" />}
                  >
                    <span>View Engineering Work</span>
                  </SpecularButton>
                </a>
              </Magnet>
            </div>

          </div>

          {/* Right Column: Interactive Code & Telemetry Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/[0.1] bg-[#0b0e17]/95 p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl">
              
              {/* Window Controls */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/70 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70 inline-block" />
                  <span className="text-xs font-mono text-slate-400 ml-2">abhyudai.config.sys</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  SYSTEM READY
                </span>
              </div>

              {/* Code Snippet with Syntax Styling (NO CGPA HERE) */}
              <pre className="font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed space-y-1">
                <div><span className="text-violet-400">class</span> <span className="text-yellow-300">SoftwareEngineer</span> &#123;</div>
                <div className="pl-4"><span className="text-cyan-400">readonly</span> name = <span className="text-emerald-300">"Abhyudai Sood"</span>;</div>
                <div className="pl-4"><span className="text-cyan-400">readonly</span> role = <span className="text-emerald-300">"Full-Stack &amp; AI/ML"</span>;</div>
                <div className="pl-4"><span className="text-cyan-400">readonly</span> university = <span className="text-emerald-300">"Lovely Professional Univ"</span>;</div>
                <div className="pl-4"><span className="text-cyan-400">readonly</span> patent = <span className="text-amber-300">"App #{PATENT_INFO.applicationNo}"</span>;</div>
                <div className="pl-4"><span className="text-cyan-400">languages</span> = [</div>
                <div className="pl-8 text-cyan-300">"C++", "Java", "Python", "JavaScript", "SQL"</div>
                <div className="pl-4">];</div>
                <div className="pl-4"><span className="text-cyan-400">architecture</span> = [</div>
                <div className="pl-8 text-emerald-300">"React", "Tailwind", "DSA O(1)", "AI Regression"</div>
                <div className="pl-4">];</div>
                <div>&#125;;</div>
              </pre>

              {/* Live Metric Cards */}
              <div className="mt-5 pt-4 border-t border-white/[0.08] grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] text-slate-400 font-mono block">Lookup Complexity</span>
                  <span className="text-sm font-bold font-mono text-cyan-400">O(1) Nested Hash</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] text-slate-400 font-mono block">Optimization</span>
                  <span className="text-xs font-bold text-emerald-300 truncate block mt-0.5">Genetic Algorithm</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* React Bits Scroll Down Indicator Animation */}
        <ScrollIndicator targetId="about" label="Scroll down to explore" />

      </div>
    </section>
  );
};
