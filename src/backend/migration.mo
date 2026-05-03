import Map "mo:core/Map";
import Time "mo:core/Time";

module {
  // ── Old types (from previous canister version) ──────────────────────────────

  type OldContentBlock = {
    page : Text;
    section : Text;
    value : Text;
  };

  type OldJobType = { #fullTime; #partTime; #contract };

  type OldJobListing = {
    title : Text;
    department : Text;
    location : Text;
    jobType : OldJobType;
    description : Text;
    requirements : [Text];
    isActive : Bool;
  };

  type OldProductListing = {
    name : Text;
    tagline : Text;
    description : Text;
    features : [Text];
    isActive : Bool;
  };

  type OldContactSubmission = {
    name : Text;
    email : Text;
    phone : ?Text;
    message : Text;
    timestamp : Time.Time;
  };

  // ── New types ────────────────────────────────────────────────────────────────

  type NewContentBlock = {
    key : Text;
    title : Text;
    content : Text;
    updatedAt : Time.Time;
  };

  type NewContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    subject : Text;
    message : Text;
    createdAt : Time.Time;
  };

  type NewJobListing = {
    id : Nat;
    title : Text;
    department : Text;
    location : Text;
    jobType : Text;
    description : Text;
    requirements : [Text];
    isActive : Bool;
    createdAt : Time.Time;
  };

  type NewProductListing = {
    id : Nat;
    name : Text;
    description : Text;
    features : [Text];
    price : Text;
    isActive : Bool;
    createdAt : Time.Time;
  };

  // ── Migration input / output ────────────────────────────────────────────────

  type OldActor = {
    contentBlocks : Map.Map<Text, OldContentBlock>;
    contactSubmissions : Map.Map<Text, OldContactSubmission>;
    jobListings : Map.Map<Text, OldJobListing>;
    productListings : Map.Map<Text, OldProductListing>;
    var nextContactId : Nat;
  };

  type NewActor = {
    contentBlocks : Map.Map<Text, NewContentBlock>;
    contactSubmissions : Map.Map<Nat, NewContactSubmission>;
    jobListings : Map.Map<Nat, NewJobListing>;
    productListings : Map.Map<Nat, NewProductListing>;
    var nextContactId : Nat;
    var nextJobId : Nat;
    var nextProductId : Nat;
  };

  public func run(old : OldActor) : NewActor {
    // Migrate contentBlocks: map old shape to new shape
    let contentBlocks = old.contentBlocks.map<Text, OldContentBlock, NewContentBlock>(
      func(key, cb) {
        {
          key;
          title = cb.section;
          content = cb.value;
          updatedAt = 0;
        }
      }
    );

    // Migrate contactSubmissions: old key was Text (e.g. "0", "1"); rebuild as Nat map
    var nextContact : Nat = 0;
    let contactSubmissions = Map.empty<Nat, NewContactSubmission>();
    for ((_, sub) in old.contactSubmissions.entries()) {
      contactSubmissions.add(nextContact, {
        id = nextContact;
        name = sub.name;
        email = sub.email;
        phone = switch (sub.phone) { case (?p) p; case null "" };
        subject = "";
        message = sub.message;
        createdAt = sub.timestamp;
      });
      nextContact += 1;
    };

    // Migrate jobListings: old key was title (Text); rebuild as Nat map
    var nextJob : Nat = 0;
    let jobListings = Map.empty<Nat, NewJobListing>();
    for ((_, job) in old.jobListings.entries()) {
      let jobTypeText = switch (job.jobType) {
        case (#fullTime) "Full-time";
        case (#partTime) "Part-time";
        case (#contract) "Contract";
      };
      jobListings.add(nextJob, {
        id = nextJob;
        title = job.title;
        department = job.department;
        location = job.location;
        jobType = jobTypeText;
        description = job.description;
        requirements = job.requirements;
        isActive = job.isActive;
        createdAt = 0;
      });
      nextJob += 1;
    };

    // Migrate productListings: old key was name (Text); rebuild as Nat map
    var nextProduct : Nat = 0;
    let productListings = Map.empty<Nat, NewProductListing>();
    for ((_, prod) in old.productListings.entries()) {
      productListings.add(nextProduct, {
        id = nextProduct;
        name = prod.name;
        description = prod.description;
        features = prod.features;
        price = "Contact for pricing";
        isActive = prod.isActive;
        createdAt = 0;
      });
      nextProduct += 1;
    };

    {
      contentBlocks;
      contactSubmissions;
      jobListings;
      productListings;
      var nextContactId = nextContact;
      var nextJobId = nextJob;
      var nextProductId = nextProduct;
    };
  };
};
