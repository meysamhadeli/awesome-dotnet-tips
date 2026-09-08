import Link from "next/link";
import { docsCatalog, type DocCollection, type DocFolder } from "../../../generated/docs-catalog";

const topicSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const repositoryUrl = "https://github.com/meysamhadeli/awesome-dotnet-tips/blob/main/";
const folderSlug = (folder: DocFolder) => topicSlug(folder.name);

const types = [
  { label: "Articles", icon: "📕", tone: "pink" },
  { label: "Libraries", icon: "📦", tone: "brown" },
  { label: "Videos", icon: "📺", tone: "cyan" },
  { label: "Samples", icon: "🚀", tone: "green" },
  { label: "Resources", icon: "📘", tone: "blue" },
  { label: "Books", icon: "📚", tone: "yellow" },
];

type Topic = { name: string; description: string; resources: number; sections: number };
type Collection = { name: string; description: string; topics: Topic[]; totals: number[] };
type FilesystemTopic = Topic & { href: string; external?: boolean };
type Subcollection = { name: string; href: string; topics: number };
type FilesystemCollection = { name: string; description: string; topics: FilesystemTopic[]; subcollections: Subcollection[]; totals: number[] };

const countFiles = (node: DocFolder): number => node.files.length + node.folders.reduce((total, folder) => total + countFiles(folder), 0);
const collectionTopics = (collection: DocCollection): FilesystemTopic[] => collection.files
  .filter(file => !file.name.toLowerCase().startsWith(collection.slug))
  .map(file => ({ name: file.name, href: `/topics/${topicSlug(file.name)}`, description: `Explore resources and practical guidance for ${file.name}.`, resources: 1, sections: 1 }));
const collectionSubcollections = (collection: DocCollection): Subcollection[] => collection.folders.map(folder => ({ name: folder.name, href: `/topics/${folderSlug(folder)}`, topics: folder.files.length + folder.folders.length }));
const filesystemCollections: Record<string, FilesystemCollection> = Object.fromEntries(docsCatalog.map(collection => [collection.slug, {
  name: collection.name,
  description: `Curated ${collection.name} documentation and learning resources.`,
  totals: [countFiles(collection), 0, 0, 0, 0, 0],
  topics: collectionTopics(collection),
  subcollections: collectionSubcollections(collection),
}])) as Record<string, FilesystemCollection>;

