import { Button } from "@/components/ui/button";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ChevronRight, Mail, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Careers", to: "/careers" },
  { label: "Why Us", to: "/why-us" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  "IT Staffing",
  "Direct Hire",
  "Contract Staffing",
  "Executive Search",
  "Workforce Solutions",
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  const isActive = (to: string) =>
    to === "/" ? currentPath === "/" : currentPath.startsWith(to);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ── Header ───────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-navy ${
          scrolled ? "shadow-navy" : ""
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Brand */}
            <Link
              to="/"
              className="flex items-center shrink-0 group"
              data-ocid="nav.logo.link"
            >
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-white text-base lg:text-lg tracking-tight">
                  EL-Shaddai
                </span>
                <span className="font-display font-semibold text-brand-gold text-xs lg:text-sm tracking-widest uppercase">
                  Technologies Inc
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-0.5"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={`nav.${link.label.toLowerCase().replace(" ", "-")}.link`}
                  className={`px-3 py-2 rounded-sm text-sm font-medium font-display transition-all duration-200 ${
                    isActive(link.to)
                      ? "text-brand-gold border-b-2 border-brand-gold"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/admin" data-ocid="nav.admin.link" className="ml-3">
                <Button
                  size="sm"
                  className="bg-brand-red hover:bg-brand-red/90 text-white font-display font-semibold border-0"
                >
                  Admin
                </Button>
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              data-ocid="nav.mobile.toggle"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="lg:hidden border-t border-white/10 bg-brand-navy overflow-hidden"
            >
              <nav className="container px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    data-ocid={`nav.mobile.${link.label.toLowerCase().replace(" ", "-")}.link`}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium font-display transition-colors ${
                      isActive(link.to)
                        ? "text-brand-gold bg-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    <ChevronRight size={16} className="opacity-40" />
                  </Link>
                ))}
                <Link
                  to="/admin"
                  className="mt-2"
                  data-ocid="nav.mobile.admin.link"
                >
                  <Button className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-display font-semibold">
                    Admin Portal
                  </Button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Page Content ─────────────────────────────────────── */}
      <main className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </main>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="bg-brand-navy text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <div className="mb-5">
                <div className="font-display font-bold text-white text-xl leading-tight mb-1">
                  EL-Shaddai
                </div>
                <div className="font-display font-semibold text-brand-gold text-xs tracking-widest uppercase">
                  Technologies Inc
                </div>
              </div>
              <p className="text-white/65 text-sm leading-relaxed max-w-sm mb-6">
                Building high-performance IT talent pipelines. Your trusted
                partner in technology staffing, consulting, and workforce
                solutions.
              </p>
              <div className="space-y-2.5">
                <p className="text-xs text-white/50 font-display uppercase tracking-wider mb-2">
                  Contact
                </p>
                <p className="text-sm text-white/70 font-medium">
                  Shanthi Chittala
                </p>
                <a
                  href="tel:+17329131541"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-gold transition-colors"
                  data-ocid="footer.phone.link"
                >
                  <Phone size={13} />
                  +1 (732) 913-1541
                </a>
                <a
                  href="mailto:shg@el-shaddaitechnologies.com"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-gold transition-colors break-all"
                  data-ocid="footer.email.link"
                >
                  <Mail size={13} className="shrink-0" />
                  shg@el-shaddaitechnologies.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-white/40 mb-5">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      data-ocid={`footer.${link.label.toLowerCase().replace(" ", "-")}.link`}
                      className="text-sm text-white/65 hover:text-brand-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-white/40 mb-5">
                Our Services
              </h3>
              <ul className="space-y-2.5">
                {serviceLinks.map((svc) => (
                  <li key={svc}>
                    <Link
                      to="/services"
                      className="text-sm text-white/65 hover:text-brand-gold transition-colors"
                    >
                      {svc}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} EL-Shaddai Technologies Inc. All
              rights reserved.
            </p>
            <p className="text-xs text-white/30">el-shaddaitechnologies.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
