module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/collections/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CollectionPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
const topicSlug = (name)=>name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const types = [
    {
        label: "Articles",
        icon: "📕",
        tone: "pink"
    },
    {
        label: "Libraries",
        icon: "📦",
        tone: "brown"
    },
    {
        label: "Videos",
        icon: "📺",
        tone: "cyan"
    },
    {
        label: "Samples",
        icon: "🚀",
        tone: "green"
    },
    {
        label: "Resources",
        icon: "📘",
        tone: "blue"
    },
    {
        label: "Books",
        icon: "📚",
        tone: "yellow"
    }
];
const collections = {
    "architectural-styles": {
        name: "Architectural Styles",
        description: "Curated approaches for structuring maintainable .NET systems and teams.",
        totals: [
            176,
            70,
            0,
            67,
            0,
            3
        ],
        topics: [
            {
                name: "Clean Architecture",
                description: "Organize applications around business rules and clear dependency boundaries.",
                resources: 34,
                sections: 3
            },
            {
                name: "Event Driven Architecture",
                description: "Design systems around events, decoupled producers, and consumers.",
                resources: 25,
                sections: 3
            },
            {
                name: "Hexagonal Architecture",
                description: "Keep domain logic independent from infrastructure and delivery concerns.",
                resources: 21,
                sections: 2
            },
            {
                name: "N-Layer Architecture",
                description: "Explore classic layered application structure and its tradeoffs.",
                resources: 17,
                sections: 2
            },
            {
                name: "Onion Architecture",
                description: "Protect the domain model with inward-facing dependency flow.",
                resources: 19,
                sections: 2
            },
            {
                name: "Vertical Slice Architecture",
                description: "Organize code by feature and business capability.",
                resources: 28,
                sections: 3
            }
        ]
    },
    "cloud-native": {
        name: "Cloud Native",
        description: "Practical resources for containers, Kubernetes, platforms, and delivery.",
        totals: [
            87,
            49,
            14,
            12,
            20,
            2
        ],
        topics: [
            {
                name: "Azure",
                description: "Build and operate cloud-native .NET workloads on Microsoft Azure.",
                resources: 12,
                sections: 4
            },
            {
                name: "Docker",
                description: "Package, run, and compose dependable containerized applications.",
                resources: 8,
                sections: 2
            },
            {
                name: "Kubernetes",
                description: "Deploy, scale, and manage resilient workloads across clusters.",
                resources: 18,
                sections: 6
            },
            {
                name: "CI/CD",
                description: "Automate testing, delivery, and infrastructure changes.",
                resources: 11,
                sections: 3
            }
        ]
    },
    "c-sharp": {
        name: "C#",
        description: "Language features, async programming, collections, and everyday C# craft.",
        totals: [
            293,
            91,
            21,
            4,
            18,
            1
        ],
        topics: [
            {
                name: "Versions",
                description: "Track language features from C# 7 through the latest release.",
                resources: 34,
                sections: 6
            },
            {
                name: "Async",
                description: "Understand tasks, cancellation, channels, and concurrency.",
                resources: 42,
                sections: 7
            },
            {
                name: "Collections",
                description: "Choose and use .NET collection types effectively.",
                resources: 18,
                sections: 3
            },
            {
                name: "Language Features",
                description: "Deep dives into generics, LINQ, records, reflection, and types.",
                resources: 27,
                sections: 6
            }
        ]
    },
    "design-patterns": {
        name: "Design Patterns",
        description: "Reusable solutions for common object-oriented design problems.",
        totals: [
            79,
            13,
            7,
            7,
            14,
            0
        ],
        topics: [
            {
                name: "Adapter Pattern",
                description: "Make incompatible interfaces work together.",
                resources: 8,
                sections: 1
            },
            {
                name: "Builder",
                description: "Construct complex objects step by step.",
                resources: 7,
                sections: 1
            },
            {
                name: "Decorator Pattern",
                description: "Add behavior without changing the original type.",
                resources: 9,
                sections: 1
            },
            {
                name: "Mediator Pattern",
                description: "Reduce direct coupling between collaborating objects.",
                resources: 8,
                sections: 1
            },
            {
                name: "Repository Pattern",
                description: "Separate domain logic from persistence concerns.",
                resources: 11,
                sections: 1
            },
            {
                name: "Strategy Pattern",
                description: "Swap algorithms behind a stable interface.",
                resources: 9,
                sections: 1
            }
        ]
    },
    "design-principles": {
        name: "Design Principles",
        description: "Foundations for clear, cohesive, and adaptable software design.",
        totals: [
            13,
            2,
            0,
            0,
            0,
            0
        ],
        topics: [
            "SOLID",
            "DRY",
            "KISS",
            "CAP Theorem",
            "Encapsulation",
            "Fail Fast"
        ].map((name)=>({
                name,
                description: `Explore practical guidance for ${name}.`,
                resources: 2,
                sections: 1
            }))
    },
    "domain-driven-design": {
        name: "Domain-Driven Design",
        description: "Model domains, boundaries, events, and business behavior with confidence.",
        totals: [
            271,
            42,
            21,
            89,
            6,
            5
        ],
        topics: [
            "Aggregation",
            "Bounded Context",
            "Domain Events",
            "Domain Modeling",
            "Domain Primitives",
            "Strategic Design",
            "Tactical Design",
            "Value Objects"
        ].map((name)=>({
                name,
                description: `Explore concepts and practical guidance for ${name}.`,
                resources: 12,
                sections: 2
            }))
    },
    "messaging": {
        name: "Messaging",
        description: "Explore brokers, protocols, and reliable communication between services.",
        totals: [
            80,
            56,
            51,
            2,
            13,
            5
        ],
        topics: [
            "Kafka",
            "NATS",
            "RabbitMQ",
            "ZeroMQ"
        ].map((name)=>({
                name,
                description: `Learn messaging patterns and implementation with ${name}.`,
                resources: 20,
                sections: 3
            }))
    },
    "nosql": {
        name: "NoSQL",
        description: "Choose and use document, wide-column, and distributed databases.",
        totals: [
            34,
            56,
            3,
            0,
            4,
            0
        ],
        topics: [
            "CosmosDB",
            "DynamoDB",
            "DocumentDB",
            "MongoDB",
            "RavenDB",
            "Cassandra",
            "Sharding",
            "Replication"
        ].map((name)=>({
                name,
                description: `Explore data modeling, operations, and tradeoffs with ${name}.`,
                resources: 11,
                sections: 2
            }))
    },
    "relational-database": {
        name: "Relational Database",
        description: "Design, query, scale, and operate relational data stores.",
        totals: [
            55,
            12,
            6,
            0,
            0,
            0
        ],
        topics: [
            "SQL Server",
            "PostgreSQL",
            "Replication"
        ].map((name)=>({
                name,
                description: `Practical relational database resources for ${name}.`,
                resources: 18,
                sections: 2
            }))
    },
    "security": {
        name: "Security",
        description: "Authentication, authorization, identity, encryption, and secrets.",
        totals: [
            184,
            48,
            2,
            73,
            0,
            0
        ],
        topics: [
            "Authentication",
            "Authorization",
            "DotNet Identity",
            "Encryption",
            "Identity Server",
            "Keycloak",
            "OAuth / OpenID",
            "Secret Management"
        ].map((name)=>({
                name,
                description: `Build more secure .NET systems with ${name}.`,
                resources: 16,
                sections: 2
            }))
    },
    "testing": {
        name: "Testing",
        description: "Build confidence with unit, integration, contract, and acceptance tests.",
        totals: [
            183,
            52,
            65,
            29,
            2,
            0
        ],
        topics: [
            "Acceptance Testing",
            "Architectural Testing",
            "BDD",
            "Contract Testing",
            "E2E Testing",
            "Integration Testing",
            "Mocking",
            "TDD",
            "Unit Testing",
            "xUnit",
            "TUnit"
        ].map((name)=>({
                name,
                description: `Practical testing guidance and tools for ${name}.`,
                resources: 18,
                sections: 2
            }))
    },
    ai: {
        name: "AI",
        description: "A focused index of AI concepts, tools, and developer resources.",
        totals: [
            4,
            16,
            0,
            0,
            2,
            0
        ],
        topics: [
            {
                name: "Resources",
                description: "Curated AI learning collections and reference lists.",
                resources: 2,
                sections: 1
            },
            {
                name: "Articles",
                description: "Articles about AI-assisted development and modern AI tooling.",
                resources: 4,
                sections: 1
            },
            {
                name: "Videos",
                description: "Talks and tutorials for building with AI.",
                resources: 2,
                sections: 1
            },
            {
                name: "Libraries",
                description: "Open-source libraries and applications for AI development.",
                resources: 16,
                sections: 1
            }
        ]
    }
};
function generateStaticParams() {
    return Object.keys(collections).map((slug)=>({
            slug
        }));
}
async function CollectionPage({ params }) {
    const { slug } = await params;
    const collection = collections[slug] ?? collections["cloud-native"];
    const totalResources = collection.totals.reduce((sum, count)=>sum + count, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "detail-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar detail-topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: "brand",
                        href: "/",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-mark",
                                children: "A"
                            }, void 0, false, {
                                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                lineNumber: 43,
                                columnNumber: 79
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "AWESOME .NET",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 134
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "TIPS & RESOURCES"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 140
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                lineNumber: 43,
                                columnNumber: 116
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                        lineNumber: 43,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: "COLLECTIONS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                lineNumber: 43,
                                columnNumber: 194
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "detail-current",
                                children: [
                                    "/ ",
                                    collection.name.toUpperCase()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                lineNumber: 43,
                                columnNumber: 227
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                        lineNumber: 43,
                        columnNumber: 189
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "github-pill",
                        href: "https://github.com/meysamhadeli/awesome-dotnet-tips",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "VIEW ON GITHUB ↗"
                    }, void 0, false, {
                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                        lineNumber: 43,
                        columnNumber: 306
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                lineNumber: 43,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "detail-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "COLLECTION"
                    }, void 0, false, {
                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                        lineNumber: 44,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: collection.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                        lineNumber: 44,
                        columnNumber: 81
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: collection.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                        lineNumber: 44,
                        columnNumber: 107
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail-stats",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: collection.topics.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 174
                                    }, this),
                                    " TOPICS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                lineNumber: 44,
                                columnNumber: 168
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: totalResources
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 227
                                    }, this),
                                    " RESOURCES"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                lineNumber: 44,
                                columnNumber: 221
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: collection.topics.reduce((sum, topic)=>sum + topic.sections, 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 273
                                    }, this),
                                    " SECTIONS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                lineNumber: 44,
                                columnNumber: 267
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                        lineNumber: 44,
                        columnNumber: 138
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                lineNumber: 44,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "topic-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "kicker",
                                        children: "TOPICS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 78
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Open a topic page"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 116
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                lineNumber: 45,
                                columnNumber: 73
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "count",
                                children: [
                                    collection.topics.length,
                                    " TOPICS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                lineNumber: 45,
                                columnNumber: 148
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "topic-grid",
                        children: collection.topics.map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                className: "topic-card",
                                href: `/topics/${topicSlug(topic.name)}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "topic-card-top",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pill",
                                                children: collection.name.toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                                lineNumber: 45,
                                                columnNumber: 398
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pill",
                                                children: [
                                                    topic.sections,
                                                    " SECTIONS"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                                lineNumber: 45,
                                                columnNumber: 459
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 366
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: topic.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 520
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: topic.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 541
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "topic-card-meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    topic.resources,
                                                    " resources"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                                lineNumber: 45,
                                                columnNumber: 600
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Open topic ↗"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                                lineNumber: 45,
                                                columnNumber: 640
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 567
                                    }, this)
                                ]
                            }, topic.name, true, {
                                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                                lineNumber: 45,
                                columnNumber: 278
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 218
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "← BACK TO COLLECTIONS"
                    }, void 0, false, {
                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://github.com/meysamhadeli/awesome-dotnet-tips",
                        children: "OPEN SOURCE ON GITHUB ↗"
                    }, void 0, false, {
                        fileName: "[project]/src/app/collections/[slug]/page.tsx",
                        lineNumber: 46,
                        columnNumber: 56
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/collections/[slug]/page.tsx",
                lineNumber: 46,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/collections/[slug]/page.tsx",
        lineNumber: 42,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/collections/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/collections/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1_z2ynz._.js.map