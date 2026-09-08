"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { docsCatalog, type DocCollection, type DocFolder } from "../generated/docs-catalog";

type Leaf = { name: string; href: string; types: string[] };
type Branch = { name: string; href: string; leaves: Leaf[] };
type Root = { name: string; href: string; branches: Branch[] };
type ResourceCount = { label: string; count: number; icon: string; tone: string };
type CollectionCard = { name: string; href: string; description: string; topics: string[]; counts: string[]; resourceSections?: ResourceCount[]; subcollections: number; itemLabel: "TOPICS"; color: string };
type SubcollectionCard = { name: string; collection: string; href: string; topics: number };
const collectionSlug = (name: string) => name.toLowerCase().replace(/#/g, "sharp").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const topicSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const repo = "https://github.com/meysamhadeli/awesome-dotnet-tips/blob/main/";
const doc = (path: string) => `${repo}${path}`;
const firstDocument = (node: DocFolder): string => node.files[0]?.path ?? (node.folders[0] ? firstDocument(node.folders[0]) : "docs");
const collectionTopics = (collection: DocCollection) => collection.folders.map(folder => folder.name);

const resourceTypeLabels: Record<string, { label: string; icon: string; tone: string }> = {
  Articles: { label: "Articles", icon: "📕", tone: "pink" },
  Videos: { label: "Videos", icon: "📺", tone: "cyan" },
  Libraries: { label: "Libraries", icon: "📦", tone: "brown" },
  Samples: { label: "Samples", icon: "🚀", tone: "green" },
  Resources: { label: "Resources", icon: "📘", tone: "blue" },
  Books: { label: "Books", icon: "📚", tone: "yellow" },
};

const contents: Root[] = [
  { name: "C#", href: doc("docs/dotnet/csharp/csharp.md"), branches: [
    { name: "Versions", href: doc("docs/dotnet/csharp/versions/7.md"), leaves: ["C# 7", "C# 8", "C# 9", "C# 10", "C# 11", "C# 12"].map(name => ({ name, href: doc("docs/dotnet/csharp/csharp.md"), types: ["Article", "Guide"] })) },
    { name: "Async", href: doc("docs/dotnet/csharp/async/async.md"), leaves: ["Async and Await", "Async Best Practice", "Cancellation", "Channels", "Concurrency vs Parallelism", "Thread Safety", "ValueTask"].map(name => ({ name, href: doc("docs/dotnet/csharp/async/async.md"), types: ["Article", "Video"] })) },
    { name: "Language Features", href: doc("docs/dotnet/csharp/generic.md"), leaves: ["Generics", "LINQ", "Records", "Reflection", "Span", "Types"].map(name => ({ name, href: doc("docs/dotnet/csharp/generic.md"), types: ["Guide", "Sample"] })) },
  ] },
  { name: ".NET", href: doc("docs/dotnet/core/dotnet-core.md"), branches: [
    { name: "ASP.NET Core", href: doc("docs/dotnet/api/web-api.md"), leaves: ["Minimal API", "Web API", "Middleware", "REST", "gRPC"].map(name => ({ name, href: doc("docs/dotnet/api/web-api.md"), types: ["Article", "Sample"] })) },
    { name: "Entity Framework Core", href: doc("docs/dotnet/ef-core/ef-core.md"), leaves: ["Migrations", "Performance", "Transactions", "Optimistic Concurrency"].map(name => ({ name, href: doc("docs/dotnet/ef-core/ef-core.md"), types: ["Guide", "Article"] })) },
    { name: "Application Foundations", href: doc("docs/dotnet/core/best-practice.md"), leaves: ["Dependency Injection", "Configuration", "Logging", "Validation", "Caching"].map(name => ({ name, href: doc("docs/dotnet/core/best-practice.md"), types: ["Article", "Resource"] })) },
  ] },
  { name: "Architecture", href: doc("docs/software-architecture/architectural-styles/architectural-styles.md"), branches: [
    { name: "Architectural Styles", href: doc("docs/software-architecture/architectural-styles/architectural-styles.md"), leaves: ["Clean Architecture", "Hexagonal Architecture", "Onion Architecture", "Vertical Slice Architecture"].map(name => ({ name, href: doc("docs/software-architecture/architectural-styles/architectural-styles.md"), types: ["Guide", "Article"] })) },
    { name: "Domain-Driven Design", href: doc("docs/software-architecture/domain-driven-design/domain-driven-design.md"), leaves: ["Bounded Context", "Domain Events", "Value Objects", "Tactical Design"].map(name => ({ name, href: doc("docs/software-architecture/domain-driven-design/domain-driven-design.md"), types: ["Guide", "Video"] })) },
    { name: "Design Patterns", href: doc("docs/software-architecture/design-patterns/design-patterns.md"), leaves: ["Adapter", "Builder", "Decorator", "Mediator", "Repository", "Strategy"].map(name => ({ name, href: doc("docs/software-architecture/design-patterns/design-patterns.md"), types: ["Article", "Sample"] })) },
  ] },
  { name: "Cloud Native", href: doc("docs/cloud-native/azure/azure.md"), branches: [
    { name: "Containers", href: doc("docs/cloud-native/docker/docker.md"), leaves: ["Docker", "Docker Compose"].map(name => ({ name, href: doc("docs/cloud-native/docker/docker.md"), types: ["Guide", "Sample"] })) },
    { name: "Kubernetes", href: doc("docs/cloud-native/kubernetes/kubernetes.md"), leaves: ["Helm", "Ingress Controller", "K3s", "Minikube", "TLS", "ConfigMaps"].map(name => ({ name, href: doc("docs/cloud-native/kubernetes/kubernetes.md"), types: ["Article", "Resource"] })) },
    { name: "CI/CD", href: doc("docs/cloud-native/ci-cd/ci-cd.md"), leaves: ["Azure DevOps", "GitHub Actions", "Jenkins"].map(name => ({ name, href: doc("docs/cloud-native/ci-cd/ci-cd.md"), types: ["Guide", "Sample"] })) },
    { name: "Messaging", href: doc("docs/cloud-native/messaging/messaging.md"), leaves: ["Kafka", "NATS", "RabbitMQ", "ZeroMQ"].map(name => ({ name, href: doc("docs/cloud-native/messaging/messaging.md"), types: ["Library", "Article"] })) },
    { name: "Microservices", href: doc("docs/cloud-native/microservices/microservices.md"), leaves: ["BFF", "Communication", "Composite UI", "Outbox Pattern", "Saga", "Distributed Lock", "CDN"].map(name => ({ name, href: doc("docs/cloud-native/microservices/microservices.md"), types: ["Guide", "Article"] })) },
    { name: "Operations", href: doc("docs/cloud-native/observability/observability.md"), leaves: ["Observability", "Resiliency", "Scalability", "Reverse Proxy", "Service Discovery", "Service Mesh"].map(name => ({ name, href: doc("docs/cloud-native/observability/observability.md"), types: ["Guide", "Resource"] })) },
  ] },
  { name: "Data", href: doc("docs/data/relational-database/relational-database.md"), branches: [
    { name: "Relational Database", href: doc("docs/data/relational-database/relational-database.md"), leaves: ["SQL Server", "PostgreSQL", "Replication"].map(name => ({ name, href: doc("docs/data/relational-database/relational-database.md"), types: ["Library", "Article"] })) },
    { name: "NoSQL", href: doc("docs/data/nosql/nosql.md"), leaves: ["MongoDB", "Cosmos DB", "Cassandra", "DynamoDB"].map(name => ({ name, href: doc("docs/data/nosql/nosql.md"), types: ["Library", "Article"] })) },
  ] },
  { name: "AI", href: doc("docs/ai/ai.md"), branches: [
    { name: "Foundations", href: doc("docs/ai/models.md"), leaves: ["Models", "Context", "Memory", "Embedding and Vector", "RAG"].map(name => ({ name, href: doc("docs/ai/models.md"), types: ["Guide", "Article"] })) },
    { name: "Agents", href: doc("docs/ai/agent.md"), leaves: ["Agents", "Coding Agents", "Agent Frameworks", "Skills and Subagents"].map(name => ({ name, href: doc("docs/ai/agent.md"), types: ["Guide", "Article"] })) },
    { name: "Local Models", href: doc("docs/ai/ollama.md"), leaves: ["Ollama", "Llama.cpp", "vLLM"].map(name => ({ name, href: doc("docs/ai/ollama.md"), types: ["Library", "Guide"] })) },
    { name: "Engineering and Integrations", href: doc("docs/ai/ai-design.md"), leaves: ["Prompt Engineering", "Evaluation", "MCP", "Semantic Kernel", "LangChain"].map(name => ({ name, href: doc("docs/ai/ai-design.md"), types: ["Guide", "Article"] })) },
  ] },
];

const collectionDetails: Record<string, { description: string; color: string }> = {
  ai: { description: "AI concepts, engineering practices, tools, agents, and developer resources.", color: "pink" },
  "cloud-native": { description: "Practical resources for containers, Kubernetes, cloud platforms, messaging, microservices, and operations.", color: "mint" },
  data: { description: "Relational and non-relational data stores, modeling, scaling, and operations.", color: "yellow" },
  dotnet: { description: "C#, .NET, APIs, testing, and application development resources.", color: "lavender" },
  "software-architecture": { description: "Architecture styles, design, domain modeling, patterns, and system design.", color: "blue" },
};
const collectionCards: CollectionCard[] = docsCatalog.map(collection => {
  const topics = collectionTopics(collection);
  const details = collectionDetails[collection.slug] ?? { description: `Curated ${collection.name} documentation and learning resources.`, color: "blue" };
  const resourceSections = Object.entries(collection.resourceCounts).filter(([, count]) => count > 0).map(([label, count]) => ({ ...resourceTypeLabels[label], count }));
  return { name: collection.name, href: doc(firstDocument(collection)), description: details.description, topics, counts: [], resourceSections, subcollections: collection.folders.length, itemLabel: "TOPICS", color: details.color };
});
const subcollectionCards: SubcollectionCard[] = docsCatalog.flatMap(collection => collection.folders.map(folder => ({
  name: folder.name,
  collection: collection.name,
  href: `/topics/${topicSlug(folder.name)}`,
  topics: folder.files.length + folder.folders.length,
})));

const collectionUpdatedAt: Record<string, string> = {
  ".NET": "2024-09-24",
  "Software Architecture": "2024-09-24",
  "Cloud Native": "2024-09-24",
  AI: "2024-10-09",
};

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState("All");
  const [sortBy, setSortBy] = useState("updated");
  const normalizedQuery = query.trim().toLowerCase();
  const matchesFilter = (name: string, collection: string) => (activeGroup === "All" || collection === activeGroup) && `${name} ${collection}`.toLowerCase().includes(normalizedQuery);
  const visibleCollections = useMemo(() => {
    const filtered = collectionCards.filter(collection => (activeGroup === "All" || collection.name === activeGroup) && `${collection.name} ${collection.description} ${collection.topics.join(" ")}`.toLowerCase().includes(normalizedQuery));
    return [...filtered].sort((left, right) => {
      if (sortBy === "name") return left.name.localeCompare(right.name);
      if (sortBy === "relevance" && normalizedQuery) return `${left.name} ${left.description}`.toLowerCase().indexOf(normalizedQuery) - `${right.name} ${right.description}`.toLowerCase().indexOf(normalizedQuery);
      return (collectionUpdatedAt[right.name] ?? "").localeCompare(collectionUpdatedAt[left.name] ?? "");
    });
  }, [activeGroup, normalizedQuery, sortBy]);
  const visibleSubcollections = subcollectionCards.filter(subcollection => matchesFilter(subcollection.name, subcollection.collection));
  const groups = ["All", ...collectionCards.map(collection => collection.name)];
  const topicCount = collectionCards.reduce((total, collection) => total + collection.topics.length, 0);

  return <main className="site-shell">
    <header className="topbar"><a className="brand" href="#top"><span className="brand-mark">A</span><span>AWESOME .NET TIPS</span></a><nav><a className="nav-active" href="#contents">COLLECTIONS</a><a href="#subcollections">SUB-COLLECTIONS</a><a className="github-nav" href="https://github.com/meysamhadeli/awesome-dotnet-tips" target="_blank" rel="noreferrer">VIEW ON GITHUB ↗</a></nav><span className="status-dot" aria-label="Open source collection" /></header>
    <section className="intro" id="top"><span className="eyebrow">A CURATED LEARNING INDEX / 2026 EDITION</span><h1>Build better <i>with .NET.</i></h1><p>One organized map for articles, videos, libraries, samples, and ideas across .NET, Software Architecture, Cloud Native, Data and AI.</p><div className="intro-topics"><span>Collections</span><b>.NET</b><b>Data</b><b>Software Architecture</b><b>Cloud Native</b><b>AI</b></div><div className="intro-stats"><span><b>{collectionCards.length}</b> collections</span><span><b>{topicCount}</b> topics</span></div></section>
    <section className="finder" aria-label="Filter homepage"><label className="search"><span>⌕</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search collections and sub-collections..." /></label><div className="filters"><strong>FILTER</strong>{groups.map(group => <button key={group} className={activeGroup === group ? "active" : ""} onClick={() => setActiveGroup(group)}>{group}</button>)}</div><div className="finder-meta">Showing {visibleCollections.length} collections, {visibleSubcollections.length} sub-collections <label className="sort-control">Sort by <select value={sortBy} onChange={event => setSortBy(event.target.value)}><option value="updated">Last updated</option><option value="relevance">Relevance</option><option value="name">Name</option></select></label></div></section>
    <section className="map" id="contents"><div className="section-heading"><div><span className="kicker">COLLECTIONS</span><h2>Choose collection</h2></div><span className="count">{visibleCollections.length} SHOWN</span></div><div className="collection-grid">{visibleCollections.map((collection, index) => <div className={`collection-card ${collection.color}`} key={collection.name} role="link" tabIndex={0} onClick={() => router.push(`/collections/${collectionSlug(collection.name)}`)} onKeyDown={event => { if (event.key === "Enter" || event.key === " ") router.push(`/collections/${collectionSlug(collection.name)}`); }}><div className="collection-card-top"><span className="collection-icon">{String(index + 1).padStart(2, "0")}</span><span className="pill">COLLECTION</span><span className="pill">{collection.topics.length} {collection.itemLabel}</span></div><h3>{collection.name}</h3><p>{collection.description}</p><span className="collection-subline">{collection.subcollections} sub-collections&nbsp;&nbsp; {collection.topics.length} {collection.itemLabel.toLowerCase()}</span><div className="topic-tags">{collection.topics.map(topic => <Link href={`/topics/${topicSlug(topic)}`} onClick={event => event.stopPropagation()} key={topic}>{topic}</Link>)}</div><div className="resource-counts">{collection.resourceSections ? collection.resourceSections.map(section => <span key={section.label}><b className={`type-icon ${section.tone}`}>{section.icon}</b> {section.label} {section.count}</span>) : collection.counts.map(count => { const [typeName, number] = count.split(" "); const type = resourceTypeLabels[typeName] ?? resourceTypeLabels.Resource; return <span key={count}><b className={`type-icon ${type.tone}`}>{type.icon}</b> {type.label} {number}</span>; })}</div></div>)}</div>{visibleCollections.length === 0 && <p className="empty-state">No collections match “{query}”. Try a broader topic or clear search.</p>}</section>
    <section className="homepage-subcollections" id="subcollections"><div className="section-heading"><div><span className="kicker">SUB-COLLECTIONS</span><h2>Browse sub-collections</h2></div><span className="count">{visibleSubcollections.length} SHOWN</span></div><div className="homepage-subcollection-grid">{visibleSubcollections.map(subcollection => <Link className="homepage-subcollection-card" href={subcollection.href} key={`${subcollection.collection}-${subcollection.name}`}><strong>{subcollection.name}</strong><span>{subcollection.collection}</span><small>{subcollection.topics} topics</small></Link>)}</div></section>
    <footer><span>AWESOME .NET TIPS</span><a href="https://github.com/meysamhadeli/awesome-dotnet-tips">OPEN SOURCE ON GITHUB ↗</a></footer>
  </main>;
}
