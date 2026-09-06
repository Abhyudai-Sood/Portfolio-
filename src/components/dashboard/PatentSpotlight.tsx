import React from 'react';
import { Award, Cpu, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PATENT_INFO } from '@/data/portfolioData';

export const PatentSpotlight: React.FC = () => {
  return (
    <div className="relative overflow-hidden h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Award className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
              Official Indian Patent
            </span>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1 font-bold">
            <CheckCircle2 className="w-3 h-3" />
            App #{PATENT_INFO.applicationNo}
          </span>
        </div>

        <div className="mt-4">
          <h4 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-amber-300 transition-colors">
            {PATENT_INFO.title}
          </h4>
          <p className="text-xs font-mono text-slate-400 mt-1">
            Inventors: Dr. Rajeev Patial, Shrey Kansara, Himanshu Kumar, Abhyudai Sood
          </p>
          <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
            {PATENT_INFO.abstract}
          </p>
        </div>

        {/* Feature bullets */}
        <div className="mt-4 space-y-1.5">
          {PATENT_INFO.keyFeatures.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
              <span className="text-amber-400 font-bold">▹</span>
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 mt-3 border-t border-white/[0.08] flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 text-slate-400 font-mono">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>Published: {PATENT_INFO.publicationDate}</span>
        </div>
        <a
          href="#patent"
          className="font-mono text-amber-400 hover:text-amber-300 text-[11px] font-bold flex items-center gap-1"
        >
          <span>View Patent Record</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
