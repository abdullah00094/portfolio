import { capabilities } from "../content/skills";
import CapabilityGroup from "./CapabilityGroup";
export default function Skills(){return <section id="capabilities" className="section-shell content-section">
<header className="section-heading">
<span className="section-number">02</span>
<div>
<p className="micro">SYSTEM CAPABILITIES</p>
<h2>Useful across the<br/>whole delivery loop.</h2>
</div>
</header>
<div className="capability-list">{capabilities.map(g=>
<CapabilityGroup key={g.title} group={g}/>)}</div>
</section>}
