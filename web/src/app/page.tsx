"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Leaf = { name: string; href: string; types: string[] };
type Branch = { name: string; href: string; leaves: Leaf[] };
type Root = { name: string; href: string; branches: Branch[] };
type ResourceCount = { label: string; count: number; icon: string; tone: string };
type CollectionCard = { name: string; href: string; description: string; topics: string[]; counts: string[]; resourceSections?: ResourceCount[]; subcollections: number; itemLabel: "TOPICS"; color: string };
const collectionSlug = (name: string) => name.toLowerCase().replace(/#/g, "sharp").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const topicSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const repo = "https://github.com/meysamhadeli/awesome-dotnet-tips/blob/main/";
const doc = (path: string) => `${repo}${path}`;

const resourceTypeLabels: Record<string, { label: string; icon: string; tone: string }> = {
  Article: { label: "Articles", icon: "📕", tone: "pink" },
  Video: { label: "Videos", icon: "📺", tone: "cyan" },
  Library: { label: "Libraries", icon: "📦", tone: "brown" },
  Sample: { label: "Samples", icon: "🚀", tone: "green" },
  Resource: { label: "Resources", icon: "📘", tone: "blue" },
  Book: { label: "Books", icon: "📚", tone: "yellow" },
};

const contents: Root[] = [
  { name: "C#", href: doc("docs/csharp/csharp.md"), branches: [
    { name: "Versions", href: doc("docs/csharp/versions/7.md"), leaves: ["C# 7", "C# 8", "C# 9", "C# 10", "C# 11", "C# 12"].map(name => ({ name, href: doc("docs/csharp/csharp.md"), types: ["Article", "Guide"] })) },
    { name: "Async", href: doc("docs/csharp/async/async.md"), leaves: ["Async and Await", "Async Best Practice", "Cancellation", "Channels", "Concurrency vs Parallelism", "Thread Safety", "ValueTask"].map(name => ({ name, href: doc("docs/csharp/async/async.md"), types: ["Article", "Video"] })) },
    { name: "Language Features", href: doc("docs/csharp/generic.md"), leaves: ["Generics", "LINQ", "Records", "Reflection", "Span", "Types"].map(name => ({ name, href: doc("docs/csharp/generic.md"), types: ["Guide", "Sample"] })) },
  ] },
  { name: ".NET", href: doc("docs/dotnet/dotnet-core.md"), branches: [
    { name: "ASP.NET Core", href: doc("docs/dotnet/web-api.md"), leaves: ["Minimal API", "Web API", "Middleware", "REST", "gRPC"].map(name => ({ name, href: doc("docs/dotnet/web-api.md"), types: ["Article", "Sample"] })) },
    { name: "Entity Framework Core", href: doc("docs/dotnet/ef-core/ef-core.md"), leaves: ["Migrations", "Performance", "Transactions", "Optimistic Concurrency"].map(name => ({ name, href: doc("docs/dotnet/ef-core/ef-core.md"), types: ["Guide", "Article"] })) },
    { name: "Application Foundations", href: doc("docs/dotnet/best-practice.md"), leaves: ["Dependency Injection", "Configuration", "Logging", "Validation", "Caching"].map(name => ({ name, href: doc("docs/dotnet/best-practice.md"), types: ["Article", "Resource"] })) },
  ] },
  { name: "Architecture", href: doc("docs/architectural-styles/architectural-styles.md"), branches: [
    { name: "Architectural Styles", href: doc("docs/architectural-styles/architectural-styles.md"), leaves: ["Clean Architecture", "Hexagonal Architecture", "Onion Architecture", "Vertical Slice Architecture"].map(name => ({ name, href: doc("docs/architectural-styles/architectural-styles.md"), types: ["Guide", "Article"] })) },
    { name: "Domain-Driven Design", href: doc("docs/domain-driven-design/domain-driven-design.md"), leaves: ["Bounded Context", "Domain Events", "Value Objects", "Tactical Design"].map(name => ({ name, href: doc("docs/domain-driven-design/domain-driven-design.md"), types: ["Guide", "Video"] })) },
    { name: "Design Patterns", href: doc("docs/design-patterns/design-patterns.md"), leaves: ["Adapter", "Builder", "Decorator", "Mediator", "Repository", "Strategy"].map(name => ({ name, href: doc("docs/design-patterns/design-patterns.md"), types: ["Article", "Sample"] })) },
  ] },
  { name: "Microservices", href: doc("docs/microservices/microservices.md"), branches: [
    { name: "Observability", href: doc("docs/microservices/observability/observability.md"), leaves: ["Diagnostics", "Distributed Tracing", "Metrics", "Logging", "Health Checks"].map(name => ({ name, href: doc("docs/microservices/observability/observability.md"), types: ["Article", "Resource"] })) },
    { name: "Resiliency", href: doc("docs/microservices/resiliency/resiliency.md"), leaves: ["Circuit Breaker", "Availability", "Scaling"].map(name => ({ name, href: doc("docs/microservices/resiliency/resiliency.md"), types: ["Guide", "Video"] })) },
    { name: "Platform", href: doc("docs/microservices/tools/tools.md"), leaves: ["Service Discovery", "Service Mesh", "Reverse Proxy", "Aspire", "Dapr"].map(name => ({ name, href: doc("docs/microservices/tools/tools.md"), types: ["Library", "Sample"] })) },
  ] },
  { name: "Cloud Native", href: doc("docs/cloud-native/cloud-native.md"), branches: [
    { name: "Containers", href: doc("docs/cloud-native/docker/docker.md"), leaves: ["Docker", "Docker Compose"].map(name => ({ name, href: doc("docs/cloud-native/docker/docker.md"), types: ["Guide", "Sample"] })) },
    { name: "Kubernetes", href: doc("docs/cloud-native/kubernetes/kubernetes.md"), leaves: ["Helm", "Ingress Controller", "K3s", "Minikube", "TLS", "ConfigMaps"].map(name => ({ name, href: doc("docs/cloud-native/kubernetes/kubernetes.md"), types: ["Article", "Resource"] })) },
    { name: "CI/CD", href: doc("docs/cloud-native/ci-cd/ci-cd.md"), leaves: ["Azure DevOps", "GitHub Actions", "Jenkins"].map(name => ({ name, href: doc("docs/cloud-native/ci-cd/ci-cd.md"), types: ["Guide", "Sample"] })) },
  ] },
  { name: "Data, Security, Testing, AI", href: doc("docs/ai.md"), branches: [
    { name: "Data and Messaging", href: doc("docs/messaging/messaging.md"), leaves: ["Kafka", "NATS", "RabbitMQ", "SQL Server", "PostgreSQL", "MongoDB"].map(name => ({ name, href: doc("docs/messaging/messaging.md"), types: ["Library", "Article"] })) },
    { name: "Security", href: doc("docs/security/security.md"), leaves: ["Authentication", "Authorization", "Encryption", "Identity", "Secret Management"].map(name => ({ name, href: doc("docs/security/security.md"), types: ["Guide", "Resource"] })) },
    { name: "Testing and AI", href: doc("docs/testing/testing.md"), leaves: ["Unit Testing", "Integration Testing", "Contract Testing", "AI Fundamentals", "Developer Tools"].map(name => ({ name, href: doc("docs/testing/testing.md"), types: ["Article", "Video"] })) },
  ] },
];

const collectionCards: CollectionCard[] = [
  { name: "Architectural Styles", href: doc("docs/architectural-styles/architectural-styles.md"), description: "Curated approaches for structuring maintainable .NET systems and teams.", topics: ["Clean Architecture", "Hexagonal", "Onion", "Vertical Slice"], counts: ["Article 176", "Video 70", "Sample 67", "Book 3"], subcollections: 0, itemLabel: "TOPICS", color: "blue" },
  { name: "Cloud Native", href: doc("docs/cloud-native/cloud-native.md"), description: "Practical resources for containers, Kubernetes, platforms, and delivery.", topics: ["Azure", "Docker", "Kubernetes", "CI/CD"], counts: ["Resource 20", "Article 87", "Video 49", "Library 14", "Sample 12", "Book 2"], subcollections: 5, itemLabel: "TOPICS", color: "mint" },
  { name: "C#", href: doc("docs/csharp/csharp.md"), description: "Language features, async programming, collections, and everyday C# craft.", topics: ["Versions", "Async", "Collections", "Language"], counts: ["Resource 18", "Article 293", "Video 91", "Library 21", "Sample 4", "Book 1"], subcollections: 3, itemLabel: "TOPICS", color: "lavender" },
  { name: "Design Patterns", href: doc("docs/design-patterns/design-patterns.md"), description: "Reusable solutions for common object-oriented design problems.", topics: ["Creational", "Structural", "Behavioral", "Enterprise"], counts: ["Resource 14", "Article 79", "Video 13", "Library 7", "Sample 7"], subcollections: 0, itemLabel: "TOPICS", color: "peach" },
  { name: "Design Principles", href: doc("docs/design-principles/design-principles.md"), description: "Foundations for clear, cohesive, and adaptable software design.", topics: ["SOLID", "DRY", "KISS", "CAP"], counts: ["Article 13", "Video 2"], subcollections: 0, itemLabel: "TOPICS", color: "yellow" },
  { name: "Domain-Driven Design", href: doc("docs/domain-driven-design/domain-driven-design.md"), description: "Model domains, boundaries, events, and business behavior with confidence.", topics: ["Strategic", "Tactical", "Aggregates", "Value Objects"], counts: ["Resource 6", "Article 271", "Video 42", "Library 21", "Sample 89", "Book 5"], subcollections: 0, itemLabel: "TOPICS", color: "pink" },
  { name: "Messaging", href: doc("docs/messaging/messaging.md"), description: "Explore brokers, protocols, and reliable communication between services.", topics: ["Kafka", "NATS", "RabbitMQ", "ZeroMQ"], counts: ["Resource 13", "Article 80", "Video 56", "Library 51", "Sample 2", "Book 5"], subcollections: 0, itemLabel: "TOPICS", color: "mint" },
  { name: "NoSQL", href: doc("docs/nosql/nosql.md"), description: "Choose and use document, wide-column, and distributed databases.", topics: ["Cosmos DB", "MongoDB", "Cassandra", "Sharding"], counts: ["Resource 4", "Article 34", "Video 56", "Library 3"], subcollections: 0, itemLabel: "TOPICS", color: "blue" },
  { name: "Relational Database", href: doc("docs/relational-database/relational-database.md"), description: "Design, query, scale, and operate relational data stores.", topics: ["SQL Server", "PostgreSQL", "Replication", "Performance"], counts: ["Article 55", "Video 12", "Library 6"], subcollections: 0, itemLabel: "TOPICS", color: "lavender" },
  { name: "Security", href: doc("docs/security/security.md"), description: "Authentication, authorization, identity, encryption, and secrets.", topics: ["Authentication", "Authorization", "Identity", "Secrets"], counts: ["Article 184", "Video 48", "Library 2", "Sample 73"], subcollections: 0, itemLabel: "TOPICS", color: "peach" },
  { name: "Testing", href: doc("docs/testing/testing.md"), description: "Build confidence with unit, integration, contract, and acceptance tests.", topics: ["Unit", "Integration", "Contract", "E2E"], counts: ["Resource 2", "Article 183", "Video 52", "Library 65", "Sample 29"], subcollections: 0, itemLabel: "TOPICS", color: "yellow" },
  { name: "AI", href: doc("docs/ai.md"), description: "A focused index of AI concepts, tools, and developer resources.", topics: ["Resources", "Articles", "Videos", "Libraries"], counts: [], resourceSections: [{ label: "Resources", count: 2, icon: "📘", tone: "blue" }, { label: "Articles", count: 4, icon: "📕", tone: "pink" }, { label: "Videos", count: 2, icon: "📺", tone: "cyan" }, { label: "Libraries", count: 16, icon: "📦", tone: "brown" }], subcollections: 0, itemLabel: "TOPICS", color: "pink" },
];

const collectionUpdatedAt: Record<string, string> = {
  "Architectural Styles": "2024-07-19",
  "Cloud Native": "2024-09-24",
  "C#": "2024-09-19",
  "Design Patterns": "2023-09-13",
  "Design Principles": "2024-09-19",
  "Domain-Driven Design": "2024-09-19",
  Messaging: "2024-09-19",
  NoSQL: "2024-09-19",
  "Relational Database": "2024-09-19",
  Security: "2024-09-19",
  Testing: "2024-09-24",
  AI: "2024-10-09",
};

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState("All");
  const [sortBy, setSortBy] = useState("updated");
  const normalizedQuery = query.trim().toLowerCase();
  const visibleCollections = useMemo(() => {
    const filtered = collectionCards.filter(collection => (activeGroup === "All" || collection.name === activeGroup) && `${collection.name} ${collection.description} ${collection.topics.join(" ")}`.toLowerCase().includes(normalizedQuery));
    return [...filtered].sort((left, right) => {
      if (sortBy === "name") return left.name.localeCompare(right.name);
      if (sortBy === "relevance" && normalizedQuery) return `${left.name} ${left.description}`.toLowerCase().indexOf(normalizedQuery) - `${right.name} ${right.description}`.toLowerCase().indexOf(normalizedQuery);
      return (collectionUpdatedAt[right.name] ?? "").localeCompare(collectionUpdatedAt[left.name] ?? "");
    });
  }, [activeGroup, normalizedQuery, sortBy]);
  const groups = ["All", ...collectionCards.map(collection => collection.name)];
  const topicCount = collectionCards.reduce((total, collection) => total + collection.topics.length, 0);

  return <main className="site-shell">
    <header className="topbar"><a className="brand" href="#top"><span className="brand-mark">A</span><span>AWESOME .NET<br /><small>TIPS &amp; RESOURCES</small></span></a><nav><a className="nav-active" href="#contents">COLLECTIONS</a><a href="#resources">TOPICS</a><a className="github-nav" href="https://github.com/meysamhadeli/awesome-dotnet-tips" target="_blank" rel="noreferrer">VIEW ON GITHUB ↗</a></nav><span className="status-dot" aria-label="Open source collection" /></header>
    <section className="intro" id="top"><span className="eyebrow">A CURATED LEARNING INDEX / 2026 EDITION</span><h1>Build better <i>with .NET.</i></h1><p>One organized map for articles, videos, libraries, samples, and ideas across Software Architecture, Microservices, Cloud Native, AI, and modern .NET engineering.</p><div className="intro-topics"><span>Topics include</span><b>C#</b><b>.NET</b><b>Software Architecture</b><b>Cloud Native</b><b>AI</b><b>Microservices</b></div><div className="intro-stats"><span><b>{collectionCards.length}</b> collections</span><span><b>{topicCount}</b> topics</span></div></section>
    <section className="finder" aria-label="Find collections"><label className="search"><span>⌕</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search collections, topics, sections, names, source..." /></label><div className="filters"><strong>COLLECTION</strong>{groups.map(group => <button key={group} className={activeGroup === group ? "active" : ""} onClick={() => setActiveGroup(group)}>{group}</button>)}</div><div className="finder-meta">Showing {visibleCollections.length} of {collectionCards.length} collections <label className="sort-control">Sort by <select value={sortBy} onChange={event => setSortBy(event.target.value)}><option value="updated">Last updated</option><option value="relevance">Relevance</option><option value="name">Name</option></select></label></div></section>
    <section className="map" id="contents"><div className="section-heading"><div><span className="kicker">COLLECTIONS</span><h2>Choose collection</h2></div><span className="count">{visibleCollections.length} SHOWN</span></div><div className="collection-grid">{visibleCollections.map((collection, index) => <div className={`collection-card ${collection.color}`} key={collection.name} role="link" tabIndex={0} onClick={() => router.push(`/collections/${collectionSlug(collection.name)}`)} onKeyDown={event => { if (event.key === "Enter" || event.key === " ") router.push(`/collections/${collectionSlug(collection.name)}`); }}><div className="collection-card-top"><span className="collection-icon">{String(index + 1).padStart(2, "0")}</span><span className="pill">COLLECTION</span><span className="pill">{collection.topics.length} {collection.itemLabel}</span></div><h3>{collection.name}</h3><p>{collection.description}</p><span className="collection-subline">{collection.subcollections} sub-collections&nbsp;&nbsp; {collection.topics.length} {collection.itemLabel.toLowerCase()}</span><div className="topic-tags">{collection.topics.map(topic => <Link href={`/topics/${topicSlug(topic)}`} onClick={event => event.stopPropagation()} key={topic}>{topic}</Link>)}</div><div className="resource-counts">{collection.resourceSections ? collection.resourceSections.map(section => <span key={section.label}><b className={`type-icon ${section.tone}`}>{section.icon}</b> {section.label} {section.count}</span>) : collection.counts.map(count => { const [typeName, number] = count.split(" "); const type = resourceTypeLabels[typeName] ?? resourceTypeLabels.Resource; return <span key={count}><b className={`type-icon ${type.tone}`}>{type.icon}</b> {type.label} {number}</span>; })}</div></div>)}</div>{visibleCollections.length === 0 && <p className="empty-state">No collections match “{query}”. Try a broader topic or clear search.</p>}</section>
    <footer><span>AWESOME .NET TIPS</span><a href="https://github.com/meysamhadeli/awesome-dotnet-tips">OPEN SOURCE ON GITHUB ↗</a></footer>
  </main>;
}
