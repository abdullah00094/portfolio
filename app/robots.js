import { site } from "./content/site";
export default function robots(){return {rules:{userAgent:"*",allow:"/",disallow:"/under-construction"},sitemap:site.url+"/sitemap.xml"}}