const collections: Record<string, Collection> = {
  data: { name: "Data", description: "Relational and non-relational data stores, modeling, scaling, and operations.", totals: [89, 68, 9, 0, 0, 0], topics: ["Relational Database", "NoSQL"].map(name => ({ name, description: `Explore data modeling, operations, and tradeoffs for ${name}.`, resources: 30, sections: 3 })) },
  "net": { name: ".NET", description: "C#, .NET, APIs, testing, and application development resources.", totals: [600, 200, 100, 0, 0, 0], topics: ["C#", ".NET", "APIs", "Testing"].map(name => ({ name, description: `Practical .NET resources for ${name}.`, resources: 20, sections: 3 })) },
  "software-architecture": { name: "Software Architecture", description: "Architecture styles, design, domain modeling, patterns, security, and system design.", totals: [500, 100, 0, 80, 0, 0], topics: ["Architecture Styles", "Domain-Driven Design", "Design Patterns", "Design Principles", "System Design", "Security"].map(name => ({ name, description: `Practical guidance for ${name}.`, resources: 20, sections: 3 })) },
  "architectural-styles": { name: "Architectural Styles", description: "Curated approaches for structuring maintainable .NET systems and teams.", totals: [176, 70, 0, 67, 0, 3], topics: [
    { name: "Clean Architecture", description: "Organize applications around business rules and clear dependency boundaries.", resources: 34, sections: 3 }, { name: "Event Driven Architecture", description: "Design systems around events, decoupled producers, and consumers.", resources: 25, sections: 3 }, { name: "Hexagonal Architecture", description: "Keep domain logic independent from infrastructure and delivery concerns.", resources: 21, sections: 2 }, { name: "N-Layer Architecture", description: "Explore classic layered application structure and its tradeoffs.", resources: 17, sections: 2 }, { name: "Onion Architecture", description: "Protect the domain model with inward-facing dependency flow.", resources: 19, sections: 2 }, { name: "Vertical Slice Architecture", description: "Organize code by feature and business capability.", resources: 28, sections: 3 },
  ] },
  "cloud-native": { name: "Cloud Native", description: "Practical resources for containers, Kubernetes, platforms, delivery, and operations.", totals: [87, 49, 14, 12, 20, 2], topics: [
    { name: "Azure", description: "Build and operate cloud-native .NET workloads on Microsoft Azure.", resources: 12, sections: 4 }, { name: "Docker", description: "Package, run, and compose dependable containerized applications.", resources: 8, sections: 2 }, { name: "Kubernetes", description: "Deploy, scale, and manage resilient workloads across clusters.", resources: 18, sections: 6 }, { name: "CI/CD", description: "Automate testing, delivery, and infrastructure changes.", resources: 11, sections: 3 }, { name: "Messaging", description: "Connect cloud-native services with reliable brokers and protocols.", resources: 20, sections: 4 }, { name: "Microservices", description: "Design, communicate, and operate independently deployable services.", resources: 28, sections: 4 }, { name: "Observability", description: "Understand and operate workloads through logs, metrics, and traces.", resources: 20, sections: 3 }, { name: "Resiliency", description: "Design workloads that recover from failures and remain available.", resources: 16, sections: 2 }, { name: "Scalability", description: "Scale workloads and infrastructure as demand changes.", resources: 12, sections: 2 }, { name: "Networking", description: "Connect services with proxies, discovery, and service meshes.", resources: 24, sections: 3 },
  ] },
  "c-sharp": { name: "C#", description: "Language features, async programming, collections, and everyday C# craft.", totals: [293, 91, 21, 4, 18, 1], topics: [{ name: "Versions", description: "Track language features from C# 7 through the latest release.", resources: 34, sections: 6 }, { name: "Async", description: "Understand tasks, cancellation, channels, and concurrency.", resources: 42, sections: 7 }, { name: "Collections", description: "Choose and use .NET collection types effectively.", resources: 18, sections: 3 }, { name: "Language Features", description: "Deep dives into generics, LINQ, records, reflection, and types.", resources: 27, sections: 6 }] },
  "design-patterns": { name: "Design Patterns", description: "Reusable solutions for common object-oriented design problems.", totals: [79, 13, 7, 7, 14, 0], topics: [{ name: "Adapter Pattern", description: "Make incompatible interfaces work together.", resources: 8, sections: 1 }, { name: "Builder", description: "Construct complex objects step by step.", resources: 7, sections: 1 }, { name: "Decorator Pattern", description: "Add behavior without changing the original type.", resources: 9, sections: 1 }, { name: "Mediator Pattern", description: "Reduce direct coupling between collaborating objects.", resources: 8, sections: 1 }, { name: "Repository Pattern", description: "Separate domain logic from persistence concerns.", resources: 11, sections: 1 }, { name: "Strategy Pattern", description: "Swap algorithms behind a stable interface.", resources: 9, sections: 1 }] },
  "design-principles": { name: "Design Principles", description: "Foundations for clear, cohesive, and adaptable software design.", totals: [13, 2, 0, 0, 0, 0], topics: ["SOLID", "DRY", "KISS", "CAP Theorem", "Encapsulation", "Fail Fast"].map(name => ({ name, description: `Explore practical guidance for ${name}.`, resources: 2, sections: 1 })) },
  "domain-driven-design": { name: "Domain-Driven Design", description: "Model domains, boundaries, events, and business behavior with confidence.", totals: [271, 42, 21, 89, 6, 5], topics: ["Aggregation", "Bounded Context", "Domain Events", "Domain Modeling", "Domain Primitives", "Strategic Design", "Tactical Design", "Value Objects"].map(name => ({ name, description: `Explore concepts and practical guidance for ${name}.`, resources: 12, sections: 2 })) },
  "messaging": { name: "Messaging", description: "Explore brokers, protocols, and reliable communication between services.", totals: [80, 56, 51, 2, 13, 5], topics: ["Kafka", "NATS", "RabbitMQ", "ZeroMQ"].map(name => ({ name, description: `Learn messaging patterns and implementation with ${name}.`, resources: 20, sections: 3 })) },
  "nosql": { name: "NoSQL", description: "Choose and use document, wide-column, and distributed databases.", totals: [34, 56, 3, 0, 4, 0], topics: ["CosmosDB", "DynamoDB", "DocumentDB", "MongoDB", "RavenDB", "Cassandra", "Sharding", "Replication"].map(name => ({ name, description: `Explore data modeling, operations, and tradeoffs with ${name}.`, resources: 11, sections: 2 })) },
  "relational-database": { name: "Relational Database", description: "Design, query, scale, and operate relational data stores.", totals: [55, 12, 6, 0, 0, 0], topics: ["SQL Server", "PostgreSQL", "Replication"].map(name => ({ name, description: `Practical relational database resources for ${name}.`, resources: 18, sections: 2 })) },
  "security": { name: "Security", description: "Authentication, authorization, identity, encryption, and secrets.", totals: [184, 48, 2, 73, 0, 0], topics: ["Authentication", "Authorization", "DotNet Identity", "Encryption", "Identity Server", "Keycloak", "OAuth / OpenID", "Secret Management"].map(name => ({ name, description: `Build more secure .NET systems with ${name}.`, resources: 16, sections: 2 })) },
  "testing": { name: "Testing", description: "Build confidence with unit, integration, contract, and acceptance tests.", totals: [183, 52, 65, 29, 2, 0], topics: ["Acceptance Testing", "Architectural Testing", "BDD", "Contract Testing", "E2E Testing", "Integration Testing", "Mocking", "TDD", "Unit Testing", "xUnit", "TUnit"].map(name => ({ name, description: `Practical testing guidance and tools for ${name}.`, resources: 18, sections: 2 })) },
  ai: { name: "AI", description: "A focused index of AI concepts, tools, and developer resources.", totals: [4, 16, 0, 0, 2, 0], topics: [{ name: "Resources", description: "Curated AI learning collections and reference lists.", resources: 2, sections: 1 }, { name: "Articles", description: "Articles about AI-assisted development and modern AI tooling.", resources: 4, sections: 1 }, { name: "Videos", description: "Talks and tutorials for building with AI.", resources: 2, sections: 1 }, { name: "Libraries", description: "Open-source libraries and applications for AI development.", resources: 16, sections: 1 }] },
};

