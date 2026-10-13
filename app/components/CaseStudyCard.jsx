import Link from "next/link";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
export function SystemDiagram({ steps }) { return <div className="system-diagram" aria-label={"Workflow: " + steps.join(", then ")}>{steps.map((step, i) =>
<div className="diagram-step" key={step}>
<span>{String(i + 1).padStart(2, "0")}</span>
<b>{step}</b>
</div>)}</div>; }
export default function CaseStudyCard({ project, index }) { return <article className="case-card">
<div className="case-top">
<span className="micro">CASE / {String(index + 1).padStart(2, "0")}</span>
<span className="private">
<LockKeyhole size={12}/> Confidential</span>
</div>
<h3>{project.title}</h3>
<p className="kicker">{project.kicker}</p>
<SystemDiagram steps={project.diagram}/>
<div className="evidence-rail">
<div>
<span>Problem</span>
<p>{project.problem}</p>
</div>
<div>
<span>System response</span>
<p>{project.system}</p>
</div>
<div className="result">
<span>Measured result</span>
<p>{project.outcome}</p>
</div>
</div>
<div className="case-footer">
<ul>{project.stack.map(item =>
<li key={item}>{item}</li>)}</ul>
<Link href={"/projects/" + project.slug}>Read case note <ArrowUpRight size={16}/>
</Link>
</div>
</article>; }
