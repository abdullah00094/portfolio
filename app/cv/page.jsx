import { site } from "../content/site";
import { experience } from "../content/experience";
import { capabilities } from "../content/skills";
import { education, learning } from "../content/education";
import { projects } from "../content/projects";
import PrintButton from "../components/PrintButton";
export const metadata={title:"CV",description:"CV for Abdullah Ibraheem, Technical Product Owner and Laravel Backend Engineer",alternates:{canonical:"/cv"}};
export default function CvPage(){return <main id="main-content" className="cv-page">
<header>
<p className="micro">CURRICULUM VITAE / 2026</p>
<h1>{site.name}</h1>
<h2>{site.role}</h2>
<p>{site.location} · <a href={"mailto:"+site.email}>{site.email}</a> · {site.phone} · <a href={site.github}>GitHub</a>
</p>
<p className="cv-summary">{site.summary}</p>
<PrintButton/>
</header>
<section>
<h2>Experience</h2>{experience.map(x=>
<article key={x.role}>
<div>
<h3>{x.role} — {x.company}</h3>
<span>{x.period}</span>
</div>
<p>{x.summary}</p>
<ul>{x.highlights.map(y=>
<li key={y}>{y}</li>)}</ul>
</article>)}</section>
<section>
<h2>Capabilities</h2>
<div className="cv-columns">{capabilities.map(x=>
<div key={x.title}>
<h3>{x.title}</h3>
<p>{x.items.join(" · ")}</p>
</div>)}</div>
</section>
<section>
<h2>Selected work</h2>{projects.slice(0,4).map(x=>
<article key={x.slug}>
<h3>{x.title}</h3>
<p>{x.outcome}</p>
</article>)}</section>
<section>
<h2>Education & learning</h2>{[...education,...learning].map(x=>
<article key={x.institution}>
<div>
<h3>{x.institution}</h3>
<span>{x.period}</span>
</div>
<p>{x.status}</p>
</article>)}</section>
</main>}
