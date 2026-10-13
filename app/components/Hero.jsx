import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Github, MapPin } from "lucide-react";
import { site } from "../content/site";
export default function Hero() { return <section id="home" className="hero section-shell">
<div className="hero-copy">
<p className="eyebrow">
<span>Portfolio / 2026</span>
<span>
<i/> Available for product & backend work</span>
</p>
<h1>{site.headline}</h1>
<p className="hero-role">{site.role}</p>
<p className="hero-summary">{site.summary}</p>
<div className="hero-actions">
<a className="button primary" href="#projects">Explore case studies <ArrowDownRight size={17}/>
</a>
<a className="button" href={"mailto:" + site.email}>Start a conversation <ArrowUpRight size={17}/>
</a>
</div>
<div className="hero-meta">
<span>
<MapPin size={15}/>{site.location}</span>
<a href={site.github} target="_blank" rel="noreferrer">
<Github size={15}/>GitHub</a>
<a href="/cv">View CV</a>
</div>
</div>
<div className="portrait-wrap">
<div className="portrait-index micro">PORTRAIT / SUBJECT 01</div>
<Image src="/images/profile.jpg" alt="Portrait of Abdullah Ibraheem" width={600} height={720} priority sizes="(max-width: 760px) 90vw, 38vw"/>
<div className="portrait-caption">
<b>Product thinking</b>
<span>×</span>
<b>Backend depth</b>
</div>
</div>
</section>; }
