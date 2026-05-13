import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroCursor from "../../components/HeroCursor";
import Testimonials from "../../components/Testimonials";

const Landing = () => {
  const heroRef = useRef(null);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="pt-0 overflow-x-hidden">
      {/* BEGIN: Premium Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center px-margin-mobile md:px-margin-desktop pt-36 pb-20 md:pb-28 overflow-hidden border-b border-outline-variant/30"
        style={{ contain: "layout style paint" }}
      >
        <HeroCursor containerRef={heroRef} />

        <div className="absolute inset-0 z-0 bg-black-default"></div>
        <div className="absolute inset-0 z-0 tech-grid opacity-15"></div>
        <div className="absolute inset-0 z-0 bg-noise opacity-25"></div>
        {/* Optimized background glows - reduced blur and size for better performance */}
        <div className="absolute -top-32 -left-20 w-85 h-85 rounded-full bg-primary-container/12 blur-[80px] opacity-40"></div>
        <div className="absolute top-[32%] -right-20 w-70 h-70 rounded-full bg-white/8 blur-[80px] opacity-30"></div>
        <div className="absolute -bottom-24 left-[40%] w-90 h-55 rounded-full bg-primary-container/8 blur-[80px] opacity-40"></div>

        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute top-0 left-[14%] w-px h-full bg-gradient-to-b from-transparent via-primary-container/35 to-transparent animate-pulse-slow"
            style={{ willChange: "opacity" }}
          ></div>
          <div
            className="absolute top-0 right-[18%] w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse-slow"
            style={{ animationDelay: "1.6s", willChange: "opacity" }}
          ></div>
        </div>

        <motion.div
          className="max-w-360 mx-auto w-full relative z-10 flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ willChange: "opacity" }}
        >
          <div className="max-w-5xl flex flex-col items-center">
            <motion.h1
              className="font-mono font-bold text-white tracking-[-0.05em] uppercase leading-[0.75]"
              variants={itemVariants}
            >
              <span className="block text-[32px] sm:text-[56px] md:text-[72px] lg:text-[88px] opacity-25 mb-4">
                Walk Into Interviews
              </span>
              <motion.span
                className="block text-[52px] sm:text-[92px] md:text-[130px] lg:text-[160px] xl:text-[190px] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/10 drop-shadow-[0_0_40px_rgba(125,211,252,0.25)]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                Already Prepared.
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-12 max-w-2xl text-secondary text-base md:text-xl leading-relaxed font-light border-x border-white/5 px-12"
              variants={itemVariants}
            >
              Partner transforms your resume and job requirements into a
              <span className="text-white mx-1.5">
                precision prep battle plan
              </span>
              with likely questions, calibrated answers, and a strategic study
              timeline.
            </motion.p>

            <motion.div
              className="mt-12 flex flex-col sm:flex-row gap-4 md:gap-5 w-full sm:w-auto justify-center"
              variants={itemVariants}
            >
              <Link to="/register">
                <motion.div
                  className="group relative inline-flex items-center justify-center bg-primary-container text-black font-mono font-bold px-8 md:px-10 py-4 md:py-5 uppercase tracking-[0.18em] text-[11px] border border-primary-container"
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  style={{ willChange: "transform" }}
                >
                  Start Free Prep
                  <motion.svg
                    className="w-4 h-4 ml-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 3 }}
                  >
                    <path
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </motion.svg>
                </motion.div>
              </Link>
              <motion.a
                href="#how-it-works"
                className="inline-flex items-center justify-center border border-white/20 bg-black/40 text-white font-mono font-bold px-8 md:px-10 py-4 md:py-5 uppercase tracking-[0.18em] text-[11px]"
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.4)",
                }}
                whileTap={{ scale: 0.99 }}
                style={{ willChange: "transform" }}
              >
                See How It Works
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* BEGIN: Value Proposition Section */}
      <section className="relative py-32 bg-black-default px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-360 h-px bg-gradient-to-r from-transparent via-primary-container/20 to-transparent"></div>

        <div className="max-w-360 mx-auto relative z-10">
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-225">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary-container/30 bg-primary-container/5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                <span className="text-primary-container text-[10px] font-mono tracking-[0.3em] uppercase">
                  Strategic Mission
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-mono text-white tracking-tight uppercase">
                Leveling the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-white">
                  Battlefield
                </span>
              </h2>
            </div>
            <div className="max-w-130 border-l border-white/10 pl-8 pb-2">
              <p className="text-secondary text-base md:text-lg leading-relaxed font-light italic">
                "We provide the data-driven edge that traditionally belonged
                only to the institutions. Now, the candidate has the matrix."
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              {
                id: "01",
                title: "Speed to Readiness",
                desc: "Turn months of uncertainty into hours of targeted practice using our predictive prep engine.",
                tag: "Optimization",
              },
              {
                id: "02",
                title: "Role-Centric Guidance",
                desc: "Personalized study plans and simulated answers tailored specifically to your target role and seniority.",
                tag: "Calibration",
              },
              {
                id: "03",
                title: "Confidence + Calibration",
                desc: "Quantified feedback metrics so you know exactly what to practice and when you're ready to deploy.",
                tag: "Intelligence",
              },
            ].map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative p-8 md:p-10 bg-surface-container-lowest/40 border border-white/5 overflow-hidden"
                variants={cardVariants}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-8 h-px bg-white/10 group-hover:bg-primary-container/40"
                  whileHover={{ backgroundColor: "rgba(125,211,252,0.4)" }}
                ></motion.div>
                <div className="absolute top-0 left-0 w-px h-8 bg-white/10 group-hover:bg-primary-container/40 transition-colors"></div>

                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-4xl text-white/10 group-hover:text-primary-container/20 transition-colors duration-500">
                    {item.id}
                  </span>
                  <span className="text-[9px] font-mono tracking-[0.25em] text-outline uppercase border border-white/10 px-2 py-1">
                    {item.tag}
                  </span>
                </div>

                <h4 className="font-mono text-xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-primary-container transition-colors">
                  {item.title}
                </h4>
                <p className="text-secondary text-sm leading-relaxed font-light">
                  {item.desc}
                </p>

                <motion.div
                  className="mt-8 h-px bg-primary-container/30 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BEGIN: Testimonials Section */}
      <section className="relative py-32 bg-black-default border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-5"></div>

        <div className="max-w-360 mx-auto px-margin-mobile md:px-margin-desktop relative z-10 mb-20">
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-225">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary-container/30 bg-primary-container/5 mb-6 font-mono text-[10px] tracking-[0.3em] uppercase text-primary-container">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                Social Proof // Deployment success
              </div>
              <h3 className="text-4xl md:text-6xl font-bold font-mono text-white tracking-tight uppercase leading-tight">
                Trusted by the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-white to-primary-container/40">
                  Global Workforce
                </span>
              </h3>
            </div>
            <div className="md:text-right">
              <p className="text-secondary max-w-130 font-light text-sm md:text-base leading-relaxed">
                Short, honest reflections from professionals who optimized their
                career trajectories using the Partner execution engine.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <Testimonials />
        </div>
      </section>

      {/* BEGIN: How It Works Section */}
      <section
        id="how-it-works"
        className="relative py-32 px-4 bg-surface border-t border-white/5"
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-primary-container text-sm font-mono tracking-widest mb-4 uppercase">
              [ Execution Flow ]
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono text-white tracking-tight">
              How It Works
            </h2>
            <p className="text-secondary">
              Three streamlined steps to a winning interview strategy.
            </p>
          </motion.div>

          <div className="space-y-6 relative">
            <div className="hidden md:block absolute left-15 top-10 bottom-10 w-0.5 bg-white/5 overflow-hidden">
              <motion.div
                className="h-full w-full bg-gradient-to-b from-transparent via-primary-container to-transparent opacity-30"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </div>

            {[
              {
                id: "01",
                phase: "INIT",
                title: "Input Context",
                desc: "Provide the job description and upload your resume or profile details into the processing engine.",
              },
              {
                id: "02",
                phase: "PROCESS",
                title: "AI Generation",
                desc: "Our model analyzes the intersection of the requirements and your experience, running millions of parameters.",
              },
              {
                id: "03",
                phase: "OUTPUT",
                title: "Review Strategy",
                desc: "Access your personalized dashboard with questions, model answers, and a highly structured study plan.",
              },
            ].map((step, idx) => (
              <motion.div
                key={step.id}
                className="flex flex-col md:flex-row items-start md:items-center p-8 bg-surface-container-low/30 backdrop-blur-md border border-white/5 relative group mb-8 overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ borderColor: "rgba(125,211,252,0.2)" }}
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-white/10 group-hover:bg-primary-container group-hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all"></div>
                <div className="shrink-0 w-24 flex items-center justify-center relative">
                  <motion.div
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black relative z-10"
                    whileHover={{ borderColor: "#7dd3fc" }}
                  >
                    <span className="text-white font-mono text-lg">
                      {step.id}
                    </span>
                    <motion.div
                      className="absolute inset-0 rounded-full border border-primary-container/50"
                      initial={{ scale: 1, opacity: 0 }}
                      whileHover={{ scale: 1.25, opacity: 0.5 }}
                    ></motion.div>
                  </motion.div>
                  <div className="hidden md:block absolute right-0 top-1/2 w-4 h-px bg-white/10 group-hover:bg-primary-container transition-colors"></div>
                </div>
                <div className="ml-0 md:ml-8 grow">
                  <div className="text-[10px] text-primary-container/40 font-mono tracking-[0.3em] uppercase mb-1">
                    Phase: {step.phase}
                  </div>
                  <div className="font-bold text-xl mb-3 font-mono text-white uppercase tracking-widest group-hover:text-primary-container transition-colors">
                    {step.title}
                  </div>
                  <div className="text-secondary text-sm border-l border-white/10 pl-6 font-light leading-relaxed">
                    {step.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BEGIN: CTA Section */}
      <section className="relative bg-black-default py-48 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="absolute inset-0 bg-noise opacity-30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-container/40 to-transparent"></div>

        <motion.div
          className="max-w-360 mx-auto relative z-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-md mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
            </span>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-primary-container">
              System Ready // Status: Optimal
            </span>
          </motion.div>

          <h2 className="text-[42px] leading-[1] md:text-8xl font-bold font-mono text-white tracking-[-0.04em] uppercase mb-8">
            Ready to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
              Deploy Your Career?
            </span>
          </h2>

          <p className="max-w-165 mx-auto text-secondary text-base md:text-xl font-light leading-relaxed mb-16 px-4">
            Join the elite circle of professionals who don't just "show up" to
            interviews—they command them. Initialize your preparation engine
            today.
          </p>

          <div className="flex flex-col items-center gap-10">
            <Link
              to="/register"
              className="group relative flex items-center justify-center"
            >
              <motion.div
                className="absolute inset-0 -m-1 border border-primary-container/20 group-hover:border-primary-container/60 transition-colors"
                whileHover={{ scale: 1.05 }}
              ></motion.div>

              <motion.div
                className="relative px-12 py-6 bg-primary-container text-black font-mono font-bold uppercase tracking-[0.25em] text-sm md:text-base flex items-center"
                whileHover={{
                  backgroundColor: "#ffffff",
                  boxShadow: "0 0 50px rgba(0,240,255,0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Initialize Account
                </span>
              </motion.div>

              <motion.div
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-container/40"
                whileHover={{
                  height: "100%",
                  backgroundColor: "rgba(125,211,252,0.8)",
                }}
              ></motion.div>
              <motion.div
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-container/40"
                whileHover={{
                  height: "100%",
                  backgroundColor: "rgba(125,211,252,0.8)",
                }}
              ></motion.div>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Landing;
