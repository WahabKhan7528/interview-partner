import React, { useRef, useState } from "react";
import { Link } from "react-router";
import HeroCursor from "../../components/HeroCursor";
import contactBg from "../../assets/images/contact-bg.png";
import formBg from "../../assets/images/form-bg.png";

const Contact = () => {
  const heroRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            src={contactBg} 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-lighten"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black-default via-transparent to-black-default opacity-90"></div>
          <div className="absolute inset-0 tech-grid opacity-20"></div>
          <div className="absolute inset-0 bg-noise opacity-20"></div>
        </div>

        <div className="max-w-360 mx-auto relative z-10 w-full text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary-container/30 bg-primary-container/5 mb-8">
            <span className="text-primary-container text-[10px] font-mono tracking-[0.3em] uppercase">
              Communication Uplink // Online
            </span>
          </div>
          
          <h1 className="font-mono font-bold text-white tracking-[-0.04em] uppercase leading-[0.85] mb-12">
            <span className="block text-[42px] sm:text-[64px] md:text-[96px] lg:text-[110px] text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/20">
              Establish
            </span>
            <span className="block text-[42px] sm:text-[64px] md:text-[96px] lg:text-[120px] text-primary-container drop-shadow-[0_0_40px_rgba(125,211,252,0.2)]">
              Connection.
            </span>
          </h1>
          
          <p className="mt-8 max-w-2xl mx-auto text-secondary text-base md:text-xl leading-relaxed font-light border-l border-primary-container/30 pl-8 md:pl-0 md:border-l-0 text-left md:text-center">
            Direct access to our architecture, operations, and partnership divisions. Choose your frequency.
          </p>
        </div>
      </section>

      {/* Contact Terminals & Form */}
      <section className="relative py-24 md:py-32 bg-black-default px-margin-mobile md:px-margin-desktop border-b border-white/5">
        <div className="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Terminals Column */}
          <div className="lg:col-span-5 space-y-1">
             {/* Terminal 01 */}
             <div className="group relative p-8 bg-surface-container-low/40 border border-white/5 hover:bg-white/5 transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-[10px] text-outline uppercase tracking-widest">Channel_01</span>
                  <span className="text-[10px] font-mono tracking-widest text-outline uppercase border border-white/10 px-2 py-1">Business</span>
                </div>
                <h3 className="font-mono text-xl font-bold text-white mb-6 uppercase tracking-wider group-hover:text-primary-container transition-colors">
                  Institutional & <br /> Partnerships
                </h3>
                <p className="text-white font-mono text-sm group-hover:text-primary-container transition-colors mb-2 select-all">enterprise@partner.ai</p>
                <p className="text-secondary text-xs font-light">Response Time: 24-48h</p>
             </div>

             {/* Terminal 02 */}
             <div className="group relative p-8 bg-surface-container-low/40 border border-white/5 hover:bg-white/5 transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-[10px] text-outline uppercase tracking-widest">Channel_02</span>
                  <span className="text-[10px] font-mono tracking-widest text-outline uppercase border border-white/10 px-2 py-1">Ops</span>
                </div>
                <h3 className="font-mono text-xl font-bold text-white mb-6 uppercase tracking-wider group-hover:text-primary-container transition-colors">
                  Technical <br /> Operations
                </h3>
                <p className="text-white font-mono text-sm group-hover:text-primary-container transition-colors mb-2 select-all">ops@partner.ai</p>
                <p className="text-secondary text-xs font-light">Response Time: &lt;12h</p>
             </div>
             
             {/* Terminal 03 - Socials */}
             <div className="group relative p-8 bg-surface-container-low/40 border border-white/5 hover:bg-white/5 transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-[10px] text-outline uppercase tracking-widest">Channel_03</span>
                  <span className="text-[10px] font-mono tracking-widest text-outline uppercase border border-white/10 px-2 py-1">Social</span>
                </div>
                <div className="flex gap-6">
                   {["Twitter", "LinkedIn", "GitHub"].map(link => (
                     <p key={link} className="text-white font-mono text-xs uppercase tracking-widest hover:text-primary-container transition-colors cursor-pointer select-none">
                       {link}
                     </p>
                   ))}
                </div>
             </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 relative">
             <div className="absolute inset-0 z-0">
                <img src={formBg} alt="Form Background" className="w-full h-full object-cover opacity-10 grayscale" />
                <div className="absolute inset-0 bg-linear-to-b from-black-default via-transparent to-black-default"></div>
             </div>
             
             <div className="relative z-10 p-8 md:p-12 border border-white/10 bg-white/[0.02] backdrop-blur-md">
                <p className="text-primary-container text-[10px] font-mono uppercase tracking-[0.4em] mb-10">
                   Input Transmission Protocol
                </p>
                
                <form className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <label className="text-[9px] font-mono text-outline uppercase tracking-widest">Origin_Name</label>
                         <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-primary-container/50 focus:bg-white/10 outline-hidden transition-all" 
                            placeholder="NAME_ID"
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[9px] font-mono text-outline uppercase tracking-widest">Return_Address</label>
                         <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-primary-container/50 focus:bg-white/10 outline-hidden transition-all" 
                            placeholder="EMAIL_ADDRESS"
                         />
                      </div>
                   </div>
                   
                   <div className="space-y-2">
                      <label className="text-[9px] font-mono text-outline uppercase tracking-widest">Signal_Subject</label>
                      <input 
                         type="text" 
                         name="subject"
                         value={formData.subject}
                         onChange={handleChange}
                         className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-primary-container/50 focus:bg-white/10 outline-hidden transition-all" 
                         placeholder="SUBJECT_IDENTIFIER"
                      />
                   </div>
                   
                   <div className="space-y-2">
                      <label className="text-[9px] font-mono text-outline uppercase tracking-widest">Packet_Payload</label>
                      <textarea 
                         rows="5"
                         name="message"
                         value={formData.message}
                         onChange={handleChange}
                         className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-primary-container/50 focus:bg-white/10 outline-hidden transition-all resize-none" 
                         placeholder="MESSAGE_CONTENT_BODY"
                      ></textarea>
                   </div>
                   
                   <button className="group relative w-full py-5 bg-primary-container text-black font-mono font-bold uppercase tracking-[0.3em] text-xs overflow-hidden transition-all hover:bg-white">
                      <span className="relative z-10">Transmit Signal</span>
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-500"></div>
                   </button>
                </form>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 md:py-32 bg-black-default px-margin-mobile md:px-margin-desktop border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-5"></div>
        <div className="max-w-360 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
             <div className="lg:col-span-4">
                <p className="text-primary-container text-[11px] font-mono uppercase tracking-[0.2em] mb-6">
                  [ 03 ] Direct Intel
                </p>
                <h2 className="text-4xl md:text-5xl font-bold font-mono text-white tracking-tight uppercase mb-8 leading-tight">
                  Frequent <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/40">Inquiries</span>
                </h2>
                <p className="text-secondary text-sm font-light leading-relaxed border-l border-white/10 pl-6">
                   Common baseline information regarding our operational procedures and partnership protocols.
                </p>
             </div>
             
             <div className="lg:col-span-8 space-y-px bg-white/5 border border-white/5">
                {[
                  { q: "How fast is the signal response?", a: "Operational support typically responds within 12 hours. Institutional inquiries may take up to 48 hours for full vetting." },
                  { q: "Do you offer neural interface support?", a: "Currently, our system operates on standard digital protocols (Web, Mobile). Neural-link integration is in prototype phase." },
                  { q: "What is your data retention policy?", a: "We operate on a zero-persistence policy for candidate answers. Only metadata required for scoring is retained, fully encrypted." },
                  { q: "Can we deploy a custom instance?", a: "Enterprise clients can request dedicated nodes for internal training and evaluation cycles." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-black-default p-8 hover:bg-white/[0.03] transition-all group">
                     <h4 className="font-mono text-white text-sm font-bold uppercase tracking-wider mb-4 flex gap-4 group-hover:text-primary-container transition-colors">
                        <span className="text-outline">{idx + 1} //</span> {item.q}
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

      {/* Final CTA Section with dramatic improvement */}
      <section className="relative py-32 md:py-48 bg-black-default px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute inset-0 bg-linear-to-b from-black-default via-transparent to-black-default z-10"></div>
           <div className="absolute inset-0 tech-grid opacity-30"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial from-primary-container/10 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-360 mx-auto relative z-20 text-center">
           <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 mb-12">
              <span className="w-2 h-2 bg-primary-container shadow-[0_0_10px_rgba(125,211,252,1)] animate-pulse"></span>
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white">System Deployment Status: Ready</span>
           </div>

           <h2 className="text-[42px] md:text-9xl font-bold font-mono text-white tracking-tighter uppercase mb-16 leading-[0.85]">
              Full <span className="text-primary-container">Initialization.</span>
           </h2>

           <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <Link 
                to="/register" 
                className="group relative px-16 py-6 bg-primary-container text-black font-mono font-bold uppercase tracking-[0.3em] text-sm md:text-lg overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-[0_0_60px_rgba(125,211,252,0.5)]"
              >
                <span className="relative z-10">Deploy Protocol</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700"></div>
              </Link>
              
              <Link 
                to="/features" 
                className="px-16 py-6 border border-white/10 text-white font-mono font-bold uppercase tracking-[0.3em] text-sm md:text-lg backdrop-blur-md hover:bg-white/5 transition-all duration-300"
              >
                Explore Specs
              </Link>
           </div>
           
           <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-16">
              {[
                { label: "Active Nodes", val: "4,209" },
                { label: "Success Rate", val: "99.2%" },
                { label: "Latency", val: "18ms" },
                { label: "Encryption", val: "Quantum" }
              ].map(stat => (
                <div key={stat.label} className="text-center">
                   <p className="text-[10px] font-mono text-outline uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                   <p className="text-white font-mono text-xl font-bold">{stat.val}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;


