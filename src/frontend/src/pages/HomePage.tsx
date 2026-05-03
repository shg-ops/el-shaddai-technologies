import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Briefcase,
  ChevronRight,
  Clock,
  Globe,
  Handshake,
  LayoutGrid,
  Search,
  Shield,
  Star,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import heroImg from "/assets/generated/hero-bg-tech.dim_1920x1080.jpg";
import teamImg from "/assets/uploads/089photoshootings-people-1979261_1920-1-1.jpg";

const hiringBenefits = [
  { icon: TrendingUp, label: "Growth" },
  { icon: Handshake, label: "Culture" },
  { icon: Users, label: "Impact" },
] as const;

const services = [
  {
    icon: Users,
    title: "IT Staffing",
    description:
      "Rapidly place pre-vetted technology professionals on contract or contract-to-hire basis — reducing time-to-fill by up to 60% with zero compromise on quality.",
  },
  {
    icon: UserCheck,
    title: "Direct Hire",
    description:
      "Permanent placement solutions that align culture, skills, and growth trajectory to help you build long-lasting, high-performing technology teams.",
  },
  {
    icon: LayoutGrid,
    title: "Contract Staffing",
    description:
      "Flexible workforce solutions with thoroughly screened professionals who integrate seamlessly with your team and deliver results from day one.",
  },
  {
    icon: Search,
    title: "Executive Search",
    description:
      "Targeted C-suite and VP-level recruiting powered by deep market intelligence and an exclusive network of senior technology leaders.",
  },
];

const whyReasons = [
  {
    icon: Award,
    title: "Industry-Specialized Expertise",
    description:
      "Our recruiters hold deep domain knowledge across cloud, cybersecurity, AI/ML, and enterprise software — ensuring candidates who truly understand your technical landscape.",
  },
  {
    icon: Shield,
    title: "Rigorous Vetting Process",
    description:
      "Multi-step screening including technical assessments, reference checks, and culture-fit evaluations so you only interview candidates who are genuinely ready to contribute.",
  },
  {
    icon: Globe,
    title: "Nationwide Reach & Local Insight",
    description:
      "Coast-to-coast talent access combined with local market intelligence, empowering clients to hire the best talent regardless of location or time zone.",
  },
];

const stats = [
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "15+", label: "Industries Served", icon: Briefcase },
  { value: "24/7", label: "Dedicated Support", icon: Clock },
];

