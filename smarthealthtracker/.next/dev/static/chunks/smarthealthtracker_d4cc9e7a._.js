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
"[project]/smarthealthtracker/lib/workoutDefaults.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultHomeBannerWorkouts",
    ()=>defaultHomeBannerWorkouts,
    "defaultPlansByType",
    ()=>defaultPlansByType
]);
const defaultHomeBannerWorkouts = [
    {
        type: 'Chest',
        imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        durationInMin: 30
    },
    {
        type: 'Abs',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        durationInMin: 90
    },
    {
        type: 'Back',
        imageUrl: 'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFjayUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        durationInMin: 70
    },
    {
        type: 'Biceps',
        imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        durationInMin: 50
    },
    {
        type: 'Triceps',
        imageUrl: 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJpY2Vwc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        durationInMin: 60
    },
    {
        type: 'Legs',
        imageUrl: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVnJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        durationInMin: 80
    },
    {
        type: 'Cardio',
        imageUrl: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyZGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        durationInMin: 100
    },
    {
        type: 'Forearms',
        imageUrl: 'https://images.unsplash.com/photo-1591940742878-13aba4b7a34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZWFybXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        durationInMin: 110
    }
];
const defaultPlansByType = {
    chest: {
        type: 'Chest',
        exercises: [
            {
                name: 'Flat Barbell Bench Press',
                description: 'Primary chest mass builder for mid-chest strength.',
                sets: '4',
                reps: '8-10',
                mediaUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
                mediaType: 'gif',
                howToDo: 'Lie flat, grip bar slightly wider than shoulders, lower to chest, press up with control.'
            },
            {
                name: 'Incline Dumbbell Press',
                description: 'Targets upper chest and front delts.',
                sets: '4',
                reps: '10-12',
                mediaUrl: 'https://gymvisual.com/img/p/4/4/0/5/4405.gif',
                mediaType: 'gif',
                howToDo: 'Set bench to incline, lower dumbbells to upper chest, press upward without locking elbows hard.'
            },
            {
                name: 'Cable Chest Fly',
                description: 'Isolation movement for chest squeeze and shape.',
                sets: '3',
                reps: '12-15',
                mediaUrl: 'https://gymvisual.com/img/p/2/3/9/1/2391.gif',
                mediaType: 'gif',
                howToDo: 'Stand between cable stacks, slight elbow bend, bring handles together in front of chest.'
            }
        ]
    },
    abs: {
        type: 'Abs',
        exercises: [
            {
                name: 'Hanging Leg Raise',
                description: 'Builds lower abs and core control.',
                sets: '4',
                reps: '10-12',
                mediaUrl: 'https://gymvisual.com/img/p/1/8/0/0/0/18000.gif',
                mediaType: 'gif',
                howToDo: 'Hang from bar, brace core, raise legs to hip level or higher, lower slowly.'
            },
            {
                name: 'Cable Crunch',
                description: 'Weighted ab movement for stronger contraction.',
                sets: '4',
                reps: '12-15',
                mediaUrl: 'https://gymvisual.com/img/p/1/8/7/0/5/18705.gif',
                mediaType: 'gif',
                howToDo: 'Kneel at cable, hold rope near head, crunch torso down by engaging abs, return slowly.'
            },
            {
                name: 'Plank',
                description: 'Improves deep core stability and posture.',
                sets: '3',
                reps: '45 sec',
                mediaUrl: 'https://gymvisual.com/img/p/2/5/4/6/2546.gif',
                mediaType: 'gif',
                howToDo: 'Keep elbows below shoulders, body straight, glutes and abs tight throughout hold.'
            }
        ]
    },
    back: {
        type: 'Back',
        exercises: [
            {
                name: 'Lat Pulldown',
                description: 'Builds lat width and upper back strength.',
                sets: '4',
                reps: '10-12',
                mediaUrl: 'https://gymvisual.com/img/p/7/1/5/8/7158.gif',
                mediaType: 'gif',
                howToDo: 'Pull bar to upper chest, keep chest up and elbows driving down, return with control.'
            },
            {
                name: 'Seated Cable Row',
                description: 'Develops mid-back thickness and posture.',
                sets: '4',
                reps: '10-12',
                mediaUrl: 'https://gymvisual.com/img/p/8/0/6/4/8064.gif',
                mediaType: 'gif',
                howToDo: 'Pull handle toward lower ribs, squeeze shoulder blades, avoid leaning back too far.'
            },
            {
                name: 'Barbell Deadlift',
                description: 'Full posterior-chain movement for total back strength.',
                sets: '4',
                reps: '5-6',
                mediaUrl: 'https://gymvisual.com/img/p/1/6/6/5/6/16656.gif',
                mediaType: 'gif',
                howToDo: 'Hinge from hips, keep spine neutral, drive through floor to stand, lower bar close to body.'
            }
        ]
    },
    biceps: {
        type: 'Biceps',
        exercises: [
            {
                name: 'Barbell Curl',
                description: 'Classic biceps builder for overall arm size.',
                sets: '4',
                reps: '10-12',
                mediaUrl: 'https://gymvisual.com/img/p/1/5/7/1/9/15719.gif',
                mediaType: 'gif',
                howToDo: 'Keep elbows close to torso, curl bar up, squeeze biceps, lower slowly.'
            },
            {
                name: 'Incline Dumbbell Curl',
                description: 'Great stretch-focused movement for long head of biceps.',
                sets: '3',
                reps: '10-12',
                mediaUrl: 'https://gymvisual.com/img/p/6/4/8/0/6480.gif',
                mediaType: 'gif',
                howToDo: 'Sit on incline bench, arms hanging down, curl without swinging shoulders.'
            },
            {
                name: 'Hammer Curl',
                description: 'Targets brachialis and forearm with neutral grip.',
                sets: '3',
                reps: '12',
                mediaUrl: 'https://gymvisual.com/img/p/8/2/6/1/8261.gif',
                mediaType: 'gif',
                howToDo: 'Keep palms facing each other and curl dumbbells while controlling the lowering phase.'
            }
        ]
    },
    triceps: {
        type: 'Triceps',
        exercises: [
            {
                name: 'Cable Triceps Pushdown',
                description: 'Effective triceps isolation for arm definition.',
                sets: '4',
                reps: '12-15',
                mediaUrl: 'https://gymvisual.com/img/p/1/4/4/7/6/14476.gif',
                mediaType: 'gif',
                howToDo: 'Keep elbows tucked to sides, extend forearms down fully, and return slowly.'
            },
            {
                name: 'Overhead Dumbbell Extension',
                description: 'Hits long head of triceps with deep stretch.',
                sets: '3',
                reps: '10-12',
                mediaUrl: 'https://gymvisual.com/img/p/1/5/0/0/2/15002.gif',
                mediaType: 'gif',
                howToDo: 'Hold dumbbell overhead, bend elbows behind head, extend arms up with control.'
            },
            {
                name: 'Close-Grip Push-Up',
                description: 'Bodyweight triceps movement with chest support.',
                sets: '3',
                reps: '12-15',
                mediaUrl: 'https://gymvisual.com/img/p/1/8/2/0/3/18203.gif',
                mediaType: 'gif',
                howToDo: 'Place hands close under chest, keep body straight, lower and press back up.'
            }
        ]
    },
    legs: {
        type: 'Legs',
        exercises: [
            {
                name: 'Barbell Squat',
                description: 'Foundational lower body movement for strength and muscle.',
                sets: '4',
                reps: '8-10',
                mediaUrl: 'https://gymvisual.com/img/p/1/8/7/4/7/18747.gif',
                mediaType: 'gif',
                howToDo: 'Brace core, squat to at least parallel, keep knees tracking over toes, stand up strong.'
            },
            {
                name: 'Walking Lunges',
                description: 'Builds quads, glutes, and balance.',
                sets: '3',
                reps: '12 each leg',
                mediaUrl: 'https://gymvisual.com/img/p/1/1/3/8/4/11384.gif',
                mediaType: 'gif',
                howToDo: 'Step forward, lower back knee toward floor, push through front heel, switch legs.'
            },
            {
                name: 'Leg Press',
                description: 'Great for volume training of quads and glutes.',
                sets: '4',
                reps: '12',
                mediaUrl: 'https://gymvisual.com/img/p/1/5/0/6/7/15067.gif',
                mediaType: 'gif',
                howToDo: 'Place feet shoulder-width on platform, lower sled safely, press back without knee lockout.'
            }
        ]
    },
    cardio: {
        type: 'Cardio',
        exercises: [
            {
                name: 'Burpees',
                description: 'High-intensity full-body cardio movement.',
                sets: '4',
                reps: '15',
                mediaUrl: 'https://gymvisual.com/img/p/1/8/0/2/5/18025.gif',
                mediaType: 'gif',
                howToDo: 'Drop to plank, perform push-up or plank hold, jump feet in, explode up into jump.'
            },
            {
                name: 'Jump Rope',
                description: 'Improves endurance, coordination, and calorie burn.',
                sets: '4',
                reps: '60 sec',
                mediaUrl: 'https://gymvisual.com/img/p/7/5/6/4/7564.gif',
                mediaType: 'gif',
                howToDo: 'Keep elbows close, rotate rope from wrists, stay light on feet with steady rhythm.'
            },
            {
                name: 'High Knees',
                description: 'Quick cardio drill to elevate heart rate.',
                sets: '4',
                reps: '30 sec',
                mediaUrl: 'https://gymvisual.com/img/p/1/8/0/3/9/18039.gif',
                mediaType: 'gif',
                howToDo: 'Run in place lifting knees to hip level, pump arms, maintain upright torso.'
            }
        ]
    },
    forearms: {
        type: 'Forearms',
        exercises: [
            {
                name: 'Wrist Curl',
                description: 'Strengthens forearm flexors and grip.',
                sets: '4',
                reps: '15-20',
                mediaUrl: 'https://gymvisual.com/img/p/9/0/7/6/9076.gif',
                mediaType: 'gif',
                howToDo: 'Rest forearms on bench, palms up, curl weight through wrists, lower slowly.'
            },
            {
                name: 'Reverse Wrist Curl',
                description: 'Targets forearm extensors for balanced strength.',
                sets: '4',
                reps: '15-20',
                mediaUrl: 'https://gymvisual.com/img/p/1/5/4/9/3/15493.gif',
                mediaType: 'gif',
                howToDo: 'Forearms supported, palms down, lift wrists upward then lower with control.'
            },
            {
                name: 'Farmer Carry',
                description: 'Excellent loaded carry for grip and forearm endurance. GIF unavailable, so use exercise link below.',
                sets: '3',
                reps: '40 m',
                mediaUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80',
                mediaType: 'image',
                exerciseLink: 'https://www.bodybuilding.com/exercises/farmers-walk',
                howToDo: 'Hold heavy dumbbells by sides, stand tall, walk controlled distance without leaning.'
            }
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/smarthealthtracker/components/HomeBanner2/HomeBanner2.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/smarthealthtracker/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
// import required modules
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/smarthealthtracker/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$lib$2f$workoutDefaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/smarthealthtracker/lib/workoutDefaults.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const HomeBanner2 = ()=>{
    _s();
    const [workouts, setWorkouts] = __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(__TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$lib$2f$workoutDefaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultHomeBannerWorkouts"]);
    const getworkouts = async ()=>{
        try {
            const res = await fetch(("TURBOPACK compile-time value", "http://localhost:8000") + '/workoutcategories', {
                credentials: 'include'
            });
            const data = await res.json();
            if (data.ok && Array.isArray(data.data) && data.data.length > 0) {
                setWorkouts(data.data.map((c)=>({
                        type: c.displayName || c.type,
                        imageUrl: c.imageUrl,
                        durationInMin: c.durationInMin
                    })));
            }
        } catch  {
        /* keep built-in defaults */ }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "HomeBanner2.useEffect": ()=>{
            getworkouts();
        }
    }["HomeBanner2.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mainhead1",
                children: "Workouts"
            }, void 0, false, {
                fileName: "[project]/smarthealthtracker/components/HomeBanner2/HomeBanner2.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    clickable: true
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50
                    }
                },
                modules: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
                ],
                className: "mySwiper",
                children: workouts.map((item, index)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "swiper-slide",
                            style: {
                                backgroundImage: `url(${item.imageUrl})`
                            },
                            onClick: ()=>{
                                window.location.href = `/workout/${item.type}`;
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "swiper-slide-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: item.type
                                    }, void 0, false, {
                                        fileName: "[project]/smarthealthtracker/components/HomeBanner2/HomeBanner2.tsx",
                                        lineNumber: 79,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$smarthealthtracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            item.durationInMin,
                                            " min"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/smarthealthtracker/components/HomeBanner2/HomeBanner2.tsx",
                                        lineNumber: 80,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/smarthealthtracker/components/HomeBanner2/HomeBanner2.tsx",
                                lineNumber: 78,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        }, index, false, {
                            fileName: "[project]/smarthealthtracker/components/HomeBanner2/HomeBanner2.tsx",
                            lineNumber: 70,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/smarthealthtracker/components/HomeBanner2/HomeBanner2.tsx",
                        lineNumber: 69,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/smarthealthtracker/components/HomeBanner2/HomeBanner2.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/smarthealthtracker/components/HomeBanner2/HomeBanner2.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HomeBanner2, "z8Su373jWfKKcCfDnIuXV0bx8k8=");
_c = HomeBanner2;
const __TURBOPACK__default__export__ = HomeBanner2;
var _c;
__turbopack_context__.k.register(_c, "HomeBanner2");
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
]);

//# sourceMappingURL=smarthealthtracker_d4cc9e7a._.js.map