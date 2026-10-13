import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ImpactMetric from "./components/ImpactMetric";
import { impact } from "./content/site";
export default function Home(){return <>
<main id="main-content">
<Hero/>
<section className="impact-strip section-shell" aria-label="Selected impact">{impact.map((metric,index)=>
<ImpactMetric key={metric.label} {...metric} index={index}/>)}</section>
<Experience/>
<Skills/>
<Projects/>
<Education/>
<Contact/>
</main>
<Footer/>
</>}