export default function HomePage() {
  return (
    <div data-ocid="home.page">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        data-ocid="home.hero.section"
      >
        {/* Background image */}
        <img
          src={heroImg}
          alt="Technology background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Dark navy overlay — layered for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.10 0.048 258 / 0.97) 0%, oklch(0.14 0.058 258 / 0.92) 55%, oklch(0.10 0.045 258 / 0.88) 100%)",
          }}
        />
        {/* Gold grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.78 0.14 82) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.14 82) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Crimson radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 45%, oklch(0.52 0.22 18 / 0.12) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span
              className="inline-block text-xs font-semibold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-7 border"
              style={{
                color: "oklch(0.78 0.14 82)",
                borderColor: "oklch(0.78 0.14 82 / 0.38)",
                background: "oklch(0.78 0.14 82 / 0.1)",
              }}
            >
              EL-Shaddai Technologies Inc.
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.06] mb-6 tracking-tight"
            style={{ color: "oklch(0.97 0.005 240)" }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          >
            Your Strategic{" "}
            <span style={{ color: "oklch(0.78 0.14 82)" }}>IT Staffing</span> &
            Consulting Partner
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "oklch(0.82 0.018 252)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Connecting exceptional technology talent with forward-thinking
            organizations across North America — faster, smarter, and with
            lasting results.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
          >
            <Link to="/services" data-ocid="home.hero.services_button">
              <Button
                size="lg"
                className="px-8 py-3 text-base font-semibold rounded-lg transition-all duration-200 hover:scale-[1.03] shadow-lg"
                style={{
                  background: "oklch(0.52 0.22 18)",
                  color: "oklch(0.97 0.005 0)",
                  border: "none",
                }}
              >
                Explore Services
                <ChevronRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact" data-ocid="home.hero.contact_button">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 text-base font-semibold rounded-lg transition-all duration-200 hover:scale-[1.03]"
                style={{
                  color: "oklch(0.97 0.005 240)",
                  borderColor: "oklch(0.97 0.005 240 / 0.45)",
                  background: "oklch(0.97 0.005 240 / 0.05)",
                }}
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Strip ──────────────────────────────────────────── */}
      <section
        className="py-10 border-b border-t"
        style={{
          background: "oklch(0.17 0.058 258)",
          borderColor: "oklch(0.78 0.14 82 / 0.18)",
        }}
        data-ocid="home.stats.section"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center gap-2 py-4 sm:py-0"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                data-ocid={`home.stats.item.${i + 1}`}
              >
                <stat.icon
                  className="h-5 w-5 mb-1"
                  style={{ color: "oklch(0.78 0.14 82)" }}
                />
                <span
                  className="font-display text-4xl font-bold"
                  style={{ color: "oklch(0.97 0.005 240)" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.68 0.018 252)" }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Highlights ──────────────────────────────────── */}
      <section
        className="py-20 bg-background"
        data-ocid="home.services.section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-3 block">
              What We Do
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Talent Solutions That Drive Results
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              From agile contract staffing to permanent executive placements, we
              deliver the right people at the right time for your enterprise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                data-ocid={`home.services.item.${i + 1}`}
              >
                <Card className="h-full border border-border hover:border-brand-red hover:shadow-md transition-all duration-200 bg-card">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center"
                      style={{ background: "oklch(0.52 0.22 18 / 0.1)" }}
                    >
                      <svc.icon className="h-5 w-5 text-brand-red" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-brand-navy">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {svc.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" data-ocid="home.services.view_all_link">
              <Button
                variant="outline"
                className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-colors duration-200 font-semibold"
              >
                View All Services
                <ChevronRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────── */}
      <section className="py-20 bg-brand-light" data-ocid="home.whyus.section">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-3 block">
              Why EL-Shaddai
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              A Partner You Can Count On
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              We invest in understanding your business goals, culture, and
              technical landscape to deliver talent that makes a real difference
              — from day one and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {whyReasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                className="flex flex-col gap-4 p-7 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                data-ocid={`home.whyus.item.${i + 1}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(0.22 0.048 258 / 0.1)" }}
                >
                  <reason.icon className="h-6 w-6 text-brand-navy" />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-navy">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Team photo + quote */}
          <motion.div
            className="grid lg:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
              <img
                src={teamImg}
                alt="EL-Shaddai Technologies team"
                className="w-full h-64 object-cover object-center"
              />
            </div>
            <div>
              <div
                className="rounded-2xl p-8 shadow-lg"
                style={{ background: "oklch(0.17 0.058 258)" }}
              >
                <div
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: "oklch(0.78 0.14 82)" }}
                >
                  Our Commitment
                </div>
                <p
                  className="text-lg font-display font-semibold leading-snug mb-6"
                  style={{ color: "oklch(0.97 0.005 240)" }}
                >
                  "We don't just fill positions — we build careers and
                  strengthen organizations."
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{
                      background: "oklch(0.52 0.22 18)",
                      color: "oklch(0.97 0.005 0)",
                    }}
                  >
                    SC
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.97 0.005 240)" }}
                    >
                      Shanthi Chittala
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(0.62 0.018 252)" }}
                    >
                      Founder, EL-Shaddai Technologies
                    </div>
                  </div>
                </div>
                <Link to="/why-us" data-ocid="home.whyus.learn_more_link">
                  <Button
                    size="sm"
                    className="font-semibold transition-all duration-200 hover:scale-[1.03]"
                    style={{
                      background: "oklch(0.78 0.14 82)",
                      color: "oklch(0.12 0.02 250)",
                    }}
                  >
                    Learn More About Us
                    <ChevronRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── We Are Hiring Banner ─────────────────────────────────── */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.048 258) 0%, oklch(0.17 0.058 258) 50%, oklch(0.20 0.048 258) 100%)",
        }}
        data-ocid="home.hiring.section"
      >
        {/* Gold decorative lines */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, oklch(0.78 0.14 82) 0px, oklch(0.78 0.14 82) 1px, transparent 1px, transparent 60px)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <Zap
                  className="h-7 w-7"
                  style={{ color: "oklch(0.78 0.14 82)" }}
                />
                <span
                  className="text-xs font-bold tracking-[0.22em] uppercase"
                  style={{ color: "oklch(0.78 0.14 82)" }}
                >
                  We Are Hiring
                </span>
              </div>
              <h2
                className="font-display text-3xl md:text-4xl font-bold mb-3 leading-tight"
                style={{ color: "oklch(0.97 0.005 240)" }}
              >
                Join Our Growing Team
              </h2>
              <p
                className="text-base leading-relaxed max-w-lg"
                style={{ color: "oklch(0.78 0.02 252)" }}
              >
                We're looking for passionate technology professionals and
                recruiters who want to make a meaningful impact. Build your
                career at EL-Shaddai Technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <div className="flex flex-col gap-3 text-center">
                <div className="flex gap-3 items-center justify-center">
                  {hiringBenefits.map((benefit) => (
                    <div
                      key={benefit.label}
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "oklch(0.52 0.22 18 / 0.2)" }}
                    >
                      <benefit.icon
                        className="h-5 w-5"
                        style={{ color: "oklch(0.78 0.14 82)" }}
                      />
                    </div>
                  ))}
                </div>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.62 0.018 252)" }}
                >
                  Growth · Culture · Impact
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link to="/careers" data-ocid="home.hiring.careers_button">
                  <Button
                    size="lg"
                    className="w-full px-8 font-semibold transition-all duration-200 hover:scale-[1.03] shadow-lg"
                    style={{
                      background: "oklch(0.52 0.22 18)",
                      color: "oklch(0.97 0.005 0)",
                    }}
                  >
                    View Open Positions
                    <ChevronRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact" data-ocid="home.hiring.contact_button">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full px-8 font-semibold"
                    style={{
                      color: "oklch(0.97 0.005 240)",
                      borderColor: "oklch(0.97 0.005 240 / 0.35)",
                      background: "transparent",
                    }}
                  >
                    Send Your Resume
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA Banner ─────────────────────────────────────── */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(120deg, oklch(0.52 0.22 18) 0%, oklch(0.44 0.20 18) 100%)",
        }}
        data-ocid="home.cta.section"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="font-display text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "oklch(0.97 0.005 0)" }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Build Your Dream Team?
          </motion.h2>
          <motion.p
            className="mb-8 text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.90 0.01 8)" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's discuss how EL-Shaddai Technologies can accelerate your hiring
            and deliver the technology talent that powers your growth.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/contact" data-ocid="home.cta.contact_button">
              <Button
                size="lg"
                className="px-8 font-semibold transition-all duration-200 hover:scale-[1.03] shadow-lg"
                style={{
                  background: "oklch(0.97 0.005 240)",
                  color: "oklch(0.17 0.058 258)",
                }}
              >
                Contact Us Today
              </Button>
            </Link>
            <Link to="/services" data-ocid="home.cta.services_button">
              <Button
                size="lg"
                variant="outline"
                className="px-8 font-semibold transition-all duration-200"
                style={{
                  color: "oklch(0.97 0.005 240)",
                  borderColor: "oklch(0.97 0.005 240 / 0.45)",
                  background: "transparent",
                }}
              >
                Explore Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
