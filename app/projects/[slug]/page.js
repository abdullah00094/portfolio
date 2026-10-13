import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import { getProject, projects } from "../../content/projects";
import { SystemDiagram } from "../../components/CaseStudyCard";
export function generateStaticParams(){return projects.map(({slug})=>({slug}))}

export async function generateMetadata({params}){const {slug}=await params;
const project=getProject(slug); if(!project)return {}; return {title:project.title,description:project.problem,alternates:{canonical:"/projects/"+slug}}}
export default async function ProjectPage({params}){const {slug}=await params;
const project=getProject(slug); if(!project)notFound(); return <main id="main-content" className="project-page section-shell">
<Link className="back-link" href="/#projects">
<ArrowLeft size={16}/> All case studies</Link>
<header>
<div className="case-top">
<span className="micro">SANITIZED CASE NOTE</span>
<span className="private">
<LockKeyhole size={12}/> Confidential company work</span>
</div>
<h1>{project.title}</h1>
<p>{project.kicker}</p>
</header>
<SystemDiagram steps={project.diagram}/>
<section className="project-evidence">
<article>
<span className="micro">01 / PROBLEM</span>
<h2>The operating constraint</h2>
<p>{project.problem}</p>
</article>
<article>
<span className="micro">02 / ROLE</span>
<h2>My contribution</h2>
<p>{project.role}</p>
</article>
<article>
<span className="micro">03 / SYSTEM</span>
<h2>The response</h2>
<p>{project.system}</p>
</article>
<article className="result">
<span className="micro">04 / OUTCOME</span>
<h2>Evidence of impact</h2>
<p>{project.outcome}</p>
</article>
</section>
<footer className="project-stack">
<span>System stack</span>
<ul>{project.stack.map(x=>
<li key={x}>{x}</li>)}</ul>
<p>Details and visuals are intentionally sanitized. No public demo is implied.</p>
</footer>
</main>}
