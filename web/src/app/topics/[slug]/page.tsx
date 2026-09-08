import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import { docsCatalog, type DocFile, type DocFolder } from "../../../generated/docs-catalog";

type Resource = { title: string; href: string; description?: string };
type Section = { label: string; icon: string; tone: string; resources: Resource[]; href?: string };

const repositoryUrl = "https://github.com/meysamhadeli/awesome-dotnet-tips/blob/main/";
const topicFolders = (folder: DocFolder): DocFolder[] => [folder, ...folder.folders.flatMap(topicFolders)];
const allTopicFolders = docsCatalog.flatMap(collection => collection.folders.flatMap(topicFolders));
const allTopicFiles = docsCatalog.flatMap(collection => [
  ...collection.files,
  ...collection.folders.flatMap(folder => topicFolders(folder).flatMap(topic => topic.files)),
]);
const folderSlug = (folder: DocFolder) => folder.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const fileSlug = (file: DocFile) => {
  const base = file.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const collides = allTopicFolders.some(folder => folderSlug(folder) === base) || allTopicFiles.filter(candidate => candidate.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === base).length > 1;
  if (!collides) return base;
  const pathParts = file.path.split("/").slice(1, -1).slice(-2);
  return [...pathParts, base].join("-").toLowerCase().replace(/[^a-z0-9]+/g, "-");
};
const folderTrail = (folders: DocFolder[], target: DocFolder, trail: DocFolder[] = []): DocFolder[] | null => {
  for (const folder of folders) {
    if (folder === target) return [...trail, folder];
    const nested = folderTrail(folder.folders, target, [...trail, folder]);
    if (nested) return nested;
  }
  return null;
};
const fileTrail = (folders: DocFolder[], target: DocFile, trail: DocFolder[] = []): DocFolder[] | null => {
  for (const folder of folders) {
    if (folder.files.includes(target)) return [...trail, folder];
    const nested = fileTrail(folder.folders, target, [...trail, folder]);
    if (nested) return nested;
  }
  return null;
};
const sectionStyle = (label: string) => {
  const normalized = label.toLowerCase();
  if (normalized.includes("library") || normalized.includes("tool")) return { icon: "📦", tone: "brown" };
  if (normalized.includes("sample") || normalized.includes("example")) return { icon: "🚀", tone: "green" };
  if (normalized.includes("video")) return { icon: "📺", tone: "cyan" };
  if (normalized.includes("book")) return { icon: "📚", tone: "yellow" };
  if (normalized.includes("resource")) return { icon: "📘", tone: "blue" };
  return { icon: "📕", tone: "pink" };
};
const markdownSections = (file: DocFile): Section[] => {
  const source = fs.readFileSync(path.resolve(process.cwd(), "..", file.path), "utf8");
  const sections: Section[] = [];
  let current: Section = { label: "Resources", ...sectionStyle("Resources"), resources: [] };
  for (const line of source.split(/\r?\n/)) {
    const heading = /^(#{1,6})\s+(.+?)\s*$/.exec(line);
    if (heading) {
      if (current.resources.length > 0) sections.push(current);
      const rawLabel = heading[2].replace(/[#*_`]/g, "").replace(/^(?:📕|📦|📺|🚀|📘|📚|📝|📹)\s*/u, "").trim();
      const label = /^videoes$/i.test(rawLabel) ? "Videos" : rawLabel;
      current = { label, ...sectionStyle(label), resources: [] };
      continue;
    }
    const link = /^\s*[-*]\s+\[([^\]]+)\]\((https?:\/\/[^)]+)\)(?:\s+-\s+(.*))?$/.exec(line);
    if (link) current.resources.push({ title: link[1], href: link[2], description: link[3] });
  }
  if (current.resources.length > 0) sections.push(current);
  return sections.length > 0 ? sections : [{ label: "Resources", ...sectionStyle("Resources"), resources: [{ title: file.name, href: `${repositoryUrl}${file.path}` }] }];
};
const generatedSections = (folder: DocFolder): Section[] => [
  ...(folder.files.length > 0 ? [{
    label: folder.name,
    icon: "📕",
    tone: "pink",
    resources: folder.files.map(file => ({ title: file.name, href: `${repositoryUrl}${file.path}` })),
  }] : []),
  ...folder.folders.map(child => ({
    label: child.name,
    icon: "📁",
    tone: "blue",
    href: `/topics/${folderSlug(child)}`,
    resources: child.files.map(file => ({ title: file.name, href: `${repositoryUrl}${file.path}` })),
  })),
];
const generatedTopicFiles = (folder: DocFolder) => folder.files.map(file => {
  const resourceSections = markdownSections(file);
  return {
    name: file.name,
    href: `/topics/${fileSlug(file)}`,
    description: `Explore resources and practical guidance for ${file.name}.`,
    resources: resourceSections.reduce((total, section) => total + section.resources.length, 0),
    sections: resourceSections.length,
    resourceSections,
  };
});

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

export function generateStaticParams() { return [...new Set([...allTopicFolders.map(folderSlug), ...allTopicFiles.map(fileSlug)])].map(slug => ({ slug })); }

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const isKubernetes = slug === "kubernetes";
  const generatedFolder = allTopicFolders.find(folder => folder.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug);
  const generatedFile = allTopicFiles.find(file => fileSlug(file) === slug);
  const topicCollection = docsCatalog.find(collection => generatedFolder ? folderTrail(collection.folders, generatedFolder) : generatedFile ? collection.files.includes(generatedFile) || fileTrail(collection.folders, generatedFile) : false);
  const parentFolders = topicCollection && generatedFolder ? folderTrail(topicCollection.folders, generatedFolder) ?? [] : topicCollection && generatedFile ? fileTrail(topicCollection.folders, generatedFile) ?? [] : [];
  const breadcrumb = topicCollection ? [{ name: topicCollection.name, href: `/collections/${topicCollection.slug}` }, ...parentFolders.map(folder => ({ name: folder.name, href: `/topics/${folderSlug(folder)}` }))] : [];
  const sections = isKubernetes ? kubernetesSections : generatedFolder ? generatedSections(generatedFolder) : generatedFile ? markdownSections(generatedFile) : [];
  const topicName = isKubernetes ? "Kubernetes" : generatedFolder?.name ?? generatedFile?.name ?? slug;
  const total = sections.reduce((sum, section) => sum + section.resources.length, 0);
  return <main className="topic-detail-shell">
    <header className="topbar detail-topbar"><Link className="brand" href="/"><span className="brand-mark">A</span><span>AWESOME .NET TIPS</span></Link><nav><Link href="/">EXPLORE</Link><span className="detail-current">{breadcrumb.map((item, index) => <span key={item.href}>{index > 0 && " / "}<Link href={item.href}>{item.name.toUpperCase()}</Link></span>)}</span></nav><a className="github-pill" href="https://github.com/meysamhadeli/awesome-dotnet-tips" target="_blank" rel="noreferrer">VIEW ON GITHUB ↗</a></header>
    <section className="topic-hero"><span className="eyebrow">CLOUD NATIVE</span><h1>{topicName}</h1><p>Explore curated resources about {topicName}.</p><div className="detail-stats"><span><b>{total}</b> CURATED RESOURCES</span><span><b>{sections.length}</b> SECTION CARDS</span></div></section>
    {generatedFolder ? <>
      {generatedFolder.folders.length > 0 && <section className="subcollection-section"><div className="section-heading"><div><span className="kicker">BROWSE TOPIC</span><h2>Choose a sub-collection</h2></div><span className="count">{generatedFolder.folders.length} SUB-COLLECTIONS</span></div><div className="subcollection-grid">{generatedFolder.folders.map(child => <Link className="subcollection-card" href={`/topics/${folderSlug(child)}`} key={child.name}><strong>{child.name}</strong><span>{child.files.length + child.folders.length} topics</span></Link>)}</div></section>}
      {generatedFolder.files.length > 0 && <section className="topic-section"><div className="section-heading"><div><span className="kicker">TOPICS</span><h2>Topics</h2></div><span className="count">{generatedFolder.files.length} TOPICS</span></div><div className="topic-grid">{generatedTopicFiles(generatedFolder).map(topic => <Link className="topic-card" href={topic.href} key={topic.name}><div className="topic-card-top"><span className="pill">{topicName.toUpperCase()}</span><span className="pill">{topic.sections} SECTIONS</span></div><h3>{topic.name}</h3><p>{topic.description}</p><div className="topic-card-meta">{topic.resourceSections.map(section => <span key={section.label}>{section.icon} {section.resources.length}</span>)}</div></Link>)}</div></section>}
    </> : <>
      <section className="topic-navigation"><div className="section-heading"><div><span className="kicker">NAVIGATE THIS TOPIC</span><h2>Sections</h2></div><span className="count">{sections.length} SECTIONS</span></div><div className="section-nav-grid">{sections.map(section => <a href={section.href ?? `#${section.label.toLowerCase()}`} key={section.label}><span className={`section-nav-icon ${section.tone}`}>{section.icon}</span><strong>{section.label}</strong><small>{section.href ? `${section.resources.length} files` : `${section.resources.length} links`}</small></a>)}</div></section>
      <section className="topic-resources">{sections.filter(section => section.resources.length > 0 && !section.href).map(section => <div className="resource-section" id={section.label.toLowerCase()} key={section.label}><div className="section-heading"><div><span className="kicker">CURRENT SECTION</span><h2>{section.label}</h2></div><span className="count">{section.resources.length} SHOWN</span></div><div className="resource-list">{section.resources.map(resource => <a className={`resource-item ${section.tone}`} href={resource.href} target="_blank" rel="noreferrer" key={resource.title}><div className="resource-item-top"><span className="resource-kind">{section.label.slice(0, -1).toUpperCase()}</span></div><h3>{resource.title}</h3>{resource.description && <p>{resource.description}</p>}<div className="resource-item-footer"><span>{new URL(resource.href).hostname.replace("www.", "")}</span></div></a>)}</div></div>)}</section>
    </>}
    <footer><Link href="/collections/cloud-native">← BACK TO CLOUD NATIVE</Link><Link href="/">BACK TO COLLECTIONS</Link></footer>
  </main>;
}
