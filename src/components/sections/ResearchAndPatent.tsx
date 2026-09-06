import React, { useState } from 'react';
import { PATENT_INFO, PatentFigure } from '@/data/portfolioData';
import { SpotlightCard } from '@/components/react-bits/SpotlightCard';
import { Award, FileCheck, CheckCircle2, Cog, ZoomIn, Cpu, ShieldCheck, Wrench } from 'lucide-react';
import { ImageLightboxModal } from '@/components/modals/ImageLightboxModal';

export const ResearchAndPatent: React.FC = () => {
  const [selectedFigureIndex, setSelectedFigureIndex] = useState(0);
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

  const currentFigure = PATENT_INFO.figures[selectedFigureIndex];

  const handleOpenLightbox = (image: string, title: string, subtitle: string, caption: string) => {
    setLightboxData({
      open: true,
      image,
      title,
      subtitle,
      caption,
    });
  };

  return (
    <section id="patent" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>INTELLECTUAL PROPERTY &amp; HARDWARE INNOVATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Indian Patent Record
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Sensor-integrated motorized cleaning carriage mechanism filed and published with the Indian Patent Office.
          </p>
        </div>

        {/* Main Patent Card */}
        <SpotlightCard
          className="max-w-5xl mx-auto p-6 sm:p-10 border-white/[0.1] bg-[#0c1019]/95"
          spotlightColor="rgba(245, 158, 11, 0.15)"
        >
          {/* Top Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                <FileCheck className="w-4 h-4" />
                <span>Application No: {PATENT_INFO.applicationNo} &bull; Published June 7, 2024</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5">
                {PATENT_INFO.title}
              </h3>
              <p className="text-xs font-mono text-cyan-300 mt-1">
                Applicant Institution: {PATENT_INFO.applicant}
              </p>
            </div>

            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold shrink-0 self-start sm:self-center flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {PATENT_INFO.status}
            </span>
          </div>

          {/* 1. Real Hardware Prototype Assembly (Styled just like certificates with fixed aspect ratio, NEVER covers text!) */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Wrench className="w-4 h-4 text-amber-400" />
                <span>Hardware Prototype Fabrication (University Innovation Lab)</span>
              </h4>
              <span className="text-[10px] font-mono text-amber-400 flex items-center gap-1">
                <ZoomIn className="w-3 h-3" /> Click image to inspect
              </span>
            </div>

            <div
              onClick={() =>
                handleOpenLightbox(
                  PATENT_INFO.labPhoto.image,
                  PATENT_INFO.labPhoto.title,
                  `Indian Patent #${PATENT_INFO.applicationNo} Prototype`,
                  PATENT_INFO.labPhoto.description
                )
              }
              className="group rounded-2xl border border-white/[0.08] bg-[#0c1019]/90 backdrop-blur-xl overflow-hidden hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 cursor-pointer"
            >
              {/* Image Viewport (Fixed Height, Hover Zoom Inside, Never Covers Text) */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/60 border-b border-white/[0.08]">
                <img
                  src={PATENT_INFO.labPhoto.image}
                  alt={PATENT_INFO.labPhoto.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 text-white text-xs font-mono font-bold backdrop-blur-[2px]">
                  <ZoomIn className="w-4 h-4 text-amber-400" />
                  <span>Click to Inspect High-Resolution</span>
                </div>

                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold flex items-center gap-1 backdrop-blur-md">
                  <ShieldCheck className="w-3 h-3" />
                  Verified Lab Prototyping
                </span>
              </div>

              {/* Text Container Below Image (Always visible) */}
              <div className="p-5 bg-[#0c1019] space-y-1.5">
                <h5 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                  {PATENT_INFO.labPhoto.title}
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {PATENT_INFO.labPhoto.description}
                </p>
              </div>
            </div>
          </div>

          {/* 2. Sequential Technical Schematics Viewer (Fig. 1 to Fig. 5 in exact sequence) */}
          <div className="mt-10 pt-6 border-t border-white/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Sequential Patent Schematics (Filed with IPO)</span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Select any figure tab below in sequential order (Fig. 1 to Fig. 5).
                </p>
              </div>

              <button
                onClick={() =>
                  handleOpenLightbox(
                    currentFigure.image,
                    currentFigure.title,
                    `Official Patent Filing (#${PATENT_INFO.applicationNo}) - ${currentFigure.tag}`,
                    currentFigure.description
                  )
                }
                className="px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-mono font-medium border border-cyan-500/30 flex items-center gap-1.5 transition-colors self-start sm:self-auto"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Inspect Diagram</span>
              </button>
            </div>

            {/* Sequential Figure Tabs: Fig. 1 to Fig. 5 */}
            <div className="flex flex-wrap gap-2 mb-4">
              {PATENT_INFO.figures.map((fig, idx) => (
                <button
                  key={fig.id}
                  onClick={() => setSelectedFigureIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all border ${
                    selectedFigureIndex === idx
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-sm'
                      : 'bg-white/[0.03] text-slate-400 border-white/[0.06] hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {fig.title.split(':')[0]} ({fig.tag})
                </button>
              ))}
            </div>

            {/* Diagram Display Box (Fixed Viewport, Clean Layout) */}
            <div
              onClick={() =>
                handleOpenLightbox(
                  currentFigure.image,
                  currentFigure.title,
                  `Official Patent Filing (#${PATENT_INFO.applicationNo}) - ${currentFigure.tag}`,
                  currentFigure.description
                )
              }
              className="relative rounded-2xl border border-white/[0.1] bg-white/[0.02] p-4 sm:p-6 overflow-hidden cursor-pointer group hover:border-cyan-500/40 transition-colors"
            >
              <div className="max-h-96 w-full flex items-center justify-center overflow-hidden rounded-xl bg-white p-3">
                <img
                  src={currentFigure.image}
                  alt={currentFigure.title}
                  className="max-h-80 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">
                    {currentFigure.title}
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {currentFigure.description}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1 shrink-0 ml-4">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to zoom</span>
                </span>
              </div>
            </div>
          </div>

          {/* 3. Technical Specifications Grid */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left: System Abstract */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Abstract &amp; Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {PATENT_INFO.abstract}
              </p>

              <div className="space-y-2 pt-2">
                {PATENT_INFO.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <span className="text-amber-400 font-bold mt-0.5">✓</span>
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technical Metadata & Parameters */}
            <div className="space-y-3 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-3 flex items-center gap-2">
                <Cog className="w-4 h-4" />
                <span>Official Filing Specifications</span>
              </h4>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-slate-400">Jurisdiction</span>
                  <span className="text-white font-mono font-bold">Indian Patent Office (IPO)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-slate-400">Application Number</span>
                  <span className="text-amber-300 font-mono font-bold">{PATENT_INFO.applicationNo}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-slate-400">Filing Date</span>
                  <span className="text-white font-mono">{PATENT_INFO.filingDate}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-slate-400">Publication Date</span>
                  <span className="text-white font-mono">{PATENT_INFO.publicationDate}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-slate-400">Classification</span>
                  <span className="text-amber-300 font-mono">Sensors &amp; Motorized Robotics</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs leading-relaxed mt-4">
                Demonstrates end-to-end hardware-software engineering across Arduino microcontrollers, optical and turbidity sensors, and official intellectual property filing.
              </div>
            </div>

          </div>
        </SpotlightCard>

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
