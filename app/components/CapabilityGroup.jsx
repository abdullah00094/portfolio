export default function CapabilityGroup({ group }) { return <article className="capability-group">
<header>
<span className="micro">CAP / {group.index}</span>
<h3>{group.title}</h3>
</header>
<ul>{group.items.map(item =>
<li key={item}>{item}</li>)}</ul>
</article>; }
