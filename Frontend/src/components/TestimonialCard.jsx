import React from "react";

const TestimonialCard = ({ quote, name, role, company, avatar }) => {
  return (
    <div className="group relative w-[320px] md:w-[400px] h-[220px] flex flex-col justify-between border border-white/10 bg-surface-container-lowest/40 p-8 transition-all duration-500 hover:bg-white/5 hover:border-primary-container/30 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary-container/5 rounded-full blur-3xl group-hover:bg-primary-container/10 transition-colors duration-500"></div>
      
      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-8 h-px bg-white/10 group-hover:bg-primary-container/50 transition-all duration-500"></div>
      <div className="absolute top-0 left-0 w-px h-8 bg-white/10 group-hover:bg-primary-container/50 transition-all duration-500"></div>

      <div className="relative z-10">
        <div className="mb-4">
          <svg className="w-8 h-8 text-primary-container/20 group-hover:text-primary-container/40 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H3.017V21H5.017Z" />
          </svg>
        </div>
        <p className="text-secondary text-sm md:text-base leading-relaxed font-light line-clamp-4 group-hover:text-white transition-colors duration-500 italic">
          "{quote}"
        </p>
      </div>

      <div className="relative z-10 flex items-center gap-4 mt-6">
        <div className="relative shrink-0">
          <div className="absolute -inset-1 bg-linear-to-r from-primary-container/50 to-white/20 rounded-full blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative w-12 h-12 rounded-full border border-white/10 overflow-hidden bg-surface-container">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-mono font-bold text-primary-container text-xs">
                {name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="font-mono text-xs md:text-sm font-bold text-white uppercase tracking-widest group-hover:text-primary-container transition-colors duration-500">
            {name}
          </div>
          <div className="text-[10px] md:text-[11px] font-mono text-outline uppercase tracking-[0.1em] mt-1">
            {role} <span className="text-primary-container/40 px-1">//</span> {company}
          </div>
        </div>
      </div>
      
      {/* Bottom scanning line effect on hover */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-primary-container w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
    </div>
  );
};

export default TestimonialCard;
