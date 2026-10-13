import { site } from "../content/site";
export default function Footer(){return <footer className="footer section-shell">
<span>© {new Date().getFullYear()} {site.name}</span>
<span>Built as a living product dossier.</span>
<a href="#home">Back to top ↑</a>
</footer>}
