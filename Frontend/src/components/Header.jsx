import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const onLogout = async () => {
    try {
      await handleLogout();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const navLinks = [
    { name: "[FEATURES]", path: "/features" },
    { name: "[ABOUT]", path: "/about" },
    { name: "[PRICING]", path: "/pricing" },
    { name: "[CONTACT]", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-100 border-b border-white/10 bg-background/80"
      style={{ willChange: 'transform' }}
    >
      <div className="max-w-360 mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4 relative">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-container/20 to-transparent"></div>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-2xl md:text-[1.75rem] font-bold tracking-tight font-mono text-white flex items-center leading-none"
          >
            Partner
            <motion.span 
              className="text-primary-container"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {location.pathname === "/" ? "_" : "."}
            </motion.span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] font-medium text-secondary font-mono tracking-[0.14em] uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
            >
              <motion.div
                className={`border-b transition-colors duration-300 ${isActive(link.path) ? "text-primary-container border-primary-container" : "border-transparent text-secondary hover:text-white"}`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.name.replace(/\[|\]/g, "")}
              </motion.div>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 md:gap-3">
          {!user ? (
            <>
              <Link to="/login">
                <motion.div
                  className="text-[11px] md:text-xs font-bold text-white px-3 md:px-4 py-2 border border-white/25 bg-black/30 font-mono uppercase tracking-[0.16em]"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Log In
                </motion.div>
              </Link>
              <Link to="/register">
                <motion.div
                  className="text-[11px] md:text-xs font-bold bg-primary-container text-black px-3 md:px-4 py-2 border border-primary-container font-mono uppercase tracking-[0.16em]"
                  whileHover={{ scale: 1.01, backgroundColor: "#ffffff" }}
                  whileTap={{ scale: 0.98 }}
                  style={{ willChange: 'transform' }}
                >
                  Get Started
                </motion.div>
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard">
                <motion.div
                  className={`text-[11px] md:text-xs font-bold font-mono uppercase tracking-[0.16em] border-b ${isActive("/dashboard") ? "text-primary-container border-primary-container" : "text-secondary border-transparent hover:text-white"}`}
                  whileHover={{ y: -2 }}
                >
                  Dashboard
                </motion.div>
              </Link>
              <motion.button
                onClick={onLogout}
                className="text-[11px] md:text-xs font-bold text-white px-3 md:px-4 py-2 border border-white/25 bg-black/30 font-mono uppercase tracking-[0.16em]"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Log Out
              </motion.button>
            </>
          )}
        </div>

        <motion.button
          className="md:hidden border border-white/20 bg-black/30 text-white px-3 py-2 font-mono text-xs uppercase tracking-[0.16em]"
          onClick={() => setMobileOpen((prev) => !prev)}
          whileTap={{ scale: 0.95 }}
        >
          {mobileOpen ? "Close" : "Menu"}
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10 bg-surface-container-low/95 px-4 py-4 overflow-hidden"
          >
            <nav className="flex flex-col gap-2 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                >
                  <motion.div
                    className={`px-3 py-2 border text-xs font-mono uppercase tracking-[0.16em] ${isActive(link.path) ? "text-primary-container border-primary-container/40 bg-black/35" : "text-secondary border-white/15 bg-black/20"}`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.name.replace(/\[|\]/g, "")}
                  </motion.div>
                </Link>
              ))}
            </nav>

            {!user ? (
              <div className="grid grid-cols-2 gap-2">
                <Link to="/login">
                  <div className="text-center text-xs font-bold text-white px-3 py-2 border border-white/25 bg-black/30 font-mono uppercase tracking-[0.16em]">
                    Log In
                  </div>
                </Link>
                <Link to="/register">
                  <div className="text-center text-xs font-bold bg-primary-container text-black px-3 py-2 border border-primary-container font-mono uppercase tracking-[0.16em]">
                    Get Started
                  </div>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link to="/dashboard">
                  <div className="text-center text-xs font-bold text-white px-3 py-2 border border-white/25 bg-black/30 font-mono uppercase tracking-[0.16em]">
                    Dashboard
                  </div>
                </Link>
                <button
                  onClick={onLogout}
                  className="text-center text-xs font-bold text-white px-3 py-2 border border-white/25 bg-black/30 font-mono uppercase tracking-[0.16em]"
                >
                  Log Out
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
