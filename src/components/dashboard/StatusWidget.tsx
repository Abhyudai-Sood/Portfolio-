import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Activity, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const StatusWidget: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in IST
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-between h-full space-y-4">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-2">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </div>
          <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            Telemetry Live
          </span>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          Node: IN-NORTH
        </span>
      </div>

      <div className="space-y-3">
        <div>
          <span className="text-xs text-slate-400 font-mono">Current Status</span>
          <p className="text-sm font-medium text-slate-200 mt-0.5 flex items-center gap-1.5">
            <span className="text-emerald-400">●</span> {PERSONAL_INFO.status.replace('🟢 ', '')}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>IST Clock</span>
            </div>
            <p className="text-sm font-mono font-bold text-cyan-300 mt-1">
              {time || '12:00:00 PM'}
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-violet-400" />
              <span>Base Station</span>
            </div>
            <p className="text-xs font-medium text-slate-200 mt-1 truncate">
              {PERSONAL_INFO.location}
            </p>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Core: DSA & Systems</span>
        </span>
        <span className="font-mono text-cyan-400/80">v2.5.0-prod</span>
      </div>
    </div>
  );
};
