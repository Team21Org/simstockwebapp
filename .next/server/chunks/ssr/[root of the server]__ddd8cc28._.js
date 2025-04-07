module.exports = {

"[externals]/@prisma/client [external] (@prisma/client, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}}),
"[externals]/@prisma/client/scripts/default-index.js [external] (@prisma/client/scripts/default-index.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@prisma/client/scripts/default-index.js", () => require("@prisma/client/scripts/default-index.js"));

module.exports = mod;
}}),
"[externals]/node:https [external] (node:https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:https", () => require("node:https"));

module.exports = mod;
}}),
"[project]/app/lib/prisma.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$extension$2d$accelerat_689191d017558f044f7bd9fdbf0e2c6f$2f$node_modules$2f40$prisma$2f$extension$2d$accelerate$2f$dist$2f$esm$2f$entry$2e$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+extension-accelerat_689191d017558f044f7bd9fdbf0e2c6f/node_modules/@prisma/extension-accelerate/dist/esm/entry.node.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$extension$2d$accelerat_689191d017558f044f7bd9fdbf0e2c6f$2f$node_modules$2f40$prisma$2f$extension$2d$accelerate$2f$dist$2f$esm$2f$entry$2e$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+extension-accelerat_689191d017558f044f7bd9fdbf0e2c6f/node_modules/@prisma/extension-accelerate/dist/esm/entry.node.js [app-ssr] (ecmascript) <locals>");
;
;
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]().$extends((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$extension$2d$accelerat_689191d017558f044f7bd9fdbf0e2c6f$2f$node_modules$2f40$prisma$2f$extension$2d$accelerate$2f$dist$2f$esm$2f$entry$2e$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withAccelerate"])());
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
const __TURBOPACK__default__export__ = prisma;
}}),
"[project]/app/signup/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SignUp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$2_16ce3abb760b473ba98db4731cd0a223$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.2_16ce3abb760b473ba98db4731cd0a223/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/app/signup/page.js
//This is the user registration portal
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$prisma$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/prisma.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$2_16ce3abb760b473ba98db4731cd0a223$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.2_16ce3abb760b473ba98db4731cd0a223/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
"use client";
;
;
;
async function SignUp() {
    const users = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$prisma$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].user.findMany();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$2_16ce3abb760b473ba98db4731cd0a223$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$2_16ce3abb760b473ba98db4731cd0a223$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$2_16ce3abb760b473ba98db4731cd0a223$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$2_16ce3abb760b473ba98db4731cd0a223$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$2_16ce3abb760b473ba98db4731cd0a223$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        charSet: "utf-8"
                    }, void 0, false, {
                        fileName: "[project]/app/signup/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$2_16ce3abb760b473ba98db4731cd0a223$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, void 0, false, {
                        fileName: "[project]/app/signup/page.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$2_16ce3abb760b473ba98db4731cd0a223$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "ie=edge"
                    }, void 0, false, {
                        fileName: "[project]/app/signup/page.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$2_16ce3abb760b473ba98db4731cd0a223$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Stock Sim | Sign-Up"
                    }, void 0, false, {
                        fileName: "[project]/app/signup/page.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/signup/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$2_16ce3abb760b473ba98db4731cd0a223$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$2_16ce3abb760b473ba98db4731cd0a223$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold mb-4",
                        children: "Sign Up Now!"
                    }, void 0, false, {
                        fileName: "[project]/app/signup/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$2_16ce3abb760b473ba98db4731cd0a223$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "list-decimal list-inside font-[family-name:var(--font-geist-sans)]",
                        children: users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_$40$babel$2b$core$40$7$2e$2_16ce3abb760b473ba98db4731cd0a223$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "mb-2",
                                children: [
                                    user.email,
                                    " - ",
                                    user.fullName,
                                    " - ",
                                    user.userName
                                ]
                            }, user.id, true, {
                                fileName: "[project]/app/signup/page.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/signup/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/signup/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.2_16ce3abb760b473ba98db4731cd0a223/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.2_16ce3abb760b473ba98db4731cd0a223/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/.pnpm/@prisma+extension-accelerat_689191d017558f044f7bd9fdbf0e2c6f/node_modules/@prisma/extension-accelerate/dist/esm/semver.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Compares two SemVer strings.
 * @returns positive if b > a, negative if b < a, and 0 if versions are equal
 */ __turbopack_context__.s({
    "compareSemVer": (()=>compareSemVer)
});
function compareSemVer(a, b) {
    const [major1 = 0, minor1 = 0, patch1 = 0] = a.split(".").map(Number);
    const [major2 = 0, minor2 = 0, patch2 = 0] = b.split(".").map(Number);
    const major = major2 - major1;
    const minor = minor2 - minor1;
    const patch = patch2 - patch1;
    return major || minor || patch;
}
}}),
"[project]/node_modules/.pnpm/@prisma+extension-accelerat_689191d017558f044f7bd9fdbf0e2c6f/node_modules/@prisma/extension-accelerate/dist/esm/user-agent.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getUserAgent": (()=>getUserAgent)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js__$5b$external$5d$__$2840$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client/scripts/default-index.js [external] (@prisma/client/scripts/default-index.js, cjs)");
;
function getUserAgent() {
    const prismaVersion = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js__$5b$external$5d$__$2840$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js$2c$__cjs$29$__["default"].Prisma.prismaVersion;
    const parts = [
        getRuntimeSegment(),
        `PrismaEngine/${prismaVersion.engine}`,
        `PrismaClient/${prismaVersion.client}`
    ];
    return parts.join(" ");
}
/**
 * Generates a User-Agent segment for the JavaScript runtime environment.
 */ function getRuntimeSegment() {
    if (typeof navigator !== "undefined") {
        // Deno, Bun, Cloudflare Workers, general WinterCG compat
        return navigator.userAgent;
    } else if (typeof process !== "undefined" && typeof process.versions !== "undefined") {
        return `Node/${process.versions.node} (${process.platform}; ${process.arch})`;
    } else if ("EdgeRuntime" in globalThis) {
        return `Vercel-Edge-Runtime`;
    } else {
        return `UnknownRuntime`;
    }
}
}}),
"[project]/node_modules/.pnpm/@prisma+extension-accelerat_689191d017558f044f7bd9fdbf0e2c6f/node_modules/@prisma/extension-accelerate/dist/esm/extension.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-non-null-assertion */ /// <reference lib="dom" />
// importing default is needed for ESM compatibility
// default-index is a CJS file, so named exports are not resolved
// the types create a separate resolution issue, so they are still imported by name
__turbopack_context__.s({
    "FETCH_FAILURE_MESSAGE": (()=>FETCH_FAILURE_MESSAGE),
    "makeAccelerateExtension": (()=>makeAccelerateExtension)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js__$5b$external$5d$__$2840$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client/scripts/default-index.js [external] (@prisma/client/scripts/default-index.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$extension$2d$accelerat_689191d017558f044f7bd9fdbf0e2c6f$2f$node_modules$2f40$prisma$2f$extension$2d$accelerate$2f$dist$2f$esm$2f$semver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+extension-accelerat_689191d017558f044f7bd9fdbf0e2c6f/node_modules/@prisma/extension-accelerate/dist/esm/semver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$extension$2d$accelerat_689191d017558f044f7bd9fdbf0e2c6f$2f$node_modules$2f40$prisma$2f$extension$2d$accelerate$2f$dist$2f$esm$2f$user$2d$agent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+extension-accelerat_689191d017558f044f7bd9fdbf0e2c6f/node_modules/@prisma/extension-accelerate/dist/esm/user-agent.js [app-ssr] (ecmascript)");
;
;
;
const EXTENSION_NAME = "@prisma/extension-accelerate";
const FETCH_FAILURE_MESSAGE = "Unable to connect to the Accelerate API. This may be due to a network or DNS issue. Please check your connection and the Accelerate connection string. For details, visit https://www.prisma.io/docs/accelerate/troubleshoot.";
function makeWithCacheHeaders(fetcher) {
    const userAgent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$extension$2d$accelerat_689191d017558f044f7bd9fdbf0e2c6f$2f$node_modules$2f40$prisma$2f$extension$2d$accelerate$2f$dist$2f$esm$2f$user$2d$agent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserAgent"])();
    let machineHint = undefined;
    return async (params)=>{
        const { args } = params;
        const { cacheStrategy, __accelerateInfo = false, ...rest } = args;
        let info = null;
        const { __internalParams, query } = params;
        __internalParams.customDataProxyFetch = ()=>{
            return async (url, options)=>{
                const cacheControl = new Array();
                if (typeof cacheStrategy?.ttl === "number") {
                    cacheControl.push(`max-age=${cacheStrategy.ttl}`);
                }
                if (typeof cacheStrategy?.swr === "number") {
                    cacheControl.push(`stale-while-revalidate=${cacheStrategy.swr}`);
                }
                const cacheTags = cacheStrategy?.tags?.join(",") ?? "";
                options.headers = {
                    ...options.headers,
                    "cache-control": cacheControl.length > 0 ? cacheControl.join(",") : `no-cache`,
                    "user-agent": userAgent,
                    ...cacheTags.length > 0 ? {
                        "accelerate-cache-tags": cacheTags
                    } : {}
                };
                if (machineHint) {
                    options.headers["accelerate-query-engine-jwt"] = machineHint;
                }
                try {
                    const response = await fetcher(url, options);
                    info = {
                        cacheStatus: response.headers.get("accelerate-cache-status"),
                        lastModified: new Date(response.headers.get("last-modified") ?? ""),
                        region: response.headers.get("cf-ray")?.split("-")[1] ?? "unspecified",
                        requestId: response.headers.get("cf-ray") ?? "unspecified",
                        signature: response.headers.get("accelerate-signature") ?? "unspecified"
                    };
                    machineHint = response.headers.get("accelerate-query-engine-jwt") ?? undefined;
                    return response;
                } catch (e) {
                    throw new Error(FETCH_FAILURE_MESSAGE);
                }
            };
        };
        if (__accelerateInfo) {
            const data = await query(rest, __internalParams);
            return {
                data,
                info
            };
        } else {
            return query(rest, __internalParams);
        }
    };
}
function makeAccelerateExtension(fetcher) {
    // ctx.$parent was added in 5.1.0 to support iTx in extensions
    const enableCtxParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$extension$2d$accelerat_689191d017558f044f7bd9fdbf0e2c6f$2f$node_modules$2f40$prisma$2f$extension$2d$accelerate$2f$dist$2f$esm$2f$semver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareSemVer"])("5.1.0", __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js__$5b$external$5d$__$2840$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js$2c$__cjs$29$__["default"].Prisma.prismaVersion.client) >= 0;
    return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js__$5b$external$5d$__$2840$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js$2c$__cjs$29$__["default"].Prisma.defineExtension((client)=>{
        const withCacheHeaders = makeWithCacheHeaders(fetcher);
        // api key is extracted from config during engine start
        const apiKeyPromise = client._engine.start().then(()=>client._engine.apiKey?.());
        async function invalidate(input) {
            const apiKey = await apiKeyPromise;
            if (!apiKey) {
                return {
                    requestId: "unspecified"
                };
            }
            let response;
            try {
                response = await fetcher(`https://accelerate.prisma-data.net/invalidate`, {
                    method: "POST",
                    headers: {
                        authorization: `Bearer ${apiKey}`,
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(input)
                });
            } catch (e) {
                throw new Error(FETCH_FAILURE_MESSAGE);
            }
            if (!response?.ok) {
                const body = await response.text();
                throw new Error(`Failed to invalidate Accelerate cache. Response was ${response.status} ${response.statusText}. ${body}`);
            }
            // discard the response body to avoid memory leaks on some runtimes
            void response.body?.cancel();
            return {
                requestId: response.headers.get("cf-ray") ?? "unspecified"
            };
        }
        const xclient = client.$extends({
            name: EXTENSION_NAME,
            query: {
                $allModels: {
                    // also apply withCacheHeaders to mutations for machine hint benefit
                    $allOperations: withCacheHeaders
                }
            }
        });
        return xclient.$extends({
            name: EXTENSION_NAME,
            client: {
                $accelerate: {
                    /**
                     * Initiates an invalidation request for the specified cache tag values.
                     *
                     * A tag may only contain alphanumeric characters and underscores.
                     * Each tag may contain a maximum of 64 characters.
                     * A maximum of 5 tags may be invalidated per call.
                     */ invalidate: (input)=>invalidate(input),
                    /**
                     * Initiates an invalidation request of all cache entries for this
                     * environment.
                     */ invalidateAll: ()=>invalidate({
                            tags: "all"
                        })
                }
            },
            model: {
                $allModels: {
                    // TODO: these functions are repetitive. Is there a type we can use to generic this?
                    // TODO: can we define these in a map that ensures query and model overrides stay in sync/
                    aggregate (args) {
                        const ctx = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js__$5b$external$5d$__$2840$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js$2c$__cjs$29$__["default"].Prisma.getExtensionContext(this);
                        const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
                        const prismaPromise = model.aggregate(args);
                        return Object.assign(prismaPromise, {
                            withAccelerateInfo () {
                                return model.aggregate({
                                    ...args,
                                    __accelerateInfo: true
                                });
                            }
                        });
                    },
                    count (args) {
                        const ctx = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js__$5b$external$5d$__$2840$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js$2c$__cjs$29$__["default"].Prisma.getExtensionContext(this);
                        const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
                        const prismaPromise = model.count(args);
                        return Object.assign(prismaPromise, {
                            withAccelerateInfo () {
                                return model.count({
                                    ...args,
                                    __accelerateInfo: true
                                });
                            }
                        });
                    },
                    findFirst (args) {
                        const ctx = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js__$5b$external$5d$__$2840$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js$2c$__cjs$29$__["default"].Prisma.getExtensionContext(this);
                        const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
                        const prismaPromise = model.findFirst(args);
                        return Object.assign(prismaPromise, {
                            withAccelerateInfo () {
                                return model.findFirst({
                                    ...args,
                                    __accelerateInfo: true
                                });
                            }
                        });
                    },
                    findFirstOrThrow (args) {
                        const ctx = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js__$5b$external$5d$__$2840$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js$2c$__cjs$29$__["default"].Prisma.getExtensionContext(this);
                        const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
                        const prismaPromise = model.findFirstOrThrow(args);
                        return Object.assign(prismaPromise, {
                            withAccelerateInfo () {
                                return model.findFirstOrThrow({
                                    ...args,
                                    __accelerateInfo: true
                                });
                            }
                        });
                    },
                    findMany (args) {
                        const ctx = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js__$5b$external$5d$__$2840$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js$2c$__cjs$29$__["default"].Prisma.getExtensionContext(this);
                        const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
                        const prismaPromise = model.findMany(args);
                        return Object.assign(prismaPromise, {
                            withAccelerateInfo () {
                                return model.findMany({
                                    ...args,
                                    __accelerateInfo: true
                                });
                            }
                        });
                    },
                    findUnique (args) {
                        const ctx = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js__$5b$external$5d$__$2840$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js$2c$__cjs$29$__["default"].Prisma.getExtensionContext(this);
                        const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
                        const prismaPromise = model.findUnique(args);
                        return Object.assign(prismaPromise, {
                            withAccelerateInfo () {
                                return model.findUnique({
                                    ...args,
                                    __accelerateInfo: true
                                });
                            }
                        });
                    },
                    findUniqueOrThrow (args) {
                        const ctx = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js__$5b$external$5d$__$2840$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js$2c$__cjs$29$__["default"].Prisma.getExtensionContext(this);
                        const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
                        const prismaPromise = model.findUniqueOrThrow(args);
                        return Object.assign(prismaPromise, {
                            withAccelerateInfo () {
                                return model.findUniqueOrThrow({
                                    ...args,
                                    __accelerateInfo: true
                                });
                            }
                        });
                    },
                    groupBy (args) {
                        const ctx = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js__$5b$external$5d$__$2840$prisma$2f$client$2f$scripts$2f$default$2d$index$2e$js$2c$__cjs$29$__["default"].Prisma.getExtensionContext(this);
                        const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
                        const prismaPromise = model.groupBy(args);
                        return Object.assign(prismaPromise, {
                            withAccelerateInfo () {
                                return model.groupBy({
                                    ...args,
                                    __accelerateInfo: true
                                });
                            }
                        });
                    }
                }
            }
        });
    });
}
}}),
"[project]/node_modules/.pnpm/@prisma+extension-accelerat_689191d017558f044f7bd9fdbf0e2c6f/node_modules/@prisma/extension-accelerate/dist/esm/node-fetch.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetch": (()=>fetch)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$https__$5b$external$5d$__$28$node$3a$https$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:https [external] (node:https, cjs)");
;
async function fetch(url, options = {}) {
    const httpsOptions = buildOptions(options);
    const incomingData = new Array();
    const { origin } = new URL(url);
    return new Promise((resolve, reject)=>{
        // we execute the https request and build a fetch response out of it
        const request = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$https__$5b$external$5d$__$28$node$3a$https$2c$__cjs$29$__["default"].request(url, httpsOptions, (response)=>{
            const { statusCode = 200, headers: { location } } = response;
            if (statusCode >= 301 && statusCode <= 399 && location) {
                if (location.startsWith("http") === false) {
                    resolve(fetch(`${origin}${location}`, options));
                } else {
                    resolve(fetch(location, options));
                }
            }
            response.on("data", (chunk)=>incomingData.push(chunk));
            response.on("end", ()=>resolve(buildResponse(incomingData, response)));
            response.on("error", reject);
        });
        request.on("error", reject);
        request.end(options.body ?? "");
    });
}
/**
 * Build http headers from fetch-like headers
 * @param options
 * @returns
 */ function buildHeaders(options) {
    return {
        ...options.headers,
        "Content-Type": "application/json"
    };
}
/**
 * Build http options from fetch-like options
 * @param options
 * @returns
 */ function buildOptions(options) {
    return {
        method: options.method,
        headers: buildHeaders(options)
    };
}
/**
 * Build a fetch-like response from an http response
 * @param incomingData
 * @param response
 * @returns
 */ function buildResponse(incomingData, response) {
    const { statusCode = 200, url, headers } = response;
    return {
        body: {
            cancel () {
                return Promise.resolve();
            }
        },
        text: ()=>Promise.resolve(Buffer.concat(incomingData).toString()),
        json: ()=>Promise.resolve(JSON.parse(Buffer.concat(incomingData).toString())),
        ok: statusCode >= 200 && statusCode <= 299,
        status: statusCode,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        url: url,
        headers: new NodeHeaders(headers)
    };
}
class NodeHeaders {
    #headers = new Map();
    constructor(init = {}){
        for (const [key, value] of Object.entries(init)){
            if (typeof value === "string") {
                this.#headers.set(key, value);
            } else if (Array.isArray(value)) {
                for (const val of value){
                    this.#headers.set(key, val);
                }
            }
        }
    }
    append(name, value) {
        this.#headers.set(name, value);
    }
    delete(name) {
        this.#headers.delete(name);
    }
    get(name) {
        return this.#headers.get(name) ?? null;
    }
    getSetCookie() {
        throw new Error("Method not implemented.");
    }
    has(name) {
        return this.#headers.has(name);
    }
    set(name, value) {
        this.#headers.set(name, value);
    }
    forEach(callbackfn, thisArg) {
        for (const [key, value] of this.#headers){
            callbackfn.call(thisArg, value, key, this);
        }
    }
}
}}),
"[project]/node_modules/.pnpm/@prisma+extension-accelerat_689191d017558f044f7bd9fdbf0e2c6f/node_modules/@prisma/extension-accelerate/dist/esm/entry.node.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "withAccelerate": (()=>withAccelerate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$extension$2d$accelerat_689191d017558f044f7bd9fdbf0e2c6f$2f$node_modules$2f40$prisma$2f$extension$2d$accelerate$2f$dist$2f$esm$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+extension-accelerat_689191d017558f044f7bd9fdbf0e2c6f/node_modules/@prisma/extension-accelerate/dist/esm/extension.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$extension$2d$accelerat_689191d017558f044f7bd9fdbf0e2c6f$2f$node_modules$2f40$prisma$2f$extension$2d$accelerate$2f$dist$2f$esm$2f$node$2d$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+extension-accelerat_689191d017558f044f7bd9fdbf0e2c6f/node_modules/@prisma/extension-accelerate/dist/esm/node-fetch.js [app-ssr] (ecmascript)");
;
;
;
function withAccelerate() {
    const fetch = "fetch" in globalThis ? globalThis.fetch : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$extension$2d$accelerat_689191d017558f044f7bd9fdbf0e2c6f$2f$node_modules$2f40$prisma$2f$extension$2d$accelerate$2f$dist$2f$esm$2f$node$2d$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetch"];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$extension$2d$accelerat_689191d017558f044f7bd9fdbf0e2c6f$2f$node_modules$2f40$prisma$2f$extension$2d$accelerate$2f$dist$2f$esm$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeAccelerateExtension"])(fetch);
}
}}),
"[project]/node_modules/.pnpm/@prisma+extension-accelerat_689191d017558f044f7bd9fdbf0e2c6f/node_modules/@prisma/extension-accelerate/dist/esm/entry.node.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$extension$2d$accelerat_689191d017558f044f7bd9fdbf0e2c6f$2f$node_modules$2f40$prisma$2f$extension$2d$accelerate$2f$dist$2f$esm$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+extension-accelerat_689191d017558f044f7bd9fdbf0e2c6f/node_modules/@prisma/extension-accelerate/dist/esm/extension.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$extension$2d$accelerat_689191d017558f044f7bd9fdbf0e2c6f$2f$node_modules$2f40$prisma$2f$extension$2d$accelerate$2f$dist$2f$esm$2f$node$2d$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+extension-accelerat_689191d017558f044f7bd9fdbf0e2c6f/node_modules/@prisma/extension-accelerate/dist/esm/node-fetch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$extension$2d$accelerat_689191d017558f044f7bd9fdbf0e2c6f$2f$node_modules$2f40$prisma$2f$extension$2d$accelerate$2f$dist$2f$esm$2f$entry$2e$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+extension-accelerat_689191d017558f044f7bd9fdbf0e2c6f/node_modules/@prisma/extension-accelerate/dist/esm/entry.node.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/next@15.2.4_@babel+core@7.2_16ce3abb760b473ba98db4731cd0a223/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NoopHead;
    }
});
function NoopHead() {
    return null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=noop-head.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__ddd8cc28._.js.map