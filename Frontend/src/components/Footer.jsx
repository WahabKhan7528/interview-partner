import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer
      className="relative bg-surface-container-lowest pt-24 pb-8 px-4 md:px-8 border-t border-white/10"
      data-purpose="main-footer"
    >
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none"></div>
      <div className="max-w-360 mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
        <div className="md:col-span-5">
          <div className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white font-mono">
            Partner<span className="text-primary-container">.</span>
          </div>
          <p className="text-secondary text-sm md:text-base max-w-md mt-5 border-l border-primary-container/40 pl-4 leading-relaxed">
            AI interview preparation for high-stakes roles: role-fit
            diagnostics, strategic answer coaching, and execution-focused study
            plans.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[11px] font-bold text-outline uppercase tracking-[0.2em] mb-5 font-mono">
            Product
          </h4>
          <ul className="space-y-3 text-sm text-secondary">
            <li>
              <Link
                to="/features"
                className="hover:text-primary-container transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-primary-container transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="hover:text-primary-container transition-colors"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[11px] font-bold text-outline uppercase tracking-[0.2em] mb-5 font-mono">
            Company
          </h4>
          <ul className="space-y-3 text-sm text-secondary">
            <li>
              <Link
                to="/about"
                className="hover:text-primary-container transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary-container transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[11px] font-bold text-outline uppercase tracking-[0.2em] mb-5 font-mono">
            Status
          </h4>
          <div className="space-y-2 font-mono text-xs text-secondary">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span>Inference Core Online</span>
            </div>
            <div>Latency Avg: 12ms</div>
          </div>
        </div>
      </div>

      <div className="max-w-360 mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center text-xs text-outline pt-7 border-t border-white/10 font-mono gap-3">
        <div>SYS_VERSION: 3.1.0 | Copyright 2026 PARTNER</div>
        <div className="space-x-6">
          <Link to="#" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link to="#" className="hover:text-white transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
