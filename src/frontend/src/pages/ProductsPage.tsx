import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  LayoutDashboard,
  Package,
  Wrench,
} from "lucide-react";
import { type Variants, motion } from "motion/react";
import type { ProductListing } from "../hooks/useQueries";
import { useActiveProductListings } from "../hooks/useQueries";

// ── Static placeholder cards shown when backend has no products yet ──────
type ProductWithIcon = ProductListing & { icon: React.ElementType };
const PLACEHOLDER_PRODUCTS: ProductWithIcon[] = [
  {
    id: BigInt(0),
    createdAt: BigInt(0),
    name: "SaaS Talent Platform",
    price: "Contact for pricing",
    description:
      "A cloud-native platform for managing your entire IT talent pipeline — from requisition to onboarding. Real-time dashboards, compliance tracking, and seamless ATS integrations keep your hiring teams aligned.",
    features: [
      "Automated candidate sourcing & screening",
      "Compliance and onboarding workflows",
      "ATS and HRIS integrations",
      "Analytics and hiring velocity reports",
    ],
    isActive: true,
    icon: Bot,
  },
  {
    id: BigInt(1),
    createdAt: BigInt(0),
    name: "Analytics Dashboard",
    price: "Contact for pricing",
    description:
      "Transform your workforce and project data into actionable insights. Interactive charts, customizable KPIs, and scheduled reports empower leaders to make faster, data-driven decisions.",
    features: [
      "Live workforce utilization metrics",
      "Customizable KPI dashboards",
      "Scheduled PDF/CSV report exports",
      "Role-based data access controls",
    ],
    isActive: true,
    icon: BarChart3,
  },
  {
    id: BigInt(2),
    createdAt: BigInt(0),
    name: "Consulting Toolkit",
    price: "Contact for pricing",
    description:
      "A structured methodology and digital toolset for IT consulting projects. Covers discovery, solutioning, delivery tracking, and client communication — all in one collaborative workspace.",
    features: [
      "Project templates and playbooks",
      "Client portal with milestone tracking",
      "Resource allocation planning board",
      "Statement of Work generator",
    ],
    isActive: true,
    icon: Wrench,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ICON_MAP: React.ElementType[] = [
  LayoutDashboard,
  BarChart3,
  Wrench,
  Bot,
  Package,
];

function ProductCard({
  product,
  index,
  icon: Icon,
}: {
  product: ProductListing;
  index: number;
  icon?: React.ElementType;
}) {
  const CardIcon = Icon ?? ICON_MAP[index % ICON_MAP.length];
  return (
    <motion.div variants={itemVariants} className="flex">
      <Card
        className="flex flex-col h-full w-full border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-card"
        data-ocid={`products.item.${index + 1}`}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2 mb-3">
            <div className="w-11 h-11 rounded-xl bg-brand-red/10 flex items-center justify-center shrink-0">
              <CardIcon size={20} className="text-brand-red" />
            </div>
            <Badge
              variant="secondary"
              className="text-xs bg-brand-navy/10 text-brand-navy border-0 font-medium"
            >
              Available
            </Badge>
          </div>
          <CardTitle className="font-display text-lg leading-snug text-brand-navy">
            {product.name}
          </CardTitle>
          {product.price && (
            <p className="text-sm text-brand-red font-semibold">
              {product.price}
            </p>
          )}
        </CardHeader>

        <CardContent className="flex-1 pb-4">
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            {product.description}
          </p>
          {product.features && product.features.length > 0 && (
            <div>
              <p className="text-xs font-display font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Key Features
              </p>
              <ul className="space-y-2">
                {product.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className="text-brand-red mt-0.5 shrink-0"
                    />
                    <span className="text-xs text-foreground leading-relaxed">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>

        <CardFooter className="pt-0">
          <Button
            asChild
            className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold group"
            data-ocid={`products.learn_more_button.${index + 1}`}
          >
            <Link to="/contact">
              Learn More
              <ArrowRight
                size={15}
                className="ml-1.5 group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default function ProductsPage() {
  const { data: products, isLoading, isError } = useActiveProductListings();
  const hasProducts = !isLoading && !isError && products && products.length > 0;
  const isEmpty =
    !isLoading && !isError && (!products || products.length === 0);

  return (
    <div>
      {/* ── Page Header ───────────────────────────────────────────────────── */}
      <section
        className="relative bg-brand-navy text-white overflow-hidden py-20 lg:py-28"
        data-ocid="products.hero.section"
      >
        {/* Subtle decorative gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-display font-bold uppercase tracking-widest text-brand-gold mb-4">
              EL-Shaddai Technologies Inc
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 max-w-3xl leading-tight">
              Our Products
            </h1>
            <p className="text-white/75 max-w-xl text-lg leading-relaxed">
              Purpose-built technology products and platform solutions designed
              to accelerate your business and talent operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Products Grid ─────────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24 bg-brand-light"
        data-ocid="products.list.section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              Innovative solutions to streamline your technology operations,
              talent management, and business intelligence.
            </p>
          </motion.div>

          {/* Loading skeletons */}
          {isLoading && (
            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
              data-ocid="products.loading_state"
            >
              {Array.from({ length: 3 }).map((_, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholder
                <Card key={i} className="border border-border bg-card">
                  <CardHeader className="pb-2">
                    <Skeleton className="h-11 w-11 rounded-xl mb-3" />
                    <Skeleton className="h-5 w-36 mb-2" />
                    <Skeleton className="h-4 w-44" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-16 w-full mb-5" />
                    <div className="space-y-2">
                      <Skeleton className="h-3.5 w-full" />
                      <Skeleton className="h-3.5 w-5/6" />
                      <Skeleton className="h-3.5 w-4/5" />
                      <Skeleton className="h-3.5 w-3/4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Error state */}
          {isError && (
            <div
              className="text-center py-16 bg-card rounded-2xl border border-border"
              data-ocid="products.error_state"
            >
              <Package
                size={36}
                className="text-muted-foreground/40 mx-auto mb-4"
              />
              <p className="text-destructive font-semibold mb-1">
                Unable to load products
              </p>
              <p className="text-muted-foreground text-sm">
                Please refresh the page and try again.
              </p>
            </div>
          )}

          {/* Placeholder cards when backend is empty */}
          {isEmpty && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
              data-ocid="products.empty_state"
            >
              {PLACEHOLDER_PRODUCTS.map((product, i) => (
                <ProductCard
                  key={product.name}
                  product={product}
                  index={i}
                  icon={product.icon}
                />
              ))}
            </motion.div>
          )}

          {/* Live products from backend */}
          {hasProducts && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {products.map((product, i) => (
                <ProductCard
                  key={`${product.name}-${i}`}
                  product={product}
                  index={i}
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── CTA Section ───────────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24 bg-background"
        data-ocid="products.cta.section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <Separator className="mb-16" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center mx-auto mb-6">
              <Package size={24} className="text-brand-red" />
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
              Interested in Our Solutions?
            </h2>
            <p className="text-muted-foreground mb-8 text-base leading-relaxed">
              Our team is ready to demo any of our products and tailor a
              solution to your specific business needs. Reach out today to get
              started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-8 group"
                data-ocid="products.contact_cta_button"
              >
                <Link to="/contact">
                  Contact Us
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-bold px-8"
                data-ocid="products.services_link_button"
              >
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
