import {
  ArrowLeft,
  ArrowRight,
  BatteryFull,
  Bell,
  Camera,
  Check,
  CircleCheckBig,
  CirclePlay,
  Clapperboard,
  Code,
  Eye,
  FileText,
  Flag,
  Hash,
  Heart,
  House,
  ImagePlus,
  Laptop,
  LayoutGrid,
  Lightbulb,
  MapPin,
  Phone,
  Plus,
  Scissors,
  Search,
  Share2,
  Signal,
  Store,
  TrendingUp,
  User,
  UserRound,
  UserStar,
  Utensils,
  Wallet,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import LoopVideo from "./LoopVideo";
import { SERVICE_ICONS } from "./ServiceLists";
import { ONLINE_SERVICES, OFFLINE_SERVICES } from "@/lib/site";
import { BUSINESS_IDEAS } from "@/lib/businessIdeas";

/*
 * Lasan Mart screens, drawn from the app's source at its own sizes
 * (16px gutters, 60px service tiles, Bricolage + Jakarta) and colours
 * (theme/colors.ts). Each one fills a 360×760 .device-ui box.
 */

const P = "#5F259F";
const P_SOFT = "#F0E9F9";
const TEXT = "#1A1A1A";
const LIGHT = "#767676";
const BORDER = "#E0E0E0";
const SURFACE = "#F5F5F5";

const tint = (c: string, pct: number) =>
  `color-mix(in srgb, ${c} ${pct}%, transparent)`;

function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className="relative h-[38px] flex items-center justify-between px-6 text-[13px] font-semibold"
      style={{ color: dark ? "#fff" : TEXT }}
    >
      <span>12:13</span>
      <span className="absolute left-1/2 top-[10px] -translate-x-1/2 w-[18px] h-[18px] rounded-full bg-black" />
      <span className="flex items-center gap-1.5">
        <Signal size={14} strokeWidth={2.6} />
        <Wifi size={14} strokeWidth={2.6} />
        <BatteryFull size={19} strokeWidth={2} />
      </span>
    </div>
  );
}

/** Back button, title, spacer — the header most inner screens share */
function Header({ title, right }: { title: string; right?: LucideIcon }) {
  const Right = right;
  return (
    <div
      className="flex items-center justify-between px-3.5 py-2.5 border-b"
      style={{ borderColor: BORDER }}
    >
      <span
        className="w-[38px] h-[38px] rounded-xl flex items-center justify-center"
        style={{ background: SURFACE }}
      >
        <ArrowLeft size={20} />
      </span>
      <span className="display-md text-[17px]">{title}</span>
      {Right ? (
        <span
          className="w-[38px] h-[38px] rounded-xl flex items-center justify-center"
          style={{ background: SURFACE }}
        >
          <Right size={19} />
        </span>
      ) : (
        <span className="w-[38px]" />
      )}
    </div>
  );
}

function GroupTitle({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] font-bold uppercase tracking-[0.07em] mt-6 mb-3"
      style={{ color: LIGHT }}
    >
      {children}
    </p>
  );
}

/* ---------- Home ---------- */

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2.5 px-4 mb-3.5">
      <span className="w-1 h-5 rounded-sm" style={{ background: P }} />
      <span className="display text-[21px] leading-none">{title}</span>
    </div>
  );
}

function ServiceTile({ label }: { label: string }) {
  const [Icon, c] = SERVICE_ICONS[label];
  return (
    <span className="w-[76px] h-[96px] flex flex-col items-center">
      <span
        className="w-[60px] h-[60px] rounded-[18px] border flex items-center justify-center mb-2"
        style={{ background: tint(c, 12), borderColor: tint(c, 22), color: c }}
      >
        <Icon size={26} strokeWidth={1.9} />
      </span>
      <span className="text-[11px] font-bold leading-[14px] text-center">
        {label}
      </span>
    </span>
  );
}

