import type { backendInterface } from "../backend";

const now = BigInt(Date.now()) * BigInt(1_000_000);

export const mockBackend: backendInterface = {
  createJobListing: async () => BigInt(0),
  createProductListing: async () => BigInt(0),
  deleteJobListing: async () => undefined,
  deleteProductListing: async () => undefined,
  getActiveJobListings: async () => [
    {
      id: BigInt(0),
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote / New Jersey",
      jobType: "Full-time",
      description:
        "We are looking for an experienced Senior Software Engineer to join our team and help build scalable, high-performance applications.",
      requirements: [
        "5+ years of software development experience",
        "Proficiency in Java, Python, or JavaScript",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and communication skills",
      ],
      isActive: true,
      createdAt: now,
    },
    {
      id: BigInt(1),
      title: "IT Staffing Consultant",
      department: "Staffing",
      location: "New Jersey, NJ",
      jobType: "Full-time",
      description:
        "Join our staffing division and help connect top IT talent with leading organizations across the country.",
      requirements: [
        "3+ years of IT staffing or recruiting experience",
        "Strong network in the technology industry",
        "Excellent communication and negotiation skills",
      ],
      isActive: true,
      createdAt: now,
    },
  ],
  getActiveProductListings: async () => [
    {
      id: BigInt(0),
      name: "TalentBridge ATS",
      description:
        "A powerful applicant tracking system designed specifically for IT staffing agencies to streamline the recruitment lifecycle.",
      features: [
        "Automated candidate matching",
        "Resume parsing and ranking",
        "Client portal integration",
        "Interview scheduling automation",
        "Real-time analytics dashboard",
      ],
      price: "Contact for pricing",
      isActive: true,
      createdAt: now,
    },
    {
      id: BigInt(1),
      name: "StaffSync HR Portal",
      description:
        "A comprehensive HR management portal that connects contractors, clients, and staffing managers in one unified platform.",
      features: [
        "Timesheet management",
        "Compliance tracking",
        "Payroll integration",
        "Document management",
      ],
      price: "Starting at $299/month",
      isActive: true,
      createdAt: now,
    },
  ],
  getAllContentBlocks: async () => [
    {
      key: "home_hero_title",
      title: "Welcome",
      content: "Empowering Businesses with Innovative IT Solutions",
      updatedAt: now,
    },
    {
      key: "home_hero_subtitle",
      title: "Tagline",
      content:
        "Your trusted partner for IT staffing, consulting, and technology services",
      updatedAt: now,
    },
  ],
  getAllJobListings: async () => [],
  getAllProductListings: async () => [],
  getContactSubmissions: async () => [],
  getContentBlock: async () => null,
  seedDefaultContent: async () => undefined,
  submitContactForm: async () => undefined,
  updateContentBlock: async () => undefined,
  updateJobListing: async () => undefined,
  updateProductListing: async () => undefined,
};
