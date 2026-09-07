import React, { useState, useEffect } from 'react';
import { Clock, UserCheck, Calendar, Globe2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const StatusWidget: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [dateStr, setDateStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
      setDateStr(
        now.toLocaleDateString('en-US', {
          timeZone: 'Asia/Kolkata',
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <UserCheck className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
              Current Status &amp; Time
            </span>
          </div>
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live IST
          </span>
        </div>

        {/* Live Clock Display */}
        <div className="mb-4 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Clock className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <div className="text-lg font-mono font-extrabold text-white tracking-wider">
                {time || '12:00:00 AM'}
              </div>
              <div className="text-[10px] font-mono text-cyan-300 flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                <span>{dateStr || 'Asia/Kolkata (IST)'}</span>
              </div>
            </div>
          </div>
          <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2 py-1 rounded-lg border border-white/[0.06]">
            UTC+5:30
          </span>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <span className="text-xs text-slate-400">Availability</span>
            <span className="text-xs font-mono font-bold text-emerald-400">
              Open for SWE &amp; AI Roles
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <span className="text-xs text-slate-400">Primary Focus</span>
            <span className="text-xs font-mono font-bold text-cyan-300">
              Full-Stack &bull; AI Systems
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <span className="text-xs text-slate-400">Base Location</span>
            <span className="text-xs font-mono text-slate-300">
              Shimla, HP &bull; Punjab, India
            </span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
        <div className="flex items-center gap-1.5">
          <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>India Standard Time</span>
        </div>
        <span className="text-emerald-400 font-semibold">
          Active &bull; Ready to Connect
        </span>
      </div>
    </div>
  );
};
