import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-savanna.jpg";
import suiteImg from "@/assets/suite-interior.jpg";
import elephantImg from "@/assets/elephant.jpg";
import bomaImg from "@/assets/boma-dinner.jpg";
import driveImg from "@/assets/game-drive.jpg";
import lionsImg from "@/assets/lions.jpg";
import poolImg from "@/assets/pool.jpg";
import logoImg from "@/assets/logo.jpg";
import lodgePath from "@/assets/lodge-path.jpg";
import lodgeGrounds from "@/assets/lodge-grounds.jpg";
import lodgePool from "@/assets/lodge-pool.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matjulu Kruger Lodge — Safari Retreat" },
      { name: "description", content: "An intimate safari lodge bordering Kruger National Park. Private game drives, candle-lit boma dinners, and timeless African hospitality." },
      { property: "og:title", content: "Matjulu Kruger Lodge" },
      { property: "og:description", content: "An intimate safari lodge bordering Kruger National Park." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Experiences />
      <Accommodation />
      <Event />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg tracking-wide text-foreground">
          <img src={logoImg} alt="Matjulu Kruger Lodge" className="h-9 w-9 object-contain" />
          <span>Matjulu Kruger Lodge</span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#experiences" className="hover:text-foreground transition">Experiences</a>
          <a href="#stay" className="hover:text-foreground transition">Stay</a>
          <a href="#gallery" className="hover:text-foreground transition">Gallery</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a href="#contact" className="text-xs uppercase tracking-[0.2em] border border-foreground/30 px-4 py-2 hover:bg-foreground hover:text-background transition">
          Reserve
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Sunset over the Kruger savanna with acacia trees"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
        <div className="relative h-full flex flex-col items-center justify-end pb-24 px-6 text-center text-background">
          <p className="eyebrow mb-6 text-background/80">Mpumalanga · South Africa</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl text-background">
            Where the bush remembers your name.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-background/85 font-light">
            An intimate lodge on the doorstep of Kruger National Park —
            crafted for quiet mornings, dust-gold afternoons, and unhurried African nights.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="#stay" className="bg-primary text-primary-foreground px-8 py-3 text-sm uppercase tracking-[0.2em] hover:bg-primary/90 transition">
              Plan your stay
            </a>
            <a href="#experiences" className="border border-background/60 text-background px-8 py-3 text-sm uppercase tracking-[0.2em] hover:bg-background hover:text-foreground transition">
              Explore
            </a>
          </div>
        </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="eyebrow text-primary mb-4">Our story</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Where luxury meets the wild.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Matjulu Kruger Lodge sits in the south-western Kruger National Park near
            Malelane — a region known for its rugged mountain bushveld and the scenic
            Matjulu Loop. Built on the banks of the Matjulu Spruit, surrounded by rocky
            hills and dry riverbeds, the lodge offers a mountainous habitat unlike any
            other corner of the park.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The area is iconic for the Matjulu Pride — a prominent lion pride often
            sighted around the Matjulu Waterhole, the H3 road, and near Berg-en-Dal.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat n="3" l="Tour packages" />
            <Stat n="R2 500" l="From, per night" />
            <Stat n="24/7" l="Bush views" />
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src={lodgeGrounds} alt="Matjulu Kruger Lodge grounds with mountain backdrop" loading="lazy" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-foreground">{n}</div>
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{l}</div>
    </div>
  );
}

