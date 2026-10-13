export default function ImpactMetric({ value, label, index }) { return <div className="impact-metric">
<span className="micro">M{String(index + 1).padStart(2, "0")}</span>
<strong>{value}</strong>
<p>{label}</p>
</div>; }
