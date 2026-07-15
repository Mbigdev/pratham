// All content below is fictional and for demonstration only.
// No real doctors, patients, outcomes, or medical claims are represented.

export type Doctor = {
  slug: string;
  name: string;
  specialty: string;
  focus: string[];
  experience: string;
  credentials: string;
  location: string;
  languages: string[];
  bio: string;
  initials: string;
  accent: string;
};

export const doctors: Doctor[] = [
  {
    slug: "dr-elena-voss",
    name: "Dr. Elena Voss",
    specialty: "Medical Oncology",
    focus: ["Breast cancer", "Immunotherapy", "Precision medicine"],
    experience: "18+ years",
    credentials: "Board-certified in Medical Oncology (fictional)",
    location: "PRATHAM Central Campus",
    languages: ["English", "German"],
    bio: "Dr. Voss leads our breast oncology program with a focus on genomics-guided systemic therapy and coordinated survivorship care.",
    initials: "EV",
    accent: "teal",
  },
  {
    slug: "dr-marcus-lin",
    name: "Dr. Marcus Lin",
    specialty: "Radiation Oncology",
    focus: ["Stereotactic radiosurgery", "Head & neck", "Lung cancer"],
    experience: "15+ years",
    credentials: "Fellowship-trained in Radiation Oncology (fictional)",
    location: "PRATHAM Riverside",
    languages: ["English", "Mandarin"],
    bio: "Dr. Lin specializes in image-guided, high-precision radiation designed to protect healthy tissue while targeting tumors.",
    initials: "ML",
    accent: "violet",
  },
  {
    slug: "dr-amara-okafor",
    name: "Dr. Amara Okafor",
    specialty: "Surgical Oncology",
    focus: ["Robotic surgery", "Colorectal", "Hepatobiliary"],
    experience: "20+ years",
    credentials: "Board-certified Surgical Oncologist (fictional)",
    location: "PRATHAM Central Campus",
    languages: ["English", "French"],
    bio: "Dr. Okafor performs minimally invasive robotic procedures with an emphasis on faster recovery and precision resection.",
    initials: "AO",
    accent: "aqua",
  },
  {
    slug: "dr-priya-nair",
    name: "Dr. Priya Nair",
    specialty: "Pediatric Oncology",
    focus: ["Childhood leukemia", "Family-centered care", "Long-term follow-up"],
    experience: "14+ years",
    credentials: "Fellowship-trained in Pediatric Hematology-Oncology (fictional)",
    location: "PRATHAM Lakeside",
    languages: ["English", "Hindi", "Tamil"],
    bio: "Dr. Nair leads compassionate, family-centered care for young patients, coordinating support across the whole family.",
    initials: "PN",
    accent: "coral",
  },
  {
    slug: "dr-samuel-reyes",
    name: "Dr. Samuel Reyes",
    specialty: "Hematology / BMT",
    focus: ["Bone marrow transplant", "Blood cancers", "Cellular therapy"],
    experience: "17+ years",
    credentials: "Board-certified in Hematology (fictional)",
    location: "PRATHAM Central Campus",
    languages: ["English", "Spanish"],
    bio: "Dr. Reyes directs our transplant and cellular therapy program with a focus on blood cancers and long-term recovery.",
    initials: "SR",
    accent: "gold",
  },
  {
    slug: "dr-hana-kim",
    name: "Dr. Hana Kim",
    specialty: "Medical Oncology",
    focus: ["Lung cancer", "Clinical trials", "Molecular diagnostics"],
    experience: "12+ years",
    credentials: "Board-certified in Medical Oncology (fictional)",
    location: "PRATHAM Riverside",
    languages: ["English", "Korean"],
    bio: "Dr. Kim pairs advanced molecular diagnostics with access to clinical trials to expand treatment options for her patients.",
    initials: "HK",
    accent: "teal",
  },
];

export type CancerType = {
  slug: string;
  name: string;
  summary: string;
  category: "Common" | "Blood" | "Specialized" | "Pediatric";
  icon: string;
};

