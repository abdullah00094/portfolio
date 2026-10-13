import { projects } from "./content/projects";
import { site } from "./content/site";
export default function sitemap(){return [{url:site.url,lastModified:new Date(),priority:1},{url:site.url+"/cv",lastModified:new Date(),priority:.7},...projects.map(x=>({url:site.url+"/projects/"+x.slug,lastModified:new Date(),priority:.8}))]}
