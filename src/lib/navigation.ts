export type NavLink = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
};

export type NavColumn = {
  title: string;
  links: NavLink[];
};

export type NavItem = {
  label: string;
  href?: string;
  columns?: NavColumn[];
  featured?: {
    title: string;
    description: string;
    href: string;
    cta: string;
  };
};

export const mainNav: NavItem[] = [
  {
    label: "Care & Treatments",
    columns: [
      {
        title: "Oncology Programs",
        links: [
          { label: "Precision Oncology", href: "/precision-oncology", description: "Genomics-guided plans", icon: "dna" },
          { label: "Medical Oncology", href: "/medical-oncology", description: "Systemic therapies", icon: "heart-pulse" },
          { label: "Radiation Oncology", href: "/radiation-oncology", description: "Targeted radiation", icon: "radiation" },
          { label: "Surgical Oncology", href: "/surgical-oncology", description: "Tumor surgery", icon: "stethoscope" },
          { label: "Pediatric Oncology", href: "/pediatric-oncology", description: "Care for children", icon: "baby" },
        ],
      },
      {
        title: "Advanced Therapies",
        links: [
          { label: "Immunotherapy", href: "/immunotherapy", description: "Harnessing your immunity", icon: "shield-plus" },
          { label: "Robotic Surgery", href: "/robotic-surgery", description: "Minimally invasive", icon: "bot" },
          { label: "Bone Marrow Transplant", href: "/bone-marrow-transplant", description: "Cellular therapy", icon: "droplet" },
          { label: "Diagnostics", href: "/diagnostics", description: "Molecular imaging & labs", icon: "microscope" },
          { label: "All Treatments", href: "/treatments", description: "Browse everything", icon: "layers" },
        ],
      },
    ],
    featured: {
      title: "Cancer Types",
      description: "Explore the cancers we treat and find the right specialist team.",
      href: "/cancer-types",
      cta: "Explore",
    },
  },
  {
    label: "Patients & Families",
    columns: [
      {
        title: "Get Care",
        links: [
          { label: "Find a Doctor", href: "/find-a-doctor", description: "Search our specialists", icon: "user-search" },
          { label: "Book Appointment", href: "/book-appointment", description: "Request a visit", icon: "clipboard-list" },
          { label: "Second Opinion", href: "/second-opinion", description: "Confirm your path", icon: "search-check" },
          { label: "Urgent Care", href: "/urgent-care", description: "Same-day guidance", icon: "phone" },
        ],
      },
      {
        title: "Support & Resources",
        links: [
          { label: "International Patients", href: "/international-patients", description: "Travel & coordination", icon: "globe" },
          { label: "Patient Resources", href: "/patient-resources", description: "Guides & support", icon: "heart-handshake" },
          { label: "Insurance & Billing", href: "/insurance-billing", description: "Financial guidance", icon: "clipboard-list" },
          { label: "Patient Stories", href: "/patient-stories", description: "Voices of our community", icon: "heart" },
        ],
      },
    ],
    featured: {
      title: "Talk to a Care Coordinator",
      description: "Not sure where to start? A coordinator can guide your next step.",
      href: "/contact",
      cta: "Get help",
    },
  },
  {
    label: "Discover PRATHAM",
    columns: [
      {
        title: "About",
        links: [
          { label: "About PRATHAM", href: "/about", description: "Our mission & values", icon: "compass" },
          { label: "Why PRATHAM", href: "/why-pratham", description: "What sets us apart", icon: "award" },
          { label: "Our Doctors", href: "/doctors", description: "Meet the team", icon: "users" },
          { label: "Locations", href: "/locations", description: "Where to find us", icon: "map-pin" },
        ],
      },
      {
        title: "Innovation",
        links: [
          { label: "Research", href: "/research", description: "Clinical trials & studies", icon: "flask" },
          { label: "News", href: "/news", description: "Latest updates", icon: "activity" },
          { label: "Careers", href: "/careers", description: "Join our team", icon: "sprout" },
          { label: "Contact", href: "/contact", description: "Reach out", icon: "phone" },
        ],
      },
    ],
    featured: {
      title: "Research & Innovation",
      description: "Discover how our teams advance cancer care through research.",
      href: "/research",
      cta: "Explore",
    },
  },
];

// Flat list used for the search dialog and sitemap-style footers
export const allRoutes: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About PRATHAM", href: "/about" },
  { label: "Why PRATHAM", href: "/why-pratham" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Find a Doctor", href: "/find-a-doctor" },
  { label: "Cancer Types", href: "/cancer-types" },
  { label: "Treatments", href: "/treatments" },
  { label: "Precision Oncology", href: "/precision-oncology" },
  { label: "Radiation Oncology", href: "/radiation-oncology" },
  { label: "Medical Oncology", href: "/medical-oncology" },
  { label: "Surgical Oncology", href: "/surgical-oncology" },
  { label: "Pediatric Oncology", href: "/pediatric-oncology" },
  { label: "Bone Marrow Transplant", href: "/bone-marrow-transplant" },
  { label: "Immunotherapy", href: "/immunotherapy" },
  { label: "Robotic Surgery", href: "/robotic-surgery" },
  { label: "Diagnostics", href: "/diagnostics" },
  { label: "Research", href: "/research" },
  { label: "Patient Stories", href: "/patient-stories" },
  { label: "International Patients", href: "/international-patients" },
  { label: "Patient Resources", href: "/patient-resources" },
  { label: "Insurance & Billing", href: "/insurance-billing" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
  { label: "Book Appointment", href: "/book-appointment" },
  { label: "Second Opinion", href: "/second-opinion" },
  { label: "Urgent Care", href: "/urgent-care" },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/news" },
];