export const cancerTypes: CancerType[] = [
  { slug: "breast-cancer", name: "Breast Cancer", summary: "Comprehensive screening, surgery, and systemic care for all stages.", category: "Common", icon: "ribbon" },
  { slug: "lung-cancer", name: "Lung Cancer", summary: "Early detection and precision therapies for lung and airway tumors.", category: "Common", icon: "wind" },
  { slug: "colorectal-cancer", name: "Colorectal Cancer", summary: "Screening, robotic surgery, and coordinated colon and rectal care.", category: "Common", icon: "activity" },
  { slug: "prostate-cancer", name: "Prostate Cancer", summary: "Active surveillance through advanced targeted treatment options.", category: "Common", icon: "shield" },
  { slug: "blood-cancers", name: "Blood Cancers", summary: "Leukemia, lymphoma, and myeloma care including transplant.", category: "Blood", icon: "droplet" },
  { slug: "brain-spine-tumors", name: "Brain & Spine Tumors", summary: "Neuro-oncology with precision radiation and surgical expertise.", category: "Specialized", icon: "brain" },
  { slug: "gynecologic-cancers", name: "Gynecologic Cancers", summary: "Ovarian, uterine, and cervical cancer care with dedicated teams.", category: "Specialized", icon: "flower" },
  { slug: "head-neck-cancer", name: "Head & Neck Cancer", summary: "Function-preserving treatment for complex head and neck tumors.", category: "Specialized", icon: "mic" },
  { slug: "pediatric-cancers", name: "Pediatric Cancers", summary: "Gentle, family-centered care designed for children.", category: "Pediatric", icon: "baby" },
  { slug: "skin-cancer", name: "Skin Cancer", summary: "Melanoma and skin cancer care with immunotherapy options.", category: "Specialized", icon: "sun" },
  { slug: "liver-pancreatic-cancer", name: "Liver & Pancreatic Cancer", summary: "Hepatobiliary expertise for complex abdominal cancers.", category: "Specialized", icon: "hexagon" },
  { slug: "other-cancers", name: "Other Cancer Types", summary: "Sarcomas, rare tumors, and cancers of unknown primary.", category: "Specialized", icon: "plus" },
];

export type Treatment = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  accent: string;
};

export const treatments: Treatment[] = [
  {
    slug: "precision-oncology",
    name: "Precision Medicine",
    tagline: "Treatment shaped by your tumor's biology",
    description: "We use genomic profiling to match therapies to the specific characteristics of your cancer.",
    icon: "dna",
    accent: "teal",
  },
  {
    slug: "immunotherapy",
    name: "Immunotherapy",
    tagline: "Enlisting your immune system",
    description: "Advanced therapies that help your body's own defenses recognize and fight cancer cells.",
    icon: "shield-plus",
    accent: "violet",
  },
  {
    slug: "radiation-oncology",
    name: "Radiation Therapy",
    tagline: "Targeted energy, protected tissue",
    description: "Image-guided, high-precision radiation designed to treat tumors while sparing healthy tissue.",
    icon: "radiation",
    accent: "aqua",
  },
  {
    slug: "robotic-surgery",
    name: "Robotic Cancer Surgery",
    tagline: "Minimally invasive precision",
    description: "Robotic-assisted procedures that support smaller incisions and faster recovery.",
    icon: "bot",
    accent: "gold",
  },
  {
    slug: "diagnostics",
    name: "Molecular Diagnostics",
    tagline: "Answers at the molecular level",
    description: "Advanced imaging and laboratory science to characterize cancer with clarity.",
    icon: "microscope",
    accent: "coral",
  },
  {
    slug: "research",
    name: "Clinical Trials",
    tagline: "Access to what's next",
    description: "Carefully reviewed research studies that may expand your treatment options.",
    icon: "flask",
    accent: "teal",
  },
];

export type Location = {
  slug: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  features: string[];
  parking: string;
  accessibility: string;
};

export const locations: Location[] = [
  {
    slug: "central-campus",
    name: "PRATHAM Central Campus",
    address: "1200 Meridian Boulevard",
    city: "Northgate, Meridian District",
    phone: "+1 (555) 010-2000",
    hours: "Mon–Fri 7:00am–8:00pm · Sat 8:00am–4:00pm",
    features: ["Comprehensive cancer center", "Surgical oncology", "Bone marrow transplant", "Diagnostics"],
    parking: "Free covered patient parking with valet available at the main entrance.",
    accessibility: "Step-free access, accessible restrooms, wheelchair assistance on request.",
  },
  {
    slug: "riverside",
    name: "PRATHAM Riverside",
    address: "88 Harbor View Way",
    city: "Riverside, Meridian District",
    phone: "+1 (555) 010-3000",
    hours: "Mon–Fri 7:30am–6:00pm · Sat 9:00am–1:00pm",
    features: ["Radiation oncology", "Medical oncology", "Infusion center", "Imaging"],
    parking: "Complimentary surface parking adjacent to the outpatient entrance.",
    accessibility: "Ground-floor treatment areas, accessible drop-off zone, hearing loop available.",
  },
  {
    slug: "lakeside",
    name: "PRATHAM Lakeside",
    address: "455 Willow Terrace",
    city: "Lakeside, Meridian District",
    phone: "+1 (555) 010-4000",
    hours: "Mon–Fri 8:00am–6:00pm",
    features: ["Pediatric oncology", "Family support services", "Survivorship clinic", "Counseling"],
    parking: "Free family parking with dedicated spaces near the children's entrance.",
    accessibility: "Sensory-friendly waiting areas, accessible play spaces, elevator access to all floors.",
  },
];

