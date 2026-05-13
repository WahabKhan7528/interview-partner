import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroCursor from "../../components/HeroCursor";
import pricingBg from "../../assets/images/pricing-bg.png";
import pricingCtaBg from "../../assets/images/pricing-cta-bg.png";

const Pricing = () => {
  const heroRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const plans = [
    {
      name: "TRIAL_ACCESS",
      price: "$0",
      period: "FOR 1 WEEK",
      features: [
        "1 Role Synthesis",
        "5 Predictive Questions",
        "Model Answer Frameworks",
        "Basic Study Timeline"
      ],
      cta: "INITIALIZE",
      popular: false
    },
    {
      name: "ELITE_DEPLOY",
      price: "$29",
      period: "PER MONTH",
      features: [
        "Unlimited Role Synthesis",
        "Full Predictive Engine",
        "Priority Answer Modeling",
        "Advanced Study Roadmaps",
        "Technical Mock Feedback",
        "Priority Support Node"
      ],
      cta: "UPGRADE NOW",
      popular: true
    },
    {
      name: "CORE_PRECISION",
      price: "$15",
      period: "PER MONTH",
      features: [
        "3 Role Synthesis / Mo",
        "15 Predictive Questions",
        "Full Answer Frameworks",
        "Optimized Timelines"
      ],
      cta: "GET STARTED",
      popular: false
    }
  ];

  return (
    <main className="w-full pt-0 bg-background overflow-x-hidden selection:bg-primary-container selection:text-black">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center px-margin-mobile md:px-margin-desktop py-24 md:py-32 overflow-hidden border-b border-white/5 bg-black-default"
      >
        <HeroCursor containerRef={heroRef} />
        
        <div className="absolute inset-0 z-0">
          <motion.img 
            src={pricingBg} 
            alt="Pricing Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-default via-transparent to-black-default opacity-90"></div>
          <div className="absolute inset-0 tech-grid opacity-20"></div>
          <div className="absolute inset-0 bg-noise opacity-20"></div>
        </div>

        <div className="max-w-360 mx-auto relative z-10 w-full text-center">
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1 border border-primary-container/30 bg-primary-container/5 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-container text-[10px] font-mono tracking-[0.3em] uppercase">
              Investment Protocol // Tier Selection
            </span>
          </motion.div>
          
          <motion.h1 
            className="font-mono font-bold text-white tracking-[-0.04em] uppercase leading-[0.85] mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-[42px] sm:text-[64px] md:text-[96px] lg:text-[110px] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">
              Calibrated
            </span>
            <span className="block text-[42px] sm:text-[64px] md:text-[96px] lg:text-[110px] text-primary-container drop-shadow-[0_0_40px_rgba(125,211,252,0.2)]">
              For Growth.
            </span>
          </motion.h1>
          
          <motion.p 
            className="mt-8 max-w-2xl mx-auto text-secondary text-base md:text-xl leading-relaxed font-light border-l border-primary-container/30 pl-8 md:pl-0 md:border-l-0 text-left md:text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Precision preparation at every scale. Choose the protocol that aligns with your career trajectory.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-24 md:py-32 bg-black-default px-margin-mobile md:px-margin-desktop border-b border-white/5">
        <div className="max-w-360 mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`relative p-10 border ${plan.popular ? 'border-primary-container bg-primary-container/[0.03]' : 'border-white/5 bg-white/[0.02]'} overflow-hidden group`}
                variants={cardVariants}
                whileHover={{ y: -8, backgroundColor: plan.popular ? "rgba(0,240,255,0.05)" : "rgba(255,255,255,0.04)" }}
              >
                {plan.popular && (
                  <motion.div 
                    className="absolute top-0 right-0 bg-primary-container text-black font-mono text-[9px] font-bold px-4 py-1.5 tracking-widest uppercase origin-top-right rotate-45 translate-x-8 translate-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    BEST_VAL
                  </motion.div>
                )}

                <div className="font-mono text-[10px] text-primary-container tracking-[0.2em] uppercase mb-12 flex items-center gap-4">
                  <span className="w-8 h-px bg-primary-container/30"></span>
                  {plan.name}
                </div>

                <div className="mb-12">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl md:text-6xl font-bold font-mono text-white tracking-tighter">{plan.price}</span>
                  </div>
                  <div className="font-mono text-[10px] text-secondary uppercase tracking-[0.3em]">{plan.period}</div>
                </div>

                <ul className="space-y-6 mb-16 border-t border-white/5 pt-10">
                  {plan.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (idx * 0.1) }}
                    >
                      <svg className="w-4 h-4 text-primary-container mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-secondary text-sm font-light leading-snug">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link to="/register" className="block relative group/btn">
                  <motion.div 
                    className={`w-full py-5 font-mono text-xs font-bold uppercase tracking-[0.3em] text-center border transition-colors ${plan.popular ? 'bg-primary-container text-black border-primary-container' : 'bg-transparent text-white border-white/20'}`}
                    whileHover={{ scale: 1.02, backgroundColor: plan.popular ? "#ffffff" : "rgba(255,255,255,0.08)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                  </motion.div>
                </Link>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-primary-container transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-primary-container transition-colors"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 md:py-32 bg-black-default px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 tech-grid opacity-5"></div>
        <div className="max-w-360 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary-container text-[11px] font-mono uppercase tracking-[0.2em] mb-6">
                [ 04 ] Intel Retrieval
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-mono text-white tracking-tight uppercase mb-8 leading-tight">
                Frequently Asked <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Questions</span>
              </h2>
            </motion.div>
            
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
                <motion.div 
                  key={idx} 
                  className="bg-black-default p-8 hover:bg-white/5 transition-all duration-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <h4 className="font-mono text-white text-sm font-bold uppercase tracking-wider mb-4 flex gap-3">
                    <span className="text-primary-container/40">{idx+1} //</span> {item.q}
                  </h4>
                  <p className="text-secondary text-sm leading-relaxed font-light">
                    {item.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 md:py-48 bg-black-default px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <motion.img 
            src={pricingCtaBg} 
            alt="CTA Background" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-screen"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-default via-transparent to-black-default"></div>
          <div className="absolute inset-0 tech-grid opacity-20"></div>
          <div className="absolute inset-0 bg-noise opacity-30"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div 
            className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary-container">
              Strategy Deployment // Final Step
            </span>
          </motion.div>

          <motion.h2 
            className="text-[36px] md:text-8xl font-bold font-mono text-white tracking-tighter uppercase mb-12 leading-[0.9]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Ready to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">Commit?</span>
          </motion.h2>

          <motion.p 
            className="max-w-2xl mx-auto text-secondary text-base md:text-xl font-light leading-relaxed mb-16 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            "The distance between where you are and where you want to be is called Protocol."
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
             <motion.button 
              className="group relative px-12 py-5 bg-primary-container text-black font-mono font-bold uppercase tracking-[0.25em] text-sm md:text-base overflow-hidden"
              whileHover={{ scale: 1.03, backgroundColor: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'transform, background-color' }}
             >
               <span className="relative z-10">Generate My Strategy</span>
               <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-500"></div>
             </motion.button>
             
             <motion.button 
              className="px-12 py-5 border border-white/20 text-white font-mono font-bold uppercase tracking-[0.25em] text-sm md:text-base bg-black/30"
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'background-color, border-color' }}
             >
               Review Metrics
             </motion.button>
          </motion.div>
          
          <motion.div 
            className="mt-20 flex justify-center gap-12 border-t border-white/5 pt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
             {["Plan: Professional", "Uptime: 99.9%", "Encryption: AES-256"].map(stat => (
               <div key={stat} className="font-mono text-[9px] uppercase tracking-[0.3em] text-outline">
                 {stat}
               </div>
             ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
