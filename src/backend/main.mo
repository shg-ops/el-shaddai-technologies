import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Migration "migration";

(with migration = Migration.run)
actor {

  // ── Types ──────────────────────────────────────────────────────────────────

  type ContentBlock = {
    key : Text;
    title : Text;
    content : Text;
    updatedAt : Time.Time;
  };

  type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    subject : Text;
    message : Text;
    createdAt : Time.Time;
  };

  type JobListing = {
    id : Nat;
    title : Text;
    department : Text;
    location : Text;
    jobType : Text; // "Full-time" | "Part-time" | "Contract"
    description : Text;
    requirements : [Text];
    isActive : Bool;
    createdAt : Time.Time;
  };

  type ProductListing = {
    id : Nat;
    name : Text;
    description : Text;
    features : [Text];
    price : Text;
    isActive : Bool;
    createdAt : Time.Time;
  };

  // ── State ──────────────────────────────────────────────────────────────────

  let contentBlocks = Map.empty<Text, ContentBlock>();
  let contactSubmissions = Map.empty<Nat, ContactSubmission>();
  let jobListings = Map.empty<Nat, JobListing>();
  let productListings = Map.empty<Nat, ProductListing>();

  var nextContactId : Nat = 0;
  var nextJobId : Nat = 0;
  var nextProductId : Nat = 0;

  // ── Auth ───────────────────────────────────────────────────────────────────

  // Any authenticated (non-anonymous) Internet Identity user has admin access.
  func requireAuth(caller : Principal) {
    if (caller.isAnonymous()) {
      Runtime.trap("Unauthorized: You must be signed in to perform this action");
    };
  };

  // ── Content Blocks ─────────────────────────────────────────────────────────

  public shared ({ caller }) func updateContentBlock(key : Text, title : Text, content : Text) : async () {
    requireAuth(caller);
    let block : ContentBlock = { key; title; content; updatedAt = Time.now() };
    contentBlocks.add(key, block);
  };

  public query func getContentBlock(key : Text) : async ?ContentBlock {
    contentBlocks.get(key);
  };

  public query func getAllContentBlocks() : async [ContentBlock] {
    contentBlocks.values().toArray();
  };

  // ── Contact Submissions ────────────────────────────────────────────────────

  public shared func submitContactForm(name : Text, email : Text, phone : Text, subject : Text, message : Text) : async () {
    let id = nextContactId;
    nextContactId += 1;
    let submission : ContactSubmission = {
      id;
      name;
      email;
      phone;
      subject;
      message;
      createdAt = Time.now();
    };
    contactSubmissions.add(id, submission);
  };

  public query ({ caller }) func getContactSubmissions() : async [ContactSubmission] {
    requireAuth(caller);
    contactSubmissions.values().toArray();
  };

  // ── Job Listings ───────────────────────────────────────────────────────────

  public shared ({ caller }) func createJobListing(
    title : Text,
    department : Text,
    location : Text,
    jobType : Text,
    description : Text,
    requirements : [Text],
  ) : async Nat {
    requireAuth(caller);
    let id = nextJobId;
    nextJobId += 1;
    let listing : JobListing = {
      id;
      title;
      department;
      location;
      jobType;
      description;
      requirements;
      isActive = true;
      createdAt = Time.now();
    };
    jobListings.add(id, listing);
    id;
  };

  public shared ({ caller }) func updateJobListing(
    id : Nat,
    title : Text,
    department : Text,
    location : Text,
    jobType : Text,
    description : Text,
    requirements : [Text],
    isActive : Bool,
  ) : async () {
    requireAuth(caller);
    switch (jobListings.get(id)) {
      case null { Runtime.trap("Job listing not found") };
      case (?existing) {
        let updated : JobListing = {
          existing with
          title;
          department;
          location;
          jobType;
          description;
          requirements;
          isActive;
        };
        jobListings.add(id, updated);
      };
    };
  };

  public shared ({ caller }) func deleteJobListing(id : Nat) : async () {
    requireAuth(caller);
    switch (jobListings.get(id)) {
      case null { Runtime.trap("Job listing not found") };
      case (?_) { jobListings.remove(id) };
    };
  };

  public query func getActiveJobListings() : async [JobListing] {
    jobListings.values().filter(func(j) { j.isActive }).toArray();
  };

  public query ({ caller }) func getAllJobListings() : async [JobListing] {
    requireAuth(caller);
    jobListings.values().toArray();
  };

  // ── Product Listings ───────────────────────────────────────────────────────

  public shared ({ caller }) func createProductListing(
    name : Text,
    description : Text,
    features : [Text],
    price : Text,
  ) : async Nat {
    requireAuth(caller);
    let id = nextProductId;
    nextProductId += 1;
    let listing : ProductListing = {
      id;
      name;
      description;
      features;
      price;
      isActive = true;
      createdAt = Time.now();
    };
    productListings.add(id, listing);
    id;
  };

  public shared ({ caller }) func updateProductListing(
    id : Nat,
    name : Text,
    description : Text,
    features : [Text],
    price : Text,
    isActive : Bool,
  ) : async () {
    requireAuth(caller);
    switch (productListings.get(id)) {
      case null { Runtime.trap("Product listing not found") };
      case (?existing) {
        let updated : ProductListing = {
          existing with
          name;
          description;
          features;
          price;
          isActive;
        };
        productListings.add(id, updated);
      };
    };
  };

  public shared ({ caller }) func deleteProductListing(id : Nat) : async () {
    requireAuth(caller);
    switch (productListings.get(id)) {
      case null { Runtime.trap("Product listing not found") };
      case (?_) { productListings.remove(id) };
    };
  };

  public query func getActiveProductListings() : async [ProductListing] {
    productListings.values().filter(func(p) { p.isActive }).toArray();
  };

  public query ({ caller }) func getAllProductListings() : async [ProductListing] {
    requireAuth(caller);
    productListings.values().toArray();
  };

  // ── Seed Default Content ───────────────────────────────────────────────────

  public shared ({ caller }) func seedDefaultContent() : async () {
    requireAuth(caller);

    // Content blocks
    let seeds : [(Text, Text, Text)] = [
      ("home_hero_title", "Welcome", "Empowering Businesses with Innovative IT Solutions"),
      ("home_hero_subtitle", "Tagline", "Your trusted partner for IT staffing, consulting, and technology services"),
      ("about_body", "About Us", "EL-Shaddai Technologies Inc is a professional IT staffing and consulting company with over 20 years of experience delivering innovative solutions to Fortune 500 companies and growing businesses alike."),
      ("services_intro", "Our Services", "We offer a comprehensive range of IT services including staffing, consulting, project management, and technology solutions tailored to your business needs."),
      ("products_intro", "Our Products", "Explore our innovative software products designed to boost your business productivity and efficiency."),
      ("careers_intro", "Join Our Team", "We are always looking for talented professionals to join our growing team. Explore opportunities and take your career to the next level."),
      ("contact_intro", "Contact Us", "Get in touch with us for all your IT staffing and consulting needs. We are here to help."),
      ("whyus_intro", "Why Choose Us", "With decades of experience, a proven track record, and a commitment to excellence, EL-Shaddai Technologies Inc stands apart from the competition."),
    ];

    for ((key, title, content) in seeds.vals()) {
      contentBlocks.add(key, { key; title; content; updatedAt = Time.now() });
    };

    // Default job listings
    let jobs : [(Text, Text, Text, Text, Text, [Text])] = [
      (
        "Senior Software Engineer",
        "Engineering",
        "Remote / New Jersey",
        "Full-time",
        "We are looking for an experienced Senior Software Engineer to join our team and help build scalable, high-performance applications.",
        ["5+ years of software development experience", "Proficiency in Java, Python, or JavaScript", "Experience with cloud platforms (AWS, Azure, GCP)", "Strong problem-solving and communication skills"],
      ),
      (
        "IT Staffing Consultant",
        "Staffing",
        "New Jersey, NJ",
        "Full-time",
        "Join our staffing division and help connect top IT talent with leading organizations across the country.",
        ["3+ years of IT staffing or recruiting experience", "Strong network in the technology industry", "Excellent communication and negotiation skills", "Experience with ATS systems"],
      ),
      (
        "Project Manager",
        "Delivery",
        "Hybrid - New Jersey",
        "Contract",
        "We need a skilled Project Manager to oversee technology implementation projects for our enterprise clients.",
        ["PMP certification preferred", "5+ years of IT project management experience", "Experience with Agile and Waterfall methodologies", "Strong stakeholder management skills"],
      ),
    ];

    for ((title, department, location, jobType, description, requirements) in jobs.vals()) {
      let id = nextJobId;
      nextJobId += 1;
      jobListings.add(id, {
        id;
        title;
        department;
        location;
        jobType;
        description;
        requirements;
        isActive = true;
        createdAt = Time.now();
      });
    };

    // Default product listings
    let products : [(Text, Text, [Text], Text)] = [
      (
        "TalentBridge ATS",
        "A powerful applicant tracking system designed specifically for IT staffing agencies to streamline the recruitment lifecycle.",
        ["Automated candidate matching", "Resume parsing and ranking", "Client portal integration", "Interview scheduling automation", "Real-time analytics dashboard"],
        "Contact for pricing",
      ),
      (
        "StaffSync HR Portal",
        "A comprehensive HR management portal that connects contractors, clients, and staffing managers in one unified platform.",
        ["Timesheet management", "Compliance tracking", "Payroll integration", "Document management", "Performance reviews"],
        "Starting at $299/month",
      ),
      (
        "CloudDesk IT Service Management",
        "Enterprise-grade IT service management solution to track, manage, and resolve IT incidents and service requests efficiently.",
        ["ITSM ticketing system", "Asset management", "SLA monitoring", "Knowledge base", "Mobile app support"],
        "Starting at $199/month",
      ),
    ];

    for ((name, description, features, price) in products.vals()) {
      let id = nextProductId;
      nextProductId += 1;
      productListings.add(id, {
        id;
        name;
        description;
        features;
        price;
        isActive = true;
        createdAt = Time.now();
      });
    };
  };
};
