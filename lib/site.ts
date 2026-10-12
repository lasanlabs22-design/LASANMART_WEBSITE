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

/** Mirrors plans.ts in the Lasan Mart app, so keep the two in step */
export const PLANS = [
  {
    name: "Starter",
    subtitle: "For local shops & new brands",
    price: "₹25,000",
    strikePrice: "₹32,000",
    savings: "Save ₹7,000",
    duration: "month",
    tone: "orange" as const,
    features: ["5 Reels", "10 Posters", "Paid Ads", "Social Media", "GMB Setup"],
  },
  {
    name: "Growth",
    subtitle: "For scaling businesses",
    price: "₹50,000",
    strikePrice: "₹68,000",
    savings: "Save ₹18,000",
    duration: "month",
    tone: "violet" as const,
    badge: "Most popular",
    features: [
      "10 Reels",
      "15 Posters",
      "Paid Ads",
      "Dedicated Manager",
      "Advanced SEO",
      "Social Media Management",
    ],
  },
  {
    name: "Advanced",
    subtitle: "Full-suite, done for you",
    price: "₹75,000",
    strikePrice: "₹1,05,000",
    savings: "Save ₹30,000",
    duration: "month",
    tone: "ink" as const,
    features: [
      "Everything in Growth Plan",
      "Influencers",
      "Dedicated Manager",
      "Personalized Page Building",
    ],
  },
];