export type JourneyStage = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  icon: string;
};

export const journeyStages: JourneyStage[] = [
  {
    id: "screening",
    title: "Symptoms & Screening",
    summary: "Understanding your risk and catching concerns early.",
    detail: "Our screening programs and rapid access clinics help identify concerns early, when more options may be available. Care coordinators help you schedule the right tests without delay.",
    icon: "search-check",
  },
  {
    id: "diagnosis",
    title: "Diagnosis",
    summary: "Clear answers through advanced diagnostics.",
    detail: "Molecular diagnostics, imaging, and pathology work together to characterize your cancer precisely. We explain every result in plain language so you understand what's ahead.",
    icon: "microscope",
  },
  {
    id: "specialist",
    title: "Meet Your Specialist",
    summary: "A dedicated team built around your diagnosis.",
    detail: "You're matched with specialists whose expertise fits your specific cancer. Our multidisciplinary tumor boards review complex cases together, so you benefit from many perspectives.",
    icon: "users",
  },
  {
    id: "plan",
    title: "Personalized Treatment Plan",
    summary: "A path forward designed around you.",
    detail: "Your team develops a plan tailored to your biology, goals, and life. We discuss options, expected timelines, and supportive care so you can make informed decisions.",
    icon: "clipboard-list",
  },
  {
    id: "treatment",
    title: "Treatment & Support",
    summary: "Coordinated care and wraparound support.",
    detail: "From infusion to surgery to radiation, your care is coordinated in one place. Nutrition, counseling, and family support walk alongside your medical treatment.",
    icon: "heart-pulse",
  },
  {
    id: "recovery",
    title: "Recovery & Follow-Up",
    summary: "Survivorship care for the road ahead.",
    detail: "Our survivorship program supports your recovery with follow-up monitoring, rehabilitation, and long-term wellness planning for life after treatment.",
    icon: "sprout",
  },
];

export type WhyFeature = {
  title: string;
  description: string;
  icon: string;
};

export const whyFeatures: WhyFeature[] = [
  { title: "Personalized treatment plans", description: "Care shaped around your diagnosis, biology, and goals.", icon: "clipboard-list" },
  { title: "Multidisciplinary tumor boards", description: "Specialists collaborate on every complex case.", icon: "users" },
  { title: "Leading specialists", description: "Experienced teams focused on specific cancers.", icon: "award" },
  { title: "Advanced diagnostics", description: "Molecular imaging and lab science for clarity.", icon: "microscope" },
  { title: "Precision oncology", description: "Genomics-guided therapy matched to your tumor.", icon: "dna" },
  { title: "Family & supportive care", description: "Nutrition, counseling, and wraparound support.", icon: "heart-handshake" },
  { title: "Research & clinical trials", description: "Access to carefully reviewed emerging options.", icon: "flask-conical" },
];

export type Story = {
  quote: string;
  name: string;
  context: string;
};

export const stories: Story[] = [
  {
    quote: "From the first call, someone was always guiding us. We never felt like we were navigating this alone.",
    name: "Rendered testimonial",
    context: "Family member, breast cancer program",
  },
  {
    quote: "The team explained every step in words I could understand. That clarity gave me back a sense of control.",
    name: "Rendered testimonial",
    context: "Patient, lung cancer program",
  },
];

export type ResearchCard = {
  title: string;
  description: string;
  tag: string;
};

export const researchCards: ResearchCard[] = [
  { title: "Clinical Trials", description: "Carefully reviewed studies that may open new options for eligible patients.", tag: "Trials" },
  { title: "Research Publications", description: "Our teams contribute to the shared body of oncology knowledge.", tag: "Publications" },
  { title: "Innovation Center", description: "A dedicated space for advancing cancer care technology and methods.", tag: "Innovation" },
  { title: "Global Collaboration", description: "Partnerships that connect our specialists with international expertise.", tag: "Global" },
];

