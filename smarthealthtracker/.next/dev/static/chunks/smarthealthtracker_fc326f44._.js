(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/smarthealthtracker/app/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
});
}),
"[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/smarthealthtracker/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/@mui/joy/CircularProgress/CircularProgress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/react-icons/ai/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const HomeBanner1 = ()=>{
    _s();
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const getData = async ()=>{
        // let temp = [
        //   {
        //     "name": "Calories Intake",
        //     "value": 2000,
        //     "unit": "kcal",
        //     "goal": 2500,
        //     "goalUnit": "kcal"
        //   },
        //   {
        //     "name": "Sleep",
        //     "value": 8,
        //     "unit": "hrs",
        //     "goal": 8,
        //     "goalUnit": "hrs"
        //   },
        //   {
        //     "name": "Steps",
        //     "value": 50,
        //     "unit": "steps",
        //     "goal": 10000,
        //     "goalUnit": "steps"
        //   },
        //   {
        //     "name": "Water",
        //     "value": 2000,
        //     "unit": "ml",
        //     "goal": 3000,
        //     "goalUnit": "ml"
        //   },
        //   {
        //     "name": "Weight",
        //     "value": 75,
        //     "unit": "kg",
        //     "goal": 70,
        //     "goalUnit": "kg"
        //   },
        //   {
        //     "name": "Workout",
        //     "value": 2,
        //     "unit": "days",
        //     "goal": 6,
        //     "goalUnit": "days"
        //   }
        // ]
        // setData(temp)
        // console.log(temp)
        fetch(("TURBOPACK compile-time value", "http://localhost:8000") + '/report/getreport', {
            method: 'GET',
            credentials: 'include'
        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
            if (data.ok) {
                setData(data.data);
            } else {
                setData([]);
            }
        }).catch((err)=>{
            console.log(err);
            setData([]);
        });
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "HomeBanner1.useEffect": ()=>{
            getData();
        }
    }["HomeBanner1.useEffect"], []);
    // function simplifyFraction(numerator: number, denominator: number): [number, number] {
    //   function gcd(a: number, b: number): number {
    //     return b === 0 ? a : gcd(b, a % b);
    //   }
    //   const commonDivisor: number = gcd(numerator, denominator);
    //   // Simplify the fraction
    //   const simplifiedNumerator: number = numerator / commonDivisor;
    //   const simplifiedDenominator: number = denominator / commonDivisor;
    //   return [simplifiedNumerator, simplifiedDenominator];
    // }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "meters",
        children: data?.length > 0 && data.map((item, index)=>{
            const value = Math.round(Number(item.value) || 0);
            const goal = Math.round(Number(item.goal) || 0);
            //const percentage = goal > 0 ? Math.round((value / goal) * 100) : 0;
            //const percentage = goal > 0 ? Math.min((value / goal) * 100, 100) : 0;
            let percentage = 0;
            if (goal > 0) {
                if (value > goal) {
                    // likely weight loss case (you exceeded target)
                    percentage = Math.min(goal / value * 100, 100);
                } else {
                    // weight gain or normal metrics
                    percentage = Math.min(value / goal * 100, 100);
                }
            }
            percentage = Math.round(percentage);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-header-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-header-box-name",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx",
                                        lineNumber: 122,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-header-box-value",
                                        children: [
                                            value,
                                            " ",
                                            item.unit
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx",
                                        lineNumber: 123,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx",
                                lineNumber: 121,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-header-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-header-box-name",
                                        children: "Target"
                                    }, void 0, false, {
                                        fileName: "[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx",
                                        lineNumber: 126,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-header-box-value",
                                        children: [
                                            goal,
                                            " ",
                                            item.goalUnit
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx",
                                        lineNumber: 127,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx",
                                lineNumber: 125,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx",
                        lineNumber: 120,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        color: "neutral",
                        determinate: true,
                        variant: "solid",
                        size: "lg",
                        value: percentage,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "textincircle",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        " ",
                                        value
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx",
                                    lineNumber: 141,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hrline"
                                }, void 0, false, {
                                    fileName: "[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx",
                                    lineNumber: 144,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: goal
                                }, void 0, false, {
                                    fileName: "[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx",
                                    lineNumber: 145,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx",
                            lineNumber: 140,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx",
                        lineNumber: 131,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            window.location.href = `/report/${item.name}`;
                        },
                        children: [
                            "Show Report ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineEye"], {}, void 0, false, {
                                fileName: "[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx",
                                lineNumber: 157,
                                columnNumber: 28
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx",
                        lineNumber: 153,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx",
                lineNumber: 119,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HomeBanner1, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");
_c = HomeBanner1;
const __TURBOPACK__default__export__ = HomeBanner1;
var _c;
__turbopack_context__.k.register(_c, "HomeBanner1");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/smarthealthtracker/components/HomeBanner2/HomeBanner2.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/smarthealthtracker/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/app/page.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$components$2f$HomeBanner1$2f$HomeBanner1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/components/HomeBanner1/HomeBanner1.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$components$2f$HomeBanner2$2f$HomeBanner2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/components/HomeBanner2/HomeBanner2.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$components$2f$HomeBanner1$2f$HomeBanner1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/smarthealthtracker/app/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$components$2f$HomeBanner2$2f$HomeBanner2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/smarthealthtracker/app/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/smarthealthtracker/app/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/smarthealthtracker/node_modules/@mui/joy/CircularProgress/circularProgressClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getCircularProgressUtilityClass",
    ()=>getCircularProgressUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$className$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/@mui/joy/className/index.js [app-client] (ecmascript) <locals>");
;
function getCircularProgressUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$className$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateUtilityClass"])('MuiCircularProgress', slot);
}
const circularProgressClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$className$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateUtilityClasses"])('MuiCircularProgress', [
    'root',
    'determinate',
    'svg',
    'track',
    'progress',
    'colorPrimary',
    'colorNeutral',
    'colorDanger',
    'colorSuccess',
    'colorWarning',
    'colorContext',
    'sizeSm',
    'sizeMd',
    'sizeLg',
    'variantPlain',
    'variantOutlined',
    'variantSoft',
    'variantSolid'
]);
const __TURBOPACK__default__export__ = circularProgressClasses;
}),
"[project]/smarthealthtracker/node_modules/@mui/joy/CircularProgress/CircularProgress.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/smarthealthtracker/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_capitalize$3e$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/@mui/utils/esm/capitalize/capitalize.js [app-client] (ecmascript) <export default as unstable_capitalize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_composeClasses$3e$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript) <export default as unstable_composeClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/@mui/joy/styles/styled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/@mui/joy/styles/useThemeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/@mui/joy/utils/useSlot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$CircularProgress$2f$circularProgressClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/@mui/joy/CircularProgress/circularProgressClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
let _ = (t)=>t, _t;
const _excluded = [
    "color",
    "backgroundColor"
], _excluded2 = [
    "children",
    "className",
    "color",
    "size",
    "variant",
    "thickness",
    "determinate",
    "value",
    "component",
    "slots",
    "slotProps"
];
;
;
;
;
;
;
;
;
;
;
;
;
const circulate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"])({
    '0%': {
        // let the progress start at the top of the ring
        transform: 'rotate(-90deg)'
    },
    '100%': {
        transform: 'rotate(270deg)'
    }
});
const useUtilityClasses = (ownerState)=>{
    const { determinate, color, variant, size } = ownerState;
    const slots = {
        root: [
            'root',
            determinate && 'determinate',
            color && `color${(0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_capitalize$3e$__["unstable_capitalize"])(color)}`,
            variant && `variant${(0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_capitalize$3e$__["unstable_capitalize"])(variant)}`,
            size && `size${(0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_capitalize$3e$__["unstable_capitalize"])(size)}`
        ],
        svg: [
            'svg'
        ],
        track: [
            'track'
        ],
        progress: [
            'progress'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_composeClasses$3e$__["unstable_composeClasses"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$CircularProgress$2f$circularProgressClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCircularProgressUtilityClass"], {});
};
function getThickness(slot, defaultValue) {
    return `var(--CircularProgress-${slot}Thickness, var(--CircularProgress-thickness, ${defaultValue}))`;
}
const CircularProgressRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('span', {
    name: 'JoyCircularProgress',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})(({ ownerState, theme })=>{
    var _theme$variants, _theme$variants$solid, _theme$variants$softH, _theme$variants$solid2;
    const _ref = ((_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]) || {}, { color, backgroundColor } = _ref, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        // integration with icon
        '--Icon-fontSize': 'calc(0.4 * var(--_root-size))',
        // public variables
        '--CircularProgress-trackColor': backgroundColor,
        '--CircularProgress-progressColor': color,
        '--CircularProgress-percent': ownerState.value,
        // 0 - 100
        '--CircularProgress-linecap': 'round'
    }, ownerState.size === 'sm' && {
        '--_root-size': 'var(--CircularProgress-size, 24px)',
        // use --_root-size to let other components overrides via --CircularProgress-size
        '--_track-thickness': getThickness('track', '3px'),
        '--_progress-thickness': getThickness('progress', '3px')
    }, ownerState.instanceSize === 'sm' && {
        '--CircularProgress-size': '24px'
    }, ownerState.size === 'md' && {
        '--_track-thickness': getThickness('track', '6px'),
        '--_progress-thickness': getThickness('progress', '6px'),
        '--_root-size': 'var(--CircularProgress-size, 40px)'
    }, ownerState.instanceSize === 'md' && {
        '--CircularProgress-size': '40px'
    }, ownerState.size === 'lg' && {
        '--_track-thickness': getThickness('track', '8px'),
        '--_progress-thickness': getThickness('progress', '8px'),
        '--_root-size': 'var(--CircularProgress-size, 64px)'
    }, ownerState.instanceSize === 'lg' && {
        '--CircularProgress-size': '64px'
    }, ownerState.thickness && {
        '--_track-thickness': `${ownerState.thickness}px`,
        '--_progress-thickness': `${ownerState.thickness}px`
    }, {
        // internal variables
        '--_thickness-diff': 'calc(var(--_track-thickness) - var(--_progress-thickness))',
        '--_inner-size': 'calc(var(--_root-size) - 2 * var(--variant-borderWidth, 0px))',
        '--_outlined-inset': 'max(var(--_track-thickness), var(--_progress-thickness))',
        width: 'var(--_root-size)',
        height: 'var(--_root-size)',
        borderRadius: 'var(--_root-size)',
        margin: 'var(--CircularProgress-margin)',
        boxSizing: 'border-box',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        // prevent from shrinking when CircularProgress is in a flex container.
        position: 'relative',
        color
    }, ownerState.children && {
        // only add font related properties when there is a child.
        // so that when there is no child, the size can be controlled by the parent font-size e.g. Link
        fontFamily: theme.vars.fontFamily.body,
        fontWeight: theme.vars.fontWeight.md,
        fontSize: 'calc(0.2 * var(--_root-size))'
    }, rest, ownerState.variant === 'outlined' && {
        '&::before': (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            content: '""',
            display: 'block',
            position: 'absolute',
            borderRadius: 'inherit',
            top: 'var(--_outlined-inset)',
            left: 'var(--_outlined-inset)',
            right: 'var(--_outlined-inset)',
            bottom: 'var(--_outlined-inset)'
        }, rest)
    }, ownerState.variant === 'soft' && {
        '--CircularProgress-trackColor': theme.variants.soft.neutral.backgroundColor,
        '--CircularProgress-progressColor': (_theme$variants$solid = theme.variants.solid) == null ? void 0 : _theme$variants$solid[ownerState.color].backgroundColor
    }, ownerState.variant === 'solid' && {
        '--CircularProgress-trackColor': (_theme$variants$softH = theme.variants.softHover) == null ? void 0 : _theme$variants$softH[ownerState.color].backgroundColor,
        '--CircularProgress-progressColor': (_theme$variants$solid2 = theme.variants.solid) == null ? void 0 : _theme$variants$solid2[ownerState.color].backgroundColor
    });
});
const CircularProgressSvg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('svg', {
    name: 'JoyCircularProgress',
    slot: 'Svg',
    overridesResolver: (props, styles)=>styles.svg
})({
    width: 'inherit',
    height: 'inherit',
    display: 'inherit',
    boxSizing: 'inherit',
    position: 'absolute',
    top: 'calc(-1 * var(--variant-borderWidth, 0px))',
    // centered align
    left: 'calc(-1 * var(--variant-borderWidth, 0px))' // centered align
});
const CircularProgressTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('circle', {
    name: 'JoyCircularProgress',
    slot: 'track',
    overridesResolver: (props, styles)=>styles.track
})({
    cx: '50%',
    cy: '50%',
    r: 'calc(var(--_inner-size) / 2 - var(--_track-thickness) / 2 + min(0px, var(--_thickness-diff) / 2))',
    fill: 'transparent',
    strokeWidth: 'var(--_track-thickness)',
    stroke: 'var(--CircularProgress-trackColor)'
});
const CircularProgressProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('circle', {
    name: 'JoyCircularProgress',
    slot: 'progress',
    overridesResolver: (props, styles)=>styles.progress
})({
    '--_progress-radius': 'calc(var(--_inner-size) / 2 - var(--_progress-thickness) / 2 - max(0px, var(--_thickness-diff) / 2))',
    '--_progress-length': 'calc(2 * 3.1415926535 * var(--_progress-radius))',
    // the circumference around the progress
    cx: '50%',
    cy: '50%',
    r: 'var(--_progress-radius)',
    fill: 'transparent',
    strokeWidth: 'var(--_progress-thickness)',
    stroke: 'var(--CircularProgress-progressColor)',
    strokeLinecap: 'var(--CircularProgress-linecap, round)',
    // can't use CSS variable directly, need to cast type.
    strokeDasharray: 'var(--_progress-length)',
    strokeDashoffset: 'calc(var(--_progress-length) - var(--CircularProgress-percent) * var(--_progress-length) / 100)',
    transformOrigin: 'center',
    transform: 'rotate(-90deg)' // to initially appear at the top-center of the circle.
}, ({ ownerState })=>!ownerState.determinate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["css"])(_t || (_t = _`
      animation: var(--CircularProgress-circulation, 0.8s linear 0s infinite normal none running)
        ${0};
    `), circulate));
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 *
 * Demos:
 *
 * - [Circular Progress](https://mui.com/joy-ui/react-circular-progress/)
 *
 * API:
 *
 * - [CircularProgress API](https://mui.com/joy-ui/api/circular-progress/)
 */ const CircularProgress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function CircularProgress(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        props: inProps,
        name: 'JoyCircularProgress'
    });
    const { children, className, color = 'primary', size = 'md', variant = 'soft', thickness, determinate = false, value = determinate ? 0 : 25, // `25` is the 1/4 of the circle.
    component, slots = {}, slotProps = {} } = props, other = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, _excluded2);
    const ownerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        color,
        size,
        variant,
        thickness,
        value,
        determinate,
        instanceSize: inProps.size
    });
    const classes = useUtilityClasses(ownerState);
    const externalForwardedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, other, {
        component,
        slots,
        slotProps
    });
    const [SlotRoot, rootProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('root', {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        elementType: CircularProgressRoot,
        externalForwardedProps,
        ownerState,
        additionalProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            role: 'progressbar',
            style: {
                // Setting this CSS variable via inline-style
                // prevents the generation of new CSS every time
                // `value` prop updates
                '--CircularProgress-percent': value
            }
        }, value && determinate && {
            'aria-valuenow': typeof value === 'number' ? Math.round(value) : Math.round(Number(value || 0))
        })
    });
    const [SlotSvg, svgProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('svg', {
        className: classes.svg,
        elementType: CircularProgressSvg,
        externalForwardedProps,
        ownerState
    });
    const [SlotTrack, trackProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('track', {
        className: classes.track,
        elementType: CircularProgressTrack,
        externalForwardedProps,
        ownerState
    });
    const [SlotProgress, progressProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$mui$2f$joy$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('progress', {
        className: classes.progress,
        elementType: CircularProgressProgress,
        externalForwardedProps,
        ownerState
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(SlotRoot, (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, rootProps, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(SlotSvg, (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, svgProps, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotTrack, (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, trackProps)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotProgress, (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, progressProps))
                ]
            })),
            children
        ]
    }));
});
("TURBOPACK compile-time truthy", 1) ? CircularProgress.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * @ignore
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */ color: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'danger',
            'neutral',
            'primary',
            'success',
            'warning'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * The boolean to select a variant.
   * Use indeterminate when there is no progress value.
   * @default false
   */ determinate: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */ size: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'sm',
            'md',
            'lg'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The props used for each slot inside.
   * @default {}
   */ slotProps: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        progress: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        root: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        svg: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        track: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ])
    }),
    /**
   * The components used for each slot inside.
   * @default {}
   */ slots: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        progress: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
        root: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
        svg: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
        track: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType
    }),
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * The thickness of the circle.
   */ thickness: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   *
   * @default determinate ? 0 : 25
   */ value: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'soft'
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'outlined',
            'plain',
            'soft',
            'solid'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = CircularProgress;
}),
]);

//# sourceMappingURL=smarthealthtracker_fc326f44._.js.map