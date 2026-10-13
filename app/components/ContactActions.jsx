import { Github, Mail, MapPin, MessageCircle } from "lucide-react";
import { site } from "../content/site";
export default function ContactActions() { const actions = [{ label: "Email", value: site.email, href: "mailto:" + site.email, Icon: Mail },{ label: "GitHub", value: "abdullah00094", href: site.github, Icon: Github },{ label: "WhatsApp", value: site.phone, href: site.whatsapp, Icon: MessageCircle }]; return <div className="contact-actions">{actions.map(({label,value,href,Icon}) =>
<a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
<Icon size={20}/>
<span>
<small>{label}</small>{value}</span>
</a>)}<div>
<MapPin size={20}/>
<span>
<small>Based in</small>{site.location}</span>
</div>
</div>; }