export const specialtyOptions = [
  "Medical Oncology",
  "Radiation Oncology",
  "Surgical Oncology",
  "Pediatric Oncology",
  "Hematology / BMT",
  "Precision Oncology",
  "Immunotherapy",
];

export const appointmentTypes = [
  { value: "new", label: "New patient consultation", description: "First visit with an PRATHAM specialist." },
  { value: "follow-up", label: "Follow-up consultation", description: "Continuing care with your existing team." },
  { value: "second-opinion", label: "Second opinion", description: "An expert review of your diagnosis and plan." },
  { value: "international", label: "International patient consultation", description: "Coordinated care for patients traveling to us." },
  { value: "tele", label: "Teleconsultation", description: "A secure video visit from wherever you are." },
];

export const timeSlots = ["8:00 AM", "9:30 AM", "11:00 AM", "1:30 PM", "3:00 PM", "4:30 PM"];

export const internationalServices: WhyFeature[] = [
  { title: "Visa & travel guidance", description: "Support with documentation and travel planning.", icon: "plane" },
  { title: "Remote record review", description: "Secure sharing of records before you arrive.", icon: "file-check" },
  { title: "Translation assistance", description: "Language support throughout your care.", icon: "languages" },
  { title: "Accommodation coordination", description: "Help arranging comfortable nearby stays.", icon: "bed" },
  { title: "Dedicated care coordinator", description: "One point of contact for your whole journey.", icon: "user-check" },
  { title: "Teleconsultation", description: "Connect with specialists before traveling.", icon: "video" },
];

export type CareAccess = {
  title: string;
  description: string;
  href: string;
  icon: string;
  accent: string;
};

export const careAccessCards: CareAccess[] = [
  { title: "Find a Specialist", description: "Search our oncology experts by name, specialty, or focus.", href: "/find-a-doctor", icon: "stethoscope", accent: "teal" },
  { title: "Explore Cancer Types", description: "Learn about the cancers we treat and the teams behind them.", href: "/cancer-types", icon: "ribbon", accent: "violet" },
  { title: "Treatment Options", description: "Discover advanced therapies and technologies at PRATHAM.", href: "/treatments", icon: "sparkles", accent: "aqua" },
  { title: "Get a Second Opinion", description: "Confirm your diagnosis and plan with an expert review.", href: "/second-opinion", icon: "file-search", accent: "gold" },
  { title: "International Patients", description: "Coordinated support for patients traveling to our care.", href: "/international-patients", icon: "globe", accent: "coral" },
  { title: "Locations & Directions", description: "Find your nearest PRATHAM campus and plan your visit.", href: "/locations", icon: "map-pin", accent: "teal" },
];

export const trustStats = [
  { value: "40+", label: "Oncology specialists" },
  { value: "18", label: "Multidisciplinary programs" },
  { value: "3", label: "Campuses across the district" },
  { value: "24/7", label: "Care coordinator access" },
];

export type NewsItem = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
};

export const newsItems: NewsItem[] = [
  {
    title: "PRATHAM opens expanded precision oncology center",
    excerpt: "A new space dedicated to genomic profiling and molecular tumor board review brings precision medicine closer to every patient.",
    category: "Announcement",
    date: "June 2026",
  },
  {
    title: "Multidisciplinary lung program marks a milestone",
    excerpt: "Our lung cancer teams reflect on a year of coordinated, patient-centered care across the institute.",
    category: "Programs",
    date: "May 2026",
  },
  {
    title: "New survivorship clinic supports life after treatment",
    excerpt: "A dedicated clinic helps patients transition from active treatment to long-term wellbeing and follow-up.",
    category: "Patient Care",
    date: "April 2026",
  },
  {
    title: "PRATHAM joins global oncology research collaboration",
    excerpt: "A new partnership connects our specialists with international expertise to advance shared knowledge.",
    category: "Research",
    date: "March 2026",
  },
  {
    title: "Comfort-first infusion spaces unveiled",
    excerpt: "Redesigned infusion centers focus on calm, natural light, and privacy for patients during treatment.",
    category: "Facilities",
    date: "February 2026",
  },
  {
    title: "Expanded international patient services launch",
    excerpt: "New coordination support helps patients traveling for care manage travel, translation, and accommodation.",
    category: "Announcement",
    date: "January 2026",
  },
];
