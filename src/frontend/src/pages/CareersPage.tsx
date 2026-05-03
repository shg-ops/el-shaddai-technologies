import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Clock,
  DollarSign,
  HeartHandshake,
  MapPin,
  TrendingUp,
  Users,
} from "lucide-react";
import { type Variants, motion } from "motion/react";
import { JobTypeValues, useActiveJobListings } from "../hooks/useQueries";

// ES module imports for bundled images
import hiringBanner from "../../public/assets/generated/we-are-hiring-banner.dim_1200x500.jpg";

/* ─── Static data ─────────────────────────────────────────────────────────── */

const PLACEHOLDER_JOBS = [
  {
    id: "placeholder-1",
    title: "Senior Java Developer",
    jobType: JobTypeValues.fullTime,
    department: "Engineering",
    location: "Remote / USA",
    description:
      "Design and develop high-performance enterprise Java applications for our Fortune 500 clients. Work with Spring Boot, microservices, and cloud-native architectures.",
    requirements: ["Java 17+", "Spring Boot", "Microservices", "AWS", "Docker"],
  },
  {
    id: "placeholder-2",
    title: "Cloud Architect",
    jobType: JobTypeValues.contract,
    department: "Cloud Services",
    location: "Hybrid / New Jersey",
    description:
      "Architect scalable cloud infrastructure solutions on AWS and Azure. Lead cloud migration projects and define best practices for enterprise clients.",
    requirements: ["AWS", "Azure", "Terraform", "Kubernetes", "CI/CD"],
  },
  {
    id: "placeholder-3",
    title: "Data Engineer",
    jobType: JobTypeValues.fullTime,
    department: "Data & Analytics",
    location: "Remote / USA",
    description:
      "Build and maintain robust data pipelines and analytics platforms. Collaborate with data scientists to deliver actionable business insights.",
    requirements: ["Python", "Spark", "Kafka", "Snowflake", "dbt"],
  },
];

const BENEFITS = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description:
      "Market-leading compensation packages with performance bonuses and equity opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Structured advancement paths with mentorship programs and professional development budgets.",
  },
  {
    icon: HeartHandshake,
    title: "Work-Life Balance",
    description:
      "Flexible remote and hybrid work arrangements so you can do your best work from anywhere.",
  },
  {
    icon: Users,
    title: "Health Benefits",
    description:
      "Comprehensive health, dental, and vision coverage for you and your family.",
  },
];

/* ─── Helpers ─────────────────────────────────────────────────────────────── */

function jobTypeLabel(jt: string): string {
  switch (jt) {
    case "fullTime":
      return "Full-Time";
    case "partTime":
      return "Part-Time";
    case "contract":
      return "Contract";
    default:
      return jt;
  }
}

function jobTypeBadgeClass(jt: string): string {
  switch (jt) {
    case "fullTime":
      return "bg-brand-navy/10 text-brand-navy border-0";
    case "contract":
      return "bg-brand-gold/20 text-amber-800 border-0";
    case "partTime":
      return "bg-brand-red/10 text-brand-red border-0";
    default:
      return "bg-muted text-muted-foreground border-0";
  }
}

/* ─── Animation variants ──────────────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ─── Job Card ────────────────────────────────────────────────────────────── */

type JobCardData = {
  id: string;
  title: string;
  jobType: string;
  department: string;
  location: string;
  description: string;
  requirements: string[];
};

