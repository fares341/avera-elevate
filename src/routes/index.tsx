import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Menu, MessageCircle, MapPin, Users, Instagram, Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroCorporate from "@/assets/hero-corporate.jpg";
import {
  VENUES,
  REGIONS,
  PHILOSOPHY,
  TIMELINE,
  CORPORATE_SERVICES,
  WHATSAPP_LINK,
} from "@/lib/avera";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AVERA — Luxury Weddings & Corporate Events in Egypt" },
      {
        name: "description",
        content:
          "AVERA unites Avera Wedding House and Millions Event: visionary luxury weddings and high-end corporate production across 19 signature Egyptian venues.",
      },
      { property: "og:title", content: "AVERA — Luxury Weddings & Corporate Events in Egypt" },
      {
        property: "og:description",
        content:
          "Editorial wedding design and world-class event production across 19 iconic hotels in Egypt.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Weddings", href: "#weddings" },
  { label: "Corporate & Events", href: "#corporate" },
  { label: "The Philosophy", href: "#philosophy" },
  { label: "Featured Venues (19)", href: "#venues" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [venue, setVenue] = useState<string | undefined>(undefined);
  const [tab, setTab] = useState<"wedding" | "corporate">("wedding");
  const [region, setRegion] = useState<string>("All");
  const [navOpen, setNavOpen] = useState(false);

  const filtered = useMemo(
    () => (region === "All" ? VENUES : VENUES.filter((v) => v.region === region)),
    [region],
  );

  const openModal = (opts?: { venue?: string; tab?: "wedding" | "corporate" }) => {
    setVenue(opts?.venue);
    setTab(opts?.tab ?? "wedding");
    setOpen(true);
  };

  const scrollTo = (href: string) => {
    setNavOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex items-center justify-between gap-4">
            <button
              className="flex items-center gap-2 text-muted-foreground lg:hidden"
              onClick={() => setNavOpen((o) => !o)}
              aria-label="Toggle navigation"
            >
              <Menu className="size-5" />
            </button>

            <div className="hidden flex-1 lg:block" />

            <div className="text-center">
              <a href="#top" className="font-serif text-2xl tracking-[0.5em] text-foreground">
                AVERA
              </a>
              <p className="mt-1 text-[0.6rem] uppercase tracking-[0.42em] text-muted-foreground">
                Before Forever
              </p>
            </div>

            <div className="flex flex-1 items-center justify-end gap-3">
              <Button variant="gold" onClick={() => openModal()} className="hidden sm:inline-flex">
                Book a Consultation
              </Button>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Button variant="sand" size="icon">
                  <MessageCircle />
                </Button>
              </a>
            </div>
          </div>

          <nav className="mt-5 hidden items-center justify-center gap-9 lg:flex">
            {NAV.map((n) => (
              <button
                key={n.label}
                onClick={() => scrollTo(n.href)}
                className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-gold"
              >
                {n.label}
              </button>
            ))}
          </nav>

          {navOpen && (
            <nav className="mt-4 grid gap-3 lg:hidden">
              {NAV.map((n) => (
                <button
                  key={n.label}
                  onClick={() => scrollTo(n.href)}
                  className="text-left text-xs uppercase tracking-[0.22em] text-muted-foreground"
                >
                  {n.label}
                </button>
              ))}
              <Button variant="gold" onClick={() => openModal()} className="sm:hidden">
                Book a Consultation
              </Button>
            </nav>
          )}
        </div>
      </header>

      <main id="top">
        {/* Split hero */}
        <section className="grid md:grid-cols-2">
          <article
            id="weddings"
            className="group relative flex min-h-[78vh] scroll-mt-32 flex-col justify-end overflow-hidden border-b border-border md:border-b-0 md:border-r"
          >
            <img
              src={heroWedding}
              alt="Luxury wedding ceremony beneath an ivory floral arch"
              width={1200}
              height={1504}
              className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.99_0.004_84/0.96),oklch(0.99_0.004_84/0.55)_45%,oklch(0.99_0.004_84/0.15))]" />
            <div className="relative p-8 md:p-14">
              <p className="eyebrow">Avera Wedding House</p>
              <h1 className="mt-4 max-w-md font-serif text-4xl leading-tight text-foreground md:text-5xl">
                Your Personality, Your Wedding — From Concept to Reality
              </h1>
              <div className="gold-rule my-6" />
              <Button variant="gold" size="lg" onClick={() => scrollTo("#timeline")}>
                Explore Weddings
              </Button>
            </div>
          </article>

          <article
            id="corporate"
            className="group relative flex min-h-[78vh] scroll-mt-32 flex-col justify-end overflow-hidden"
          >
            <img
              src={heroCorporate}
              alt="Corporate gala production with LED video wall and stage lighting"
              width={1200}
              height={1504}
              className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.99_0.004_84/0.96),oklch(0.99_0.004_84/0.6)_45%,oklch(0.99_0.004_84/0.2))]" />
            <div className="relative p-8 md:p-14">
              <p className="eyebrow">Millions Event</p>
              <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight text-foreground md:text-5xl">
                High-End Corporate Production & Spatial Design
              </h2>
              <div className="gold-rule my-6" />
              <Button variant="sand" size="lg" onClick={() => scrollTo("#services")}>
                Explore Corporate Events
              </Button>
            </div>
          </article>
        </section>

        {/* Philosophy */}
        <section id="philosophy" className="scroll-mt-32 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">The A.V.E.R.A Philosophy</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground md:text-5xl">
                Avera Isn't Just a Name... It's a Promise
              </h2>
              <div className="gold-rule mx-auto my-8" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {PHILOSOPHY.map((p, i) => (
                <div
                  key={i}
                  className="rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-transform duration-500 hover:-translate-y-1"
                >
                  <span className="font-serif text-5xl text-gold">{p.letter}</span>
                  <h3 className="mt-5 text-xs uppercase tracking-[0.28em] text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="scroll-mt-32 px-6 pb-24">
          <div className="mx-auto max-w-5xl rounded-sm bg-champagne px-6 py-20 md:px-16">
            <div className="text-center">
              <p className="eyebrow">Wedding Day</p>
              <h2 className="mt-5 font-serif text-4xl text-foreground md:text-5xl">
                The Day, Perfectly Orchestrated
              </h2>
              <div className="gold-rule mx-auto my-8" />
            </div>
            <ol className="relative mt-12 border-l border-gold/40 pl-8 md:pl-12">
              {TIMELINE.map((t) => (
                <li key={t.time} className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[2.32rem] top-1.5 size-2.5 rounded-full bg-[image:var(--gradient-gold)] md:-left-[3.32rem]" />
                  <p className="text-xs uppercase tracking-[0.28em] text-gold">{t.time}</p>
                  <h3 className="mt-3 font-serif text-2xl text-foreground">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Venues */}
        <section id="venues" className="scroll-mt-32 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Partnerships</p>
              <h2 className="mt-5 font-serif text-4xl text-foreground md:text-5xl">
                Featured Hotel Partners & Venues
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                19 signature iconic destinations across Egypt where we craft visionary celebrations.
              </p>
              <div className="gold-rule mx-auto my-8" />
            </div>

            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {[`All Venues (${VENUES.length})`, ...REGIONS].map((label, i) => {
                const value = i === 0 ? "All" : label;
                const active = region === value;
                return (
                  <button
                    key={label}
                    onClick={() => setRegion(value)}
                    className={`rounded-full border px-5 py-2 text-[0.7rem] uppercase tracking-[0.2em] transition-colors ${
                      active
                        ? "border-gold bg-champagne text-foreground"
                        : "border-border bg-card text-muted-foreground hover:border-gold/50"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((v) => (
                <article
                  key={v.name}
                  className="group overflow-hidden rounded-sm border border-border bg-card shadow-[var(--shadow-soft)]"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={v.image}
                      alt={`${v.name} event setting`}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {v.region}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-serif text-2xl leading-snug text-foreground">{v.name}</h3>
                    <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <MapPin className="size-3.5 text-gold" /> {v.location}
                      </p>
                      <p className="flex items-center gap-2">
                        <Users className="size-3.5 text-gold" /> {v.capacity}
                      </p>
                    </div>
                    <Button
                      variant="sand"
                      className="mt-6 w-full"
                      onClick={() => openModal({ venue: v.name })}
                    >
                      Plan at this Venue
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate services */}
        <section id="services" className="scroll-mt-32 bg-secondary px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Avera Events / Millions</p>
              <h2 className="mt-5 font-serif text-4xl text-foreground md:text-5xl">
                Corporate & Production Services
              </h2>
              <div className="gold-rule mx-auto my-8" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CORPORATE_SERVICES.map((s, i) => (
                <div
                  key={s.title}
                  className="rounded-sm border border-border bg-card p-8 transition-shadow hover:shadow-[var(--shadow-elegant)]"
                >
                  <span className="font-serif text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl leading-snug text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="gold" size="lg" onClick={() => openModal({ tab: "corporate" })}>
                Request a Corporate Proposal
              </Button>
            </div>
          </div>
        </section>

        {/* Intake */}
        <section id="contact" className="scroll-mt-32 px-6 py-24">
          <div className="mx-auto max-w-3xl rounded-sm border border-border bg-card p-10 text-center shadow-[var(--shadow-elegant)] md:p-16">
            <p className="eyebrow">Lead Intake</p>
            <h2 className="mt-5 font-serif text-4xl text-foreground md:text-5xl">
              Begin Your Story With AVERA
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Tell us about your wedding or corporate production. Every submission generates an
              instant WhatsApp brief for our planning team.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" onClick={() => openModal({ tab: "wedding" })}>
                Wedding Inquiry
              </Button>
              <Button variant="sand" size="lg" onClick={() => openModal({ tab: "corporate" })}>
                Corporate RFP
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl tracking-[0.5em] text-foreground">AVERA</p>
            <p className="mt-2 text-[0.6rem] uppercase tracking-[0.42em] text-muted-foreground">
              Before Forever
            </p>
            <div className="gold-rule my-6" />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Avera Wedding House & Millions Event — one house for celebrations and productions.
            </p>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground">
            <h3 className="text-xs uppercase tracking-[0.28em] text-foreground">Direct Contact</h3>
            <p className="flex items-center gap-3">
              <Phone className="size-4 text-gold" />
              <a href="tel:+201001200697" className="hover:text-gold">
                +20 100 120 0697
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="size-4 text-gold" />
              <a href="tel:+201006432217" className="hover:text-gold">
                +20 100 643 2217
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="size-4 text-gold" />
              <a href="mailto:contact@avera.wedding" className="hover:text-gold">
                contact@avera.wedding
              </a>
            </p>
            <p className="flex items-center gap-3">
              <MessageCircle className="size-4 text-gold" />
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                WhatsApp us
              </a>
            </p>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground">
            <h3 className="text-xs uppercase tracking-[0.28em] text-foreground">Hours & Social</h3>
            <p className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>
                Sunday – Thursday: 9:00 AM – 9:00 PM
                <br />
                Saturday: 10:00 AM – 9:00 PM
                <br />
                Friday: Closed
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Instagram className="size-4 text-gold" />
              <a
                href="https://instagram.com/avera.wedding"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                @avera.wedding
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Instagram className="size-4 text-gold" />
              <a
                href="https://instagram.com/millionseventt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                @millionseventt
              </a>
            </p>
          </div>
        </div>
        <p className="mx-auto mt-14 max-w-7xl border-t border-border pt-8 text-center text-xs tracking-[0.2em] text-muted-foreground">
          © AVERA Group. All Rights Reserved. Before Forever.
        </p>
      </footer>

      <BookingModal
        key={`${venue ?? "none"}-${tab}-${open}`}
        open={open}
        onOpenChange={setOpen}
        preselectedVenue={venue}
        defaultTab={tab}
      />
    </div>
  );
}
