import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Globe,
  Server,
  Headphones,
  Zap,
  Wallet,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  Rocket,
  LifeBuoy,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Menu,
  X,
  Star,
  Target,
  BadgeCheck,
} from "lucide-react";
import { useState } from "react";
import pnxLogo from "@/assets/pnx-logo.png";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

const LEAD_FORM = "https://forms.gle/QQqkHdaFjngTdGeg8";
const SUPPORT_EMAIL = "pnxitsolutionssupport@gmail.com";
const SUPPORT_WHATSAPP = "https://wa.me/+916388507400";
const LINKEDIN_URL = "https://linkedin.com/in/yourprofile";
const INSTAGRAM_URL = "https://instagram.com/yourhandle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PNX IT Solutions — Smart IT Solutions for Growing Businesses" },
      {
        name: "description",
        content:
          "PNX IT Solutions builds websites, sets up hosting, domain & email, and provides IT support for small offices. Get a free consultation today.",
      },
      { property: "og:title", content: "PNX IT Solutions — Smart IT for Growing Businesses" },
      {
        property: "og:description",
        content: "Websites, hosting, email setup and reliable IT support for small businesses.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#testimonials", label: "Clients" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-primary/40 shadow-[0_0_18px_var(--glow)]">
            <img
              src={pnxLogo}
              alt="PNX IT Solutions"
              className="w-full h-full object-cover"
            />
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={LEAD_FORM}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition shadow-[0_0_24px_-6px_var(--glow)]"
        >
          Get Free Consultation <ArrowRight className="w-4 h-4" />
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md hover:bg-secondary"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95">
          <div className="px-5 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={LEAD_FORM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium"
            >
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 glow-bg pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
            Trusted IT partner for growing businesses
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            <span className="text-gradient">Smart IT Solutions</span>
            <br />
            for Growing Businesses
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl">
            We build modern websites, set up hosting, domain & business email, and provide reliable
            IT support so your team can focus on growth — not tech headaches.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={LEAD_FORM}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition shadow-[0_0_40px_-10px_var(--glow)]"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-medium hover:bg-secondary transition"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { k: "24/7", v: "Support" },
              { k: "50+", v: "Projects" },
              { k: "100%", v: "Reliability" },
            ].map((s) => (
              <div key={s.v} className="card-glow rounded-xl px-4 py-3">
                <div className="text-xl font-semibold">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute -right-10 top-24 w-72 h-72 rounded-full blur-3xl opacity-40 animate-float"
          style={{ background: "radial-gradient(circle, var(--glow), transparent 60%)" }} />
        <div className="pointer-events-none absolute right-40 bottom-10 w-64 h-64 rounded-full blur-3xl opacity-30 animate-float"
          style={{ background: "radial-gradient(circle, var(--glow-2), transparent 60%)", animationDelay: "1.5s" }} />
      </div>
    </section>
  );
}

