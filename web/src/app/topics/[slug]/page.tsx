import Link from "next/link";

type Resource = { title: string; href: string; description?: string };
type Section = { label: string; icon: string; tone: string; resources: Resource[] };

const kubernetesSections: Section[] = [
  { label: "Resources", icon: "📘", tone: "blue", resources: [
    { title: "kubernetes/kubernetes", href: "https://github.com/kubernetes/kubernetes", description: "Production-Grade Container Scheduling and Management" },
    { title: "fhsinchy/kubernetes-handbook-projects", href: "https://github.com/fhsinchy/kubernetes-handbook-projects", description: "Project codes used in The Kubernetes Handbook" },
    { title: "ramitsurana/awesome-kubernetes", href: "https://github.com/ramitsurana/awesome-kubernetes", description: "A curated list for awesome Kubernetes sources" },
    { title: "tomhuang12/awesome-k8s-resources", href: "https://github.com/tomhuang12/awesome-k8s-resources", description: "A curated list of awesome Kubernetes tools and resources." },
    { title: "kelseyhightower/kubernetes-the-hard-way", href: "https://github.com/kelseyhightower/kubernetes-the-hard-way", description: "Bootstrap Kubernetes the hard way on Google Cloud Platform." },
  ] },
  { label: "Articles", icon: "📕", tone: "pink", resources: [
    { title: "Kubernetes By Example", href: "https://kubernetesbyexample.com/" },
    { title: "Kubernetes & Traefik 101 — When Simplicity Matters", href: "https://medium.com/@geraldcroes/kubernetes-traefik-101-when-simplicity-matters-957eeede2cf8" },
    { title: "Kubernetes on bare-metal in 10 minutes", href: "https://blog.alexellis.io/kubernetes-in-10-minutes/" },
    { title: "A Guide to the Kubernetes Networking Model", href: "https://sookocheff.com/post/kubernetes/understanding-kubernetes-networking-model/" },
    { title: "Building Stateful Services with Kubernetes", href: "https://sookocheff.com/post/kubernetes/building-stateful-services/" },
    { title: "Kubernetes: Host Multi-Container ASP.NET Core app to Multiple Pods", href: "https://www.yogihosting.com/aspnet-core-kubernetes-multi-pods/" },
    { title: "Managing ASP.NET Core app hosted on Kubernetes", href: "https://www.yogihosting.com/aspnet-core-kubernetes-manage/" },
    { title: "Deploy ASP.NET Core App on Kubernetes", href: "https://www.yogihosting.com/deploy-aspnet-core-app-kubernetes/" },
    { title: "How to use Kubernetes Ingress on an ASP.NET Core app", href: "https://www.yogihosting.com/kubernetes-ingress-aspnet-core/" },
    { title: "Kubernetes: Host Multi-Container ASP.NET Core app to Single Pod", href: "https://www.yogihosting.com/aspnet-core-kubernetes-multi-container-single-pod/" },
  ] },
  { label: "Videos", icon: "📺", tone: "cyan", resources: [
    { title: "Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours]", href: "https://www.youtube.com/watch?v=X48VuDVv0do" },
    { title: "Kubernetes Daemonsets explained | Tutorial | Kubernetes Guide", href: "https://www.youtube.com/watch?v=RGSeeN-o-kQ" },
    { title: "Kubernetes Essentials Playlist - IBM Cloud", href: "https://www.youtube.com/playlist?list=PLOspHqNVtKABAVX4azqPIu6UfsPzSu2YN" },
    { title: "Kubernetes 101 Playlist - Jeff Geerling", href: "https://www.youtube.com/playlist?list=PL2_OBreMn7FoYmfx27iSwocotjiikS5BD" },
    { title: "Kubernetes Crash Course for Absolute Beginners", href: "https://www.youtube.com/watch?v=s_o8dwzRlu4" },
    { title: "How to deploy .NET apps to Kubernetes", href: "https://www.youtube.com/watch?v=cNlxPKy_NPA" },
    { title: "Kubernetes Crash Course for Absolute Beginners [NEW]", href: "https://www.youtube.com/watch?v=s_o8dwzRlu4&list=WL&index=2" },
  ] },
  { label: "Libraries", icon: "📦", tone: "brown", resources: [
    { title: "kubernetes/autoscaler", href: "https://github.com/kubernetes/autoscaler", description: "Autoscaling components for Kubernetes" },
    { title: "kubernetes-sigs/kubebuilder", href: "https://github.com/kubernetes-sigs/kubebuilder", description: "SDK for building Kubernetes APIs using CRDs" },
    { title: "buehler/dotnet-operator-sdk", href: "https://github.com/buehler/dotnet-operator-sdk", description: "KubeOps is a Kubernetes operator SDK in .NET." },
    { title: "derailed/k9s", href: "https://github.com/derailed/k9s", description: "Kubernetes CLI to manage your clusters in style" },
  ] },
  { label: "Samples", icon: "🚀", tone: "green", resources: [
    { title: "arashkaffamanesh/practical-kubernetes-problems", href: "https://github.com/arashkaffamanesh/practical-kubernetes-problems", description: "Practical Kubernetes training problems" },
    { title: "ContainerSolutions/kubernetes-examples", href: "https://github.com/ContainerSolutions/kubernetes-examples", description: "Minimal self-contained examples of Kubernetes features and patterns in YAML" },
    { title: "ContainerSolutions/k8s-deployment-strategies", href: "https://github.com/ContainerSolutions/k8s-deployment-strategies", description: "Kubernetes deployment strategies explained" },
  ] },
  { label: "Books", icon: "📚", tone: "yellow", resources: [
    { title: "Kubernetes Patterns: Reusable Elements for Designing Cloud-Native Applications", href: "https://www.amazon.com/Kubernetes-Patterns-Designing-Cloud-Native-Applications/dp/1492050288" },
    { title: "Kubernetes Best Practices: Blueprints for Building Successful Applications on Kubernetes", href: "https://www.amazon.com/Kubernetes-Best-Practices-Blueprints-Applications/dp/1492056472/" },
  ] },
];

