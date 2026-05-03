import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  Eye,
  Globe,
  Heart,
  Mail,
  Phone,
  Shield,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { type Variants, motion } from "motion/react";
import teamImg from "/assets/uploads/089photoshootings-people-1979261_1920-1-1.jpg";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in every placement, every interaction, and every solution we deliver.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Transparency and honesty form the foundation of every relationship we build with clients and candidates.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We continuously evolve our processes and leverage emerging technologies to stay ahead in talent acquisition.",
  },
  {
    icon: Globe,
    title: "Diversity",
    description:
      "We champion inclusive hiring practices and actively build diverse talent pipelines for every engagement.",
  },
  {
    icon: Shield,
    title: "Partnership",
    description:
      "We act as a true extension of your HR team — aligned with your goals, culture, and long-term success.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "We don't just fill roles; we help you architect the future team your business needs to thrive.",
  },
];

const milestones = [
  {
    year: "2015",
    icon: Building2,
    title: "Company Founded",
    description:
      "EL-Shaddai Technologies Inc was established with a mission to bridge the gap between IT talent and forward-thinking organizations.",
  },
  {
    year: "2017",
    icon: Users,
    title: "Team Expansion",
    description:
      "Grew our expert recruitment team and expanded service offerings to include full-cycle IT staffing across multiple verticals.",
  },
  {
    year: "2019",
    icon: Award,
    title: "Industry Recognition",
    description:
      "Recognized as a trusted IT staffing partner by Fortune 500 clients, building lasting relationships grounded in results.",
  },
  {
    year: "2022",
    icon: Globe,
    title: "National Reach",
    description:
      "Expanded operations nationwide, serving technology companies and enterprises from coast to coast across the United States.",
  },
  {
    year: "2024",
    icon: CheckCircle2,
    title: "Continued Growth",
    description:
      "Deepened expertise in emerging technologies including cloud, AI/ML, and cybersecurity talent pipelines for the modern enterprise.",
  },
];

