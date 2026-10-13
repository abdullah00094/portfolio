import { projects } from "../content/projects";
import CaseStudyCard from "./CaseStudyCard";
import Reveal from "./Reveal";
export default function Projects(){return <section id="projects" className="projects-section">
<div className="section-shell content-section">
<header className="section-heading light">
<span className="section-number">03</span>
<div>
<p className="micro">SELECTED SYSTEMS</p>
<h2>Evidence, not<br/>project thumbnails.</h2>
<p className="heading-note">Sanitized case notes from confidential company work.</p>
</div>
</header>
<div className="case-list">{projects.map((project,i)=>
<Reveal key={project.slug}>
<CaseStudyCard project={project} index={i}/>
</Reveal>)}</div>
</div>
</section>}
