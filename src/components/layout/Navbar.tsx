import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { SpecularButton } from '@/components/react-bits/SpecularButton';
import { Magnet } from '@/components/react-bits/Magnet';
import { useTheme } from '@/context/ThemeContext';
import { FileText, Github, Linkedin, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Projects', href: '#projects' },
    { name: 'Patent', href: '#patent' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 ${
        scrolled
          ? 'bg-[#080a0f]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Profile Picture Next to Name at Top */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-emerald-400 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <img
              src="/profile.png"
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover rounded-full bg-[#0c1019]"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#080a0f]" />
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors block">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-mono text-cyan-400 block -mt-0.5">
              Software Engineer &bull; Full-Stack &bull; AI/ML
            </span>
          </div>
        </a>

        {/* Desktop Nav Pills */}
        <nav className="hidden lg:flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.08] transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Top Actions: Theme Toggle + Socials + Download CV Button */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Theme Toggle Button (Dark / Light) */}
          <Magnet magnetStrength={2}>
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Light theme' : 'Switch to Dark theme'}
              title={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
              className="p-2 rounded-xl text-slate-400 hover:text-amber-400 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all flex items-center justify-center cursor-pointer group"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-600 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>
          </Magnet>

          <Magnet magnetStrength={3}>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all flex items-center justify-center"
            >
              <Github className="w-4 h-4" />
            </a>
          </Magnet>

          <Magnet magnetStrength={3}>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="p-2 rounded-xl text-slate-400 hover:text-cyan-300 hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all flex items-center justify-center"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </Magnet>

          {/* Prominent Download CV button at top */}
          <Magnet magnetStrength={4}>
            <SpecularButton
              onClick={onOpenResume}
              size="sm"
              variant="primary"
              icon={<FileText className="w-3.5 h-3.5" />}
            >
              <span>Download CV</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </SpecularButton>
          </Magnet>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
            className="p-2 rounded-lg bg-white/[0.05] text-slate-300 border border-white/[0.08] cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-cyan-600" />
            )}
          </button>

          <SpecularButton
            onClick={onOpenResume}
            size="sm"
            variant="primary"
            className="text-xs py-1 px-2.5"
          >
            CV
          </SpecularButton>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/[0.05] text-slate-300 border border-white/[0.08]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-5 bg-[#080a0f]/98 backdrop-blur-2xl border-b border-white/[0.08] space-y-2 mt-3 animate-in fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-300 rounded-lg hover:bg-white/[0.05]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <button
              onClick={() => {
                toggleTheme();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-300 py-1 cursor-pointer"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Light Theme</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-cyan-600" />
                  <span>Dark Theme</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white py-1"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400 py-1"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
