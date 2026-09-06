import React from 'react';
import { Activity, Clock, MapPin, CheckCircle2, UserCheck, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const StatusWidget: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <UserCheck className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
              Current Engineering Status
            </span>
          </div>
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Active
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <span className="text-xs text-slate-400">Availability</span>
            <span className="text-xs font-mono font-bold text-emerald-400">
              Open for SWE &amp; AI Roles
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <span className="text-xs text-slate-400">Primary Focus</span>
            <span className="text-xs font-mono font-bold text-cyan-300">
              Full-Stack &bull; AI/ML &bull; DSA
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <span className="text-xs text-slate-400">Location</span>
            <span className="text-xs font-mono text-slate-300">
              Shimla, HP &bull; Punjab, India
            </span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span>IST (UTC+5:30)</span>
        </div>
        <span className="text-emerald-400 font-semibold">
          Ready for New Opportunities
        </span>
      </div>
    </div>
  );
};