export function generateStaticParams() { return [{ slug: "kubernetes" }]; }

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const isKubernetes = slug === "kubernetes";
  const sections = isKubernetes ? kubernetesSections : [];
  const total = sections.reduce((sum, section) => sum + section.resources.length, 0);
  return <main className="topic-detail-shell">
    <header className="topbar detail-topbar"><Link className="brand" href="/"><span className="brand-mark">A</span><span>AWESOME .NET<br /><small>TIPS &amp; RESOURCES</small></span></Link><nav><Link href="/">EXPLORE</Link><span className="detail-current">/ CLOUD NATIVE / {slug.toUpperCase()}</span></nav><a className="github-pill" href="https://github.com/meysamhadeli/awesome-dotnet-tips" target="_blank" rel="noreferrer">VIEW ON GITHUB ↗</a></header>
    <section className="topic-hero"><span className="eyebrow">CLOUD NATIVE</span><h1>{isKubernetes ? "Kubernetes" : slug}</h1><p>Explore curated resources about {isKubernetes ? "Kubernetes" : slug}.</p><div className="detail-stats"><span><b>{total}</b> CURATED RESOURCES</span><span><b>{sections.length}</b> SECTION CARDS</span></div></section>
    <section className="topic-navigation"><div className="section-heading"><div><span className="kicker">NAVIGATE THIS TOPIC</span><h2>Sections</h2></div><span className="count">{sections.length} SECTIONS</span></div><div className="section-nav-grid">{sections.map(section => <a href={`#${section.label.toLowerCase()}`} key={section.label}><span className={`section-nav-icon ${section.tone}`}>{section.icon}</span><strong>{section.label}</strong><small>{section.resources.length} links</small></a>)}</div></section>
    <section className="topic-resources">{sections.map(section => <div className="resource-section" id={section.label.toLowerCase()} key={section.label}><div className="section-heading"><div><span className="kicker">CURRENT SECTION</span><h2>{section.label}</h2></div><span className="count">{section.resources.length} SHOWN</span></div><div className="resource-list">{section.resources.map(resource => <article className={`resource-item ${section.tone}`} key={resource.title}><div className="resource-item-top"><span className="resource-kind">{section.icon} {section.label.slice(0, -1).toUpperCase()}</span><a className="source-pill" href={resource.href} target="_blank" rel="noreferrer">OPEN ↗</a></div><h3>{resource.title}</h3>{resource.description && <p>{resource.description}</p>}<div className="resource-item-footer"><span>{new URL(resource.href).hostname.replace("www.", "")}</span><a href={resource.href} target="_blank" rel="noreferrer">OPEN RESOURCE ↗</a></div></article>)}</div></div>)}</section>
    <footer><Link href="/collections/cloud-native">← BACK TO CLOUD NATIVE</Link><Link href="/">BACK TO COLLECTIONS</Link></footer>
  </main>;
}
