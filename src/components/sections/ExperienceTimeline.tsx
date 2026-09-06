import React, { useState } from 'react';
import { EDUCATION, CERTIFICATES } from '@/data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin, ZoomIn, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';
import { SpotlightCard } from '@/components/react-bits/SpotlightCard';
import { ImageLightboxModal } from '@/components/modals/ImageLightboxModal';

export const ExperienceTimeline: React.FC = () => {
  const [lightboxData, setLightboxData] = useState<{
    open: boolean;
    image: string;
    title: string;
    subtitle: string;
    caption: string;
  }>({
    open: false,
    image: '',
    title: '',
    subtitle: '',
    caption: '',
  });

  const openLightbox = (image: string, title: string, subtitle: string, caption: string) => {
    setLightboxData({
      open: true,
      image,
      title,
      subtitle,
      caption,
    });
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMICS &amp; CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Track &amp; Verified Certificates
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Higher education milestones, historic schooling foundation, and accredited technical credentials.
          </p>
        </div>

        {/* 1. Formal Education (Rich Institutional Cards with Photos & Authentic Badges) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm font-mono text-cyan-400 font-bold uppercase tracking-wider mb-6">
            <GraduationCap className="w-4 h-4" />
            <span>Higher Education &amp; Schooling (Academic Scores Stated Here)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {EDUCATION.map((edu, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(6, 182, 212, 0.15)"
                className="flex flex-col justify-between overflow-hidden border-white/[0.1] bg-[#0c1019]/95"
              >
                <div>
                  {/* Institutional Banner Photo Header */}
                  <div
                    onClick={() =>
                      openLightbox(
                        edu.campusImage,
                        edu.institution,
                        edu.location,
                        edu.tagline
                      )
                    }
                    className="relative h-48 w-full overflow-hidden bg-black/60 border-b border-white/[0.08] cursor-pointer group"
                  >
                    <img
                      src={edu.campusImage}
                      alt={edu.institution}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1019] via-[#0c1019]/40 to-transparent" />
                    
                    {/* Official Logo / Crest Badge */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl p-1.5 bg-white/95 backdrop-blur-md shadow-lg border border-white/20 flex items-center justify-center shrink-0">
                        <img
                          src={edu.logoImage}
                          alt={`${edu.institution} Logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-md font-semibold">
                          {edu.badge}
                        </span>
                      </div>
                    </div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-slate-300 border border-white/10 text-[10px] font-mono flex items-center gap-1 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-3 h-3 text-cyan-400" />
                      <span>Enlarge Photo</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-white leading-snug">
                          {edu.institution}
                        </h4>
                        <p className="text-xs font-mono text-cyan-300 mt-1 font-semibold">
                          {edu.degree}
                        </p>
                      </div>

                      {/* Prominent Score Pill (CGPA or Class XII / X marks) */}
                      <span className="px-3 py-1 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold shrink-0 self-start sm:self-auto shadow-sm">
                        {edu.score}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        {edu.location}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 italic">
                      {edu.tagline}
                    </p>

                    <div className="pt-3 border-t border-white/[0.06] space-y-2">
                      {edu.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <span className="text-cyan-400 mt-0.5 font-bold shrink-0">▹</span>
                          <span className="leading-relaxed">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* 2. Certificates Grid (STRICTLY SYMMETRIC, NON-OVERLAPPING HOVER, LIGHTBOX ZOOM) */}
        <div>
          <div className="flex items-center gap-2 text-sm font-mono text-violet-400 font-bold uppercase tracking-wider mb-6">
            <Award className="w-4 h-4" />
            <span>Verified Certificates &amp; Technical Credentials (Click to Enlarge)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.id}
                onClick={() =>
                  openLightbox(
                    cert.image,
                    cert.title,
                    cert.issuer,
                    cert.description
                  )
                }
                className="group rounded-2xl border border-white/[0.08] bg-[#0c1019]/90 backdrop-blur-xl overflow-hidden hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Top Image Viewport */}
                <div className="relative h-48 w-full overflow-hidden bg-black/70 border-b border-white/[0.08]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-2 filter transition-transform duration-300 group-hover:scale-105 group-hover:brightness-105"
                  />
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 text-white text-xs font-mono font-bold backdrop-blur-[2px]">
                    <ZoomIn className="w-4 h-4 text-violet-400" />
                    <span>Click to Inspect</span>
                  </div>

                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold flex items-center gap-1 backdrop-blur-md">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                {/* Bottom Content Container (ALWAYS VISIBLE, NEVER HIDDEN OR OVERLAPPED!) */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-[#0c1019]">
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-mono text-violet-300 mt-0.5">
                      {cert.issuer} &bull; {cert.date}
                    </p>
                    <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxData.open}
        onClose={() => setLightboxData((prev) => ({ ...prev, open: false }))}
        imageSrc={lightboxData.image}
        title={lightboxData.title}
        subtitle={lightboxData.subtitle}
        caption={lightboxData.caption}
      />
    </section>
  );
};
