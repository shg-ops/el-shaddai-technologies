import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  CheckCircle2,
  Clock,
  HelpCircle,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContactForm } from "../hooks/useQueries";

const SUBJECTS = [
  "IT Staffing & Recruitment",
  "Technology Solutions",
  "Partnership Inquiry",
  "Career Opportunities",
  "General Inquiry",
  "Other",
];

const FAQS = [
  {
    q: "What types of IT roles do you specialize in placing?",
    a: "EL-Shaddai Technologies specializes in placing professionals across the full IT spectrum — software engineers, cloud architects, DevOps engineers, data scientists, cybersecurity analysts, ERP consultants (SAP, Oracle), and IT project managers. We serve both contract and permanent positions at Fortune 500 companies and fast-growing startups.",
  },
  {
    q: "How quickly can you source qualified candidates?",
    a: "Our average time-to-submit for qualified shortlists is 24–72 hours for active roles. We maintain a pre-vetted talent pool of thousands of IT professionals, which allows us to respond quickly to urgent staffing needs. For specialized or senior-level roles, we typically deliver a curated shortlist within 5 business days.",
  },
  {
    q: "Do you work with candidates on H1B or other work visas?",
    a: "Yes. We have extensive experience working with professionals on H1B, OPT, EAD, TN, and L1 visas. Our team is well-versed in immigration compliance, and we partner with trusted immigration attorneys to assist both candidates and client companies as needed.",
  },
  {
    q: "What industries and geographies do you serve?",
    a: "We serve clients across healthcare, finance, insurance, retail, manufacturing, and the public sector nationwide. While our headquarters are in New Jersey, we place talent across the continental United States and support remote, hybrid, and on-site engagements.",
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = useSubmitContactForm();

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Full name is required.";
    if (!form.email.trim()) {
      next.email = "Email address is required.";
    } else if (!isValidEmail(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.subject) next.subject = "Please select a subject.";
    if (!form.message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await submitMutation.mutateAsync({
        name: form.name,
        email: form.email,
        phone: form.phone || "",
        subject: form.subject,
        message: form.message,
      });
      setSubmitted(true);
      toast.success("Message sent! We'll be in touch within 24 hours.");
    } catch {
      toast.error("Failed to send. Please email us directly.");
    }
  };

  const field = (key: keyof FormState, val: string) => {
    setForm((p) => ({ ...p, [key]: val }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
  };

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative py-20 lg:py-32 bg-brand-navy text-white overflow-hidden"
        data-ocid="contact.hero.section"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-red/30 opacity-80" />
        <div className="absolute inset-0 bg-texture opacity-30" />
        <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-4 bg-brand-gold/20 text-brand-gold border-brand-gold/30 font-display uppercase tracking-widest text-xs">
              Get In Touch
            </Badge>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6 max-w-2xl">
              Contact Us
            </h1>
            <p className="text-white/80 max-w-xl text-lg leading-relaxed">
              Whether you need to fill a critical role, explore our technology
              solutions, or simply want to learn more — we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Section ──────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24 bg-brand-light"
        data-ocid="contact.main.section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* ── Left: Contact Info ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-brand-red mb-2">
                  Contact Information
                </span>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-brand-navy">
                  Reach Out to Us
                </h2>
              </div>

              {/* Person card */}
              <Card className="border-0 shadow-lg bg-brand-navy text-white">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-brand-red/20 border-2 border-brand-gold/40 flex items-center justify-center shrink-0">
                      <span className="font-display text-xl font-bold text-brand-gold">
                        SC
                      </span>
                    </div>
                    <div>
                      <CardTitle className="font-display text-lg text-white leading-tight">
                        Shanthi Chittala
                      </CardTitle>
                      <p className="text-brand-gold text-sm font-medium">
                        Founder &amp; CEO
                      </p>
                      <p className="text-white/60 text-xs">
                        EL-Shaddai Technologies Inc
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a
                    href="tel:+17329131541"
                    className="flex items-center gap-3 group"
                    data-ocid="contact.phone.link"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-red/20 flex items-center justify-center group-hover:bg-brand-red/30 transition-colors shrink-0">
                      <Phone size={15} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wide">
                        Phone
                      </p>
                      <p className="text-white font-medium text-sm">
                        +1 732-913-1541
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:shg@el-shaddaitechnologies.com"
                    className="flex items-center gap-3 group"
                    data-ocid="contact.email.link"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-red/20 flex items-center justify-center group-hover:bg-brand-red/30 transition-colors shrink-0">
                      <Mail size={15} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wide">
                        Email
                      </p>
                      <p className="text-white font-medium text-sm break-all">
                        shg@el-shaddaitechnologies.com
                      </p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-red/20 flex items-center justify-center shrink-0">
                      <Building2 size={15} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wide">
                        Company
                      </p>
                      <p className="text-white font-medium text-sm">
                        EL-Shaddai Technologies Inc
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border border-border bg-card shadow-sm">
                <CardContent className="pt-5 pb-5">
                  <h3 className="font-display font-bold text-brand-navy mb-3 flex items-center gap-2 text-sm">
                    <Clock size={15} className="text-brand-red" />
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    {[
                      ["Monday – Friday", "9:00 AM – 6:00 PM EST"],
                      ["Saturday", "10:00 AM – 2:00 PM EST"],
                      ["Sunday", "Closed"],
                    ].map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span>{day}</span>
                        <span
                          className={
                            hours === "Closed"
                              ? "text-muted-foreground"
                              : "font-medium text-foreground"
                          }
                        >
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Address card */}
              <Card className="border border-border bg-card shadow-sm">
                <CardContent className="pt-5 pb-5">
                  <h3 className="font-display font-bold text-brand-navy mb-3 flex items-center gap-2 text-sm">
                    <MapPin size={15} className="text-brand-red" />
                    Location
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    EL-Shaddai Technologies Inc
                    <br />
                    New Jersey, United States
                  </p>
                  <Separator className="my-3" />
                  <div className="rounded-lg overflow-hidden bg-muted h-32 flex items-center justify-center border border-border">
                    <div className="text-center text-muted-foreground">
                      <MapPin size={20} className="mx-auto mb-1 opacity-40" />
                      <p className="text-xs opacity-60">New Jersey, USA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social links */}
              <Card className="border border-border bg-card shadow-sm">
                <CardContent className="pt-5 pb-5">
                  <h3 className="font-display font-bold text-brand-navy mb-3 text-sm">
                    Connect With Us
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/company/el-shaddai-technologies-inc"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid="contact.linkedin.link"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-navy/5 border border-brand-navy/10 text-brand-navy hover:bg-brand-navy hover:text-white transition-colors text-xs font-display font-semibold"
                    >
                      <Linkedin size={14} />
                      LinkedIn
                    </a>
                    <a
                      href="mailto:shg@el-shaddaitechnologies.com"
                      data-ocid="contact.email.social_link"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-red/5 border border-brand-red/10 text-brand-red hover:bg-brand-red hover:text-white transition-colors text-xs font-display font-semibold"
                    >
                      <Mail size={14} />
                      Email Us
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ── Right: Contact Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <Card className="border-0 shadow-lg bg-card">
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-brand-navy">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Fill in the form below and we'll get back to you within 24
                    hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-14"
                      data-ocid="contact.form.success_state"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 size={32} className="text-green-600" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-brand-navy mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                        Thank you for reaching out. Shanthi or a team member
                        will respond within 24 hours.
                      </p>
                      <Button
                        variant="outline"
                        data-ocid="contact.form.reset_button"
                        onClick={() => {
                          setSubmitted(false);
                          setForm(EMPTY_FORM);
                          setErrors({});
                        }}
                        className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-display font-semibold"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      data-ocid="contact.form.panel"
                      noValidate
                    >
                      {/* Name + Email */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="contact-name"
                            className="font-display font-medium text-sm"
                          >
                            Full Name <span className="text-brand-red">*</span>
                          </Label>
                          <div className="relative">
                            <User
                              size={15}
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                            />
                            <Input
                              id="contact-name"
                              data-ocid="contact.name.input"
                              placeholder="Jane Smith"
                              value={form.name}
                              onChange={(e) => field("name", e.target.value)}
                              className="pl-9"
                              aria-invalid={!!errors.name}
                            />
                          </div>
                          {errors.name && (
                            <p
                              className="text-xs text-destructive"
                              data-ocid="contact.name.field_error"
                            >
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <Label
                            htmlFor="contact-email"
                            className="font-display font-medium text-sm"
                          >
                            Email Address{" "}
                            <span className="text-brand-red">*</span>
                          </Label>
                          <div className="relative">
                            <Mail
                              size={15}
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                            />
                            <Input
                              id="contact-email"
                              data-ocid="contact.email.input"
                              type="email"
                              placeholder="jane@company.com"
                              value={form.email}
                              onChange={(e) => field("email", e.target.value)}
                              className="pl-9"
                              aria-invalid={!!errors.email}
                            />
                          </div>
                          {errors.email && (
                            <p
                              className="text-xs text-destructive"
                              data-ocid="contact.email.field_error"
                            >
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="contact-phone"
                          className="font-display font-medium text-sm"
                        >
                          Phone Number{" "}
                          <span className="text-muted-foreground text-xs">
                            (Optional)
                          </span>
                        </Label>
                        <div className="relative">
                          <Phone
                            size={15}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                          />
                          <Input
                            id="contact-phone"
                            data-ocid="contact.phone.input"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={form.phone}
                            onChange={(e) => field("phone", e.target.value)}
                            className="pl-9"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="contact-subject"
                          className="font-display font-medium text-sm"
                        >
                          Subject <span className="text-brand-red">*</span>
                        </Label>
                        <Select
                          value={form.subject}
                          onValueChange={(v) => field("subject", v)}
                        >
                          <SelectTrigger
                            id="contact-subject"
                            data-ocid="contact.subject.select"
                            aria-invalid={!!errors.subject}
                          >
                            <SelectValue placeholder="Select a subject…" />
                          </SelectTrigger>
                          <SelectContent>
                            {SUBJECTS.map((s) => (
                              <SelectItem key={s} value={s}>
                                {s}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.subject && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="contact.subject.field_error"
                          >
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="contact-message"
                          className="font-display font-medium text-sm"
                        >
                          Message <span className="text-brand-red">*</span>
                        </Label>
                        <Textarea
                          id="contact-message"
                          data-ocid="contact.message.textarea"
                          placeholder="Tell us about your hiring needs, the roles you're looking to fill, or any questions you have…"
                          value={form.message}
                          onChange={(e) => field("message", e.target.value)}
                          className="min-h-36"
                          aria-invalid={!!errors.message}
                        />
                        {errors.message && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="contact.message.field_error"
                          >
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        data-ocid="contact.form.submit_button"
                        disabled={submitMutation.isPending}
                        className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-display font-bold gap-2 h-12"
                      >
                        {submitMutation.isPending ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send Message
                          </>
                        )}
                      </Button>

                      {submitMutation.isError && (
                        <p
                          className="text-sm text-destructive text-center"
                          data-ocid="contact.form.error_state"
                        >
                          Something went wrong. Please email us directly at{" "}
                          <a
                            href="mailto:shg@el-shaddaitechnologies.com"
                            className="underline"
                          >
                            shg@el-shaddaitechnologies.com
                          </a>
                          .
                        </p>
                      )}
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ──────────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-20 bg-muted/30"
        data-ocid="contact.faq.section"
      >
        <div className="container max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 text-brand-red font-display font-semibold text-xs uppercase tracking-widest mb-3">
              <HelpCircle size={14} />
              Frequently Asked Questions
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-brand-navy">
              Common Questions
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm leading-relaxed">
              Quick answers to questions we hear most from enterprise clients
              and candidates.
            </p>
          </motion.div>
          <Accordion
            type="single"
            collapsible
            className="space-y-3"
            data-ocid="contact.faq.list"
          >
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="border border-border rounded-xl bg-card shadow-sm px-2 data-[state=open]:border-brand-navy/30"
                data-ocid={`contact.faq.item.${i + 1}`}
              >
                <AccordionTrigger className="font-display font-semibold text-brand-navy text-sm px-2 py-4 hover:no-underline hover:text-brand-red transition-colors text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed px-2 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Bottom CTA band ──────────────────────────────────────────────── */}
      <section className="py-10 bg-brand-navy" data-ocid="contact.cta.section">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-white/80 text-sm font-display">
              Prefer to call? Reach us directly at{" "}
              <a
                href="tel:+17329131541"
                className="text-brand-gold font-bold hover:underline"
                data-ocid="contact.cta.phone_link"
              >
                +1 732-913-1541
              </a>
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/el-shaddai-technologies-inc"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.cta.linkedin_link"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white/80 hover:border-brand-gold hover:text-brand-gold transition-colors text-sm font-display font-semibold"
              >
                <Linkedin size={15} />
                Follow on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
