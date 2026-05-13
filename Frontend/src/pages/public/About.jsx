import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroCursor from "../../components/HeroCursor";
import visionBg from "../../assets/images/vision-bg.png";
import techTeam from "../../assets/images/tech-team.png";
import blueprint from "../../assets/images/blueprint.png";
import ctaBg from "../../assets/images/cta-bg.png";

const About = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <main className="w-full pt-0 bg-background overflow-x-hidden selection:bg-primary-container selection:text-black font-sans">
      {/* SECTION 01: INITIALIZATION (Hero) */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center px-margin-mobile md:px-margin-desktop py-24 md:py-32 overflow-hidden bg-black-default"
      >
        <HeroCursor containerRef={heroRef} />

        {/* Immersive Background Stack */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={visionBg}
            alt="Vision"
            className="w-full h-full object-cover opacity-30 grayscale mix-blend-screen"
            style={{ y: y1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-default via-transparent to-black-default"></div>
          <div className="absolute inset-0 tech-grid opacity-20"></div>

          {/* Animated Scanning Line */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[2px] bg-primary-container/40 z-10 shadow-[0_0_20px_rgba(0,240,255,0.8)]"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </div>

        <div className="max-w-360 mx-auto relative z-20 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >
            <motion.div
              className="inline-flex items-center gap-4 px-4 py-2 border border-white/10 bg-white/5 mb-12"
              variants={itemVariants}
            >
              <div className="flex gap-1">
                <span className="w-1 h-3 bg-primary-container animate-pulse"></span>
                <span className="w-1 h-3 bg-primary-container animate-pulse [animation-delay:200ms]"></span>
              </div>
              <span className="text-primary-container text-[11px] font-mono tracking-[0.6em] uppercase">
                System_Core // Mission_Origin
              </span>
            </motion.div>

            <motion.h1
              className="font-mono font-bold text-white tracking-[-0.05em] uppercase leading-[0.8] mb-16"
              variants={itemVariants}
            >
              <span className="block text-[56px] sm:text-[80px] md:text-[120px] lg:text-[160px] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/10">
                Architecting
              </span>
              <motion.span
                className="block text-[56px] sm:text-[80px] md:text-[120px] lg:text-[160px] text-primary-container drop-shadow-[0_0_80px_rgba(125,211,252,0.4)]"
                animate={{ opacity: [0.7, 1, 0.7], x: [0, 2, 0] }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Ambition.
              </motion.span>
            </motion.h1>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-12"
              variants={itemVariants}
            >
              <div className="md:col-span-8">
                <p className="text-secondary text-lg md:text-3xl leading-tight font-light max-w-3xl italic">
                  "We don't build tools. We build the infrastructure for elite
                  career synchronization. A high-fidelity bridge between
                  potential and precision."
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col justify-end">
                <div className="font-mono text-[9px] text-outline uppercase tracking-[0.4em] mb-4">
                  Calibration_Status
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                      key={i}
                      className="h-4 w-1.5 bg-primary-container/40 animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 02: THE DOSSIER (Mission) */}
      <section className="relative py-32 md:py-64 bg-black-default px-margin-mobile md:px-margin-desktop overflow-hidden border-y border-white/5">
        <div className="absolute top-10 right-10 font-mono text-[200px] text-white/[0.02] font-bold pointer-events-none uppercase">
          Dossier
        </div>

        <div className="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <motion.div
            className="lg:col-span-6 relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute -inset-4 border border-primary-container/20 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-container z-20"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-container z-20"></div>

            <img
              src={blueprint}
              alt="Structural Blueprint"
              className="w-full h-auto grayscale brightness-50 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-default via-transparent to-transparent"></div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.p
              className="text-primary-container font-mono text-xs uppercase tracking-[0.6em] mb-8"
              variants={itemVariants}
            >
              Objective_Protocol // 001
            </motion.p>
            <motion.h2
              className="text-4xl md:text-7xl font-bold font-mono text-white tracking-tighter uppercase mb-12 leading-[0.85]"
              variants={itemVariants}
            >
              Engineering <br />
              <span className="text-outline">The Elite.</span>
            </motion.h2>
            <motion.p
              className="text-secondary text-xl font-light leading-relaxed mb-16 border-l-2 border-white/10 pl-10"
              variants={itemVariants}
            >
              Our mission is to replace generic preparation with architectural
              precision. We utilize advanced LLM synthesis to mirror the exact
              adversarial intensity of world-class technical evaluations.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-12"
              variants={itemVariants}
            >
              {[
                { label: "LATENCY", val: "< 400MS" },
                { label: "ACCURACY", val: "99.2%" },
                { label: "NODES", val: "GLOBAL" },
                { label: "UPTIME", val: "99.99%" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono text-[9px] text-outline uppercase tracking-widest mb-3">
                    {stat.label}
                  </div>
                  <div className="font-mono text-white text-lg font-bold tracking-tighter">
                    {stat.val}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 03: CORE PROTOCOLS (Grid) */}
      <section className="relative py-32 md:py-64 bg-black-default px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="max-w-360 mx-auto">
          <motion.div
            className="text-center mb-40"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-8xl font-bold font-mono text-white tracking-tighter uppercase mb-8">
              Core Protocols
            </h2>
            <div className="h-1 w-48 bg-primary-container mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {[
              {
                title: "Precision First",
                desc: "Every data point is calibrated against current industry rubrics for maximum relevance.",
              },
              {
                title: "Zero Placeholder",
                desc: "We deploy real-world scenarios, not generic simulations. Intensity is our baseline.",
              },
              {
                title: "Continuous Sync",
                desc: "Your roadmap evolves in real-time as the platform detects shifts in your performance nodes.",
              },
            ].map((protocol, idx) => (
              <motion.div
                key={idx}
                className="bg-black-default p-12 md:p-20 hover:bg-white/[0.03] transition-colors group cursor-default"
                variants={itemVariants}
              >
                <div className="font-mono text-primary-container text-xs mb-10">
                  RULE_SET_{idx + 1}
                </div>
                <h3 className="text-2xl md:text-4xl font-bold font-mono text-white uppercase mb-8 group-hover:text-primary-container transition-colors">
                  {protocol.title}
                </h3>
                <p className="text-secondary text-lg font-light leading-relaxed">
                  {protocol.desc}
                </p>
                <div className="mt-12 w-12 h-px bg-white/20 group-hover:w-full group-hover:bg-primary-container transition-all duration-700"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 04: THE ARCHITECTS (Registry) */}
      <section className="relative py-32 md:py-64 bg-black-default px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/5">
        <div className="max-w-360 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary-container font-mono text-xs uppercase tracking-[0.4em] mb-8">
                Personnel_Registry
              </p>
              <h2 className="text-4xl md:text-7xl font-bold font-mono text-white tracking-tighter uppercase mb-12 leading-[0.85]">
                The <br />
                <span className="text-outline">Architects.</span>
              </h2>
              <p className="text-secondary text-xl font-light leading-relaxed italic mb-16">
                "A singular intelligence focused on engineering your trajectory.
                We are the silent partners in your most critical hiring loops."
              </p>
              <div className="flex items-center gap-6 p-6 border border-white/10 bg-white/5">
                <div className="w-12 h-12 rounded-full border-2 border-primary-container animate-pulse"></div>
                <div>
                  <div className="font-mono text-white text-sm font-bold uppercase tracking-widest">
                    System Admin
                  </div>
                  <div className="font-mono text-primary-container text-[10px] uppercase">
                    STATUS: ACTIVE // US-WEST-2
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-7 relative group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* Optimized: Removed expensive blur-150px, using box-shadow glow instead */}
              <div
                className="absolute inset-0 bg-primary-container/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                style={{
                  boxShadow: "inset 0 0 60px rgba(125, 211, 252, 0.15)",
                }}
              ></div>
              <img
                src={techTeam}
                alt="Architecture Team"
                className="w-full h-auto border border-white/10 grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-1000 relative z-10"
              />
              <div className="absolute top-4 right-4 z-20 px-4 py-2 bg-black/60 border border-primary-container/30 font-mono text-[9px] text-primary-container uppercase tracking-[0.5em] animate-pulse">
                Scan_Running...
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 05: FINAL INITIALIZATION (CTA) */}
      <section className="relative py-32 md:py-72 bg-black-default px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={ctaBg}
            alt="CTA Backdrop"
            className="w-full h-full object-cover opacity-30 grayscale"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black-default via-black-default/60 to-black-default"></div>
          <div className="absolute inset-0 tech-grid opacity-30"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-4 px-6 py-3 border border-white/10 bg-white/5 mb-16 rounded-full"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
            >
              <span className="w-2 h-2 bg-primary-container rounded-full animate-ping"></span>
              <span className="font-mono text-[11px] uppercase tracking-[0.8em] text-white">
                Initialization Complete
              </span>
            </motion.div>

            <h2 className="text-[48px] md:text-[100px] lg:text-[150px] font-bold font-mono text-white tracking-tighter uppercase mb-24 leading-[0.75] drop-shadow-[0_0_100px_rgba(125,211,252,0.2)]">
              Commit <br />
              <span className="text-primary-container">To Sync.</span>
            </h2>

            <div className="relative inline-block group">
              {/* Optimized: Removed expensive blur-100px, using box-shadow instead */}
              <motion.div
                className="absolute -inset-24 bg-primary-container/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                style={{ boxShadow: "0 0 80px rgba(125, 211, 252, 0.2)" }}
              ></motion.div>

              <button className="group relative px-28 py-10 bg-primary-container text-black font-mono font-bold uppercase tracking-[0.5em] text-sm md:text-3xl overflow-hidden transition-all duration-700 hover:bg-white hover:scale-110 hover:shadow-[0_0_150px_rgba(125,211,252,1)] flex items-center gap-6">
                <span className="relative z-10">Start Sync</span>
                <motion.span
                  className="relative z-10 text-xl"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-1000"></div>
              </button>
            </div>
          </motion.div>

          <motion.div
            className="mt-48 border-t border-white/5 pt-16 grid grid-cols-2 md:grid-cols-4 gap-12 opacity-30 font-mono text-[9px] uppercase tracking-[0.4em]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            transition={{ delay: 1 }}
          >
            <span>VER_5.0.4</span>
            <span>US_REG_01</span>
            <span>PROTOCOL_ACTIVE</span>
            <span>SYNC_READY</span>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
