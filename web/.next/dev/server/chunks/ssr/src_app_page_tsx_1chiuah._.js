module.exports = [
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const collectionSlug = (name)=>name.toLowerCase().replace(/#/g, "sharp").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const topicSlug = (name)=>name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const repo = "https://github.com/meysamhadeli/awesome-dotnet-tips/blob/main/";
const doc = (path)=>`${repo}${path}`;
const resourceTypeLabels = {
    Article: {
        label: "Articles",
        icon: "📕",
        tone: "pink"
    },
    Video: {
        label: "Videos",
        icon: "📺",
        tone: "cyan"
    },
    Library: {
        label: "Libraries",
        icon: "📦",
        tone: "brown"
    },
    Sample: {
        label: "Samples",
        icon: "🚀",
        tone: "green"
    },
    Resource: {
        label: "Resources",
        icon: "📘",
        tone: "blue"
    },
    Book: {
        label: "Books",
        icon: "📚",
        tone: "yellow"
    }
};
const contents = [
    {
        name: "C#",
        href: doc("docs/csharp/csharp.md"),
        branches: [
            {
                name: "Versions",
                href: doc("docs/csharp/versions/7.md"),
                leaves: [
                    "C# 7",
                    "C# 8",
                    "C# 9",
                    "C# 10",
                    "C# 11",
                    "C# 12"
                ].map((name)=>({
                        name,
                        href: doc("docs/csharp/csharp.md"),
                        types: [
                            "Article",
                            "Guide"
                        ]
                    }))
            },
            {
                name: "Async",
                href: doc("docs/csharp/async/async.md"),
                leaves: [
                    "Async and Await",
                    "Async Best Practice",
                    "Cancellation",
                    "Channels",
                    "Concurrency vs Parallelism",
                    "Thread Safety",
                    "ValueTask"
                ].map((name)=>({
                        name,
                        href: doc("docs/csharp/async/async.md"),
                        types: [
                            "Article",
                            "Video"
                        ]
                    }))
            },
            {
                name: "Language Features",
                href: doc("docs/csharp/generic.md"),
                leaves: [
                    "Generics",
                    "LINQ",
                    "Records",
                    "Reflection",
                    "Span",
                    "Types"
                ].map((name)=>({
                        name,
                        href: doc("docs/csharp/generic.md"),
                        types: [
                            "Guide",
                            "Sample"
                        ]
                    }))
            }
        ]
    },
    {
        name: ".NET",
        href: doc("docs/dotnet/dotnet-core.md"),
        branches: [
            {
                name: "ASP.NET Core",
                href: doc("docs/dotnet/web-api.md"),
                leaves: [
                    "Minimal API",
                    "Web API",
                    "Middleware",
                    "REST",
                    "gRPC"
                ].map((name)=>({
                        name,
                        href: doc("docs/dotnet/web-api.md"),
                        types: [
                            "Article",
                            "Sample"
                        ]
                    }))
            },
            {
                name: "Entity Framework Core",
                href: doc("docs/dotnet/ef-core/ef-core.md"),
                leaves: [
                    "Migrations",
                    "Performance",
                    "Transactions",
                    "Optimistic Concurrency"
                ].map((name)=>({
                        name,
                        href: doc("docs/dotnet/ef-core/ef-core.md"),
                        types: [
                            "Guide",
                            "Article"
                        ]
                    }))
            },
            {
                name: "Application Foundations",
                href: doc("docs/dotnet/best-practice.md"),
                leaves: [
                    "Dependency Injection",
                    "Configuration",
                    "Logging",
                    "Validation",
                    "Caching"
                ].map((name)=>({
                        name,
                        href: doc("docs/dotnet/best-practice.md"),
                        types: [
                            "Article",
                            "Resource"
                        ]
                    }))
            }
        ]
    },
    {
        name: "Architecture",
        href: doc("docs/architectural-styles/architectural-styles.md"),
        branches: [
            {
                name: "Architectural Styles",
                href: doc("docs/architectural-styles/architectural-styles.md"),
                leaves: [
                    "Clean Architecture",
                    "Hexagonal Architecture",
                    "Onion Architecture",
                    "Vertical Slice Architecture"
                ].map((name)=>({
                        name,
                        href: doc("docs/architectural-styles/architectural-styles.md"),
                        types: [
                            "Guide",
                            "Article"
                        ]
                    }))
            },
            {
                name: "Domain-Driven Design",
                href: doc("docs/domain-driven-design/domain-driven-design.md"),
                leaves: [
                    "Bounded Context",
                    "Domain Events",
                    "Value Objects",
                    "Tactical Design"
                ].map((name)=>({
                        name,
                        href: doc("docs/domain-driven-design/domain-driven-design.md"),
                        types: [
                            "Guide",
                            "Video"
                        ]
                    }))
            },
            {
                name: "Design Patterns",
                href: doc("docs/design-patterns/design-patterns.md"),
                leaves: [
                    "Adapter",
                    "Builder",
                    "Decorator",
                    "Mediator",
                    "Repository",
                    "Strategy"
                ].map((name)=>({
                        name,
                        href: doc("docs/design-patterns/design-patterns.md"),
                        types: [
                            "Article",
                            "Sample"
                        ]
                    }))
            }
        ]
    },
    {
        name: "Microservices",
        href: doc("docs/microservices/microservices.md"),
        branches: [
            {
                name: "Observability",
                href: doc("docs/microservices/observability/observability.md"),
                leaves: [
                    "Diagnostics",
                    "Distributed Tracing",
                    "Metrics",
                    "Logging",
                    "Health Checks"
                ].map((name)=>({
                        name,
                        href: doc("docs/microservices/observability/observability.md"),
                        types: [
                            "Article",
                            "Resource"
                        ]
                    }))
            },
            {
                name: "Resiliency",
                href: doc("docs/microservices/resiliency/resiliency.md"),
                leaves: [
                    "Circuit Breaker",
                    "Availability",
                    "Scaling"
                ].map((name)=>({
                        name,
                        href: doc("docs/microservices/resiliency/resiliency.md"),
                        types: [
                            "Guide",
                            "Video"
                        ]
                    }))
            },
            {
                name: "Platform",
                href: doc("docs/microservices/tools/tools.md"),
                leaves: [
                    "Service Discovery",
                    "Service Mesh",
                    "Reverse Proxy",
                    "Aspire",
                    "Dapr"
                ].map((name)=>({
                        name,
                        href: doc("docs/microservices/tools/tools.md"),
                        types: [
                            "Library",
                            "Sample"
                        ]
                    }))
            }
        ]
    },
    {
        name: "Cloud Native",
        href: doc("docs/cloud-native/cloud-native.md"),
        branches: [
            {
                name: "Containers",
                href: doc("docs/cloud-native/docker/docker.md"),
                leaves: [
                    "Docker",
                    "Docker Compose"
                ].map((name)=>({
                        name,
                        href: doc("docs/cloud-native/docker/docker.md"),
                        types: [
                            "Guide",
                            "Sample"
                        ]
                    }))
            },
            {
                name: "Kubernetes",
                href: doc("docs/cloud-native/kubernetes/kubernetes.md"),
                leaves: [
                    "Helm",
                    "Ingress Controller",
                    "K3s",
                    "Minikube",
                    "TLS",
                    "ConfigMaps"
                ].map((name)=>({
                        name,
                        href: doc("docs/cloud-native/kubernetes/kubernetes.md"),
                        types: [
                            "Article",
                            "Resource"
                        ]
                    }))
            },
            {
                name: "CI/CD",
                href: doc("docs/cloud-native/ci-cd/ci-cd.md"),
                leaves: [
                    "Azure DevOps",
                    "GitHub Actions",
                    "Jenkins"
                ].map((name)=>({
                        name,
                        href: doc("docs/cloud-native/ci-cd/ci-cd.md"),
                        types: [
                            "Guide",
                            "Sample"
                        ]
                    }))
            }
        ]
    },
    {
        name: "Data, Security, Testing, AI",
        href: doc("docs/ai.md"),
        branches: [
            {
                name: "Data and Messaging",
                href: doc("docs/messaging/messaging.md"),
                leaves: [
                    "Kafka",
                    "NATS",
                    "RabbitMQ",
                    "SQL Server",
                    "PostgreSQL",
                    "MongoDB"
                ].map((name)=>({
                        name,
                        href: doc("docs/messaging/messaging.md"),
                        types: [
                            "Library",
                            "Article"
                        ]
                    }))
            },
            {
                name: "Security",
                href: doc("docs/security/security.md"),
                leaves: [
                    "Authentication",
                    "Authorization",
                    "Encryption",
                    "Identity",
                    "Secret Management"
                ].map((name)=>({
                        name,
                        href: doc("docs/security/security.md"),
                        types: [
                            "Guide",
                            "Resource"
                        ]
                    }))
            },
            {
                name: "Testing and AI",
                href: doc("docs/testing/testing.md"),
                leaves: [
                    "Unit Testing",
                    "Integration Testing",
                    "Contract Testing",
                    "AI Fundamentals",
                    "Developer Tools"
                ].map((name)=>({
                        name,
                        href: doc("docs/testing/testing.md"),
                        types: [
                            "Article",
                            "Video"
                        ]
                    }))
            }
        ]
    }
];
const collectionCards = [
    {
        name: "Architectural Styles",
        href: doc("docs/architectural-styles/architectural-styles.md"),
        description: "Curated approaches for structuring maintainable .NET systems and teams.",
        topics: [
            "Clean Architecture",
            "Hexagonal",
            "Onion",
            "Vertical Slice"
        ],
        counts: [
            "Article 176",
            "Video 70",
            "Sample 67",
            "Book 3"
        ],
        subcollections: 0,
        itemLabel: "TOPICS",
        color: "blue"
    },
    {
        name: "Cloud Native",
        href: doc("docs/cloud-native/cloud-native.md"),
        description: "Practical resources for containers, Kubernetes, platforms, and delivery.",
        topics: [
            "Azure",
            "Docker",
            "Kubernetes",
            "CI/CD"
        ],
        counts: [
            "Resource 20",
            "Article 87",
            "Video 49",
            "Library 14",
            "Sample 12",
            "Book 2"
        ],
        subcollections: 5,
        itemLabel: "TOPICS",
        color: "mint"
    },
    {
        name: "C#",
        href: doc("docs/csharp/csharp.md"),
        description: "Language features, async programming, collections, and everyday C# craft.",
        topics: [
            "Versions",
            "Async",
            "Collections",
            "Language"
        ],
        counts: [
            "Resource 18",
            "Article 293",
            "Video 91",
            "Library 21",
            "Sample 4",
            "Book 1"
        ],
        subcollections: 3,
        itemLabel: "TOPICS",
        color: "lavender"
    },
    {
        name: "Design Patterns",
        href: doc("docs/design-patterns/design-patterns.md"),
        description: "Reusable solutions for common object-oriented design problems.",
        topics: [
            "Creational",
            "Structural",
            "Behavioral",
            "Enterprise"
        ],
        counts: [
            "Resource 14",
            "Article 79",
            "Video 13",
            "Library 7",
            "Sample 7"
        ],
        subcollections: 0,
        itemLabel: "TOPICS",
        color: "peach"
    },
    {
        name: "Design Principles",
        href: doc("docs/design-principles/design-principles.md"),
        description: "Foundations for clear, cohesive, and adaptable software design.",
        topics: [
            "SOLID",
            "DRY",
            "KISS",
            "CAP"
        ],
        counts: [
            "Article 13",
            "Video 2"
        ],
        subcollections: 0,
        itemLabel: "TOPICS",
        color: "yellow"
    },
    {
        name: "Domain-Driven Design",
        href: doc("docs/domain-driven-design/domain-driven-design.md"),
        description: "Model domains, boundaries, events, and business behavior with confidence.",
        topics: [
            "Strategic",
            "Tactical",
            "Aggregates",
            "Value Objects"
        ],
        counts: [
            "Resource 6",
            "Article 271",
            "Video 42",
            "Library 21",
            "Sample 89",
            "Book 5"
        ],
        subcollections: 0,
        itemLabel: "TOPICS",
        color: "pink"
    },
    {
        name: "Messaging",
        href: doc("docs/messaging/messaging.md"),
        description: "Explore brokers, protocols, and reliable communication between services.",
        topics: [
            "Kafka",
            "NATS",
            "RabbitMQ",
            "ZeroMQ"
        ],
        counts: [
            "Resource 13",
            "Article 80",
            "Video 56",
            "Library 51",
            "Sample 2",
            "Book 5"
        ],
        subcollections: 0,
        itemLabel: "TOPICS",
        color: "mint"
    },
    {
        name: "NoSQL",
        href: doc("docs/nosql/nosql.md"),
        description: "Choose and use document, wide-column, and distributed databases.",
        topics: [
            "Cosmos DB",
            "MongoDB",
            "Cassandra",
            "Sharding"
        ],
        counts: [
            "Resource 4",
            "Article 34",
            "Video 56",
            "Library 3"
        ],
        subcollections: 0,
        itemLabel: "TOPICS",
        color: "blue"
    },
    {
        name: "Relational Database",
        href: doc("docs/relational-database/relational-database.md"),
        description: "Design, query, scale, and operate relational data stores.",
        topics: [
            "SQL Server",
            "PostgreSQL",
            "Replication",
            "Performance"
        ],
        counts: [
            "Article 55",
            "Video 12",
            "Library 6"
        ],
        subcollections: 0,
        itemLabel: "TOPICS",
        color: "lavender"
    },
    {
        name: "Security",
        href: doc("docs/security/security.md"),
        description: "Authentication, authorization, identity, encryption, and secrets.",
        topics: [
            "Authentication",
            "Authorization",
            "Identity",
            "Secrets"
        ],
        counts: [
            "Article 184",
            "Video 48",
            "Library 2",
            "Sample 73"
        ],
        subcollections: 0,
        itemLabel: "TOPICS",
        color: "peach"
    },
    {
        name: "Testing",
        href: doc("docs/testing/testing.md"),
        description: "Build confidence with unit, integration, contract, and acceptance tests.",
        topics: [
            "Unit",
            "Integration",
            "Contract",
            "E2E"
        ],
        counts: [
            "Resource 2",
            "Article 183",
            "Video 52",
            "Library 65",
            "Sample 29"
        ],
        subcollections: 0,
        itemLabel: "TOPICS",
        color: "yellow"
    },
    {
        name: "AI",
        href: doc("docs/ai.md"),
        description: "A focused index of AI concepts, tools, and developer resources.",
        topics: [
            "Resources",
            "Articles",
            "Videos",
            "Libraries"
        ],
        counts: [],
        resourceSections: [
            {
                label: "Resources",
                count: 2,
                icon: "📘",
                tone: "blue"
            },
            {
                label: "Articles",
                count: 4,
                icon: "📕",
                tone: "pink"
            },
            {
                label: "Videos",
                count: 2,
                icon: "📺",
                tone: "cyan"
            },
            {
                label: "Libraries",
                count: 16,
                icon: "📦",
                tone: "brown"
            }
        ],
        subcollections: 0,
        itemLabel: "TOPICS",
        color: "pink"
    }
];
const collectionUpdatedAt = {
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
    AI: "2024-10-09"
};
function Home() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeGroup, setActiveGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("updated");
    const normalizedQuery = query.trim().toLowerCase();
    const visibleCollections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const filtered = collectionCards.filter((collection)=>(activeGroup === "All" || collection.name === activeGroup) && `${collection.name} ${collection.description} ${collection.topics.join(" ")}`.toLowerCase().includes(normalizedQuery));
        return [
            ...filtered
        ].sort((left, right)=>{
            if (sortBy === "name") return left.name.localeCompare(right.name);
            if (sortBy === "relevance" && normalizedQuery) return `${left.name} ${left.description}`.toLowerCase().indexOf(normalizedQuery) - `${right.name} ${right.description}`.toLowerCase().indexOf(normalizedQuery);
            return (collectionUpdatedAt[right.name] ?? "").localeCompare(collectionUpdatedAt[left.name] ?? "");
        });
    }, [
        activeGroup,
        normalizedQuery,
        sortBy
    ]);
    const groups = [
        "All",
        ...collectionCards.map((collection)=>collection.name)
    ];
    const topicCount = collectionCards.reduce((total, collection)=>total + collection.topics.length, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "site-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "brand",
                        href: "#top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-mark",
                                children: "A"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 108,
                                columnNumber: 65
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "AWESOME .NET",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 120
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "TIPS & RESOURCES"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 126
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 108,
                                columnNumber: 102
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 108,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "nav-active",
                                href: "#contents",
                                children: "COLLECTIONS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 108,
                                columnNumber: 177
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#resources",
                                children: "TOPICS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 108,
                                columnNumber: 235
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "github-nav",
                                href: "https://github.com/meysamhadeli/awesome-dotnet-tips",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "VIEW ON GITHUB ↗"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 108,
                                columnNumber: 266
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 108,
                        columnNumber: 172
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "status-dot",
                        "aria-label": "Open source collection"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 108,
                        columnNumber: 410
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 108,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "intro",
                id: "top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "A CURATED LEARNING INDEX / 2026 EDITION"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 109,
                        columnNumber: 41
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: [
                            "Build better ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: "with .NET."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 109,
                                columnNumber: 130
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 109,
                        columnNumber: 113
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "One organized map for articles, videos, libraries, samples, and ideas across Software Architecture, Microservices, Cloud Native, AI, and modern .NET engineering."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 109,
                        columnNumber: 152
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "intro-topics",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Topics include"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 109,
                                columnNumber: 350
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "C#"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 109,
                                columnNumber: 377
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: ".NET"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 109,
                                columnNumber: 386
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Software Architecture"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 109,
                                columnNumber: 397
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Cloud Native"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 109,
                                columnNumber: 425
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "AI"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 109,
                                columnNumber: 444
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Microservices"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 109,
                                columnNumber: 453
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 109,
                        columnNumber: 320
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "intro-stats",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: collectionCards.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 514
                                    }, this),
                                    " collections"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 109,
                                columnNumber: 508
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: topicCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 570
                                    }, this),
                                    " topics"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 109,
                                columnNumber: 564
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 109,
                        columnNumber: 479
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 109,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "finder",
                "aria-label": "Find collections",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "search",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "⌕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 110,
                                columnNumber: 89
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: query,
                                onChange: (event)=>setQuery(event.target.value),
                                placeholder: "Search collections, topics, sections, names, source..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 110,
                                columnNumber: 103
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 110,
                        columnNumber: 63
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filters",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "COLLECTION"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 110,
                                columnNumber: 277
                            }, this),
                            groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: activeGroup === group ? "active" : "",
                                    onClick: ()=>setActiveGroup(group),
                                    children: group
                                }, group, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 325
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 110,
                        columnNumber: 252
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "finder-meta",
                        children: [
                            "Showing ",
                            visibleCollections.length,
                            " of ",
                            collectionCards.length,
                            " collections ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "sort-control",
                                children: [
                                    "Sort by ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: sortBy,
                                        onChange: (event)=>setSortBy(event.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "updated",
                                                children: "Last updated"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 675
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "relevance",
                                                children: "Relevance"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 720
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "name",
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 764
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 602
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 110,
                                columnNumber: 562
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 110,
                        columnNumber: 457
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 110,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "map",
                id: "contents",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "kicker",
                                        children: "COLLECTIONS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 82
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Choose collection"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 125
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 111,
                                columnNumber: 77
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "count",
                                children: [
                                    visibleCollections.length,
                                    " SHOWN"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 111,
                                columnNumber: 157
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 111,
                        columnNumber: 44
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "collection-grid",
                        children: visibleCollections.map((collection, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `collection-card ${collection.color}`,
                                role: "link",
                                tabIndex: 0,
                                onClick: ()=>router.push(`/collections/${collectionSlug(collection.name)}`),
                                onKeyDown: (event)=>{
                                    if (event.key === "Enter" || event.key === " ") router.push(`/collections/${collectionSlug(collection.name)}`);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "collection-card-top",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "collection-icon",
                                                children: String(index + 1).padStart(2, "0")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 662
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pill",
                                                children: "COLLECTION"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 739
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pill",
                                                children: [
                                                    collection.topics.length,
                                                    " ",
                                                    collection.itemLabel
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 779
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 625
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: collection.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 864
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: collection.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 890
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "collection-subline",
                                        children: [
                                            collection.subcollections,
                                            " sub-collections   ",
                                            collection.topics.length,
                                            " ",
                                            collection.itemLabel.toLowerCase()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 921
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "topic-tags",
                                        children: collection.topics.map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/topics/${topicSlug(topic)}`,
                                                onClick: (event)=>event.stopPropagation(),
                                                children: topic
                                            }, topic, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 1144
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 1084
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "resource-counts",
                                        children: collection.resourceSections ? collection.resourceSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        className: `type-icon ${section.tone}`,
                                                        children: section.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 1397
                                                    }, this),
                                                    " ",
                                                    section.label,
                                                    " ",
                                                    section.count
                                                ]
                                            }, section.label, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 1371
                                            }, this)) : collection.counts.map((count)=>{
                                            const [typeName, number] = count.split(" ");
                                            const type = resourceTypeLabels[typeName] ?? resourceTypeLabels.Resource;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        className: `type-icon ${type.tone}`,
                                                        children: type.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 1678
                                                    }, this),
                                                    " ",
                                                    type.label,
                                                    " ",
                                                    number
                                                ]
                                            }, count, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 1660
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 1264
                                    }, this)
                                ]
                            }, collection.name, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 111,
                                columnNumber: 307
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 111,
                        columnNumber: 227
                    }, this),
                    visibleCollections.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "empty-state",
                        children: [
                            "No collections match “",
                            query,
                            "”. Try a broader topic or clear search."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 111,
                        columnNumber: 1823
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 111,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "AWESOME .NET TIPS"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 112,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://github.com/meysamhadeli/awesome-dotnet-tips",
                        children: "OPEN SOURCE ON GITHUB ↗"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 112,
                        columnNumber: 43
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 112,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 107,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=src_app_page_tsx_1chiuah._.js.map