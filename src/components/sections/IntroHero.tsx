import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { DecryptedText } from '@/components/react-bits/DecryptedText';
import { SpecularButton } from '@/components/react-bits/SpecularButton';
import {
  ArrowDown,
  Terminal,
  Award,
  GraduationCap,
  Layers,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  User,
} from 'lucide-react';

export const IntroHero: React.FC = () => {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full text-center relative z-10 space-y-8">
        
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-cyan-300 font-medium">
            {PERSONAL_INFO.status}
          </span>
        </motion.div>

        {/* Profile Image with subtle framing */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative inline-block"
        >
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-[3px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-500 shadow-2xl shadow-cyan-500/20 mx-auto">
            <img
              src="/profile.png"
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover rounded-full bg-[#0c1019]"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#080a0f]/90 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
            LPU CSE
          </div>
        </motion.div>

        {/* Name & Title */}
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-2xl font-mono text-cyan-300 font-semibold max-w-3xl mx-auto"
          >
            <DecryptedText text={PERSONAL_INFO.title} speed={30} />
          </motion.div>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed pt-1">
            {PERSONAL_INFO.headline}
          </p>
        </div>

        {/* Quick Highlight Strips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md"
        >
          <div className="flex items-center justify-center sm:justify-start gap-3 p-2">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] text-slate-400 font-mono block">Academics</span>
              <span className="text-xs font-bold text-white">LPU CSE (CGPA: 8.06)</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 p-2">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] text-slate-400 font-mono block">Indian Patent</span>
              <span className="text-xs font-bold text-amber-300">App #202511067767</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 p-2">
            <div className="p-2 rounded-xl bg-violet-500/10 text-violet-400">
              <Layers className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] text-slate-400 font-mono block">Specialization</span>
              <span className="text-xs font-bold text-violet-300">AI &amp; ML &bull; Core DSA</span>
            </div>
          </div>
        </motion.div>

        {/* Enter Dashboard & Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <a href="#dashboard">
            <SpecularButton
              size="lg"
              variant="primary"
              icon={<Terminal className="w-4 h-4" />}
            >
              <span>Explore Dashboard</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </SpecularButton>
          </a>

          <a href="#about">
            <SpecularButton
              size="lg"
              variant="secondary"
              icon={<User className="w-4 h-4 text-cyan-400" />}
            >
              <span>About Me &amp; Journey</span>
            </SpecularButton>
          </a>
        </motion.div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-white border border-white/[0.08] transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/[0.08] transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-amber-500/20 text-slate-400 hover:text-amber-300 border border-white/[0.08] transition-all"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
