import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import onboardingBlueprint from "../../assets/images/onboarding-blueprint.png";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, handleRegister } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({ username, email, password });
    navigate("/dashboard");
  };

  if (loading) {
    return (
      <main className="w-full min-h-screen flex flex-col items-center justify-center bg-black-default px-6">
        <div className="w-64 h-1 bg-white/5 relative overflow-hidden mb-8">
           <div className="absolute inset-0 bg-primary-container animate-scan"></div>
        </div>
        <div className="text-[10px] font-mono tracking-[0.6em] uppercase text-primary-container animate-pulse">
           Initializing_Unit_Identity...
        </div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen flex bg-black-default overflow-hidden">
      {/* Left Side: Immersive Visual */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center border-r border-white/5 bg-surface-container-lowest">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-black-default/40 to-black-default"></div>
        
        <div className="relative z-10 w-full px-24">
           <img 
            src={onboardingBlueprint} 
            alt="Onboarding Blueprint" 
            className="w-full h-auto grayscale opacity-40 hover:opacity-80 transition-opacity duration-1000 border border-white/5"
           />
           <div className="mt-16 text-left border-l-2 border-primary-container/40 pl-8">
              <h2 className="text-3xl font-bold font-mono text-white uppercase tracking-tight mb-4">Architecture_v5</h2>
              <p className="text-secondary font-light italic max-w-sm">"Personnel onboarding requires precise synchronization of behavioral and technical parameters."</p>
           </div>
        </div>

        {/* Floating Calibration Labels */}
        <div className="absolute top-12 left-12 font-mono text-[8px] text-outline opacity-30 space-y-2 uppercase tracking-widest">
           <p>// CALIBRATION_SEQ: 00982-A</p>
           <p>// SYNC_STATE: READY</p>
        </div>
      </div>

      {/* Right Side: Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-24 relative overflow-y-auto">
        <div className="absolute inset-0 tech-grid opacity-10 lg:hidden"></div>
        
        <div className="w-full max-w-md relative z-10 py-12">
           <div className="mb-16">
              <div className="inline-flex items-center gap-3 px-3 py-1 border border-white/10 bg-white/5 mb-8">
                 <span className="w-2 h-2 bg-primary-container rounded-full animate-pulse shadow-[0_0_10px_rgba(125,211,252,1)]"></span>
                 <span className="text-primary-container text-[10px] font-mono tracking-[0.4em] uppercase">Onboarding_Terminal</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-mono text-white tracking-tighter uppercase mb-6 leading-[0.9]">
                 Register <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/30">Personnel</span>
              </h1>
              <p className="text-secondary font-light">Complete the synchronization protocol to initialize your account.</p>
           </div>

           <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                 <label className="block font-mono text-[10px] text-outline uppercase tracking-[0.3em]">Identity // Full_Name</label>
                 <input 
                   onChange={(e) => setUsername(e.target.value)}
                   type="text" 
                   required
                   placeholder="FIRST_LAST"
                   className="w-full bg-white/[0.02] border border-white/10 px-6 py-5 text-white font-mono placeholder:text-white/10 focus:outline-none focus:border-primary-container focus:bg-white/[0.05] transition-all duration-300"
                 />
              </div>

              <div className="space-y-3">
                 <label className="block font-mono text-[10px] text-outline uppercase tracking-[0.3em]">Communication // Email</label>
                 <input 
                   onChange={(e) => setEmail(e.target.value)}
                   type="email" 
                   required
                   placeholder="IDENT_USER@DOMAIN.COM"
                   className="w-full bg-white/[0.02] border border-white/10 px-6 py-5 text-white font-mono placeholder:text-white/10 focus:outline-none focus:border-primary-container focus:bg-white/[0.05] transition-all duration-300"
                 />
              </div>

              <div className="space-y-3">
                 <label className="block font-mono text-[10px] text-outline uppercase tracking-[0.3em]">Security // Passphrase</label>
                 <input 
                   onChange={(e) => setPassword(e.target.value)}
                   type="password" 
                   required
                   placeholder="••••••••••••"
                   className="w-full bg-white/[0.02] border border-white/10 px-6 py-5 text-white font-mono placeholder:text-white/10 focus:outline-none focus:border-primary-container focus:bg-white/[0.05] transition-all duration-300"
                 />
              </div>

              <div className="pt-6">
                 <button className="group relative w-full py-6 bg-primary-container text-black font-mono font-bold uppercase tracking-[0.5em] text-sm overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-[0_0_60px_rgba(125,211,252,0.4)]">
                    <span className="relative z-10">Initialize Identity</span>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700"></div>
                 </button>
              </div>
           </form>

           <div className="mt-16 pt-12 border-t border-white/5 text-center">
              <p className="text-secondary font-mono text-[10px] uppercase tracking-widest">
                 Unit already active? {" "}
                 <Link to="/login" className="text-white hover:text-primary-container underline underline-offset-8 transition-colors">
                    Access_Gateway
                 </Link>
              </p>
           </div>
        </div>

        {/* Onboarding Metadata Footer */}
        <div className="absolute bottom-8 right-8 hidden md:block">
           <div className="font-mono text-[8px] text-outline text-right space-y-1">
              <p>PROTOCOL: PERS_INIT_V5</p>
              <p>UPLINK: STABLE</p>
              <p>STATUS: AWAITING_INPUT</p>
           </div>
        </div>
      </div>
    </main>
  );
};

export default Register;

