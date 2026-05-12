import React, { useState, useEffect } from "react";
import { useInterview } from "../../hooks/useInterview.js";
import { useParams, Link } from "react-router";

const NAV_ITEMS = [
  { id: "technical", label: "Technical_Queries" },
  { id: "behavioral", label: "Behavioral_Profiling" },
  { id: "roadmap", label: "Deployment_Roadmap" },
];

const IntelligenceNode = ({ item, index }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className={`group relative border transition-all duration-500 ${revealed ? "border-primary-container/40 bg-white/[0.03]" : "border-white/5 bg-white/[0.01] hover:border-white/20"}`}>
      <div 
        className="flex items-start justify-between gap-8 p-6 md:p-8 cursor-pointer"
        onClick={() => setRevealed(!revealed)}
      >
        <div className="flex items-start gap-6">
          <span className="font-mono text-[10px] text-outline mt-1.5 px-2 py-0.5 border border-white/10 group-hover:border-primary-container/40 group-hover:text-primary-container transition-colors">
            NODE_{String(index + 1).padStart(2, "0")}
          </span>
          <div className="space-y-2">
             <p className="text-base md:text-lg font-mono text-white leading-snug tracking-tight">
               {item.question}
             </p>
             {!revealed && (
               <div className="flex items-center gap-2 text-[9px] font-mono text-outline uppercase tracking-widest animate-pulse">
                  <span className="w-1 h-1 bg-primary-container rounded-full"></span>
                  Intelligence_Awaiting_Reveal
               </div>
             )}
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-end gap-2">
           <div className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:border-primary-container transition-colors">
              <span className={`text-sm transition-transform duration-500 ${revealed ? "rotate-180 text-primary-container" : "text-outline"}`}>↓</span>
           </div>
        </div>
      </div>

      {revealed && (
        <div className="px-6 md:px-8 pb-8 pt-6 border-t border-white/5 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
             <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center gap-2">
                   <div className="h-px w-4 bg-primary-container"></div>
                   <span className="text-[9px] font-mono font-bold text-primary-container uppercase tracking-[0.3em]">Query_Intent</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed font-light italic">
                  "{item.intention}"
                </p>
             </div>
             <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                   <div className="h-px w-4 bg-primary-container"></div>
                   <span className="text-[9px] font-mono font-bold text-primary-container uppercase tracking-[0.3em]">Optimized_Response</span>
                </div>
                <div className="relative p-6 bg-black-default border border-white/10 group/resp">
                   <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-primary-container/40 opacity-0 group-hover/resp:opacity-100 transition-opacity"></div>
                   <p className="text-[14px] text-white leading-relaxed font-mono opacity-90">
                     {item.answer}
                   </p>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DeploymentTimeline = ({ day }) => (
  <div className="group relative pl-12 pb-12 last:pb-0">
    {/* Connector Line */}
    <div className="absolute left-[5px] top-2 bottom-0 w-px bg-white/10 group-last:hidden"></div>
    
    {/* Milestone Point */}
    <div className="absolute left-0 top-1.5 w-[11px] h-[11px] border-2 border-primary-container bg-black-default rounded-full z-10 shadow-[0_0_10px_rgba(125,211,252,0.4)]"></div>
    
    <div className="relative">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[10px] font-mono font-bold text-primary-container uppercase tracking-[0.4em] px-2 py-0.5 border border-primary-container/20 bg-primary-container/5">
          PHASE_{day.day}
        </span>
        <h3 className="text-xl font-mono font-bold text-white uppercase tracking-wider">{day.focus}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {day.tasks.map((task, i) => (
          <div key={i} className="flex items-start gap-4 p-4 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group/task">
            <span className="font-mono text-[9px] text-outline mt-1 transition-colors group-hover/task:text-primary-container">[{i + 1}]</span>
            <span className="text-[13px] text-secondary leading-relaxed">{task}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const InterviewPrep = () => {
  const [activeNav, setActiveNav] = useState("technical");
  const { report, getReportById, loading, getResumePdf } = useInterview();
  const { interviewId } = useParams();

  useEffect(() => {
    if (interviewId) {
      getReportById(interviewId);
    }
  }, [interviewId]);

  if (loading || !report) {
    return (
      <main className="w-full min-h-screen flex flex-col items-center justify-center bg-black-default px-6">
        <div className="w-64 h-1 bg-white/5 relative overflow-hidden mb-8">
           <div className="absolute inset-0 bg-primary-container animate-scan"></div>
        </div>
        <div className="text-[10px] font-mono tracking-[0.6em] uppercase text-primary-container animate-pulse">
           Retrieving_Tactical_Briefing...
        </div>
      </main>
    );
  }

  const activeQuestions =
    activeNav === "technical"
      ? report.technicalQuestions || []
      : report.behavioralQuestions || [];

  return (
    <div className="w-full min-h-screen bg-black-default text-white overflow-x-hidden">
      {/* Decorative Technical Background */}
      <div className="fixed inset-0 tech-grid opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-360 mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20">
        
        {/* Immersive Briefing Header */}
        <section className="mb-20">
           <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <div className="max-w-4xl">
                 <div className="inline-flex items-center gap-3 px-3 py-1 border border-primary-container/30 bg-primary-container/5 mb-8">
                    <span className="w-2 h-2 bg-primary-container rounded-full animate-pulse shadow-[0_0_10px_rgba(125,211,252,1)]"></span>
                    <span className="text-primary-container text-[10px] font-mono tracking-[0.4em] uppercase">Intelligence_Briefing // SECURE</span>
                 </div>
                 <h1 className="text-4xl md:text-8xl font-bold font-mono tracking-tighter uppercase mb-6 leading-[0.85]">
                    Tactical <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/40">Briefing Report</span>
                 </h1>
                 <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                    <p className="text-xl text-secondary font-light max-w-xl border-l-2 border-white/10 pl-6">
                       A comprehensive analysis synthesized for the <span className="text-white font-medium">"{report.title}"</span> engagement protocol.
                    </p>
                 </div>
              </div>

              {/* Status Telemetry Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-px bg-white/10 border border-white/10">
                 {[
                    { label: "MATCH_SCORE", value: `${report.matchScore}%`, color: report.matchScore >= 80 ? "text-primary-container" : "text-yellow-400" },
                    { label: "TECH_NODES", value: (report.technicalQuestions || []).length, color: "text-white" },
                    { label: "BEHAV_NODES", value: (report.behavioralQuestions || []).length, color: "text-white" },
                    { label: "DEPLOY_READY", value: "OPTIMAL", color: "text-primary-container" }
                 ].map((stat, i) => (
                    <div key={i} className="bg-black-default p-4 md:p-6 lg:w-48">
                       <div className="text-[9px] font-mono text-outline uppercase tracking-widest mb-1">{stat.label}</div>
                       <div className={`text-2xl font-mono font-bold ${stat.color}`}>{stat.value}</div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Main Interface Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[300px_minmax(0,1fr)_320px] gap-12 lg:gap-16 items-start">
          
          {/* Stream Navigator */}
          <aside className="sticky top-24 space-y-12">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-outline mb-8 px-4 border-l border-white/10">Briefing_Streams</div>
              <nav className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    className={`group w-full flex items-center justify-between px-6 py-5 text-[11px] font-mono uppercase tracking-[0.2em] transition-all border ${activeNav === item.id ? "bg-primary-container text-black border-primary-container shadow-[0_0_30px_rgba(125,211,252,0.2)]" : "text-secondary border-white/5 hover:bg-white/5 hover:text-white"}`}
                    onClick={() => setActiveNav(item.id)}
                  >
                    <span>{item.label}</span>
                    <span className={`text-xs transition-opacity duration-300 ${activeNav === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>→</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-8 border border-white/5 bg-white/[0.01]">
               <p className="text-[9px] font-mono text-outline uppercase tracking-widest mb-6">Unit_Evidence</p>
               <button
                onClick={() => getResumePdf(interviewId)}
                className="w-full py-4 border border-primary-container/20 text-primary-container text-[10px] font-mono uppercase tracking-[0.3em] hover:bg-primary-container hover:text-black transition-all"
               >
                 Review_Dossier
               </button>
            </div>
          </aside>

          {/* Intelligence Stream */}
          <main className="min-w-0">
            <header className="mb-12 pb-8 border-b border-white/5 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                 <h2 className="text-3xl md:text-4xl font-bold font-mono text-white tracking-tighter uppercase">
                    {activeNav.replace("_", " ")}
                 </h2>
                 <p className="text-sm text-secondary font-light mt-2 max-w-lg italic">
                    "Analyzing tactical engagement patterns and response calibration for optimal synchronization."
                 </p>
              </div>
              <div className="font-mono text-[9px] text-outline uppercase tracking-widest">
                 Stream_Status: LIVE // 0x45
              </div>
            </header>

            <div className="animate-in fade-in duration-700">
              {activeNav !== "roadmap" && (
                <div className="space-y-6">
                  {activeQuestions.map((q, i) => (
                    <IntelligenceNode key={i} item={q} index={i} />
                  ))}
                  {activeQuestions.length === 0 && (
                    <div className="p-12 border border-dashed border-white/10 text-center">
                       <p className="text-sm font-mono text-outline uppercase tracking-widest">No_Data_Streams_Detected</p>
                    </div>
                  )}
                </div>
              )}

              {activeNav === "roadmap" && (
                <div className="space-y-2">
                  {(report.preparationPlan || []).map((day) => (
                    <DeploymentTimeline key={day.day} day={day} />
                  ))}
                </div>
              )}
            </div>
          </main>

          {/* System Analysis Sidebar */}
          <aside className="sticky top-24 space-y-12">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-outline mb-8 px-4 border-l border-white/10">Critical_Gaps</div>
              <div className="space-y-4">
                {(report.skillGaps || []).map((gap, i) => (
                  <div
                    key={i}
                    className="p-5 bg-white/[0.02] border border-white/5 group hover:border-primary-container/40 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                       <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                         {gap.skill}
                       </span>
                       <span
                        className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 border ${gap.severity === "high" ? "text-red-400 border-red-400/20 bg-red-400/5" : gap.severity === "medium" ? "text-yellow-400 border-yellow-400/20 bg-yellow-400/5" : "text-primary-container border-primary-container/20 bg-primary-container/5"}`}
                       >
                         {gap.severity}
                       </span>
                    </div>
                    <div className="w-full h-1 bg-white/5 relative">
                       <div className={`absolute left-0 top-0 h-full ${gap.severity === 'high' ? 'w-full bg-red-400' : gap.severity === 'medium' ? 'w-2/3 bg-yellow-400' : 'w-1/3 bg-primary-container'} opacity-40`}></div>
                    </div>
                  </div>
                ))}
                {(report.skillGaps || []).length === 0 && (
                  <div className="p-5 border border-dashed border-white/10 text-center">
                    <p className="text-[10px] font-mono text-outline uppercase tracking-widest">Gaps_Analyzed: NONE</p>
                  </div>
                )}
              </div>
            </div>

            <div className="p-8 border border-primary-container/10 bg-primary-container/[0.02] relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary-container/20 group-hover:border-primary-container/60 transition-all duration-700"></div>
               <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary-container mb-4">Strategic_Overview</h4>
               <p className="text-[12px] text-secondary leading-relaxed font-light">
                 This briefing is calibrated to maximize match-quality and mission success for the <span className="text-white font-medium uppercase">{report.title}</span> engagement protocol.
               </p>
            </div>

            <div className="text-center">
               <Link to="/dashboard" className="text-[10px] font-mono text-outline uppercase tracking-[0.2em] hover:text-white transition-colors">
                  ← Return_to_Command_Center
               </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;

