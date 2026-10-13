import { DM_Sans, IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { site } from "./content/site";
const sans=DM_Sans({variable:"--font-sans",subsets:["latin"]});
const mono=IBM_Plex_Mono({variable:"--font-mono",subsets:["latin"],weight:["400","500"]});
const display=Newsreader({variable:"--font-display",subsets:["latin"],style:["normal","italic"]});
export const metadata={metadataBase:new URL(site.url),title:{default:"Abdullah Ibraheem — Technical Product Owner & Laravel Engineer",template:"%s | Abdullah Ibraheem"},description:site.summary,alternates:{canonical:"/"},openGraph:{title:"Abdullah Ibraheem — Product systems & Laravel engineering",description:site.summary,url:site.url,siteName:site.name,type:"website",images:[{url:"/images/profile.jpg",width:1200,height:1200,alt:"Abdullah Ibraheem"}]},twitter:{card:"summary_large_image",title:"Abdullah Ibraheem — Technical Product Owner",description:site.summary,images:["/images/profile.jpg"]},robots:{index:true,follow:true}};
export default function RootLayout({children}){const jsonLd={"@context":"https://schema.org","@type":"Person",name:site.name,jobTitle:site.role,url:site.url,email:"mailto:"+site.email,address:{"@type":"PostalAddress",addressLocality:"Alexandria",addressCountry:"EG"},sameAs:[site.github]}; return <html lang="en">
<body className={sans.variable+" "+mono.variable+" "+display.variable}>
<a className="skip-link" href="#main-content">Skip to content</a>
<Sidebar/>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
</body>
</html>}
