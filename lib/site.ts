/** Swap this the moment you're live on Play Store */
export const PLAY_STORE_URL = "";

export const CONTACT = {
  phone: "8309074248",
  email: "admin@lasanlabs.com",
  city: "Tirupati, Andhra Pradesh",
};

export const ONLINE_SERVICES = [
  "Social Media Marketing",
  "Lead Generation",
  "Google My Business",
  "SEO & Google Ads",
  "Website & App Development",
  "WhatsApp Automation",
  "Landing Pages",
  "Influencer Marketing",
  "TV & Theatre Ads",
  "Photo & Video Shoots",
  "Analytics & Reporting",
  "AI Search Optimisation",
  "PR & Media Coverage",
  "Digital Marketing",
  "Offline-Online Integration",
];

export const OFFLINE_SERVICES = [
  "Hoardings & Billboards",
  "LED Boards",
  "Transit Advertising",
  "Print & Newspaper",
  "Events & Activations",
  "Local Area Marketing",
  "Direct Mail & SMS",
  "Vehicle Branding",
  "Radio & FM",
  "Field Sales Teams",
  "Telecalling",
  "Standees & Signage",
  "Exhibitions & Stalls",
  "Corporate & B2B Events",
  "Outdoor Advertising",
];

export const PLANS = [
  {
    name: "Starter",
    price: "₹25,000",
    duration: "3 months",
    tone: "orange" as const,
    features: ["Social media", "Google listing", "Monthly report"],
  },
  {
    name: "Growth",
    price: "₹50,000",
    duration: "3 months",
    tone: "violet" as const,
    badge: "Most chosen",
    features: [
      "Everything in Starter",
      "Paid ads",
      "Content shoots",
      "Lead tracking",
    ],
  },
  {
    name: "Pro",
    price: "₹75,000",
    duration: "3 months",
    tone: "ink" as const,
    features: [
      "Everything in Growth",
      "Influencer campaigns",
      "Offline media",
      "Dedicated manager",
    ],
  },
];
