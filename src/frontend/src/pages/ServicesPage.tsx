import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  Network,
  Search,
  Users,
} from "lucide-react";
import { type Variants, motion } from "motion/react";

import logoAccenture from "/assets/generated/client-accenture-transparent.dim_200x100.png";
import logoCisco from "/assets/generated/client-cisco-transparent.dim_200x100.png";
import logoDeloitte from "/assets/generated/client-deloitte-transparent.dim_200x100.png";
import logoIbm from "/assets/generated/client-ibm-transparent.dim_200x100.png";
import logoInfosys from "/assets/generated/client-infosys-transparent.dim_200x100.png";
// ── Client logo ES module imports ────────────────────────────────────────
import logoMicrosoft from "/assets/generated/client-microsoft-transparent.dim_200x100.png";
import logoOracle from "/assets/generated/client-oracle-transparent.dim_200x100.png";
import logoSap from "/assets/generated/client-sap-transparent.dim_200x100.png";

const services = [
  {
    icon: Users,
    title: "IT Staffing Solutions",
    badge: "Most Popular",
    description:
      "Our flagship IT staffing service connects you with pre-vetted technology professionals across all skill levels and specializations — from front-end developers to cloud architects.",
    features: [
      "Permanent and contract placements",
      "Contract-to-hire engagements",
      "Talent pipeline building",
      "Rapid placement within 48–72 hours",
    ],
  },
  {
    icon: Briefcase,
    title: "Direct Hire Placement",
    badge: "Full-Time",
    description:
      "End-to-end recruitment for organizations seeking to add permanent members to their technology teams, with rigorous multi-stage screening to ensure quality and cultural fit.",
    features: [
      "Full-time permanent placements",
      "Cultural fit and behavioral screening",
      "Technical assessments and validation",
      "90-day replacement guarantee",
    ],
  },
  {
    icon: Clock,
    title: "Contract Staffing",
    badge: "Flexible",
    description:
      "Scale your team up or down with flexible contract professionals. Perfect for project-based work, seasonal demands, or bridging gaps in your permanent workforce.",
    features: [
      "Short and long-term contracts",
      "Scalable workforce solutions",
      "Full benefits administration",
      "Seamless onboarding support",
    ],
  },
  {
    icon: Search,
    title: "Executive Search",
    badge: "C-Suite",
    description:
      "Identifying and attracting transformational technology leaders requires a specialized approach. Our executive search practice is dedicated to top-tier leadership talent acquisition.",
    features: [
      "C-suite and VP-level roles",
      "Confidential search available",
      "Industry expertise across verticals",
      "Comprehensive leadership assessments",
    ],
  },
  {
    icon: Network,
    title: "Workforce Solutions",
    badge: "Enterprise",
    description:
      "For large organizations with complex talent needs, we offer Recruitment Process Outsourcing (RPO), Managed Service Programs (MSP), and strategic workforce planning.",
    features: [
      "Managed services programs (MSP)",
      "Vendor management system integration",
      "Recruitment Process Outsourcing (RPO)",
      "Dedicated program management team",
    ],
  },
];

const clients = [
  { name: "Microsoft", sector: "Technology", logo: logoMicrosoft },
  { name: "IBM", sector: "Enterprise IT", logo: logoIbm },
  { name: "Deloitte", sector: "Consulting", logo: logoDeloitte },
  { name: "Accenture", sector: "Professional Services", logo: logoAccenture },
  { name: "Oracle", sector: "Cloud & Database", logo: logoOracle },
  { name: "Cisco", sector: "Networking", logo: logoCisco },
  { name: "SAP", sector: "Enterprise Software", logo: logoSap },
  { name: "Infosys", sector: "IT Services", logo: logoInfosys },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesPage() {
  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative py-20 lg:py-32 bg-brand-navy text-white overflow-hidden"
        data-ocid="services.hero.section"
      >
        <div className="absolute inset-0 bg-texture opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/80" />
        <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-brand-gold mb-4">
              What We Offer
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6 max-w-2xl">
              Our Services
            </h1>
            <p className="text-white/80 max-w-xl text-lg leading-relaxed">
              From contract placements to executive search, we deliver tailored
              talent solutions that align with your business objectives and
              drive measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24 bg-brand-light"
        data-ocid="services.list.section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-brand-navy mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every service is designed to solve real talent challenges and
              deliver measurable business impact.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  variants={itemVariants}
                  className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}
                >
                  <Card
                    className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
                    data-ocid={`services.item.${i + 1}`}
                  >
                    <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center">
                          <Icon size={22} className="text-brand-red" />
                        </div>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-brand-navy/10 text-brand-navy border-0"
                        >
                          {svc.badge}
                        </Badge>
                      </div>
                      <h3 className="font-display text-xl font-bold text-brand-navy mb-3">
                        {svc.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                        {svc.description}
                      </p>
                      <ul className="space-y-2">
                        {svc.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2">
                            <CheckCircle2
                              size={16}
                              className="text-brand-red mt-0.5 shrink-0"
                            />
                            <span className="text-xs text-foreground">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Trusted by Industry Leaders ──────────────────────────────────── */}
      <section
        className="py-16 lg:py-24 bg-background"
        data-ocid="services.clients.section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-brand-red mb-3">
              Our Network
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-brand-navy mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We are proud to partner with some of the world's most respected
              technology and enterprise organizations.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                variants={itemVariants}
                data-ocid={`services.clients.item.${i + 1}`}
              >
                <Card className="group h-full border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-card">
                  <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                    {/* White padded image area for maximum logo visibility */}
                    <div className="w-full bg-white rounded-lg p-3 flex items-center justify-center h-[68px] border border-border/30">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="max-h-[48px] max-w-[140px] w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-display font-bold text-brand-navy text-sm leading-tight">
                        {client.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {client.sector}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section
        className="py-16 bg-brand-navy text-white"
        data-ocid="services.cta.section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Find the Right Service for Your Needs
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Not sure which service fits best? Our consultants will guide you
              to the perfect talent solution for your organization.
            </p>
            <Link to="/contact" data-ocid="services.cta.contact.button">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-display font-bold gap-2"
              >
                Talk to a Consultant <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
