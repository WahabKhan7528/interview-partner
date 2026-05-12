import React, { useRef } from "react";
import { Link } from "react-router";
import HeroCursor from "../../components/HeroCursor";
import Testimonials from "../../components/Testimonials";

const Landing = () => {
  const heroRef = useRef(null);

  return (
    <main className="pt-0 overflow-x-hidden">
      {/* BEGIN: Premium Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center px-margin-mobile md:px-margin-desktop pt-36 pb-20 md:pb-28 overflow-hidden border-b border-outline-variant/30"
        data-purpose="hero-section"
      >
        <HeroCursor containerRef={heroRef} />

        <div className="absolute inset-0 z-0 bg-black-default"></div>
        <div className="absolute inset-0 z-0 tech-grid opacity-15"></div>
        <div className="absolute inset-0 z-0 bg-noise opacity-25"></div>
        <div className="absolute -top-32 -left-20 w-85 h-85 rounded-full bg-primary-container/12 blur-[120px]"></div>
        <div className="absolute top-[32%] -right-20 w-70 h-70 rounded-full bg-white/8 blur-[120px]"></div>
        <div className="absolute -bottom-24 left-[40%] w-90 h-55 rounded-full bg-primary-container/8 blur-[120px]"></div>

        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-[14%] w-px h-full bg-linear-to-b from-transparent via-primary-container/35 to-transparent animate-pulse-slow"></div>
          <div
            className="absolute top-0 right-[18%] w-px h-full bg-linear-to-b from-transparent via-white/20 to-transparent animate-pulse-slow"
            style={{ animationDelay: "1.6s" }}
          ></div>
          <div className="absolute top-[20%] left-[-6%] w-[45%] h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="max-w-360 mx-auto w-full relative z-10 flex flex-col items-center text-center">
          <div className="max-w-5xl flex flex-col items-center">


            <h1 className="font-mono font-bold text-white tracking-[-0.05em] uppercase leading-[0.75]">
              <span className="block text-[32px] sm:text-[56px] md:text-[72px] lg:text-[88px] opacity-25 mb-4">
                Walk Into Interviews
              </span>
              <span className="block text-[52px] sm:text-[92px] md:text-[130px] lg:text-[160px] xl:text-[190px] text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/10 drop-shadow-[0_0_40px_rgba(125,211,252,0.25)]">
                Already Prepared.
              </span>
            </h1>

            <p className="mt-12 max-w-2xl text-secondary text-base md:text-xl leading-relaxed font-light border-x border-white/5 px-12">
              Partner transforms your resume and job requirements into a
              <span className="text-white mx-1.5">precision prep battle plan</span>
              with likely questions, calibrated answers, and a strategic study timeline.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 md:gap-5 w-full sm:w-auto justify-center">
              <Link
                to="/register"
                className="group relative inline-flex items-center justify-center bg-primary-container text-black font-mono font-bold px-8 md:px-10 py-4 md:py-5 uppercase tracking-[0.18em] text-[11px] border border-primary-container transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,240,255,0.35)]"
              >
                Start Free Prep
                <svg
                  className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center border border-white/20 bg-black/40 text-white font-mono font-bold px-8 md:px-10 py-4 md:py-5 uppercase tracking-[0.18em] text-[11px] backdrop-blur-md transition-all duration-300 hover:bg-white/8 hover:border-white/40"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BEGIN: Value Proposition Section */}
      <section className="relative py-32 bg-black-default px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-360 h-px bg-linear-to-r from-transparent via-primary-container/20 to-transparent"></div>

        <div className="max-w-360 mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-225">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary-container/30 bg-primary-container/5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                <span className="text-primary-container text-[10px] font-mono tracking-[0.3em] uppercase">
                  Strategic Mission
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-mono text-white tracking-tight uppercase">
                Leveling the <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-container to-white">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
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
              <div
                key={item.id}
                className="group relative p-8 md:p-10 bg-surface-container-lowest/40 border border-white/5 transition-all duration-500 hover:bg-white/5"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-px bg-white/10 group-hover:bg-primary-container/40 transition-colors"></div>
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

                <div className="mt-8 h-px w-0 bg-primary-container/30 group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEGIN: Testimonials Section */}
      <section className="relative py-32 bg-black-default border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-5"></div>

        <div className="max-w-360 mx-auto px-margin-mobile md:px-margin-desktop relative z-10 mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-225">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary-container/30 bg-primary-container/5 mb-6 font-mono text-[10px] tracking-[0.3em] uppercase text-primary-container">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                Social Proof // Deployment success
              </div>
              <h3 className="text-4xl md:text-6xl font-bold font-mono text-white tracking-tight uppercase leading-tight">
                Trusted by the <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-container via-white to-primary-container/40">
                  Global Workforce
                </span>
              </h3>
            </div>
            <div className="md:text-right">
              <p className="text-secondary max-w-130 font-light text-sm md:text-base leading-relaxed">
                Short, honest reflections from professionals who optimized their career trajectories using the Partner execution engine.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <Testimonials />
        </div>
      </section>

      {/* BEGIN: How It Works Section */}
      <section
        id="how-it-works"
        className="relative py-32 px-4 bg-surface border-t border-white/5"
        data-purpose="how-it-works-section"
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="text-primary-container text-sm font-mono tracking-widest mb-4 uppercase">
              [ Execution Flow ]
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono text-white tracking-tight">
              How It Works
            </h2>
            <p className="text-secondary">
              Three streamlined steps to a winning interview strategy.
            </p>
          </div>
          <div className="space-y-6 relative">
            {/* Vertical connection line with flow animation */}
            <div className="hidden md:block absolute left-15 top-10 bottom-10 w-0.5 bg-white/5 overflow-hidden">
              <div className="h-full w-full bg-linear-to-b from-transparent via-primary-container to-transparent animate-pulse-slow opacity-30"></div>
            </div>
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center p-8 bg-surface-container-low/30 backdrop-blur-md rounded-none border border-white/5 hover:border-primary-container/20 transition-all duration-500 relative group mb-8">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-white/10 group-hover:bg-primary-container group-hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all"></div>
              <div className="shrink-0 w-24 flex items-center justify-center relative">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black group-hover:border-primary-container transition-colors relative z-10">
                  <span className="text-white font-mono text-lg">01</span>
                  <div className="absolute inset-0 rounded-full border border-primary-container/0 group-hover:border-primary-container/50 group-hover:scale-125 transition-all duration-500"></div>
                </div>
                <div className="hidden md:block absolute right-0 top-1/2 w-4 h-px bg-white/10 group-hover:bg-primary-container transition-colors"></div>
              </div>
              <div className="ml-0 md:ml-8 grow">
                <div className="text-[10px] text-primary-container/40 font-mono tracking-[0.3em] uppercase mb-1">
                  Phase: INIT
                </div>
                <div className="font-bold text-xl mb-3 font-mono text-white uppercase tracking-widest group-hover:text-primary-container transition-colors">
                  Input Context
                </div>
                <div className="text-secondary text-sm border-l border-white/10 pl-6 font-light leading-relaxed">
                  Provide the job description and upload your resume or profile
                  details into the processing engine.
                </div>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-start md:items-center p-8 bg-surface-container-low/30 backdrop-blur-md rounded-none border border-white/5 hover:border-primary-container/20 transition-all duration-500 relative group mb-8">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-white/10 group-hover:bg-primary-container group-hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all"></div>
              <div className="shrink-0 w-24 flex items-center justify-center relative">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black group-hover:border-primary-container transition-colors relative z-10">
                  <span className="text-white font-mono text-lg">02</span>
                  <div className="absolute inset-0 rounded-full border border-primary-container/0 group-hover:border-primary-container/50 group-hover:scale-125 transition-all duration-500"></div>
                </div>
                <div className="hidden md:block absolute right-0 top-1/2 w-4 h-px bg-white/10 group-hover:bg-primary-container transition-colors"></div>
              </div>
              <div className="ml-0 md:ml-8 grow">
                <div className="text-[10px] text-primary-container/40 font-mono tracking-[0.3em] uppercase mb-1">
                  Phase: PROCESS
                </div>
                <div className="font-bold text-xl mb-3 font-mono text-white uppercase tracking-widest group-hover:text-primary-container transition-colors">
                  AI Generation
                </div>
                <div className="text-secondary text-sm border-l border-white/10 pl-6 font-light leading-relaxed">
                  Our model analyzes the intersection of the requirements and
                  your experience, running millions of parameters.
                </div>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-start md:items-center p-8 bg-surface-container-low/30 backdrop-blur-md rounded-none border border-white/5 hover:border-primary-container/20 transition-all duration-500 relative group">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-white/10 group-hover:bg-primary-container group-hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all"></div>
              <div className="shrink-0 w-24 flex items-center justify-center relative">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black group-hover:border-primary-container transition-colors relative z-10">
                  <span className="text-white font-mono text-lg">03</span>
                  <div className="absolute inset-0 rounded-full border border-primary-container/0 group-hover:border-primary-container/50 group-hover:scale-125 transition-all duration-500"></div>
                </div>
                <div className="hidden md:block absolute right-0 top-1/2 w-4 h-px bg-white/10 group-hover:bg-primary-container transition-colors"></div>
              </div>
              <div className="ml-0 md:ml-8 grow">
                <div className="text-[10px] text-primary-container/40 font-mono tracking-[0.3em] uppercase mb-1">
                  Phase: OUTPUT
                </div>
                <div className="font-bold text-xl mb-3 font-mono text-white uppercase tracking-widest group-hover:text-primary-container transition-colors">
                  Review Strategy
                </div>
                <div className="text-secondary text-sm border-l border-white/10 pl-6 font-light leading-relaxed">
                  Access your personalized dashboard with questions, model
                  answers, and a highly structured study plan.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEGIN: CTA Section */}
      <section
        className="relative bg-black-default py-48 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/10"
        data-purpose="cta-section"
      >
        {/* Background Layering */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="absolute inset-0 bg-noise opacity-30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-primary-container/40 to-transparent"></div>

        {/* Glow Effects */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-container/15 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-24 left-1/4 w-[400px] h-[200px] bg-white/5 blur-[100px] rounded-full"></div>

        <div className="max-w-360 mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-md mb-12 animate-fade-in">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
            </span>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-primary-container">
              System Ready // Status: Optimal
            </span>
          </div>

          <h2 className="text-[42px] leading-[1] md:text-8xl font-bold font-mono text-white tracking-[-0.04em] uppercase mb-8">
            Ready to <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white via-white to-white/20">
              Deploy Your Career?
            </span>
          </h2>

          <p className="max-w-165 mx-auto text-secondary text-base md:text-xl font-light leading-relaxed mb-16 px-4">
            Join the elite circle of professionals who don't just "show up" to interviews—they command them. Initialize your preparation engine today.
          </p>

          <div className="flex flex-col items-center gap-10">
            <Link
              to="/register"
              className="group relative flex items-center justify-center"
            >
              {/* Button Outer Ring */}
              <div className="absolute inset-0 -m-1 border border-primary-container/20 group-hover:border-primary-container/60 transition-colors duration-500"></div>

              <div className="relative px-12 py-6 bg-primary-container text-black font-mono font-bold uppercase tracking-[0.25em] text-sm md:text-base flex items-center transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_0_50px_rgba(0,240,255,0.4)]">
                <span className="absolute top-0 left-0 w-2 h-2 bg-black opacity-10"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-black opacity-10"></span>

                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Initialize Account
                </span>
              </div>

              {/* Decorative side bars */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-container/40 group-hover:h-full transition-all duration-500"></div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-container/40 group-hover:h-full transition-all duration-500"></div>
            </Link>

            <div className="flex flex-col items-center gap-4">
              <a
                href="#"
                className="font-mono text-[10px] md:text-xs text-outline hover:text-primary-container transition-colors tracking-[0.2em] flex items-center gap-2 group"
              >
                <span className="w-4 h-px bg-outline group-hover:bg-primary-container transition-all"></span>
                [ VIEW TECHNICAL SPECS // V5.2 ]
                <span className="w-4 h-px bg-outline group-hover:bg-primary-container transition-all"></span>
              </a>

              <div className="flex gap-8 mt-4 border-t border-white/5 pt-8 w-full max-w-130 justify-center">
                <div className="text-center">
                  <div className="font-mono text-white text-lg">99.2%</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-outline">Success Rate</div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="text-center">
                  <div className="font-mono text-white text-lg">12.4k+</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-outline">Deployments</div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="text-center">
                  <div className="font-mono text-white text-lg">24ms</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-outline">Latency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
