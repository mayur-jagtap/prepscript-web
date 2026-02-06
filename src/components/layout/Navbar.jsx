import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/prepScript.png";
import { Home, Layers, DollarSign, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";

    const fromDom = document.documentElement.dataset.theme;
    if (fromDom === "dark" || fromDom === "light") return fromDom;

    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") return stored;
    } catch {
      // no-op
    }

    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const isLoggedIn = false;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // no-op
    }
  }, [theme]);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="PrepScript Logo" className="h-9 scale-200 origin-left" />
        </Link>

        {/* Nav items */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavItem to="/" icon={<Home size={16} />} label="Home" />
          <NavItem to="/dashboard" icon={<Layers size={16} />} label="Dashboard" />
          <NavItem to="/pricing" icon={<DollarSign size={16} />} label="Pricing" />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA */}
          {!isLoggedIn && (
            <Link to="/login" className="btn-primary px-5 py-2 rounded-full text-sm font-medium">
              Get Started →
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <Link to={to} className="nav-item">
      <span className="nav-icon">{icon}</span>
      {label}
    </Link>
  );
}
