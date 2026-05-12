import React, { useRef } from "react";
import HeroCursor from "../../components/HeroCursor";
import pricingBg from "../../assets/images/pricing-bg.png";
import pricingCtaBg from "../../assets/images/pricing-cta-bg.png";

const Pricing = () => {
  const heroRef = useRef(null);

  return (
    <main className="w-full pt-0 bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center px-margin-mobile md:px-margin-desktop py-24 md:py-32 overflow-hidden border-b border-white/5 bg-black-default"
      >
        <HeroCursor containerRef={heroRef} />
        
        <div className="absolute inset-0 z-0">
          <img 
            src={pricingBg} 
            alt="Pricing Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black-default via-transparent to-black-default opacity-90"></div>
          <div className="absolute inset-0 tech-grid opacity-20"></div>
          <div className="absolute inset-0 bg-noise opacity-20"></div>
        </div>

        <div className="max-w-360 mx-auto relative z-10 w-full text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary-container/30 bg-primary-container/5 mb-8">
            <span className="text-primary-container text-[10px] font-mono tracking-[0.3em] uppercase">
              Investment Protocol // Tier Selection
            </span>
          </div>
          
          <h1 className="font-mono font-bold text-white tracking-[-0.04em] uppercase leading-[0.85] mb-12">
            <span className="block text-[42px] sm:text-[64px] md:text-[96px] lg:text-[110px] text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/20">
              Calibrated
            </span>
            <span className="block text-[42px] sm:text-[64px] md:text-[96px] lg:text-[110px] text-primary-container drop-shadow-[0_0_40px_rgba(125,211,252,0.2)]">
              For Growth.
            </span>
          </h1>
          
          <p className="mt-8 max-w-2xl mx-auto text-secondary text-base md:text-xl leading-relaxed font-light border-l border-primary-container/30 pl-8 md:pl-0 md:border-l-0 text-left md:text-center">
            Precision preparation at every scale. Choose the protocol that aligns with your career trajectory.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-24 md:py-32 bg-black-default px-margin-mobile md:px-margin-desktop border-b border-white/5">
        <div className="max-w-360 mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
          {/* Tier 01 */}
          <div className="group relative p-8 md:p-12 bg-surface-container-low/40 border border-white/5 hover:bg-white/5 transition-all duration-500 flex flex-col">
            <div className="flex justify-between items-start mb-12">
              <span className="font-mono text-xs text-outline uppercase tracking-widest">Protocol_01</span>
              <span className="text-[10px] font-mono tracking-widest text-outline uppercase border border-white/10 px-2 py-1">Basic</span>
            </div>
            <h3 className="font-mono text-3xl font-bold text-white mb-2 uppercase tracking-wider">Free</h3>
            <p className="text-secondary text-sm mb-12 font-light h-12">Foundation mapping for those just starting the calibration process.</p>
            
            <div className="space-y-6 mb-16 grow">
              {[
                "1 Active Roadmap",
                "Basic Question Set (50)",
                "Standard Match Scoring",
                "Community Access"
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-xs font-mono text-outline uppercase">
                   <span className="w-1.5 h-1.5 border border-primary-container/40"></span>
                   {item}
                </div>
              ))}
            </div>
            
            <button className="w-full py-4 border border-white/10 text-white font-mono font-bold uppercase tracking-[0.2em] text-xs hover:bg-white/5 transition-all duration-300">
              Initialize
            </button>
          </div>

          {/* Tier 02 - Featured */}
          <div className="group relative p-8 md:p-12 bg-primary-container/5 border border-primary-container/30 hover:bg-primary-container/10 transition-all duration-500 flex flex-col shadow-[0_0_50px_rgba(125,211,252,0.1)]">
            <div className="absolute top-0 right-12 -translate-y-1/2 bg-primary-container text-black px-4 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em]">
              RECOMMENDED
            </div>
            <div className="flex justify-between items-start mb-12">
              <span className="font-mono text-xs text-primary-container uppercase tracking-widest">Protocol_02</span>
              <span className="text-[10px] font-mono tracking-widest text-primary-container uppercase border border-primary-container/30 px-2 py-1">Professional</span>
            </div>
            <h3 className="font-mono text-4xl font-bold text-white mb-2 uppercase tracking-wider">
              $49<span className="text-sm text-secondary font-light">/mo</span>
            </h3>
            <p className="text-secondary text-sm mb-12 font-light h-12">High-fidelity prep for competitive roles and intensive hiring loops.</p>
            
            <div className="space-y-6 mb-16 grow">
              {[
                "Unlimited Roadmaps",
                "Advanced Question Engine (5k+)",
                "LLM-Powered Critique",
                "Adversarial Mock Simulation",
                "Priority Support"
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-xs font-mono text-white uppercase">
                   <span className="w-1.5 h-1.5 bg-primary-container shadow-[0_0_8px_rgba(125,211,252,0.6)]"></span>
                   {item}
                </div>
              ))}
            </div>
            
            <button className="w-full py-5 bg-primary-container text-black font-mono font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:shadow-[0_0_30px_rgba(125,211,252,0.4)] transition-all duration-300">
              Activate Now
            </button>
          </div>

          {/* Tier 03 */}
          <div className="group relative p-8 md:p-12 bg-surface-container-low/40 border border-white/5 hover:bg-white/5 transition-all duration-500 flex flex-col">
            <div className="flex justify-between items-start mb-12">
              <span className="font-mono text-xs text-outline uppercase tracking-widest">Protocol_03</span>
              <span className="text-[10px] font-mono tracking-widest text-outline uppercase border border-white/10 px-2 py-1">Enterprise</span>
            </div>
            <h3 className="font-mono text-3xl font-bold text-white mb-2 uppercase tracking-wider">Custom</h3>
            <p className="text-secondary text-sm mb-12 font-light h-12">Customized interview readiness for teams and large institutions.</p>
            
            <div className="space-y-6 mb-16 grow">
              {[
                "Team Dashboard & Analytics",
                "Custom Evaluation Rubrics",
                "SSO & API Access",
                "Dedicated Solutions Engineer",
                "SLA Guarantees"
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-xs font-mono text-outline uppercase">
                   <span className="w-1.5 h-1.5 border border-white/20"></span>
                   {item}
                </div>
              ))}
            </div>
            
            <button className="w-full py-4 border border-white/10 text-white font-mono font-bold uppercase tracking-[0.2em] text-xs hover:bg-white/5 transition-all duration-300">
              Contact Ops
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 md:py-32 bg-black-default px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 tech-grid opacity-5"></div>
        <div className="max-w-360 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="text-primary-container text-[11px] font-mono uppercase tracking-[0.2em] mb-6">
                [ 04 ] Intel Retrieval
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-mono text-white tracking-tight uppercase mb-8 leading-tight">
                Frequently Asked <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/40">Questions</span>
              </h2>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {[
                {
                  q: "Can I switch protocols later?",
                  a: "Yes. Upgrades are immediate and down-scaling applies at the end of the current billing cycle."
                },
                {
                  q: "What defines an 'Active Roadmap'?",
                  a: "A roadmap is a targeted preparation system for one specific role, company, and seniority level."
                },
                {
                  q: "Do you offer institutional pilots?",
                  a: "Yes. Contact our operations team for custom sandbox environments and pilot evaluations."
                },
                {
                  q: "Is the critique deterministic?",
                  a: "Yes. Our LLMs are fine-tuned on real hiring rubrics to provide consistent, evidence-based feedback."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-black-default p-8 hover:bg-white/5 transition-all duration-500">
                  <h4 className="font-mono text-white text-sm font-bold uppercase tracking-wider mb-4 flex gap-3">
                    <span className="text-primary-container/40">{idx+1} //</span> {item.q}
                  </h4>
                  <p className="text-secondary text-sm leading-relaxed font-light">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section with enhanced background */}
      <section className="relative py-32 md:py-48 bg-black-default px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/5">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <img 
            src={pricingCtaBg} 
            alt="CTA Background" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-screen"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black-default via-transparent to-black-default"></div>
          <div className="absolute inset-0 tech-grid opacity-20"></div>
          <div className="absolute inset-0 bg-noise opacity-30"></div>
        </div>

        {/* Dynamic Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/5 blur-[150px] rounded-full"></div>
        
        <div className="max-w-360 mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-md mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary-container">
              Strategy Deployment // Final Step
            </span>
          </div>

          <h2 className="text-[36px] md:text-8xl font-bold font-mono text-white tracking-tighter uppercase mb-12 leading-[0.9]">
            Ready to <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white via-white to-white/20">Commit?</span>
          </h2>

          <p className="max-w-2xl mx-auto text-secondary text-base md:text-xl font-light leading-relaxed mb-16 italic">
            "The distance between where you are and where you want to be is called Protocol."
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
             <button className="group relative px-12 py-5 bg-primary-container text-black font-mono font-bold uppercase tracking-[0.25em] text-sm md:text-base overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-[0_0_50px_rgba(125,211,252,0.4)]">
               <span className="relative z-10">Generate My Strategy</span>
               <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-500"></div>
             </button>
             
             <button className="px-12 py-5 border border-white/20 text-white font-mono font-bold uppercase tracking-[0.25em] text-sm md:text-base backdrop-blur-md hover:bg-white/10 transition-all duration-300">
               Review Metrics
             </button>
          </div>
          
          <div className="mt-20 flex justify-center gap-12 border-t border-white/5 pt-12">
             {["Plan: Professional", "Uptime: 99.9%", "Encryption: AES-256"].map(stat => (
               <div key={stat} className="font-mono text-[9px] uppercase tracking-[0.3em] text-outline">
                 {stat}
               </div>
             ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;


