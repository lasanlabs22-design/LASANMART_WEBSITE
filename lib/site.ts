/** Swap this the moment you're live on Play Store */
export const PLAY_STORE_URL = "";

export const CONTACT = {
  phone: "8309074248",
  email: "admin@lasanlabs.com",
  city: "Tirupati, Andhra Pradesh",
};

/** Same labels, same order as homeCategories.ts in the Lasan Mart app */
export const ONLINE_SERVICES = [
  "Digital Marketing",
  "Website & CRM",
  "Social Media",
  "Lead Generation",
  "GMB Optimization",
  "SEO & Ads",
  "Landing Pages",
  "WhatsApp Automation",
  "Influencer Marketing",
  "TV & Theater Ads",
  "Flash Shoot",
  "Analytics & Growth",
  "AI Optimization",
  "PR & Publicity",
  "Offline-Online Sync",
];

export const OFFLINE_SERVICES = [
  "Hoardings",
  "Outdoor Ads",
  "LED Boards",
  "Transit Ads",
  "Print Media",
  "Event Marketing",
  "Local Engagement",
  "Direct Marketing",
  "Vehicle Branding",
  "Traditional Media",
  "Field Sales",
  "Telecalling",
  "Display Boards",
  "Exhibitions",
  "Corporate Events",
];

/** The choices on the app's request form */
export const BUDGETS = ["Under ₹25K", "₹25K–50K", "₹50K–1L", "₹1L+", "Not sure"];
export const TIMELINES = ["ASAP", "This month", "Next month", "Flexible"];

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
