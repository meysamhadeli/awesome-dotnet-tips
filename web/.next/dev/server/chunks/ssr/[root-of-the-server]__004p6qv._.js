module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/topics/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopicPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
const kubernetesSections = [
    {
        label: "Resources",
        icon: "📘",
        tone: "blue",
        resources: [
            {
                title: "kubernetes/kubernetes",
                href: "https://github.com/kubernetes/kubernetes",
                description: "Production-Grade Container Scheduling and Management"
            },
            {
                title: "fhsinchy/kubernetes-handbook-projects",
                href: "https://github.com/fhsinchy/kubernetes-handbook-projects",
                description: "Project codes used in The Kubernetes Handbook"
            },
            {
                title: "ramitsurana/awesome-kubernetes",
                href: "https://github.com/ramitsurana/awesome-kubernetes",
                description: "A curated list for awesome Kubernetes sources"
            },
            {
                title: "tomhuang12/awesome-k8s-resources",
                href: "https://github.com/tomhuang12/awesome-k8s-resources",
                description: "A curated list of awesome Kubernetes tools and resources."
            },
            {
                title: "kelseyhightower/kubernetes-the-hard-way",
                href: "https://github.com/kelseyhightower/kubernetes-the-hard-way",
                description: "Bootstrap Kubernetes the hard way on Google Cloud Platform."
            }
        ]
    },
    {
        label: "Articles",
        icon: "📕",
        tone: "pink",
        resources: [
            {
                title: "Kubernetes By Example",
                href: "https://kubernetesbyexample.com/"
            },
            {
                title: "Kubernetes & Traefik 101 — When Simplicity Matters",
                href: "https://medium.com/@geraldcroes/kubernetes-traefik-101-when-simplicity-matters-957eeede2cf8"
            },
            {
                title: "Kubernetes on bare-metal in 10 minutes",
                href: "https://blog.alexellis.io/kubernetes-in-10-minutes/"
            },
            {
                title: "A Guide to the Kubernetes Networking Model",
                href: "https://sookocheff.com/post/kubernetes/understanding-kubernetes-networking-model/"
            },
            {
                title: "Building Stateful Services with Kubernetes",
                href: "https://sookocheff.com/post/kubernetes/building-stateful-services/"
            },
            {
                title: "Kubernetes: Host Multi-Container ASP.NET Core app to Multiple Pods",
                href: "https://www.yogihosting.com/aspnet-core-kubernetes-multi-pods/"
            },
            {
                title: "Managing ASP.NET Core app hosted on Kubernetes",
                href: "https://www.yogihosting.com/aspnet-core-kubernetes-manage/"
            },
            {
                title: "Deploy ASP.NET Core App on Kubernetes",
                href: "https://www.yogihosting.com/deploy-aspnet-core-app-kubernetes/"
            },
            {
                title: "How to use Kubernetes Ingress on an ASP.NET Core app",
                href: "https://www.yogihosting.com/kubernetes-ingress-aspnet-core/"
            },
            {
                title: "Kubernetes: Host Multi-Container ASP.NET Core app to Single Pod",
                href: "https://www.yogihosting.com/aspnet-core-kubernetes-multi-container-single-pod/"
            }
        ]
    },
    {
        label: "Videos",
        icon: "📺",
        tone: "cyan",
        resources: [
            {
                title: "Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours]",
                href: "https://www.youtube.com/watch?v=X48VuDVv0do"
            },
            {
                title: "Kubernetes Daemonsets explained | Tutorial | Kubernetes Guide",
                href: "https://www.youtube.com/watch?v=RGSeeN-o-kQ"
            },
            {
                title: "Kubernetes Essentials Playlist - IBM Cloud",
                href: "https://www.youtube.com/playlist?list=PLOspHqNVtKABAVX4azqPIu6UfsPzSu2YN"
            },
            {
                title: "Kubernetes 101 Playlist - Jeff Geerling",
                href: "https://www.youtube.com/playlist?list=PL2_OBreMn7FoYmfx27iSwocotjiikS5BD"
            },
            {
                title: "Kubernetes Crash Course for Absolute Beginners",
                href: "https://www.youtube.com/watch?v=s_o8dwzRlu4"
            },
            {
                title: "How to deploy .NET apps to Kubernetes",
                href: "https://www.youtube.com/watch?v=cNlxPKy_NPA"
            },
            {
                title: "Kubernetes Crash Course for Absolute Beginners [NEW]",
                href: "https://www.youtube.com/watch?v=s_o8dwzRlu4&list=WL&index=2"
            }
        ]
    },
    {
        label: "Libraries",
        icon: "📦",
        tone: "brown",
        resources: [
            {
                title: "kubernetes/autoscaler",
                href: "https://github.com/kubernetes/autoscaler",
                description: "Autoscaling components for Kubernetes"
            },
            {
                title: "kubernetes-sigs/kubebuilder",
                href: "https://github.com/kubernetes-sigs/kubebuilder",
                description: "SDK for building Kubernetes APIs using CRDs"
            },
            {
                title: "buehler/dotnet-operator-sdk",
                href: "https://github.com/buehler/dotnet-operator-sdk",
                description: "KubeOps is a Kubernetes operator SDK in .NET."
            },
            {
                title: "derailed/k9s",
                href: "https://github.com/derailed/k9s",
                description: "Kubernetes CLI to manage your clusters in style"
            }
        ]
    },
    {
        label: "Samples",
        icon: "🚀",
        tone: "green",
        resources: [
            {
                title: "arashkaffamanesh/practical-kubernetes-problems",
                href: "https://github.com/arashkaffamanesh/practical-kubernetes-problems",
                description: "Practical Kubernetes training problems"
            },
            {
                title: "ContainerSolutions/kubernetes-examples",
                href: "https://github.com/ContainerSolutions/kubernetes-examples",
                description: "Minimal self-contained examples of Kubernetes features and patterns in YAML"
            },
            {
                title: "ContainerSolutions/k8s-deployment-strategies",
                href: "https://github.com/ContainerSolutions/k8s-deployment-strategies",
                description: "Kubernetes deployment strategies explained"
            }
        ]
    },
    {
        label: "Books",
        icon: "📚",
        tone: "yellow",
        resources: [
            {
                title: "Kubernetes Patterns: Reusable Elements for Designing Cloud-Native Applications",
                href: "https://www.amazon.com/Kubernetes-Patterns-Designing-Cloud-Native-Applications/dp/1492050288"
            },
            {
                title: "Kubernetes Best Practices: Blueprints for Building Successful Applications on Kubernetes",
                href: "https://www.amazon.com/Kubernetes-Best-Practices-Blueprints-Applications/dp/1492056472/"
            }
        ]
    }
];
function generateStaticParams() {
    return [
        {
            slug: "kubernetes"
        }
    ];
}
async function TopicPage({ params }) {
    const { slug } = await params;
    const isKubernetes = slug === "kubernetes";
    const sections = isKubernetes ? kubernetesSections : [];
    const total = sections.reduce((sum, section)=>sum + section.resources.length, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "topic-detail-shell",
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
                                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                lineNumber: 60,
                                columnNumber: 79
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "AWESOME .NET",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 134
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "TIPS & RESOURCES"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 140
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                lineNumber: 60,
                                columnNumber: 116
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                        lineNumber: 60,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: "EXPLORE"
                            }, void 0, false, {
                                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                lineNumber: 60,
                                columnNumber: 194
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "detail-current",
                                children: [
                                    "/ CLOUD NATIVE / ",
                                    slug.toUpperCase()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                lineNumber: 60,
                                columnNumber: 223
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                        lineNumber: 60,
                        columnNumber: 189
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "github-pill",
                        href: "https://github.com/meysamhadeli/awesome-dotnet-tips",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "VIEW ON GITHUB ↗"
                    }, void 0, false, {
                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                        lineNumber: 60,
                        columnNumber: 306
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                lineNumber: 60,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "topic-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "CLOUD NATIVE"
                    }, void 0, false, {
                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                        lineNumber: 61,
                        columnNumber: 37
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: isKubernetes ? "Kubernetes" : slug
                    }, void 0, false, {
                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                        lineNumber: 61,
                        columnNumber: 82
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Explore curated resources about ",
                            isKubernetes ? "Kubernetes" : slug,
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                        lineNumber: 61,
                        columnNumber: 127
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail-stats",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: total
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 239
                                    }, this),
                                    " CURATED RESOURCES"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                lineNumber: 61,
                                columnNumber: 233
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: sections.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 284
                                    }, this),
                                    " SECTION CARDS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                lineNumber: 61,
                                columnNumber: 278
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                        lineNumber: 61,
                        columnNumber: 203
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "topic-navigation",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "kicker",
                                        children: "NAVIGATE THIS TOPIC"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 81
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Sections"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 132
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                lineNumber: 62,
                                columnNumber: 76
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "count",
                                children: [
                                    sections.length,
                                    " SECTIONS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                lineNumber: 62,
                                columnNumber: 155
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                        lineNumber: 62,
                        columnNumber: 43
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-nav-grid",
                        children: sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `#${section.label.toLowerCase()}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `section-nav-icon ${section.tone}`,
                                        children: section.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 341
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: section.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 415
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: [
                                            section.resources.length,
                                            " links"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 447
                                    }, this)
                                ]
                            }, section.label, true, {
                                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                lineNumber: 62,
                                columnNumber: 277
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                        lineNumber: 62,
                        columnNumber: 218
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "topic-resources",
                children: sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "resource-section",
                        id: section.label.toLowerCase(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "kicker",
                                                children: "CURRENT SECTION"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 192
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: section.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 239
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 187
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "count",
                                        children: [
                                            section.resources.length,
                                            " SHOWN"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 269
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                lineNumber: 63,
                                columnNumber: 154
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "resource-list",
                                children: section.resources.map((resource)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: `resource-item ${section.tone}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "resource-item-top",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "resource-kind",
                                                        children: [
                                                            section.icon,
                                                            " ",
                                                            section.label.slice(0, -1).toUpperCase()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 513
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        className: "source-pill",
                                                        href: resource.href,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: "OPEN ↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 609
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 478
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: resource.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 706
                                            }, this),
                                            resource.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: resource.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 756
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "resource-item-footer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: new URL(resource.href).hostname.replace("www.", "")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 824
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: resource.href,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: "OPEN RESOURCE ↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 890
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 786
                                            }, this)
                                        ]
                                    }, resource.title, true, {
                                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 404
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                                lineNumber: 63,
                                columnNumber: 338
                            }, this)
                        ]
                    }, section.label, true, {
                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                        lineNumber: 63,
                        columnNumber: 67
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                lineNumber: 63,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/collections/cloud-native",
                        children: "← BACK TO CLOUD NATIVE"
                    }, void 0, false, {
                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "BACK TO COLLECTIONS"
                    }, void 0, false, {
                        fileName: "[project]/src/app/topics/[slug]/page.tsx",
                        lineNumber: 64,
                        columnNumber: 81
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/topics/[slug]/page.tsx",
                lineNumber: 64,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/topics/[slug]/page.tsx",
        lineNumber: 59,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/topics/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/topics/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__004p6qv._.js.map