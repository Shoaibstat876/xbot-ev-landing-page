import Image from "next/image";
import { ArrowDown, ArrowUpRight, BatteryCharging, Gauge, ShieldCheck } from "lucide-react";
import { TestRideForm } from "@/components/test-ride-form";

const principles = [
  { number: "01", title: "Electric at heart", text: "A forward-looking approach to everyday mobility.", icon: BatteryCharging },
  { number: "02", title: "Distinctive presence", text: "Sculpted form with a confident electric identity.", icon: Gauge },
  { number: "03", title: "Rider focused", text: "A clean, considered experience from the first touch.", icon: ShieldCheck },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="XBOT EV home"><span className="x-mark">X</span>BOT <b>EV</b></a>
      <nav aria-label="Main navigation"><a href="#experience">Experience</a><a href="#design">Design</a><a href="#test-ride">Test ride</a></nav>
      <a className="header-cta" href="#test-ride">Request a test ride <ArrowUpRight size={15}/></a>
    </header>
    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow">Introducing XBOT EV</p><h1>Move<br/><span>beyond.</span></h1><p className="hero-intro">A bold new vision for electric mobility—designed to make every journey feel modern, confident and connected.</p><div className="hero-actions"><a className="button button-primary" href="#test-ride">Request a test ride <ArrowUpRight size={16}/></a><a className="text-link" href="#experience">Explore the bike <ArrowDown size={15}/></a></div></div>
      <div className="hero-image-wrap"><span className="hero-index" aria-hidden="true">01</span><div className="hero-glow" aria-hidden="true"/><Image unoptimized className="hero-image" src="/images/xbot-hero.webp" alt="Blue XBOT EV electric bike in side profile" width={1536} height={1024} priority sizes="(max-width: 800px) 100vw, 62vw"/><p className="image-caption"><span>Electric form</span><span>Urban expression</span></p></div>
      <a className="scroll-cue" href="#experience" aria-label="Scroll to experience"><span>Scroll to discover</span><ArrowDown size={15}/></a>
    </section>
    <section className="principles" id="experience" aria-label="XBOT EV design principles">{principles.map(({number,title,text,icon:Icon}) => <article key={number}><div className="principle-top"><span>{number}</span><Icon size={20}/></div><h2>{title}</h2><p>{text}</p></article>)}</section>
    <section className="manifesto"><p className="section-label">A new electric expression</p><h2>Designed to turn<br/>the everyday journey<br/><em>into an arrival.</em></h2><p>XBOT EV brings together expressive styling, an electric-first identity and a rider-focused experience in one confident urban form.</p></section>
    <section className="design-story" id="design"><div className="portrait-frame"><div className="frame-label">01 — Front three-quarter</div><Image unoptimized src="/images/xbot-three-quarter.webp" alt="Blue XBOT EV from a front three-quarter angle" width={1122} height={1402} sizes="(max-width: 800px) 100vw, 50vw"/></div><div className="design-copy"><p className="eyebrow">Designed from every angle</p><h2>Bold lines.<br/><span>Refined details.</span></h2><p>Every visual element contributes to a modern product experience created for tomorrow’s journeys.</p><div className="detail-frame"><Image unoptimized src="/images/xbot-detail.webp" alt="Close detail of the XBOT EV front body and wheel" width={780} height={620} sizes="(max-width: 800px) 90vw, 34vw"/></div></div></section>
    <section className="spec-note"><p>Product information</p><h2>Want the complete picture?</h2><span>Official model specifications, pricing and availability can be confirmed directly by the XBOT EV team.</span><a href="#test-ride">Ask the team <ArrowUpRight size={15}/></a></section>
    <section className="test-ride" id="test-ride"><div className="test-ride-copy"><p className="eyebrow">Experience XBOT EV</p><h2>Request<br/>a test ride.</h2><p>Share your details and the XBOT EV team can contact you with product information and the next available steps.</p><ol><li><span>01</span>Send your request</li><li><span>02</span>Team review</li><li><span>03</span>Receive next steps</li></ol></div><TestRideForm/></section>
    <footer><a className="wordmark" href="#top"><span className="x-mark">X</span>BOT <b>EV</b></a><p>Smarter mobility. Stronger future.</p><p>© 2026 XBOT EV · Assessment concept</p></footer>
  </main>;
}