/** Two rows of tiles, scrolling sideways — the fifth column runs off the edge */
function ServiceRow({ title, items }: { title: string; items: string[] }) {
  const cols: string[][] = [];
  for (let i = 0; i < 10; i += 2) cols.push(items.slice(i, i + 2));
  return (
    <div className="mt-[22px]">
      <SectionHeading title={title} />
      <div className="flex gap-2.5 px-4 overflow-hidden">
        {cols.map((col) => (
          <div key={col[0]} className="flex flex-col gap-3.5 shrink-0">
            {col.map((label) => (
              <ServiceTile key={label} label={label} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Purple for the open tab, deep gold for the rest, as in BottomTabNavigator */
const TABS: ([LucideIcon, string] | null)[] = [
  [House, "Home"],
  [CirclePlay, "Lasan Vibes"],
  null,
  [CircleCheckBig, "My Requests"],
  [User, "My Account"],
];

function TabBar({ active }: { active: string }) {
  return (
    <div
      className="absolute inset-x-0 bottom-0 h-[76px] bg-white border-t flex pt-1.5"
      style={{ borderColor: BORDER }}
    >
      {TABS.map((tab) =>
        tab ? (
          <TabItem key={tab[1]} icon={tab[0]} label={tab[1]} on={tab[1] === active} />
        ) : (
          <span key="tools" className="flex-1 flex justify-center">
            <span
              className="-mt-[24px] w-[58px] h-[58px] rounded-full border-4 border-white flex items-center justify-center text-white"
              style={{
                background: `linear-gradient(135deg, #7B3FC4, ${P})`,
                boxShadow: `0 6px 12px ${tint(P, 45)}, 0 0 18px ${tint(P, 45)}`,
              }}
            >
              <LayoutGrid size={24} />
            </span>
          </span>
        ),
      )}
    </div>
  );
}

function TabItem({ icon: Icon, label, on }: { icon: LucideIcon; label: string; on: boolean }) {
  return (
    <span
      className="flex-1 flex flex-col items-center gap-1"
      style={{ color: on ? P : "#8C6A00" }}
    >
      <Icon size={23} strokeWidth={on ? 2.4 : 1.8} />
      <span className="text-[10px] font-medium">{label}</span>
    </span>
  );
}

export function HomeScreen() {
  return (
    <div className="device-ui bg-white">
      <StatusBar />

      {/* HomeHeader: business location, search, notifications */}
      <div className="flex items-center gap-2 px-4 py-2.5">
        <span
          className="flex items-center gap-1 rounded-[10px] px-2.5 h-[42px] text-[12px] font-medium"
          style={{ background: SURFACE }}
        >
          <MapPin size={16} color={P} fill={tint(P, 25)} strokeWidth={2.2} />
          Tirupati
        </span>
        <span
          className="flex-1 flex items-center gap-2 rounded-[10px] px-3 h-[42px] text-[14px] font-medium"
          style={{ background: SURFACE, color: LIGHT }}
        >
          <Search size={18} />
          Search...
        </span>
        <span
          className="relative w-[42px] h-[42px] rounded-[10px] flex items-center justify-center"
          style={{ background: SURFACE }}
        >
          <Bell size={23} strokeWidth={1.8} />
          <span
            className="absolute top-[5px] right-[5px] min-w-[17px] h-[17px] px-1 rounded-full border-2 text-white text-[9.5px] font-bold flex items-center justify-center"
            style={{ background: P, borderColor: SURFACE }}
          >
            2
          </span>
        </span>
      </div>

      {/* BusinessIdeasBanner */}
      <div className="mt-6 px-4">
        <div
          className="relative overflow-hidden rounded-[20px] min-h-[92px] px-4 py-3 flex items-center shadow-[0_6px_12px_rgba(0,0,0,0.18)]"
          style={{ background: "linear-gradient(135deg, #4C1D95, #2E1065)" }}
        >
          <span className="absolute -top-[50px] -right-[30px] w-[130px] h-[130px] rounded-full bg-[rgba(255,209,102,0.14)]" />
          <span
            className="w-[50px] h-[50px] rounded-2xl border flex items-center justify-center mr-3.5 shrink-0"
            style={{
              background: "rgba(255,209,102,0.16)",
              borderColor: "rgba(255,209,102,0.3)",
              color: "#FFD166",
            }}
          >
            <Lightbulb size={24} />
          </span>
          <span className="flex-1">
            <span className="inline-block rounded-[5px] px-1.5 py-0.5 text-[8px] font-bold tracking-[0.1em] text-[#FFD166] bg-[rgba(255,209,102,0.22)] mb-1">
              FREE
            </span>
            <span className="block display text-[17px] text-white">
              Business Ideas
            </span>
            <span className="block text-[12px] text-white/70 mt-0.5">
              What works for your sector — pick yours
            </span>
          </span>
          <span className="w-[34px] h-[34px] rounded-full bg-[#FFD166] text-[#2E1065] flex items-center justify-center ml-2.5">
            <ArrowRight size={17} />
          </span>
        </div>
      </div>

      <ServiceRow title="Online Marketing" items={ONLINE_SERVICES} />
      <ServiceRow title="Offline Marketing" items={OFFLINE_SERVICES} />

      <TabBar active="Home" />
    </div>
  );
}

/* ---------- Business Ideas ---------- */

export function IdeasScreen() {
  const idea =
    BUSINESS_IDEAS.find((b) => b.sector === "Restaurants & Cafes") ??
    BUSINESS_IDEAS[0];
  const sectors = [
    "Retail & Shops",
    "Restaurants & Cafes",
    "Real Estate",
    "Healthcare & Clinics",
    "Education & Coaching",
  ];
  return (
    <div className="device-ui bg-white">
      <StatusBar />
      <Header title="Business Ideas" />
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {sectors.map((s) => {
            const on = s === idea.sector;
            return (
              <span
                key={s}
                className="rounded-[20px] border-[1.5px] px-3 py-2 text-[12px] font-bold"
                style={{
                  background: on ? TEXT : "#fff",
                  borderColor: on ? TEXT : BORDER,
                  color: on ? "#fff" : LIGHT,
                }}
              >
                {s}
              </span>
            );
          })}
        </div>

        <div
          className="mt-6 rounded-[18px] p-4 flex items-center gap-3"
          style={{ background: P_SOFT }}
        >
          <span
            className="w-[42px] h-[42px] rounded-[14px] bg-white flex items-center justify-center shrink-0"
            style={{ color: P }}
          >
            <Utensils size={20} />
          </span>
          <span>
            <span
              className="block text-[9.5px] font-bold tracking-[0.08em] mb-1"
              style={{ color: P }}
            >
              {idea.sector.toUpperCase()}
            </span>
            <span className="block display text-[18px] leading-[22px]">
              {idea.headline}
            </span>
          </span>
        </div>

        <GroupTitle>What to do</GroupTitle>
        {idea.opportunities.slice(0, 3).map((o, i) => (
          <div key={o} className="flex gap-[11px] mb-3">
            <span
              className="w-[22px] h-[22px] rounded-lg flex items-center justify-center text-[11px] font-bold shrink-0"
              style={{ background: P_SOFT, color: P }}
            >
              {i + 1}
            </span>
            <span className="text-[13.5px] leading-[19px]">{o}</span>
          </div>
        ))}

        <GroupTitle>Start with these services</GroupTitle>
        <div className="flex flex-wrap gap-2">
          {idea.bestServices.map((s) => (
            <span
              key={s}
              className="flex items-center gap-1.5 rounded-[10px] px-[11px] py-2 text-[12.5px] font-bold"
              style={{ background: SURFACE }}
            >
              <Check size={12} color={P} strokeWidth={3} />
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 rounded-xl px-3 py-2.5 flex gap-2 items-start bg-[#E7F6F2] text-[#0B7A66] text-[12.5px] leading-[18px]">
          <Wallet size={17} className="shrink-0 mt-px" />
          {idea.budgetNote}
        </div>

        <div
          className="mt-5 h-[54px] rounded-[14px] flex items-center justify-center gap-2 text-white text-[15px] font-bold"
          style={{ background: P, boxShadow: `0 8px 18px ${tint(P, 35)}` }}
        >
          Get help with this
          <ArrowRight size={17} />
        </div>
      </div>
    </div>
  );
}

/* ---------- Hire a Freelancer ---------- */

const FREELANCERS: [LucideIcon, string, string, string, boolean][] = [
  [Camera, "Photography", "Products, interiors, food, events", "#3A86FF", true],
  [Clapperboard, "Videography", "Shoots, coverage, reels, ads", "#C13584", false],
  [Scissors, "Video Editing", "Cutting, colour, subtitles, reels", "#7B3FC4", true],
  [TrendingUp, "Digital Marketing", "Social media, ads, content, SEO", "#0EA97A", false],
  [Code, "Software Development", "Websites, apps, tools, automation", "#FF6B35", false],
];

export function TalentScreen() {
  return (
    <div className="device-ui bg-white">
      <StatusBar />
      <Header title="Hire a Freelancer" />
      <div className="p-4">
        <p className="text-[13px] leading-[19px] mb-4" style={{ color: LIGHT }}>
          Pick what you need — more than one is fine. Our team finds the right
          person and comes back with a quote.
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          {FREELANCERS.map(([Icon, label, blurb, c, on], i) => (
            <div
              key={label}
              className={`relative rounded-2xl border-[1.5px] p-3 ${i === 4 ? "col-span-2" : ""}`}
              style={{
                borderColor: on ? c : BORDER,
                background: on ? tint(c, 6) : "#fff",
              }}
            >
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: on ? c : tint(c, 10), color: on ? "#fff" : c }}
              >
                <Icon size={20} />
              </span>
              <span
                className="block text-[13.5px] font-bold mt-2.5"
                style={{ color: on ? c : TEXT }}
              >
                {label}
              </span>
              <span
                className="block text-[11px] leading-[15px] mt-0.5"
                style={{ color: LIGHT }}
              >
                {blurb}
              </span>
              {on && (
                <span
                  className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center text-white"
                  style={{ background: c }}
                >
                  <Check size={11} strokeWidth={3.2} />
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-[14px] p-3.5" style={{ background: SURFACE }}>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.07em] mb-1.5"
            style={{ color: LIGHT }}
          >
            Worth telling us
          </p>
          {["What needs shooting?", "Do you have the footage already?"].map((a) => (
            <p key={a} className="text-[13px] leading-[22px]">
              · {a}
            </p>
          ))}
        </div>

        <div
          className="mt-5 h-[54px] rounded-[14px] flex items-center justify-center gap-2 text-white text-[15px] font-bold"
          style={{ background: P, boxShadow: `0 8px 18px ${tint(P, 35)}` }}
        >
          Send Request
          <ArrowRight size={17} />
        </div>
      </div>
    </div>
  );
}

/* ---------- Lasan Vibes ---------- */

export function VibesScreen({ active = true }: { active?: boolean }) {
  return (
    <div className="device-ui bg-black text-white">
      <LoopVideo
        src="/media/vibes-chef.mp4"
        poster="/media/vibes-chef.jpg"
        active={active}
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/75" />
      <div className="relative">
        <StatusBar dark />
      </div>

      <span className="absolute top-[52px] left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-[20px] px-3 py-1.5 bg-black/35">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#B48CFF" }} />
        <span className="display-md text-[13px]">Lasan Vibes</span>
      </span>

      <div className="absolute right-3 bottom-[150px] flex flex-col items-center gap-5 text-[11px] font-bold">
        {[
          [Heart, "1.2K", true],
          [Eye, "8.4K", false],
          [Flag, "Report", false],
        ].map(([Icon, label, filled]) => {
          const I = Icon as LucideIcon;
          return (
            <span key={label as string} className="flex flex-col items-center gap-1">
              <I
                size={28}
                fill={filled ? "#FF4D6D" : "none"}
                strokeWidth={filled ? 0 : 2}
              />
              {label as string}
            </span>
          );
        })}
      </div>

      <div className="absolute left-4 right-16 bottom-[96px]">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="w-8 h-8 rounded-full border-[1.5px] flex items-center justify-center"
            style={{ borderColor: "#B48CFF" }}
          >
            <span className="w-[26px] h-[26px] rounded-full bg-white/20 flex items-center justify-center text-[11px] font-bold">
              G
            </span>
          </span>
          <span className="text-[14px] font-bold">grillhouse.tpt</span>
        </div>
        <p className="text-[13px] leading-[19px] text-white/90">
          Live grill counter this weekend. Come hungry 🔥
        </p>
      </div>

      <TabBar active="Lasan Vibes" />
    </div>
  );
}

/* ---------- Quotation ---------- */

export function QuoteScreen() {
  const lines = [
    ["Shop-front hoarding, 20×10 ft", "1", "₹18,000"],
    ["Flex printing and fixing", "2", "₹5,000"],
  ];
  return (
    <div className="device-ui bg-white flex flex-col">
      <StatusBar />
      <Header title="New Quotation" right={FileText} />
      <div className="flex-1 overflow-hidden p-4">
        <div
          className="flex items-center gap-2 rounded-xl p-3 text-[12px]"
          style={{ background: SURFACE, color: LIGHT }}
        >
          <ImagePlus size={17} color="#12B3A0" />
          Lakshmi Ads · logo will appear as watermark
        </div>
        <p className="flex items-center gap-1 mt-3 text-[12px] font-bold" style={{ color: LIGHT }}>
          <Hash size={14} />
          QT-418273
        </p>

        <GroupTitle>Client Details</GroupTitle>
        <div className="space-y-2">
          {[
            [UserRound, "Sri Lakshmi Traders"],
            [Phone, "98765 43210"],
          ].map(([Icon, v]) => {
            const I = Icon as LucideIcon;
            return (
              <div
                key={v as string}
                className="flex items-center gap-2 rounded-[10px] px-3 py-[11px] text-[14px]"
                style={{ background: SURFACE }}
              >
                <I size={17} color={LIGHT} />
                {v as string}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between">
          <GroupTitle>Services</GroupTitle>
          <span className="text-[11px] font-bold mt-3" style={{ color: LIGHT }}>
            2 items
          </span>
        </div>
        <div className="space-y-2.5">
          {lines.map(([name, qty, amount], i) => (
            <div
              key={name}
              className="rounded-2xl border-[1.5px] px-3 py-2.5 flex items-center gap-2.5"
              style={{ borderColor: BORDER }}
            >
              <span
                className="w-[22px] h-[22px] rounded-lg flex items-center justify-center text-[11px] font-bold shrink-0"
                style={{ background: P_SOFT, color: P }}
              >
                {i + 1}
              </span>
              <span className="flex-1 text-[13px] leading-tight">
                {name}
                <span className="block text-[11px] mt-0.5" style={{ color: LIGHT }}>
                  Qty {qty}
                </span>
              </span>
              <span className="text-[14px] font-bold">{amount}</span>
            </div>
          ))}
        </div>
        <p className="flex items-center gap-1.5 mt-3 text-[13px] font-bold" style={{ color: P }}>
          <Plus size={16} />
          Add another service
        </p>

        <div className="mt-5 rounded-2xl p-4" style={{ background: SURFACE }}>
          {[
            ["Subtotal", "₹28,000"],
            ["Tax (18%)", "₹5,040"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between text-[13px] mb-1.5">
              <span style={{ color: LIGHT }}>{k}</span>
              <span className="font-bold">{v}</span>
            </div>
          ))}
          <div className="mt-2.5 rounded-xl px-3.5 py-3 flex items-center justify-between text-white" style={{ background: TEXT }}>
            <span className="text-[12px] font-bold tracking-[0.08em]">TOTAL</span>
            <span className="display text-[21px]">₹33,040</span>
          </div>
        </div>
      </div>

      <div className="flex gap-2.5 px-4 pt-3 pb-5 border-t" style={{ borderColor: BORDER }}>
        <span className="w-[54px] h-[54px] rounded-[14px] bg-[#25D366] flex items-center justify-center text-white">
          <WhatsAppGlyph />
        </span>
        <span
          className="flex-1 h-[54px] rounded-[14px] flex items-center justify-center gap-2 text-white text-[15px] font-bold"
          style={{ background: P }}
        >
          Generate &amp; Share PDF
          <Share2 size={17} />
        </span>
      </div>
    </div>
  );
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

/* ---------- Lasan Mart Hub: "Which one are you?" ---------- */

const HUB_ROLES: [LucideIcon, string, string, string, string][] = [
  [UserStar, "BRAND DEALS", "Influencer", "Instagram, YouTube, city pages", "linear-gradient(120deg,#B83A8A,#5B1A8C)"],
  [Store, "CAMPAIGN ORDERS", "Vendor", "Hoardings, print, events, field teams", "linear-gradient(120deg,#169A72,#075B43)"],
  [Laptop, "PAID GIGS", "Freelancer", "Photo, video, marketing, software development", "linear-gradient(120deg,#3B7BE8,#1E3F9E)"],
];

export function HubScreen() {
  return (
    <div className="device-ui bg-white flex flex-col">
      <StatusBar />
      <div className="px-[26px] pt-12">
        <p className="text-[12px] font-bold tracking-[0.24em]" style={{ color: LIGHT }}>
          ONE LAST THING
        </p>
        <p className="display text-[40px] leading-[1.05] mt-4">
          Which one
          <br />
          <span style={{ color: "#5B21B6" }}>are you?</span>
        </p>
      </div>
      <div className="px-[26px] mt-8 space-y-4">
        {HUB_ROLES.map(([Icon, tag, title, sub, bg], i) => (
          <div
            key={title}
            className="relative overflow-hidden rounded-[22px] px-4 py-4 flex items-center gap-3.5 text-white shadow-[0_8px_18px_rgba(20,16,46,0.18)]"
            style={{ background: bg }}
          >
            <span className="absolute -top-8 -right-8 w-[110px] h-[110px] rounded-full bg-white/10" />
            <span className="w-[52px] h-[52px] rounded-2xl bg-white/20 border border-white/25 flex items-center justify-center shrink-0">
              <Icon size={24} />
            </span>
            <span className="flex-1">
              <span className="inline-block rounded-md bg-white/20 px-1.5 py-0.5 text-[9.5px] font-bold tracking-[0.1em]">
                {tag}
              </span>
              <span className="block display-md text-[19px] mt-1">{title}</span>
              <span className="block text-[12px] text-white/85 leading-snug">{sub}</span>
            </span>
            <span
              className="w-7 h-7 rounded-full border-2 border-white/70 flex items-center justify-center shrink-0"
              style={{ background: i === 2 ? "#fff" : "transparent", color: "#1E3F9E" }}
            >
              {i === 2 && <Check size={15} strokeWidth={3.2} />}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-auto px-[26px] pb-8">
        <div className="h-[54px] rounded-2xl flex items-center justify-center text-white text-[16px] font-bold" style={{ background: "#5B21B6" }}>
          Continue as Freelancer
        </div>
        <p className="text-center text-[12px] mt-4" style={{ color: LIGHT }}>
          We&apos;ll verify your number before your profile goes live
        </p>
      </div>
    </div>
  );
}

/** What each screen shows, for screen readers */
export const SCREEN_LABELS = {
  home: "Lasan Mart Home screen: Business Ideas banner, then Online and Offline Marketing service tiles",
  ideas: "Business Ideas screen showing the Restaurants & Cafes playbook",
  talent: "Hire a Freelancer screen with Photography and Video Editing picked",
  vibes: "Lasan Vibes, a full-screen short-video feed from local businesses",
  quote: "New Quotation screen with line items, 18% tax and a Generate & Share PDF button",
  hub: "Lasan Mart Hub sign-up asking whether you are an Influencer, Vendor or Freelancer",
};
