import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Clock,
  HeartHandshake,
  Network,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

// ES module imports for bundled images
import teamPhoto1 from "../../public/assets/uploads/089photoshootings-people-1979261_1920-1-1.jpg";
import teamPhoto2 from "../../public/assets/uploads/tumisu-expert-5442081_1920-3.jpg";

const reasons = [
  {
    icon: Network,
    title: "Industry Expertise",
    description:
      "Over 15 years of deep IT industry knowledge across verticals — from financial services and healthcare to manufacturing and government sectors.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Trusted by Fortune 500 companies and fast-growing startups alike. Our consistent record of successful placements speaks for itself.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Approach",
    description:
      "We take the time to understand your unique business culture, technical requirements, and long-term goals before recommending any candidate.",
  },
  {
    icon: Clock,
    title: "Speed & Efficiency",
    description:
      "Our deep talent network enables us to fill critical roles in days, not months. Speed to hire is our proven competitive edge.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description:
      "Every candidate undergoes rigorous technical assessments, background checks, and cultural fit evaluations — you meet only the best.",
  },
  {
    icon: BookOpen,
    title: "Long-term Partnerships",
    description:
      "We build relationships, not just placements. Our dedicated account managers support you before, during, and after every engagement.",
  },
];

const metrics = [
  { value: "500+", label: "Placements Made", icon: Award },
  { value: "15+", label: "Years Experience", icon: BookOpen },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "200+", label: "Partner Companies", icon: Users },
];

const testimonials = [
  {
    quote:
      "EL-Shaddai Technologies transformed our hiring process. They placed three senior engineers within two weeks — all of whom are still with us two years later. Their understanding of our technical stack was impressive.",
    name: "Michael R.",
    title: "VP of Engineering",
    company: "FinTech Solutions Corp",
    initials: "MR",
  },
  {
    quote:
      "I've worked with many staffing firms over the years, but EL-Shaddai stands apart. Their candidates are prepared, professional, and genuinely aligned with our culture. The dedicated support makes all the difference.",
    name: "Sarah K.",
    title: "Director of IT Operations",
    company: "Healthcare Systems Group",
    initials: "SK",
  },
];

const galleryImages = [
  {
    src: teamPhoto1 as string,
    alt: "EL-Shaddai Technologies team collaborating in a professional setting",
    caption: "Collaborative Team Culture",
    subcaption: "Building lasting partnerships through trust and transparency",
  },
  {
    src: teamPhoto2 as string,
    alt: "IT expert professional at work",
    caption: "Expert Talent Network",
    subcaption: "Connecting skilled IT professionals with industry leaders",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  }),
};

export default function WhyUsPage() {
  return (
    <div className="bg-background" data-ocid="why-us.page">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-navy overflow-hidden py-20 lg:py-28">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, oklch(0.52 0.22 18 / 0.6), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.12) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.12) 40px)",
          }}
        />
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brand-gold font-display font-semibold uppercase tracking-widest text-sm mb-4"
          >
            Our Difference
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
          >
            Why Choose <span className="text-brand-red">EL-Shaddai</span>
            <br />
            Technologies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We go beyond resumes. We build careers, strengthen teams, and power
            IT organizations with talent that truly fits.
          </motion.p>
        </div>
      </section>

      {/* ── 6 Reasons Grid ────────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24 bg-brand-light"
        data-ocid="why-us.reasons.section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-brand-red mb-3">
              Our Advantages
            </span>
            <h2 className="font-display font-bold text-brand-navy text-3xl md:text-4xl lg:text-5xl mb-4">
              6 Reasons to Partner With Us
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From first call to successful placement, here's what sets
              EL-Shaddai Technologies apart from the rest.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                data-ocid={`why-us.reason.item.${i + 1}`}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:border-brand-red/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-4">
                  <reason.icon size={22} className="text-brand-red" />
                </div>
                <h3 className="font-display font-bold text-brand-navy text-lg mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Photo Gallery ─────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-20 bg-card"
        data-ocid="why-us.team.section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-brand-red mb-3">
              Our People
            </span>
            <h2 className="font-display font-bold text-brand-navy text-3xl md:text-4xl mb-4">
              A Team Built for Results
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our people are our product. Meet the professionals dedicated to
              connecting exceptional IT talent with forward-thinking companies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.caption}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                data-ocid={`why-us.team.photo.${i + 1}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg border border-border/40"
              >
                <div
                  style={{ aspectRatio: "4/3" }}
                  className="relative overflow-hidden"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-display font-bold text-white text-lg leading-tight mb-1">
                      {img.caption}
                    </p>
                    <p className="text-white/75 text-sm leading-snug">
                      {img.subcaption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Success Metrics ───────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-20 bg-brand-navy"
        data-ocid="why-us.metrics.section"
      >
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-4">
              Our Results Speak for Themselves
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Numbers that reflect our commitment to excellence in IT staffing
              and consulting.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                data-ocid={`why-us.metric.item.${i + 1}`}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold/25 transition-colors duration-300">
                  <metric.icon size={28} className="text-brand-gold" />
                </div>
                <div className="font-display font-bold text-brand-gold text-4xl md:text-5xl mb-2">
                  {metric.value}
                </div>
                <div className="text-white/70 font-display font-medium text-sm uppercase tracking-wider">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24 bg-background"
        data-ocid="why-us.testimonials.section"
      >
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-brand-navy text-3xl md:text-4xl mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real feedback from the organizations we've helped build
              world-class IT teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                data-ocid={`why-us.testimonial.item.${i + 1}`}
                className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {["s1", "s2", "s3", "s4", "s5"].map((id) => (
                    <Star
                      key={id}
                      size={16}
                      className="text-brand-gold fill-brand-gold"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground/80 leading-relaxed text-sm flex-1 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-white text-xs">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-display font-semibold text-brand-navy text-sm truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-xs truncate">
                      {testimonial.title} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-display font-bold text-brand-navy text-3xl md:text-4xl mb-4">
              Ready to Find Your Next{" "}
              <span className="text-brand-gold">IT Star?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Let's talk about your hiring needs. Our team is standing by to
              help you build the IT workforce of tomorrow.
            </p>
            <Link to="/contact" data-ocid="why-us.contact.primary_button">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-display font-semibold px-10 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Get in Touch Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