const capabilities = [
  {
    label: "IT Staffing",
    desc: "Contract, contract-to-hire, and permanent placement across all technology disciplines.",
  },
  {
    label: "Technology Consulting",
    desc: "Strategic workforce planning and talent advisory for high-growth organizations.",
  },
  {
    label: "Talent Pipeline",
    desc: "Deep networks of pre-vetted technology professionals ready to contribute from day one.",
  },
  {
    label: "Industry Expertise",
    desc: "Specialized knowledge across cloud, AI/ML, cybersecurity, data, and enterprise software.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative py-20 lg:py-32 bg-brand-navy text-white overflow-hidden"
        data-ocid="about.hero.section"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/80" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.78 0.14 82) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.14 82) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-brand-gold mb-4">
              Our Story
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6 max-w-3xl leading-tight">
              About EL-Shaddai Technologies Inc
            </h1>
            <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
              A premier IT staffing and technology consulting firm dedicated to
              connecting exceptional technology talent with the organizations
              that need them most — built on faith, driven by excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Company Story ─────────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24 bg-background"
        data-ocid="about.story.section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-brand-red mb-4">
                Who We Are
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-navy mb-6">
                Connecting Technology Talent with Organizations That Need It
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                EL-Shaddai Technologies Inc is a specialized IT staffing and
                consulting firm focused on one clear mission: matching
                world-class technology professionals with companies ready to
                grow. We serve as the critical bridge between talent and
                opportunity — across contract, contract-to-hire, and direct
                placement models.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team brings decades of combined experience in IT
                recruitment, workforce solutions, and technology consulting. We
                understand both sides of the equation — the technical demands of
                modern enterprises and the career goals of the professionals who
                power them.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From software engineers and cloud architects to cybersecurity
                experts and data scientists, we source, vet, and place the
                talent that drives digital transformation. Every engagement is
                personal, precise, and built on trust.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              {capabilities.map((item, i) => (
                <div
                  key={item.label}
                  className="flex gap-4 p-5 rounded-xl border border-border bg-card shadow-sm"
                  data-ocid={`about.story.item.${i + 1}`}
                >
                  <div className="w-2 rounded-full bg-brand-red flex-shrink-0 self-stretch" />
                  <div>
                    <h4 className="font-display font-bold text-brand-navy mb-1">
                      {item.label}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24 bg-brand-navy text-white"
        data-ocid="about.mission.section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-1 w-12 bg-brand-gold mb-6" />
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <blockquote className="text-xl lg:text-2xl font-display font-semibold leading-snug text-white mb-6 border-l-4 border-brand-gold pl-6">
                "To be the most trusted technology staffing partner, delivering
                exceptional talent solutions with integrity and excellence."
              </blockquote>
              <p className="text-white/70 leading-relaxed">
                Every placement we make is guided by a deep understanding of our
                clients' technical requirements and our candidates' career
                aspirations — ensuring meaningful success for all parties.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="h-1 w-12 bg-brand-red mb-6" />
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Our Vision
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                To be the most trusted name in IT staffing across North America
                — recognized for our integrity, precision, and transformative
                impact on the careers and companies we serve.
              </p>
              <p className="text-white/70 leading-relaxed">
                We envision a future where every technology organization,
                regardless of size, has access to the talent it needs to fulfill
                its potential. That's the future we're building every day.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Company History Timeline ───────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24 bg-brand-light"
        data-ocid="about.history.section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-brand-red mb-3">
              Our Journey
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-brand-navy">
              Company Milestones
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden sm:block" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-10"
            >
              {milestones.map((m, i) => {
                const Icon = m.icon;
                const isRight = i % 2 === 1;
                return (
                  <motion.div
                    key={m.year}
                    variants={itemVariants}
                    className={`relative flex flex-col sm:flex-row gap-6 items-start ${isRight ? "sm:flex-row-reverse" : ""}`}
                    data-ocid={`about.milestone.item.${i + 1}`}
                  >
                    <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-navy items-center justify-center z-10 border-4 border-background shadow">
                      <Calendar size={16} className="text-brand-gold" />
                    </div>

                    <div
                      className={`sm:w-[calc(50%-2.5rem)] ${isRight ? "sm:text-right" : ""}`}
                    >
                      <Card className="border-0 shadow-card bg-card hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div
                            className={`flex items-center gap-3 mb-3 ${isRight ? "sm:flex-row-reverse" : ""}`}
                          >
                            <div className="w-10 h-10 rounded-xl bg-brand-navy/10 flex items-center justify-center flex-shrink-0">
                              <Icon size={18} className="text-brand-navy" />
                            </div>
                            <span className="font-display font-bold text-brand-gold text-lg">
                              {m.year}
                            </span>
                          </div>
                          <h3 className="font-display font-bold text-brand-navy text-lg mb-2">
                            {m.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {m.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Values ───────────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24 bg-background"
        data-ocid="about.values.section"
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
              What We Stand For
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-brand-navy">
              Our Core Values
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div key={val.title} variants={itemVariants}>
                  <Card
                    className="h-full border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
                    data-ocid={`about.values.item.${i + 1}`}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-brand-navy/10 flex items-center justify-center mb-4">
                        <Icon size={22} className="text-brand-navy" />
                      </div>
                      <h3 className="font-display font-bold text-brand-navy mb-2">
                        {val.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {val.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Leadership / Team ─────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24 bg-brand-light"
        data-ocid="about.team.section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-brand-red mb-3">
              Leadership
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-brand-navy">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
              Our team of experienced IT staffing professionals brings passion,
              expertise, and dedication to every client and candidate
              relationship.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            {/* Team photo */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-border"
            >
              <img
                src={teamImg}
                alt="EL-Shaddai Technologies team"
                className="w-full h-72 object-cover object-center"
              />
            </motion.div>

            {/* Leader card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="border-0 shadow-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-brand-navy to-brand-navy/80 p-8 flex flex-col items-center text-white text-center">
                    <div className="w-20 h-20 rounded-full bg-brand-red/20 border-4 border-brand-gold/40 flex items-center justify-center mb-4">
                      <span className="font-display text-2xl font-bold text-brand-gold">
                        SC
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold">
                      Shanthi Chittala
                    </h3>
                    <p className="text-brand-gold text-sm mt-1 font-medium">
                      Founder & CEO
                    </p>
                    <p className="text-white/60 text-xs mt-0.5">
                      EL-Shaddai Technologies Inc
                    </p>
                  </div>
                  <div className="p-8 flex flex-col justify-center bg-card">
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      Shanthi Chittala founded EL-Shaddai Technologies Inc with
                      a clear vision: to create a staffing firm that genuinely
                      cares about both clients and candidates. With extensive
                      experience in IT workforce solutions, she built the
                      company on principles of trust, transparency, and
                      excellence.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                      Under her leadership, EL-Shaddai Technologies has grown
                      into a respected name in IT staffing, known for its
                      rigorous vetting process and deep industry relationships.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2 text-brand-navy font-medium">
                        <Phone className="h-4 w-4 text-brand-red flex-shrink-0" />
                        +1 732-913-1541
                      </p>
                      <p className="flex items-center gap-2 text-brand-navy font-medium break-all">
                        <Mail className="h-4 w-4 text-brand-red flex-shrink-0" />
                        shg@el-shaddaitechnologies.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24 bg-background"
        data-ocid="about.cta.section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Whether you're looking for top technology talent or seeking your
              next career opportunity, we're here to help. Let's start the
              conversation.
            </p>
            <Link to="/contact" data-ocid="about.cta.link">
              <Button
                size="lg"
                className="bg-brand-red text-white hover:bg-brand-red/90 font-display font-semibold px-10 py-6 text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                data-ocid="about.cta.primary_button"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
