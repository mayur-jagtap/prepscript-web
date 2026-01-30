import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/prepScript.png";
import { Home, Layers, DollarSign } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const isLoggedIn = false;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
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

        {/* CTA */}
        {!isLoggedIn && (
          <Link to="/login" className="btn-primary px-5 py-2 rounded-full text-sm font-medium">
            Get Started →
          </Link>
        )}
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