export function generateStaticParams() { return Object.keys(filesystemCollections).map(slug => ({ slug })); }

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = filesystemCollections[slug] ?? filesystemCollections["cloud-native"];
  const totalResources = collection.totals.reduce((sum, count) => sum + count, 0);
  return <main className="detail-shell">
    <header className="topbar detail-topbar"><Link className="brand" href="/"><span className="brand-mark">A</span><span>AWESOME .NET TIPS</span></Link><nav><Link href="/">COLLECTIONS</Link><span className="detail-current">/ <Link href={`/collections/${slug}`}>{collection.name.toUpperCase()}</Link></span></nav><a className="github-pill" href="https://github.com/meysamhadeli/awesome-dotnet-tips" target="_blank" rel="noreferrer">VIEW ON GITHUB ↗</a></header>
    <section className="detail-hero"><span className="eyebrow">COLLECTION</span><h1>{collection.name}</h1><p>{collection.description}</p><div className="detail-stats"><span><b>{collection.topics.length}</b> TOPICS</span><span><b>{totalResources}</b> RESOURCES</span><span><b>{collection.subcollections.length}</b> SUB-COLLECTIONS</span></div></section>
    {collection.subcollections.length > 0 && <section className="subcollection-section"><div className="section-heading"><div><span className="kicker">BROWSE COLLECTION</span><h2>Choose a sub-collection</h2></div><span className="count">{collection.subcollections.length} SUB-COLLECTIONS</span></div><div className="subcollection-grid">{collection.subcollections.map(subcollection => <Link className="subcollection-card" href={subcollection.href} key={subcollection.name}><strong>{subcollection.name}</strong><span>{subcollection.topics} topics</span></Link>)}</div></section>}
    {collection.topics.length > 0 && <section className="topic-section"><div className="section-heading"><div><span className="kicker">TOPICS</span><h2>Topics</h2></div><span className="count">{collection.topics.length} TOPICS</span></div><div className="topic-grid">{collection.topics.map(topic => { const content = <><div className="topic-card-top"><span className="pill">{collection.name.toUpperCase()}</span><span className="pill">{topic.sections} SECTIONS</span></div><h3>{topic.name}</h3><p>{topic.description}</p><div className="topic-card-meta"><span>{topic.resources} resources</span></div></>; return topic.external ? <a className="topic-card" href={topic.href} target="_blank" rel="noreferrer" key={topic.name}>{content}</a> : <Link className="topic-card" href={topic.href} key={topic.name}>{content}</Link>; })}</div></section>}
    <footer><Link href="/">← BACK TO COLLECTIONS</Link><a href={"https://github.com/meysamhadeli/awesome-dotnet-tips"}>OPEN SOURCE ON GITHUB ↗</a></footer>
  </main>;
}
