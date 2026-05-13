import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroCursor from "../../components/HeroCursor";
import techDiagram from "../../assets/images/tech-diagram.png";
import dataVortex from "../../assets/images/data-vortex.png";
import waveform from "../../assets/images/waveform.png";

const Features = () => {
  const heroRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const moduleVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <main className="w-full pt-0 bg-background overflow-x-hidden selection:bg-primary-container selection:text-black">
      {/* V5 IMMERSIVE Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center px-margin-mobile md:px-margin-desktop py-24 md:py-0 overflow-hidden bg-black-default"
      >
        <HeroCursor containerRef={heroRef} />
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 tech-grid opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black-default via-transparent to-black-default"></div>
          
          {/* Pulsing Aura */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-container/5 blur-[200px] rounded-full"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          
          <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
        </div>

        {/* Sidebar Metadata */}
        <motion.div 
          className="absolute top-32 left-12 hidden xl:block z-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
           <div className="space-y-12">
              {[
                { label: "CORE_TEMPERATURE", val: "32°C", bar: "w-12" },
                { label: "NEURAL_LOAD", val: "14.2%", bar: "w-8" },
                { label: "SIGNAL_LOCK", val: "ENABLED", bar: "w-16" }
              ].map(stat => (
                <div key={stat.label} className="font-mono">
                   <p className="text-[9px] text-outline uppercase tracking-widest mb-2">{stat.label}</p>
                   <p className="text-white text-sm font-bold mb-3">{stat.val}</p>
                   <div className="h-0.5 bg-white/10 w-24">
                      <motion.div 
                        className={`h-full bg-primary-container ${stat.bar}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        style={{ originX: 0 }}
                      ></motion.div>
                   </div>
                </div>
              ))}
           </div>
        </motion.div>

        <div className="max-w-360 mx-auto relative z-10 w-full text-center">
          <motion.div 
            className="inline-flex items-center gap-4 px-4 py-1.5 border border-white/10 bg-white/5 backdrop-blur-md mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-1">
               <motion.span className="w-1 h-3 bg-primary-container" animate={{ scaleY: [1, 2, 1] }} transition={{ duration: 1, repeat: Infinity }}></motion.span>
               <motion.span className="w-1 h-3 bg-primary-container" animate={{ scaleY: [1, 2, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}></motion.span>
               <motion.span className="w-1 h-3 bg-primary-container" animate={{ scaleY: [1, 2, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}></motion.span>
            </div>
            <span className="text-primary-container text-[10px] font-mono tracking-[0.5em] uppercase">
                Architecture_V5 // Deployment_Active
            </span>
          </motion.div>
          
          <motion.h1 
            className="font-mono font-bold text-white tracking-[-0.07em] uppercase leading-[0.75] mb-16 relative group cursor-default"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span 
              className="block text-[54px] sm:text-[86px] md:text-[130px] lg:text-[180px] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/5 transition-all duration-700 group-hover:from-primary-container group-hover:to-white"
              variants={itemVariants}
            >
              Neural
            </motion.span>
            <motion.span 
              className="block text-[54px] sm:text-[86px] md:text-[130px] lg:text-[180px] text-primary-container drop-shadow-[0_0_80px_rgba(125,211,252,0.4)] transition-all duration-700 group-hover:drop-shadow-[0_0_120px_rgba(125,211,252,0.6)]"
              variants={itemVariants}
            >
              Synthesis.
            </motion.span>
            
            {/* Geometric Floating Accents */}
            <motion.div 
              className="absolute -top-12 -right-12 w-24 h-24 border-t-2 border-r-2 border-white/5 group-hover:border-primary-container/40 transition-colors duration-700"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-12 -left-12 w-24 h-24 border-b-2 border-l-2 border-white/5 group-hover:border-primary-container/40 transition-colors duration-700"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
            ></motion.div>
          </motion.h1>
          
          <motion.p 
            className="max-w-3xl mx-auto text-secondary text-lg md:text-2xl leading-relaxed font-light italic mb-20 border-x border-white/5 px-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
             "Where elite ambition meets architectural precision. Calibrate your trajectory with the world's most advanced evaluation engine."
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-12"
            initial={{ height: 0 }}
            animate={{ height: 96 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
             <div className="w-px bg-gradient-to-b from-primary-container/60 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* V5 ADVANCED Modules Section */}
      <section className="relative py-32 md:py-64 bg-black-default px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="max-w-360 mx-auto">
          <motion.div 
            className="mb-40 flex flex-col md:flex-row items-end justify-between gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <div className="max-w-2xl text-left">
                <p className="text-primary-container text-[11px] font-mono uppercase tracking-[0.4em] mb-6">Module_Inventory</p>
                <h2 className="text-4xl md:text-7xl font-bold font-mono text-white tracking-tighter uppercase leading-[0.9]">
                   Core System <br />
                   <span className="text-outline">Capabilities</span>
                </h2>
             </div>
             <motion.div 
               className="font-mono text-[10px] text-secondary uppercase tracking-[0.2em] border border-white/10 px-6 py-3 bg-white/5"
               whileHover={{ backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.2)" }}
             >
                Total_Modules: 03 // System_State: NOMINAL
             </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {[
              {
                title: "Critique Node",
                desc: "High-fidelity LLM analysis of response impact, structure, and evidence mapping.",
                tag: "CRT_01",
                stat: "99.2% ACCURACY"
              },
              {
                title: "Scenario Lab",
                desc: "Real-time generation of scenarios tuned to specific company engineering cultures.",
                tag: "LAB_02",
                stat: "400ms LATENCY"
              },
              {
                title: "Roadmap Sync",
                desc: "Dynamically adjusted preparation schedules based on detected gaps and timelines.",
                tag: "RDM_03",
                stat: "SYNCED"
              }
            ].map((module, idx) => (
              <motion.div 
                key={idx} 
                className="group relative p-16 bg-white/[0.02] border border-white/5 transition-colors duration-700 hover:bg-white/[0.05] perspective-1000 overflow-hidden"
                variants={moduleVariants}
                whileHover={{ y: -10 }}
              >
                {/* Internal Waveform Background */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000">
                   <img src={waveform} alt="Waveform" className="w-full h-full object-cover scale-150" />
                </div>

                <div className="relative z-10">
                   <div className="flex justify-between items-start mb-16">
                      <div className="font-mono text-[10px] text-primary-container uppercase tracking-widest">{module.tag}</div>
                      <div className="font-mono text-[9px] text-outline uppercase tracking-tighter bg-white/5 px-2 py-1 border border-white/5">{module.stat}</div>
                   </div>
                   
                   <h3 className="font-mono text-3xl font-bold text-white mb-8 uppercase tracking-wider group-hover:text-primary-container transition-colors duration-500">{module.title}</h3>
                   <p className="text-secondary text-base leading-relaxed font-light mb-12">{module.desc}</p>
                   
                   <div className="flex gap-1 pt-12 border-t border-white/5">
                      {[1,2,3,4,5].map(i => (
                        <motion.div 
                          key={i} 
                          className="h-1 flex-1 bg-white/10"
                          whileHover={{ backgroundColor: "rgba(0,240,255,0.6)" }}
                          transition={{ duration: 0.3 }}
                        ></motion.div>
                      ))}
                   </div>
                </div>

                {/* 3D Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* V5 HYPER-IMMERSIVE CTA Section */}
      <section className="relative py-32 md:py-72 bg-black-default px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/5">
        {/* THE DATA VORTEX */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            src={dataVortex} 
            alt="Data Vortex" 
            className="w-full h-full object-cover opacity-40 grayscale mix-blend-screen scale-110"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black-default/60 to-black-default"></div>
          <div className="absolute inset-0 tech-grid opacity-30"></div>
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto relative z-10 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
           <motion.div 
              className="inline-flex items-center gap-4 px-6 py-3 border border-white/10 bg-white/5 backdrop-blur-2xl mb-20 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
           >
              <span className="w-2 h-2 bg-primary-container rounded-full animate-pulse shadow-[0_0_15px_rgba(125,211,252,1)]"></span>
              <span className="font-mono text-[11px] uppercase tracking-[0.6em] text-white">Neural Uplink Ready</span>
           </motion.div>

           <h2 className="text-[48px] md:text-[100px] lg:text-[150px] font-bold font-mono text-white tracking-tighter uppercase mb-24 leading-[0.75] drop-shadow-[0_0_100px_rgba(125,211,252,0.2)]">
              Final <br />
              <span className="text-primary-container">Initialization.</span>
           </h2>
           
           <div className="relative inline-block group">
              {/* Massive Outer Glow */}
              <motion.div 
                className="absolute -inset-16 bg-primary-container/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
              ></motion.div>
              
              <Link 
                to="/register" 
              >
                <motion.div
                  className="group relative px-24 py-10 bg-primary-container text-black font-mono font-bold uppercase tracking-[0.5em] text-sm md:text-2xl overflow-hidden flex items-center gap-4"
                  whileHover={{ scale: 1.1, backgroundColor: "#ffffff", boxShadow: "0 0 120px rgba(125,211,252,0.8)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Start My Sync</span>
                  <motion.span 
                    className="relative z-10 text-xs translate-y-0.5 opacity-40 group-hover:opacity-100"
                    whileHover={{ x: 8 }}
                  >→</motion.span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-1000"></div>
                </motion.div>
              </Link>
           </div>
           
           {/* Deployment Log Footer */}
           <motion.div 
            className="mt-40 border-t border-white/5 pt-12 flex flex-col items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
           >
              <div className="font-mono text-[9px] text-outline uppercase tracking-[1em] mb-6 animate-pulse">DEPLOYMENT_LOG_v5.0.4</div>
              <div className="flex gap-12 opacity-30 font-mono text-[8px] uppercase tracking-widest">
                 <span>NODE: US-WEST-2</span>
                 <span>LATENCY: 14MS</span>
                 <span>PKT_SIZE: 1024KB</span>
                 <span>SEC_PROTO: AES_256</span>
              </div>
           </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default Features;



