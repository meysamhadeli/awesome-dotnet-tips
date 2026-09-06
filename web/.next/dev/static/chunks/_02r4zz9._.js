(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
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
const resources = [
    {
        name: "Vertical Slice Architecture",
        description: "Organize .NET features around business capabilities instead of technical layers.",
        group: "Architecture",
        type: "Guide",
        href: doc("docs/architectural-styles/vertical-slice-architecture.md"),
        color: "lavender"
    },
    {
        name: "ASP.NET Core",
        description: "Build fast, secure, cross-platform web apps and APIs with the modern .NET stack.",
        group: ".NET",
        type: "Library",
        href: "https://github.com/dotnet/aspnetcore",
        color: "blue"
    },
    {
        name: "Domain-Driven Design",
        description: "Shape software around the language, boundaries, and behaviors of your domain.",
        group: "Architecture",
        type: "Guide",
        href: doc("docs/domain-driven-design/domain-driven-design.md"),
        color: "peach"
    },
    {
        name: "Kubernetes",
        description: "Run resilient, observable workloads across clusters with practical cloud-native patterns.",
        group: "Cloud Native",
        type: "Tool",
        href: doc("docs/cloud-native/kubernetes/kubernetes.md"),
        color: "mint"
    },
    {
        name: "Observability",
        description: "Make distributed systems understandable with logs, metrics, traces, and health checks.",
        group: "Microservices",
        type: "Article",
        href: doc("docs/microservices/observability/observability.md"),
        color: "pink"
    },
    {
        name: "Entity Framework Core",
        description: "Practical persistence patterns for modeling, querying, and evolving relational data.",
        group: ".NET",
        type: "Library",
        href: doc("docs/dotnet/ef-core/ef-core.md"),
        color: "yellow"
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
        itemLabel: "SECTIONS",
        color: "pink"
    }
];
function Home() {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeGroup, setActiveGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const normalizedQuery = query.trim().toLowerCase();
    const visibleCollections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[visibleCollections]": ()=>collectionCards.filter({
                "Home.useMemo[visibleCollections]": (collection)=>(activeGroup === "All" || collection.name === activeGroup) && `${collection.name} ${collection.description} ${collection.topics.join(" ")}`.toLowerCase().includes(normalizedQuery)
            }["Home.useMemo[visibleCollections]"])
    }["Home.useMemo[visibleCollections]"], [
        activeGroup,
        normalizedQuery
    ]);
    const groups = [
        "All",
        ...collectionCards.map((collection)=>collection.name)
    ];
    const topicCount = collectionCards.reduce((total, collection)=>total + collection.topics.length, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "site-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "brand",
                        href: "#top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-mark",
                                children: "A"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 90,
                                columnNumber: 65
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "AWESOME .NET",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 120
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "TIPS & RESOURCES"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 126
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 90,
                                columnNumber: 102
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 90,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "nav-active",
                                href: "#contents",
                                children: "COLLECTIONS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 90,
                                columnNumber: 177
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#resources",
                                children: "TOPICS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 90,
                                columnNumber: 235
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/meysamhadeli/awesome-dotnet-tips",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "VIEW ON GITHUB ↗"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 90,
                                columnNumber: 266
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 90,
                        columnNumber: 172
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "status-dot",
                        "aria-label": "Open source collection"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 90,
                        columnNumber: 387
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 90,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "intro",
                id: "top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "A CURATED LEARNING INDEX / 2026 EDITION"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 91,
                        columnNumber: 41
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: [
                            "Build better",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 91,
                                columnNumber: 129
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: "with .NET."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 91,
                                columnNumber: 135
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 91,
                        columnNumber: 113
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "One organized map for the articles, videos, libraries, samples, and ideas behind modern .NET engineering."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 91,
                        columnNumber: 157
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "intro-stats",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: contents.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 304
                                    }, this),
                                    " collections"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 91,
                                columnNumber: 298
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: topicCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 353
                                    }, this),
                                    " topics"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 91,
                                columnNumber: 347
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: resources.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 392
                                    }, this),
                                    " featured resources"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 91,
                                columnNumber: 386
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 91,
                        columnNumber: 269
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 91,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "finder",
                "aria-label": "Find collections",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "search",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "⌕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 92,
                                columnNumber: 89
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: query,
                                onChange: (event)=>setQuery(event.target.value),
                                placeholder: "Search collections, topics, sections, names, source..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 92,
                                columnNumber: 103
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 92,
                        columnNumber: 63
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filters",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "COLLECTION"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 92,
                                columnNumber: 277
                            }, this),
                            groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: activeGroup === group ? "active" : "",
                                    onClick: ()=>setActiveGroup(group),
                                    children: group
                                }, group, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 325
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 92,
                        columnNumber: 252
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filters type-filters",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "RESOURCE TYPE"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 92,
                                columnNumber: 495
                            }, this),
                            [
                                "All types",
                                "Articles",
                                "Videos",
                                "Libraries",
                                "Samples",
                                "Resources",
                                "Books"
                            ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    children: type
                                }, type, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 620
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 92,
                        columnNumber: 457
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "finder-meta",
                        children: [
                            "Showing ",
                            visibleCollections.length,
                            " of ",
                            collectionCards.length,
                            " collections ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Sort by ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Relevance⌄"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 781
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 92,
                                columnNumber: 767
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 92,
                        columnNumber: 662
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 92,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "map",
                id: "contents",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "kicker",
                                        children: "COLLECTIONS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 82
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Choose collection"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 125
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 93,
                                columnNumber: 77
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "count",
                                children: [
                                    visibleCollections.length,
                                    " SHOWN"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 93,
                                columnNumber: 157
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 93,
                        columnNumber: 44
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "collection-grid",
                        children: visibleCollections.map((collection, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: `collection-card ${collection.color}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "collection-card-top",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "collection-icon",
                                                children: String(index + 1).padStart(2, "0")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 425
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pill",
                                                children: "COLLECTION"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 502
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pill",
                                                children: [
                                                    collection.topics.length,
                                                    " ",
                                                    collection.itemLabel
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 542
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 388
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: collection.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 627
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: collection.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 653
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        lineNumber: 93,
                                        columnNumber: 684
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "topic-tags",
                                        children: collection.topics.map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: topic
                                            }, topic, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 907
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 847
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "resource-counts",
                                        children: collection.resourceSections ? collection.resourceSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        className: `type-icon ${section.tone}`,
                                                        children: section.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 1080
                                                    }, this),
                                                    " ",
                                                    section.label,
                                                    " ",
                                                    section.count
                                                ]
                                            }, section.label, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 1054
                                            }, this)) : collection.counts.map((count)=>{
                                            const [typeName, number] = count.split(" ");
                                            const type = resourceTypeLabels[typeName] ?? resourceTypeLabels.Resource;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        className: `type-icon ${type.tone}`,
                                                        children: type.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 1361
                                                    }, this),
                                                    " ",
                                                    type.label,
                                                    " ",
                                                    number
                                                ]
                                            }, count, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 1343
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 947
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "root-footer",
                                        href: collection.href,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [
                                            "OPEN COLLECTION ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 1555
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 1456
                                    }, this)
                                ]
                            }, collection.name, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 93,
                                columnNumber: 307
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 93,
                        columnNumber: 227
                    }, this),
                    visibleCollections.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "empty-state",
                        children: [
                            "No collections match “",
                            query,
                            "”. Try a broader topic or clear search."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 93,
                        columnNumber: 1621
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 93,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "AWESOME .NET TIPS"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://github.com/meysamhadeli/awesome-dotnet-tips",
                        children: "OPEN SOURCE ON GITHUB ↗"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 94,
                        columnNumber: 43
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 94,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 89,
        columnNumber: 10
    }, this);
}
_s(Home, "2gY6c+h4LgxIQ6jwPd6QhdCmjmU=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_02r4zz9._.js.map