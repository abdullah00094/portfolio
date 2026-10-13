import { education, learning } from "../content/education";
export default function Education(){return <section id="education" className="section-shell content-section">
<header className="section-heading">
<span className="section-number">04</span>
<div>
<p className="micro">EDUCATION & LEARNING</p>
<h2>A non-linear path,<br/>continuously sharpened.</h2>
</div>
</header>
<div className="education-grid">
<div>
<p className="micro">FORMAL EDUCATION</p>{education.map(x=>
<article key={x.institution}>
<span>{x.period}</span>
<h3>{x.institution}</h3>
<p>{x.status}</p>
</article>)}</div>
<div>
<p className="micro">CURRENT LEARNING</p>{learning.map(x=>
<article key={x.institution}>
<span>{x.period}</span>
<h3>{x.institution}</h3>
<p>{x.status}</p>
</article>)}</div>
</div>
</section>}