function JobCard({ job, index }: { job: JobCardData; index: number }) {
  return (
    <motion.div key={job.id} variants={itemVariants}>
      <Card
        className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card"
        data-ocid={`careers.jobs.item.${index + 1}`}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <CardTitle className="font-display text-xl text-brand-navy">
              {job.title}
            </CardTitle>
            <Badge
              variant="secondary"
              className={jobTypeBadgeClass(job.jobType)}
            >
              {jobTypeLabel(job.jobType)}
            </Badge>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Building2 size={14} className="text-brand-red" />
              {job.department}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-brand-red" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-brand-red" />
              {jobTypeLabel(job.jobType)}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {job.description}
          </p>
          {job.requirements && job.requirements.length > 0 && (
            <div>
              <p className="text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Requirements
              </p>
              <ul className="flex flex-wrap gap-2">
                {job.requirements.map((req) => (
                  <li key={req}>
                    <Badge
                      variant="outline"
                      className="text-xs border-border text-muted-foreground"
                    >
                      {req}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-4">
            <Link
              to="/contact"
              data-ocid={`careers.jobs.apply.button.${index + 1}`}
            >
              <Button
                size="sm"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-display font-semibold"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function CareersPage() {
  const { data: jobs, isLoading, isError } = useActiveJobListings();

  const displayJobs: JobCardData[] =
    !isLoading && !isError && (!jobs || jobs.length === 0)
      ? PLACEHOLDER_JOBS
      : (jobs ?? []).map((j) => ({
          id: j.title,
          title: j.title,
          jobType: j.jobType,
          department: j.department,
          location: j.location,
          description: j.description,
          requirements: j.requirements,
        }));

  return (
    <div>
      {/* ── Page Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative bg-brand-navy overflow-hidden py-20 lg:py-28"
        data-ocid="careers.hero.section"
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 75% 50%, oklch(0.52 0.22 18 / 0.6), transparent 60%)",
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
            Career Opportunities
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Build your career with EL-Shaddai Technologies Inc. We connect
            exceptional IT talent with industry-leading opportunities across the
            USA.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" data-ocid="careers.hero.apply.button">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-display font-bold shadow-lg px-10"
              >
                View Open Roles <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact" data-ocid="careers.hero.contact.button">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 font-display font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── We Are Hiring Banner ──────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-20 bg-background"
        data-ocid="careers.hiring.section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Banner image */}
            <img
              src={hiringBanner as string}
              alt="EL-Shaddai Technologies — We Are Hiring"
              className="w-full object-cover"
              style={{ maxHeight: "500px", minHeight: "260px" }}
              loading="eager"
            />
            {/* Overlay with content */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,26,60,0.82) 0%, rgba(180,28,28,0.55) 60%, rgba(0,26,60,0.50) 100%)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-brand-gold mb-4">
                  Now Recruiting
                </span>
                <h2 className="font-display font-bold text-white text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight drop-shadow-lg">
                  We Are Hiring!
                </h2>
                <p className="text-white/85 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                  EL-Shaddai Technologies Inc is growing fast. We're looking for
                  talented IT professionals ready to make an impact. Join a team
                  that values expertise, innovation, and excellence.
                </p>
                <Link to="/contact" data-ocid="careers.hiring.apply.button">
                  <Button
                    size="lg"
                    className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-display font-bold shadow-lg px-10"
                  >
                    Apply Today <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Job Listings ─────────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24 bg-brand-light"
        data-ocid="careers.jobs.section"
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
              Open Positions
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-brand-navy mb-4">
              Current Opportunities
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore our open roles and find your next career move with
              EL-Shaddai Technologies Inc.
            </p>
          </motion.div>

          {isLoading && (
            <div className="space-y-4" data-ocid="careers.loading_state">
              {Array.from({ length: 3 }).map((_, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholder
                <Card key={i} className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <Skeleton className="h-6 w-48 mb-2" />
                    <div className="flex gap-2">
                      <Skeleton className="h-5 w-20" />
                      <Skeleton className="h-5 w-24" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-12 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {isError && (
            <div className="text-center py-12" data-ocid="careers.error_state">
              <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <Briefcase size={28} className="text-destructive/50" />
              </div>
              <p className="text-destructive font-medium">
                Failed to load job listings. Showing featured positions.
              </p>
            </div>
          )}

          {!isLoading && displayJobs.length > 0 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {displayJobs.map((job, i) => (
                <JobCard key={job.id} job={job} index={i} />
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-10"
          >
            <p className="text-muted-foreground mb-4">
              Don't see a role that fits? Send us your resume anyway!
            </p>
            <Link to="/contact" data-ocid="careers.general.apply.button">
              <Button
                variant="outline"
                className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-display font-semibold transition-colors duration-200"
              >
                Get in Touch <ArrowRight size={16} className="ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24 bg-background"
        data-ocid="careers.benefits.section"
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
              Why Join Us
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-brand-navy mb-4">
              Benefits &amp; Perks
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We invest in our people. Here's what you can expect when you join
              the EL-Shaddai Technologies Inc family.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={benefit.title} variants={itemVariants}>
                  <Card
                    className="border border-border/60 bg-card h-full hover:border-brand-red/30 hover:shadow-md transition-all duration-300"
                    data-ocid={`careers.benefit.${benefit.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <CardContent className="pt-8 pb-6 px-6 flex flex-col items-start">
                      <div className="w-12 h-12 rounded-xl bg-brand-navy/10 flex items-center justify-center mb-4">
                        <Icon size={22} className="text-brand-navy" />
                      </div>
                      <h3 className="font-display font-bold text-brand-navy text-lg mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CTA strip ────────────────────────────────────────────────────── */}
      <section
        className="py-14"
        style={{
          background:
            "linear-gradient(90deg, #001A3C 0%, #B41C1C 60%, #C9A227 100%)",
        }}
        data-ocid="careers.cta.section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-1">
              Ready to take the next step?
            </h2>
            <p className="text-white/70">
              Join EL-Shaddai Technologies Inc and build a career that matters.
            </p>
          </div>
          <Link to="/contact" data-ocid="careers.cta.apply.button">
            <Button
              size="lg"
              className="bg-white text-brand-navy hover:bg-white/90 font-display font-bold whitespace-nowrap shadow-lg"
            >
              <Award size={18} className="mr-2" />
              Apply Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
