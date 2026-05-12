import React, { useRef } from "react";
import HeroCursor from "../../components/HeroCursor";
import visionBg from "../../assets/images/vision-bg.png";
import techTeam from "../../assets/images/tech-team.png";
import blueprint from "../../assets/images/blueprint.png";
import ctaBg from "../../assets/images/cta-bg.png";

const About = () => {
  const heroRef = useRef(null);

  return (
    <main className="w-full pt-0 bg-background overflow-x-hidden">
      {/* UNIQUE Visionary Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center px-margin-mobile md:px-margin-desktop py-24 md:py-32 overflow-hidden border-b border-white/5 bg-black-default"
      >
        <HeroCursor containerRef={heroRef} />
        
        <div className="absolute inset-0 z-0">
          <img 
            src={visionBg} 
            alt="Vision Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black-default via-transparent to-black-default opacity-90"></div>
          <div className="absolute inset-0 tech-grid opacity-10"></div>
          <div className="absolute inset-0 bg-noise opacity-20"></div>
        </div>

        <div className="max-w-360 mx-auto relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-3 py-1 border border-primary-container/30 bg-primary-container/5 mb-10">
              <span className="text-primary-container text-[10px] font-mono tracking-[0.4em] uppercase">
                Mission_Intel // The_Architecture_Of_Ambition
              </span>
            </div>
            
            <h1 className="font-mono font-bold text-white tracking-[-0.04em] uppercase leading-[0.85] mb-12">
              <span className="block text-[48px] sm:text-[72px] md:text-[96px] lg:text-[120px] text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/20">
                The Human
              </span>
              <span className="block text-[48px] sm:text-[72px] md:text-[96px] lg:text-[120px] text-primary-container drop-shadow-[0_0_50px_rgba(125,211,252,0.3)]">
                Trajectory.
              </span>
            </h1>
            
            <p className="mt-8 max-w-2xl text-secondary text-lg md:text-2xl leading-relaxed font-light border-l border-primary-container/30 pl-8">
               We build for the elite, the ambitious, and the architects of the future. Our mission is to bridge the gap between potential and peak performance through high-fidelity calibration.
            </p>
          </div>
        </div>
        
        {/* Scrolling Text Ribbon */}
        <div className="absolute bottom-0 left-0 w-full py-4 bg-white/5 border-t border-white/5 overflow-hidden whitespace-nowrap">
           <div className="inline-block animate-scan font-mono text-[9px] text-outline uppercase tracking-[0.6em] px-8">
              Vision // Ambition // Calibration // Performance // Legacy // Vision // Ambition // Calibration // Performance // Legacy
           </div>
        </div>
      </section>

      {/* Mission Objective - Dossier Layout */}
      <section className="relative py-24 md:py-48 bg-black-default px-margin-mobile md:px-margin-desktop border-b border-white/5">
        <div className="max-w-360 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7 relative">
               <img 
                 src={blueprint} 
                 alt="Mission Blueprint" 
                 className="w-full h-auto grayscale opacity-50 border border-white/10"
               />
               <div className="absolute inset-0 bg-linear-to-r from-black-default via-transparent to-transparent"></div>
               <div className="absolute -top-10 -left-10 font-mono text-[120px] text-white/5 font-bold pointer-events-none select-none">OBJ_01</div>
            </div>
            
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bold font-mono text-white tracking-tight uppercase mb-8 leading-tight">
                Our Mission <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/40">Objective</span>
              </h2>
              <p className="text-secondary text-lg leading-relaxed font-light mb-12">
                To engineer a preparation environment that mirrors the intensity and precision of the world's most elite hiring loops. We don't provide tips; we provide a strategic platform.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                   { label: "Founded", val: "2024" },
                   { label: "Deployment", val: "Global" },
                   { label: "Architecture", val: "Neural" },
                   { label: "Status", val: "Active" }
                 ].map(item => (
                   <div key={item.label} className="border-l border-white/10 pl-6">
                      <p className="text-[10px] font-mono text-outline uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-white font-mono text-lg font-bold">{item.val}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Architects Section */}
      <section className="relative py-24 md:py-48 bg-surface-container-lowest px-margin-mobile md:px-margin-desktop border-b border-white/5 overflow-hidden">
        <div className="max-w-360 mx-auto text-center mb-32">
           <h2 className="text-3xl md:text-6xl font-bold font-mono text-white tracking-tighter uppercase mb-6">The Architects</h2>
           <p className="text-secondary max-w-2xl mx-auto italic font-light">"A collaborative intelligence focused on a singular outcome: Your Success."</p>
        </div>
        
        <div className="max-w-360 mx-auto">
           <div className="relative group">
              <div className="absolute inset-0 bg-primary-container/5 blur-[100px] rounded-full"></div>
              <img 
                src={techTeam} 
                alt="Architecture Team" 
                className="relative z-10 w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 border border-white/5 shadow-2xl"
              />
              <div className="absolute inset-0 z-20 tech-grid opacity-20 pointer-events-none"></div>
           </div>
        </div>
      </section>

      {/* Final COLLABORATIVE CTA Improvement */}
      <section className="relative py-32 md:py-64 bg-black-default px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src={ctaBg} 
            alt="CTA Background" 
            className="w-full h-full object-cover opacity-20 grayscale scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black-default via-transparent to-black-default"></div>
          <div className="absolute inset-0 tech-grid opacity-20"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-[42px] md:text-9xl font-bold font-mono text-white tracking-tighter uppercase mb-16 leading-[0.85]">
            Join the <br />
            <span className="text-primary-container">Architecture.</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-secondary text-xl font-light mb-20 italic">
             "The future belongs to those who prepare for the complexity of today."
          </p>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
             <button className="group relative px-20 py-8 bg-primary-container text-black font-mono font-bold uppercase tracking-[0.4em] text-sm md:text-xl overflow-hidden transition-all duration-700 hover:bg-white hover:scale-105 hover:shadow-[0_0_80px_rgba(125,211,252,0.6)]">
               <span className="relative z-10">Start My Calibration</span>
               <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700"></div>
             </button>
             
             <button className="px-16 py-8 border border-white/10 text-white font-mono font-bold uppercase tracking-[0.4em] text-sm md:text-xl backdrop-blur-md hover:bg-white/5 transition-all duration-300">
               Learn Protocols
             </button>
          </div>
          
          <div className="mt-32 flex justify-center gap-12 text-outline font-mono text-[10px] uppercase tracking-[0.5em]">
             <span>EST_2024</span>
             <span className="w-1.5 h-1.5 bg-primary-container rounded-full animate-pulse self-center"></span>
             <span>MISSION_CRITICAL</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
t;


