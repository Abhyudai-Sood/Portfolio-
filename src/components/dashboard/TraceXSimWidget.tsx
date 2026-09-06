import React, { useState } from 'react';
import { Terminal, Play, RotateCcw, Activity, Cpu, Layers } from 'lucide-react';

interface SysCallLog {
  id: number;
  syscall: string;
  pid: number;
  status: 'SUCCESS' | 'BLOCK' | 'YIELD';
  details: string;
  time: string;
}

export const TraceXSimWidget: React.FC = () => {
  const [pidCounter, setPidCounter] = useState(1042);
  const [logs, setLogs] = useState<SysCallLog[]>([
    {
      id: 1,
      syscall: 'fork()',
      pid: 1040,
      status: 'SUCCESS',
      details: 'Cloned parent address space -> child PID 1041',
      time: '0.012ms',
    },
    {
      id: 2,
      syscall: 'mmap()',
      pid: 1041,
      status: 'SUCCESS',
      details: 'Allocated 4096 bytes virtual memory page',
      time: '0.024ms',
    },
    {
      id: 3,
      syscall: 'read()',
      pid: 1041,
      status: 'SUCCESS',
      details: 'Descriptor fd=0 (stdin) buffer ready',
      time: '0.038ms',
    },
  ]);

  const triggerSyscall = (type: string, desc: string) => {
    const nextPid = pidCounter + 1;
    setPidCounter(nextPid);
    const newLog: SysCallLog = {
      id: Date.now(),
      syscall: `${type}()`,
      pid: nextPid,
      status: 'SUCCESS',
      details: desc,
      time: `${(Math.random() * 0.05 + 0.01).toFixed(3)}ms`,
    };
    setLogs((prev) => [newLog, ...prev.slice(0, 4)]);
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="flex flex-col justify-between h-full space-y-3">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20">
            <Cpu className="w-3.5 h-3.5" />
          </span>
          <div>
            <span className="text-xs font-mono text-violet-400 font-bold uppercase tracking-wider block">
              TraceX OS Simulator
            </span>
          </div>
        </div>
        <button
          onClick={clearLogs}
          title="Reset Logs"
          className="text-slate-500 hover:text-slate-300 p-1 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-xs text-slate-300">
        Interactive simulator demonstrating low-level kernel system call dispatching & process memory management:
      </p>

      {/* Interactive Trigger Buttons */}
      <div className="grid grid-cols-3 gap-1.5">
        <button
          onClick={() => triggerSyscall('fork', 'Spawned child process in heap space')}
          className="px-2 py-1.5 rounded-lg bg-white/[0.04] hover:bg-cyan-500/10 border border-white/[0.08] hover:border-cyan-500/30 text-[11px] font-mono text-cyan-300 transition-all text-center flex items-center justify-center gap-1 cursor-pointer"
        >
          <Play className="w-2.5 h-2.5" /> fork()
        </button>
        <button
          onClick={() => triggerSyscall('mmap', 'Allocated 64KB VMA page mapped to RAM')}
          className="px-2 py-1.5 rounded-lg bg-white/[0.04] hover:bg-violet-500/10 border border-white/[0.08] hover:border-violet-500/30 text-[11px] font-mono text-violet-300 transition-all text-center flex items-center justify-center gap-1 cursor-pointer"
        >
          <Play className="w-2.5 h-2.5" /> mmap()
        </button>
        <button
          onClick={() => triggerSyscall('write', 'Flushed 128 bytes to stdout descriptor')}
          className="px-2 py-1.5 rounded-lg bg-white/[0.04] hover:bg-emerald-500/10 border border-white/[0.08] hover:border-emerald-500/30 text-[11px] font-mono text-emerald-300 transition-all text-center flex items-center justify-center gap-1 cursor-pointer"
        >
          <Play className="w-2.5 h-2.5" /> write()
        </button>
      </div>

      {/* Live Syscall Trace Stream */}
      <div className="rounded-xl bg-black/50 p-2.5 border border-white/[0.06] font-mono text-[11px] space-y-1.5 max-h-36 overflow-y-auto">
        {logs.length === 0 ? (
          <div className="text-slate-500 text-center py-2">Click a syscall above to trace execution</div>
        ) : (
          logs.map((log) => (
            <div key={log.id} className="flex items-start justify-between gap-1 text-slate-300">
              <div className="flex items-center gap-1.5 truncate">
                <span className="text-cyan-400 font-bold">{log.syscall}</span>
                <span className="text-slate-500">pid:{log.pid}</span>
                <span className="text-slate-400 truncate">{log.details}</span>
              </div>
              <span className="text-emerald-400/90 text-[10px] shrink-0 font-bold">{log.time}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
