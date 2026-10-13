import { experience } from "../content/experience";
import Reveal from "./Reveal";
export default function Experience() { return <section id="experience" className="section-shell content-section">
<header className="section-heading">
<span className="section-number">01</span>
<div>
<p className="micro">WORK RECORD</p>
<h2>From implementation<br/>to product ownership.</h2>
</div>
</header>
<div className="experience-list">{experience.map((item,i) =>
<Reveal key={item.role} className="experience-row" delay={i*.06}>
<div>
<span className="micro">{item.period}</span>
<h3>{item.role}</h3>
<p className="company">{item.company}</p>
</div>
<div>
<p className="experience-summary">{item.summary}</p>
<ul>{item.highlights.map(x=>
<li key={x}>{x}</li>)}</ul>
</div>
</Reveal>)}</div>
</section>; }
