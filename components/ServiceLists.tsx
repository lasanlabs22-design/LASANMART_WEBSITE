import {
  Bot,
  Briefcase,
  BusFront,
  Calendar,
  Camera,
  CarFront,
  ChartLine,
  ChartSpline,
  Filter,
  Handshake,
  Headset,
  Laptop,
  MapPin,
  MapPinned,
  Megaphone,
  MessageCircle,
  Monitor,
  MonitorSmartphone,
  Newspaper,
  Presentation,
  Radio,
  RefreshCw,
  Signpost,
  Smartphone,
  Store,
  Building2,
  Mail,
  Star,
  Tv,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { ONLINE_SERVICES, OFFLINE_SERVICES } from "@/lib/site";

/**
 * Line icons standing in for the MaterialCommunityIcons each service
 * uses in the app (homeCategories.ts), with the app's tile colours.
 */
export const SERVICE_ICONS: Record<string, [LucideIcon, string]> = {
  "Digital Marketing": [Megaphone, "#FF6B35"],
  "Website & CRM": [Laptop, "#2D6CDF"],
  "Social Media": [Smartphone, "#C13584"],
  "Lead Generation": [Filter, "#00A389"],
  "GMB Optimization": [MapPinned, "#EA4335"],
  "SEO & Ads": [ChartLine, "#7B2FF7"],
  "Landing Pages": [MonitorSmartphone, "#0F9BD7"],
  "WhatsApp Automation": [MessageCircle, "#25D366"],
  "Influencer Marketing": [Star, "#F2542D"],
  "TV & Theater Ads": [Tv, "#4A4E69"],
  "Flash Shoot": [Camera, "#E8AE00"],
  "Analytics & Growth": [ChartSpline, "#0B8457"],
  "AI Optimization": [Bot, "#5E60CE"],
  "PR & Publicity": [Newspaper, "#B5179E"],
  "Offline-Online Sync": [RefreshCw, "#0891B2"],
  Hoardings: [Signpost, "#E63946"],
  "Outdoor Ads": [Building2, "#457B9D"],
  "LED Boards": [Monitor, "#7209B7"],
  "Transit Ads": [BusFront, "#F4A261"],
  "Print Media": [Newspaper, "#495057"],
  "Event Marketing": [Calendar, "#D62828"],
  "Local Engagement": [MapPin, "#2A9D8F"],
  "Direct Marketing": [Mail, "#3A86FF"],
  "Vehicle Branding": [CarFront, "#FB8500"],
  "Traditional Media": [Radio, "#6D597A"],
  "Field Sales": [Briefcase, "#1D3557"],
  Telecalling: [Headset, "#06A77D"],
  "Display Boards": [Presentation, "#8338EC"],
  Exhibitions: [Store, "#BC6C25"],
  "Corporate Events": [Handshake, "#264653"],
};

export default function ServiceLists() {
  return (
    <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mt-16">
      {[
        {
          title: "Online Marketing",
          items: ONLINE_SERVICES,
          c: "var(--violet)",
        },
        {
          title: "Offline Marketing",
          items: OFFLINE_SERVICES,
          c: "var(--orange)",
        },
      ].map((group, i) => (
        <Reveal key={group.title} delay={i * 0.1}>
          <div data-spot className="card p-6 sm:p-7 h-full">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="display-md text-[19px]" style={{ color: group.c }}>
                {group.title}
              </h3>
              <span
                className="text-[12.5px] font-semibold"
                style={{ color: "var(--muted)" }}
              >
                {group.items.length} services
              </span>
            </div>
            <ul className="relative z-[2] flex flex-wrap gap-2 mt-5">
              {group.items.map((s) => {
                const [Icon, c] = SERVICE_ICONS[s] ?? [Megaphone, "#6D3BF5"];
                return (
                  <li
                    key={s}
                    className="chip inline-flex items-center gap-1.5 text-[13px] font-medium pl-2 pr-3 py-1.5 rounded-xl cursor-default"
                    style={
                      {
                        "--chip": c,
                        background: `color-mix(in srgb, ${c} 9%, #fff)`,
                      } as React.CSSProperties
                    }
                  >
                    <Icon size={15} strokeWidth={2} style={{ color: c }} />
                    {s}
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
