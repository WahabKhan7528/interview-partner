import React, { useState, useRef } from "react";
import { useInterview } from "../../hooks/useInterview.js";
import { useNavigate } from "react-router";
import dashboardBg from "../../assets/images/dashboard-bg.png";

const Dashboard = () => {
  const { loading, generateReport, reports } = useInterview();
  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const resumeInputRef = useRef();

  const navigate = useNavigate();

  const handleGenerateReport = async () => {
    const resumeFile = resumeInputRef.current.files[0];
    const data = await generateReport({
      jobDescription,
      selfDescription,
      resumeFile,
    });
    navigate(`/interview/${data._id}`);
  };

  if (loading) {
    return (
      <main className="w-full min-h-screen flex flex-col items-center justify-center bg-black-default px-6">
        <div className="w-64 h-1 bg-white/5 relative overflow-hidden mb-8">
           <div className="absolute inset-0 bg-primary-container animate-scan"></div>
        </div>
        <div className="text-[10px] font-mono tracking-[0.6em] uppercase text-primary-container animate-pulse text-center max-w-xs">
           Synthesizing_Tactical_Roadmap... <br />
           [ Estimated_Time: 30s ]
        </div>
      </main>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black-default text-white">
      {/* Dynamic Background Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
         <img src={dashboardBg} alt="Dashboard BG" className="w-full h-full object-cover" />
         <div className="absolute inset-0 tech-grid"></div>
      </div>

      <div className="relative z-10 w-full max-w-360 mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        {/* Command Header */}
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-3 py-1 border border-primary-container/30 bg-primary-container/5 mb-8">
               <span className="w-2 h-2 bg-primary-container rounded-full animate-pulse shadow-[0_0_10px_rgba(125,211,252,1)]"></span>
               <span className="text-primary-container text-[10px] font-mono tracking-[0.4em] uppercase">Tactical_Ops // Command_Center</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-bold font-mono tracking-tighter uppercase mb-6 leading-[0.85]">
               Initialize <br />
               <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/40">Mission Plan</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-2xl font-light leading-relaxed">
               Deploy your synchronization parameters. Partner will synthesize a high-fidelity roadmap tailored to your specific deployment target.
            </p>
          </div>
          
          <div className="hidden lg:block text-right font-mono text-[9px] text-outline space-y-1 uppercase tracking-widest">
             <p>SYSTEM_VERSION: v5.0.4-LTS</p>
             <p>UPLINK_STATUS: OPTIMAL</p>
             <p>LAST_SYNC: {new Date().toLocaleTimeString()}</p>
          </div>
        </header>

        {/* Input Terminal Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10 backdrop-blur-xl mb-32 group">
          
          {/* Target Parameters (JD) */}
          <div className="lg:col-span-7 p-8 md:p-12 bg-black-default/80 hover:bg-white/[0.02] transition-all duration-500">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-[10px] font-mono font-bold text-white uppercase tracking-[0.4em]">Target_Parameters // Job_Desc</h2>
              <span className="text-[9px] font-mono text-primary-container uppercase tracking-widest border border-primary-container/20 px-2 py-0.5">Required</span>
            </div>
            <textarea
              onChange={(e) => setJobDescription(e.target.value)}
              className="w-full h-[400px] bg-transparent border-none text-[15px] font-mono text-white placeholder:text-white/10 resize-none focus:outline-none leading-relaxed"
              placeholder={`[ PASTE_DEPLOYMENT_TARGET_SPECIFICATIONS_HERE ]\n\ne.g. "Senior Software Engineer - Requirements: Distributed Systems, High Availability, Python, AWS..."`}
              maxLength={5000}
            />
            <div className="mt-8 flex justify-between items-center border-t border-white/5 pt-8">
               <span className="text-[9px] font-mono text-outline uppercase tracking-widest">Buffer_Load: {jobDescription.length} / 5000</span>
               <div className="flex gap-1">
                  {[1,2,3,4].map(i => <div key={i} className={`h-1 w-4 ${jobDescription.length > i*1000 ? 'bg-primary-container' : 'bg-white/10'}`}></div>)}
               </div>
            </div>
          </div>

          {/* Unit Context (Profile) */}
          <div className="lg:col-span-5 p-8 md:p-12 bg-black-default/80 border-t lg:border-t-0 lg:border-l border-white/10 hover:bg-white/[0.02] transition-all duration-500">
            <div className="mb-12">
              <h2 className="text-[10px] font-mono font-bold text-white uppercase tracking-[0.4em] mb-10">Unit_Profile // Evidence</h2>
              
              <div className="space-y-8">
                <div>
                   <label className="block text-[9px] font-mono text-outline uppercase tracking-widest mb-4">A: Upload_Personnel_Dossier</label>
                   <label
                    className="block w-full border border-dashed border-white/10 p-12 text-center cursor-pointer hover:border-primary-container/40 hover:bg-white/5 transition-all bg-black-default group/upload"
                    htmlFor="resume"
                  >
                    <p className="text-[11px] font-mono text-white mb-2 group-hover/upload:text-primary-container transition-colors uppercase tracking-widest">
                       [ Select_File ]
                    </p>
                    <p className="text-[9px] text-outline uppercase tracking-tighter">PDF // DOCX (MAX_3MB)</p>
                    <input ref={resumeInputRef} hidden type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" />
                  </label>
                </div>

                <div className="flex items-center gap-4 py-4">
                  <div className="flex-1 h-px bg-white/5"></div>
                  <span className="text-[9px] font-mono text-outline uppercase tracking-widest">OR</span>
                  <div className="flex-1 h-px bg-white/5"></div>
                </div>

                <div>
                  <label className="block text-[9px] font-mono text-outline uppercase tracking-widest mb-4" htmlFor="selfDescription">B: Manual_Sync_Parameters</label>
                  <textarea
                    onChange={(e) => setSelfDescription(e.target.value)}
                    id="selfDescription"
                    className="w-full h-32 bg-white/[0.03] border border-white/10 p-5 text-[13px] font-mono text-white resize-none focus:outline-none focus:border-primary-container transition-all"
                    placeholder="[ SHARE_UNIT_EXPERIENCE_SUMMARY ]"
                  />
                </div>
              </div>
            </div>

            <button 
               onClick={handleGenerateReport}
               className="group relative w-full py-8 bg-primary-container text-black font-mono font-bold uppercase tracking-[0.5em] text-sm overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-[0_0_80px_rgba(125,211,252,0.6)]"
            >
               <span className="relative z-10 flex items-center justify-center gap-4">
                  Launch_Synthesis_Protocol
                  <span className="text-xs translate-y-0.5 animate-pulse">→</span>
               </span>
               <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700"></div>
            </button>
          </div>
        </div>

        {/* Mission History Section */}
        {reports.length > 0 && (
          <section className="relative pt-24 border-t border-white/5">
            <div className="flex items-end justify-between mb-16">
               <div className="max-w-xl">
                  <p className="text-primary-container text-[11px] font-mono uppercase tracking-[0.4em] mb-4">Historical_Data</p>
                  <h2 className="text-3xl md:text-5xl font-bold font-mono text-white tracking-tighter uppercase mb-4">Mission Log</h2>
                  <p className="text-secondary font-light">Access previously synthesized tactical roadmaps and telemetry.</p>
               </div>
               <div className="hidden md:block font-mono text-[9px] text-outline uppercase tracking-widest">
                  Total_Missions: {reports.length}
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {reports.map((report) => (
                <div
                  key={report._id}
                  onClick={() => navigate(`/interview/${report._id}`)}
                  className="group relative p-8 bg-white/[0.02] border border-white/5 hover:border-primary-container/40 hover:bg-white/[0.05] transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-10">
                     <div className="font-mono text-[9px] text-outline uppercase tracking-widest">ID_{report._id.slice(-6).toUpperCase()}</div>
                     <div className={`font-mono text-[10px] font-bold px-2 py-0.5 ${report.matchScore >= 80 ? "text-primary-container bg-primary-container/10 border border-primary-container/20" : report.matchScore >= 60 ? "text-yellow-400 bg-yellow-400/10 border border-yellow-400/20" : "text-red-400 bg-red-400/10 border border-red-400/20"}`}>
                        MATCH: {report.matchScore}%
                     </div>
                  </div>
                  
                  <h3 className="font-mono text-xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-primary-container transition-colors truncate">
                    {report.title || "Unknown_Target"}
                  </h3>
                  
                  <p className="font-mono text-[9px] text-outline uppercase tracking-widest mb-10">
                    Deployed: {new Date(report.createdAt).toLocaleDateString()}
                  </p>
                  
                  <div className="flex items-center gap-3 text-[10px] font-mono text-primary-container uppercase tracking-widest group-hover:gap-6 transition-all">
                     <span>Access_Log</span>
                     <span className="text-xs">→</span>
                  </div>

                  {/* Subtle Scan Line for cards */}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-primary-container/30 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

