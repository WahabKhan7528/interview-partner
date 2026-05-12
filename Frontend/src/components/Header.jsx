import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const onLogout = () => {
    handleLogout();
    navigate("/login");
  };

  const navLinks = [
    { name: "[FEATURES]", path: "/features" },
    { name: "[ABOUT]", path: "/about" },
    { name: "[PRICING]", path: "/pricing" },
    { name: "[CONTACT]", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className="fixed top-0 w-full z-100 border-b border-white/10 bg-background/75 backdrop-blur-xl"
      data-purpose="main-navigation"
    >
      <div className="max-w-360 mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4 relative">
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary-container/20 to-transparent"></div>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-2xl md:text-[1.75rem] font-bold tracking-tight font-mono text-white flex items-center leading-none"
          >
            Partner
            <span className="text-primary-container">
              {location.pathname === "/" ? "_" : "."}
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] font-medium text-secondary font-mono tracking-[0.14em] uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`border-b transition-all duration-300 ${isActive(link.path) ? "text-primary-container border-primary-container" : "border-transparent hover:text-primary-container hover:border-primary-container/40"}`}
            >
              {link.name.replace(/\[|\]/g, "")}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 md:gap-3">
          {!user ? (
            <>
              <Link
                to="/login"
                className="text-[11px] md:text-xs font-bold text-white px-3 md:px-4 py-2 border border-white/25 bg-black/30 hover:bg-white/5 transition-all duration-300 font-mono uppercase tracking-[0.16em]"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="text-[11px] md:text-xs font-bold bg-primary-container text-black px-3 md:px-4 py-2 border border-primary-container hover:shadow-[0_8px_30px_rgba(0,240,255,0.3)] transition-all duration-300 font-mono uppercase tracking-[0.16em]"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className={`text-[11px] md:text-xs font-bold font-mono uppercase tracking-[0.16em] border-b transition-colors ${isActive("/dashboard") ? "text-primary-container border-primary-container" : "text-secondary border-transparent hover:text-primary-container"}`}
              >
                Dashboard
              </Link>
              <button
                onClick={onLogout}
                className="text-[11px] md:text-xs font-bold text-white px-3 md:px-4 py-2 border border-white/25 bg-black/30 hover:bg-white/5 transition-all duration-300 font-mono uppercase tracking-[0.16em]"
              >
                Log Out
              </button>
            </>
          )}
        </div>

        <button
          className="md:hidden border border-white/20 bg-black/30 text-white px-3 py-2 font-mono text-xs uppercase tracking-[0.16em]"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-surface-container-low/95 backdrop-blur-xl px-4 py-4">
          <nav className="flex flex-col gap-2 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 border text-xs font-mono uppercase tracking-[0.16em] ${isActive(link.path) ? "text-primary-container border-primary-container/40 bg-black/35" : "text-secondary border-white/15 bg-black/20"}`}
              >
                {link.name.replace(/\[|\]/g, "")}
              </Link>
            ))}
          </nav>

          {!user ? (
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/login"
                className="text-center text-xs font-bold text-white px-3 py-2 border border-white/25 bg-black/30 font-mono uppercase tracking-[0.16em]"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="text-center text-xs font-bold bg-primary-container text-black px-3 py-2 border border-primary-container font-mono uppercase tracking-[0.16em]"
              >
                Get Started
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/dashboard"
                className="text-center text-xs font-bold text-white px-3 py-2 border border-white/25 bg-black/30 font-mono uppercase tracking-[0.16em]"
              >
                Dashboard
              </Link>
              <button
                onClick={onLogout}
                className="text-center text-xs font-bold text-white px-3 py-2 border border-white/25 bg-black/30 font-mono uppercase tracking-[0.16em]"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