function Experiences() {
  const items = [
    { img: driveImg, title: "Kruger National Park tour", text: "Day safari drive into Kruger with lunch at Kruger Shayati. Package 3 — R2 500 pp sharing, one night." },
    { img: lionsImg, title: "Panorama Route tour", text: "God's Window, Three Rondavels, Bourke's Luck Potholes and the Blyde River Canyon. Package 2 — R3 000 pp sharing, one night." },
    { img: elephantImg, title: "Makhonjwa Mountain & Barberton", text: "Barberton transfer tour and braai via Shiyalongubo Dam. Package 1 — R2 500 pp sharing, one night." },
    { img: bomaImg, title: "Boma dinners & braai", text: "Long-table meals around an open fire — the Matjulu way to end a day in the bush." },
  ];
  return (
    <section id="experiences" className="py-28 px-6 bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-accent mb-4">Experiences</p>
          <h2 className="font-display text-4xl md:text-5xl">Days that slow down, then sharpen.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          {items.map((it) => (
            <article key={it.title} className="group">
              <div className="overflow-hidden aspect-[3/2] mb-5">
                <img src={it.img} alt={it.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              </div>
              <h3 className="font-display text-2xl">{it.title}</h3>
              <p className="mt-2 text-secondary-foreground/75 leading-relaxed">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Accommodation() {
  return (
    <section id="stay" className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden order-2 md:order-1">
          <img src={suiteImg} alt="King-size suite interior at Matjulu Kruger Lodge" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <p className="eyebrow text-primary mb-4">The suites</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Wake up in comfort. Sleep in nature.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Experience the perfect blend of modern elegance and African warmth.
            Private rondavel-style suites with king beds, premium linen and tranquil
            interiors inspired by the bushveld around them.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {["King-size comfort & premium linen", "Air-conditioned luxury for all seasons", "Tranquil interiors inspired by nature", "Private, peaceful atmosphere", "Pool deck with mountain views"].map((f) => (
              <li key={f} className="flex gap-3 items-start">
                <span className="text-primary mt-1">✦</span>
                <span className="text-foreground/85">{f}</span>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/27826764239" target="_blank" rel="noreferrer" className="inline-block mt-10 bg-primary text-primary-foreground px-8 py-3 text-sm uppercase tracking-[0.2em] hover:bg-primary/90 transition">
            Book your stay
          </a>
        </div>
      </div>
    </section>
  );
}

function Event() {
  return (
    <section id="event" className="py-28 px-6 bg-secondary text-secondary-foreground">
      <div className="max-w-5xl mx-auto text-center">
        <p className="eyebrow text-accent mb-4">Upcoming event</p>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">2nd Annual Hiking Tour</h2>
        <p className="mt-6 font-display text-xl text-secondary-foreground/80 italic">Hike. Connect. Belong.</p>
        <p className="mt-4 max-w-2xl mx-auto text-secondary-foreground/75 leading-relaxed">
          Step into the wild and experience the Kruger like never before. Guided hikes
          through breathtaking landscapes, unforgettable moments, and true connection with nature.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-left max-w-3xl mx-auto">
          <EventDetail label="Date" value="Sat, 20 June 2026" />
          <EventDetail label="Arrival" value="06:00 · Hike 07:00–12:00" />
          <EventDetail label="Ticket" value="R150 per person" />
          <EventDetail label="Boma Dinner" value="Optional · R250 pp" />
        </div>
        <a href="https://wa.me/27728670157" target="_blank" rel="noreferrer" className="inline-block mt-12 bg-accent text-accent-foreground px-8 py-3 text-sm uppercase tracking-[0.2em] hover:bg-accent/90 transition">
          Book on WhatsApp
        </a>
      </div>
    </section>
  );
}

function EventDetail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow text-accent mb-2">{label}</p>
      <p className="font-display text-lg text-secondary-foreground">{value}</p>
    </div>
  );
}

function Gallery() {
  const imgs = [lodgePath, lodgePool, elephantImg, lodgeGrounds, lionsImg, suiteImg];
  return (
    <section id="gallery" className="py-28 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="eyebrow text-primary mb-4">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl">Moments from the lodge.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {imgs.map((src, i) => (
            <div key={i} className={`overflow-hidden ${i === 0 || i === 4 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}>
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="eyebrow text-accent mb-6">Reservations</p>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
          The fire is lit. Your seat is waiting.
        </h2>
        <p className="mt-6 text-background/70 max-w-xl mx-auto leading-relaxed">
          We respond to every enquiry personally. Tell us your dates and we'll put
          together a stay that fits.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-10 text-left">
          <ContactBlock label="WhatsApp / Call" value="+27 82 676 4239" href="https://wa.me/27826764239" />
          <ContactBlock label="WhatsApp / Call" value="+27 72 867 0157" href="https://wa.me/27728670157" />
          <ContactBlock label="Location" value="Matsulu, near Malelane Gate · Kruger National Park" />
        </div>

        <div className="mt-16 pt-10 border-t border-background/20 flex flex-wrap gap-6 justify-center text-xs uppercase tracking-[0.2em] text-background/60">
          <span>matjulukrugerlodge.co.za</span>
          <span>Mon–Sun · Reception 06:00–22:00</span>
        </div>
      </div>
    </section>
  );
}

function ContactBlock({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = <span className="font-display text-xl text-background">{value}</span>;
  return (
    <div>
      <p className="eyebrow text-background/50 mb-3">{label}</p>
      {href ? <a href={href} className="hover:text-accent transition">{inner}</a> : inner}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background/60 border-t border-background/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-3 justify-between items-center text-xs">
        <span>© {new Date().getFullYear()} Matjulu Kruger Lodge. All rights reserved.</span>
        <span className="uppercase tracking-[0.2em]">Crafted in the Lowveld</span>
    </div>
    </footer>
  );
}