/* ---------------- About / Trust ---------------- */
function About() {
  const trust = [
    {
      icon: Globe,
      title: "Website & Landing Pages",
      desc: "Conversion-focused websites that look premium and load fast.",
    },
    {
      icon: Server,
      title: "Hosting, Domain & Email Setup",
      desc: "End-to-end setup with business email, security, and uptime.",
    },
    {
      icon: Headphones,
      title: "IT Support for Small Offices",
      desc: "On-call support for hardware, networks, and everyday IT.",
    },
  ];
  const why = [
    { icon: Zap, title: "Fast Response", desc: "Quick turnaround on every request." },
    { icon: Wallet, title: "Affordable Pricing", desc: "Transparent, SMB-friendly plans." },
    { icon: ShieldCheck, title: "Reliable Support", desc: "We stay with you after delivery." },
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="About PNX"
          title="A modern IT partner you can count on"
          desc="From your first website to the email running your business, we handle the tech end-to-end so you can focus on customers."
        />

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {trust.map((t) => (
            <Card key={t.title} icon={t.icon} title={t.title} desc={t.desc} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Why Choose Us</h3>
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            {why.map((w) => (
              <div key={w.title} className="card-glow rounded-2xl p-6 group">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center w-10 h-10 rounded-lg bg-secondary text-primary">
                    <w.icon className="w-5 h-5" />
                  </div>
                  <div className="font-medium">{w.title}</div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const services = [
    {
      icon: Globe,
      title: "Websites & Landing Pages",
      desc: "Business websites, landing pages and portfolios — designed to convert visitors into leads.",
      points: ["Responsive design", "SEO-ready", "Fast & secure"],
    },
    {
      icon: LifeBuoy,
      title: "IT Support for Small Offices",
      desc: "Day-to-day IT help — workstations, printers, Wi-Fi, backups, and user issues.",
      points: ["Remote & on-site", "Asset management", "Security basics"],
    },
    {
      icon: Server,
      title: "Cloud, Email, Domain & Hosting",
      desc: "Domain registration, business email, hosting and cloud setup with proper configuration.",
      points: ["Google / Microsoft 365", "DNS & SSL", "Backups & uptime"],
    },
  ];

  return (
    <section id="services" className="relative py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Services"
          title="Everything your business needs, in one place"
          desc="Pick a single service or get the whole stack handled by one team."
        />
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {services.map((s) => (
            <div key={s.title} className="card-glow rounded-2xl p-6 flex flex-col group">
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-secondary text-primary shadow-[0_0_24px_-8px_var(--glow)]">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {p}
                  </li>
                ))}
              </ul>
              <a
                href={LEAD_FORM}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
              >
                Request Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { icon: MessageSquare, title: "Share Your Requirement", desc: "Tell us about your business and goals." },
    { icon: Sparkles, title: "Get Free Consultation", desc: "We propose the right plan and scope." },
    { icon: Rocket, title: "Project Execution", desc: "We build, configure and test thoroughly." },
    { icon: LifeBuoy, title: "Delivery & Support", desc: "We hand over and stay on standby." },
  ];
  return (
    <section id="process" className="relative py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Process"
          title="A simple 4-step workflow"
          desc="No back-and-forth confusion — just a clear path from idea to delivery."
        />
        <div className="grid md:grid-cols-4 gap-5 mt-12">
          {steps.map((s, i) => (
            <div key={s.title} className="card-glow rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute right-4 top-3 text-6xl font-bold text-foreground/5 select-none">
                0{i + 1}
              </div>
              <div className="grid place-items-center w-10 h-10 rounded-lg bg-secondary text-primary">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const reviews = [
    {
      quote:
        "The team delivered our website quickly and professionally. The whole process felt smooth from day one.",
      name: "Rohan Mehta",
      business: "Founder, Mehta Traders",
      avatar: avatar1,
    },
    {
      quote:
        "Great support for our business email and hosting setup. Everything just works and uptime has been perfect.",
      name: "Ananya Sharma",
      business: "Director, Sharma Interiors",
      avatar: avatar2,
    },
    {
      quote:
        "Very responsive and reliable IT service partner. They genuinely care about our small business growth.",
      name: "Vikram Singh",
      business: "Owner, VS Logistics",
      avatar: avatar3,
    },
  ];

  const highlights = [
    { icon: Zap, label: "Fast Response" },
    { icon: ShieldCheck, label: "Reliable Support" },
    { icon: Target, label: "Business-Focused Solutions" },
    { icon: Wallet, label: "Affordable Pricing" },
  ];

  return (
    <section id="testimonials" className="relative py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What our clients say"
          desc="Real feedback from small businesses we help every day."
        />

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {reviews.map((r) => (
            <div key={r.name} className="card-glow rounded-2xl p-6 flex flex-col">
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                "{r.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/40 shadow-[0_0_18px_-4px_var(--glow)]"
                />
                <div className="min-w-0">
                  <div className="font-medium text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="card-glow rounded-xl px-4 py-4 flex items-center gap-3"
            >
              <div className="grid place-items-center w-9 h-9 rounded-lg bg-secondary text-primary">
                <h.icon className="w-4 h-4" />
              </div>
              <div className="text-sm font-medium">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const channels = [
    { icon: Linkedin, label: "LinkedIn", href: LINKEDIN_URL },
    { icon: Instagram, label: "Instagram", href: INSTAGRAM_URL },
    { icon: Phone, label: "WhatsApp", href: SUPPORT_WHATSAPP },
    { icon: Mail, label: "Email", href: `mailto:${SUPPORT_EMAIL}` },
  ];
  return (
    <section id="contact" className="relative py-24 border-t border-border/60">
      <div className="absolute inset-0 glow-bg opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-5">
        <div className="card-glow rounded-3xl p-8 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(circle, var(--glow), transparent 60%)" }} />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
              Let's talk
            </div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
              Ready to <span className="text-gradient">grow your business</span> with us?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Fill the lead form and we'll get back to you within one business day with a free consultation.
            </p>
            <a
              href={LEAD_FORM}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold hover:opacity-90 transition shadow-[0_0_60px_-10px_var(--glow)]"
            >
              Fill the Lead Form <ArrowRight className="w-5 h-5" />
            </a>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm hover:border-primary/60 hover:bg-secondary transition"
                >
                  <c.icon className="w-4 h-4 text-primary" />
                  <span>{c.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Support card */}
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="card-glow rounded-2xl p-6 flex items-center gap-4 group"
          >
            <div className="grid place-items-center w-12 h-12 rounded-xl bg-secondary text-primary shadow-[0_0_24px_-8px_var(--glow)]">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Support Email</div>
              <div className="mt-1 font-medium truncate group-hover:text-primary transition">
                {SUPPORT_EMAIL}
              </div>
            </div>
          </a>
          <a
            href={SUPPORT_WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="card-glow rounded-2xl p-6 flex items-center gap-4 group"
          >
            <div className="grid place-items-center w-12 h-12 rounded-xl bg-secondary text-primary shadow-[0_0_24px_-8px_var(--glow)]">
              <Phone className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Support WhatsApp</div>
              <div className="mt-1 font-medium group-hover:text-primary transition">
                +91 63885 07400
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-5 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-primary/40 shadow-[0_0_18px_var(--glow)]">
              <img
                src={pnxLogo}
                alt="PNX IT Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Your trusted IT & cloud partner — smart IT for growing businesses.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="grid place-items-center w-9 h-9 rounded-lg border border-border bg-secondary/40 hover:border-primary/60 hover:text-primary transition">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram"
              className="grid place-items-center w-9 h-9 rounded-lg border border-border bg-secondary/40 hover:border-primary/60 hover:text-primary transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={SUPPORT_WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp"
              className="grid place-items-center w-9 h-9 rounded-lg border border-border bg-secondary/40 hover:border-primary/60 hover:text-primary transition">
              <Phone className="w-4 h-4" />
            </a>
            <a href={`mailto:${SUPPORT_EMAIL}`} aria-label="Email"
              className="grid place-items-center w-9 h-9 rounded-lg border border-border bg-secondary/40 hover:border-primary/60 hover:text-primary transition">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="text-sm">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Explore</div>
          <div className="mt-4 grid grid-cols-2 gap-y-2">
            <a href="#about" className="text-muted-foreground hover:text-foreground">About</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground">Services</a>
            <a href="#process" className="text-muted-foreground hover:text-foreground">Process</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground">Clients</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a>
            <a href={LEAD_FORM} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">Lead Form</a>
          </div>
        </div>

        <div className="text-sm">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Support</div>
          <div className="mt-4 space-y-2">
            <a href={`mailto:${SUPPORT_EMAIL}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <Mail className="w-4 h-4 text-primary" /> {SUPPORT_EMAIL}
            </a>
            <a href={SUPPORT_WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <Phone className="w-4 h-4 text-primary" /> +91 63885 07400
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <BadgeCheck className="w-4 h-4 text-primary" /> Fast & reliable response
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 mt-10 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} PNX IT Solutions. All rights reserved.</div>
        <div>Your Trusted IT & Cloud Partner</div>
      </div>
    </footer>
  );
}

/* ---------------- Helpers ---------------- */
function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs uppercase tracking-[0.25em] text-primary/80">{eyebrow}</div>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-3 text-muted-foreground">{desc}</p>
    </div>
  );
}

function Card({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="card-glow rounded-2xl p-6 group">
      <div className="grid place-items-center w-11 h-11 rounded-xl bg-secondary text-primary shadow-[0_0_24px_-8px_var(--glow)]">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}