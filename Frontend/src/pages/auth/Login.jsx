import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import securityCore from "../../assets/images/security-core.png";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({ email, password });
    navigate("/dashboard");
  };

  if (loading) {
    return (
      <main className="w-full min-h-screen flex flex-col items-center justify-center bg-black-default px-6">
        <div className="w-48 h-1 bg-white/5 relative overflow-hidden mb-8">
           <div className="absolute inset-0 bg-primary-container animate-scan"></div>
        </div>
        <div className="text-[10px] font-mono tracking-[0.5em] uppercase text-primary-container animate-pulse">
           Decrypting_Credentials...
        </div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen flex bg-black-default overflow-hidden">
      {/* Left Side: Immersive Visual */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center border-r border-white/5">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-black-default/60 to-black-default"></div>
        
        <div className="relative z-10 text-center">
           <img 
            src={securityCore} 
            alt="Security Core" 
            className="w-[400px] h-[400px] object-contain animate-floatSlow grayscale hover:grayscale-0 transition-all duration-1000"
           />
           <div className="mt-12 space-y-4">
              <p className="font-mono text-[10px] text-primary-container uppercase tracking-[0.8em] animate-pulse">Security_Lock_Active</p>
              <p className="text-secondary font-light italic max-w-xs mx-auto">"Access is restricted to authorized personnel. Calibration protocols initialized."</p>
           </div>
        </div>
        
        {/* Decorative Hex Grid Background */}
        <div className="absolute bottom-12 left-12 font-mono text-[8px] text-outline opacity-20 space-y-1 select-none">
           <p>0x45 0x12 0x89 0x90</p>
           <p>0x78 0x34 0x21 0x56</p>
           <p>0x12 0x90 0xFE 0x88</p>
        </div>
      </div>

      {/* Right Side: Access Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-24 relative">
        <div className="absolute inset-0 tech-grid opacity-10 lg:hidden"></div>
        
        <div className="w-full max-w-md relative z-10">
           <div className="mb-16">
              <div className="inline-flex items-center gap-3 px-3 py-1 border border-white/10 bg-white/5 mb-8">
                 <span className="w-2 h-2 bg-primary-container rounded-full animate-pulse"></span>
                 <span className="text-primary-container text-[10px] font-mono tracking-[0.3em] uppercase">Auth_Uplink</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-mono text-white tracking-tighter uppercase mb-4">
                 Access <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/40">Portal</span>
              </h1>
              <p className="text-secondary font-light">Enter your synchronization parameters to proceed.</p>
           </div>

           <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-4">
                 <label className="block font-mono text-[10px] text-outline uppercase tracking-[0.3em]">Credentials // Email</label>
                 <input 
                   onChange={(e) => setEmail(e.target.value)}
                   type="email" 
                   required
                   placeholder="IDENT_USER@DOMAIN.COM"
                   className="w-full bg-white/[0.02] border border-white/10 px-6 py-5 text-white font-mono placeholder:text-white/10 focus:outline-none focus:border-primary-container focus:bg-white/[0.05] transition-all duration-300"
                 />
              </div>

              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <label className="block font-mono text-[10px] text-outline uppercase tracking-[0.3em]">Passphrase // Key</label>
                    <Link to="/forgot-password" size="sm" className="font-mono text-[8px] text-white/40 uppercase hover:text-primary-container transition-colors">
                       Reset_Key
                    </Link>
                 </div>
                 <input 
                   onChange={(e) => setPassword(e.target.value)}
                   type="password" 
                   required
                   placeholder="••••••••••••"
                   className="w-full bg-white/[0.02] border border-white/10 px-6 py-5 text-white font-mono placeholder:text-white/10 focus:outline-none focus:border-primary-container focus:bg-white/[0.05] transition-all duration-300"
                 />
              </div>

              <button className="group relative w-full py-6 bg-primary-container text-black font-mono font-bold uppercase tracking-[0.5em] text-sm overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-[0_0_50px_rgba(125,211,252,0.4)]">
                 <span className="relative z-10">Initialize Session</span>
                 <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700"></div>
              </button>
           </form>

           <div className="mt-16 pt-12 border-t border-white/5 text-center">
              <p className="text-secondary font-mono text-[10px] uppercase tracking-widest">
                 New Personnel? {" "}
                 <Link to="/register" className="text-white hover:text-primary-container underline underline-offset-8 transition-colors">
                    Request_Access
                 </Link>
              </p>
           </div>
        </div>

        {/* System Metadata Footer */}
        <div className="absolute bottom-8 right-8 hidden md:block">
           <div className="font-mono text-[8px] text-outline text-right space-y-1">
              <p>OS_VERSION: v5.0.4-LTS</p>
              <p>ENCRYPTION: AES_256_GCM</p>
              <p>LOCATION: [ UNDISCLOSED ]</p>
           </div>
        </div>
      </div>
    </main>
  );
};

export default Login;

