export type Exercise = {
    name: string
    description: string
    sets: string
    reps: string
    mediaUrl: string
    mediaType: 'gif' | 'image'
    exerciseLink?: string
    howToDo: string
}

export type WorkoutPlan = {
    type: string
    exercises: Exercise[]
}

export type HomeBannerWorkout = {
    type: string
    imageUrl: string
    durationInMin: number
}

export const defaultHomeBannerWorkouts: HomeBannerWorkout[] = [
    {
        type: 'Chest',
        imageUrl:
            'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        durationInMin: 30,
    },
    {
        type: 'Abs',
        imageUrl:
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        durationInMin: 90,
    },
    {
        type: 'Back',
        imageUrl:
            'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFjayUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        durationInMin: 70,
    },
    {
        type: 'Biceps',
        imageUrl:
            'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        durationInMin: 50,
    },
    {
        type: 'Triceps',
        imageUrl:
            'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJpY2Vwc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        durationInMin: 60,
    },
    {
        type: 'Legs',
        imageUrl:
            'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVnJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        durationInMin: 80,
    },
    {
        type: 'Cardio',
        imageUrl:
            'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyZGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        durationInMin: 100,
    },
    {
        type: 'Forearms',
        imageUrl:
            'https://images.unsplash.com/photo-1591940742878-13aba4b7a34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZWFybXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        durationInMin: 110,
    },
]

export const defaultPlansByType: Record<string, WorkoutPlan> = {
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
                howToDo: 'Lie flat, grip bar slightly wider than shoulders, lower to chest, press up with control.',
            },
            {
                name: 'Incline Dumbbell Press',
                description: 'Targets upper chest and front delts.',
                sets: '4',
                reps: '10-12',
                mediaUrl: 'https://gymvisual.com/img/p/4/4/0/5/4405.gif',
                mediaType: 'gif',
                howToDo: 'Set bench to incline, lower dumbbells to upper chest, press upward without locking elbows hard.',
            },
            {
                name: 'Cable Chest Fly',
                description: 'Isolation movement for chest squeeze and shape.',
                sets: '3',
                reps: '12-15',
                mediaUrl: 'https://gymvisual.com/img/p/2/3/9/1/2391.gif',
                mediaType: 'gif',
                howToDo: 'Stand between cable stacks, slight elbow bend, bring handles together in front of chest.',
            },
        ],
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
                howToDo: 'Hang from bar, brace core, raise legs to hip level or higher, lower slowly.',
            },
            {
                name: 'Cable Crunch',
                description: 'Weighted ab movement for stronger contraction.',
                sets: '4',
                reps: '12-15',
                mediaUrl: 'https://gymvisual.com/img/p/1/8/7/0/5/18705.gif',
                mediaType: 'gif',
                howToDo: 'Kneel at cable, hold rope near head, crunch torso down by engaging abs, return slowly.',
            },
            {
                name: 'Plank',
                description: 'Improves deep core stability and posture.',
                sets: '3',
                reps: '45 sec',
                mediaUrl: 'https://gymvisual.com/img/p/2/5/4/6/2546.gif',
                mediaType: 'gif',
                howToDo: 'Keep elbows below shoulders, body straight, glutes and abs tight throughout hold.',
            },
        ],
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
                howToDo: 'Pull bar to upper chest, keep chest up and elbows driving down, return with control.',
            },
            {
                name: 'Seated Cable Row',
                description: 'Develops mid-back thickness and posture.',
                sets: '4',
                reps: '10-12',
                mediaUrl: 'https://gymvisual.com/img/p/8/0/6/4/8064.gif',
                mediaType: 'gif',
                howToDo: 'Pull handle toward lower ribs, squeeze shoulder blades, avoid leaning back too far.',
            },
            {
                name: 'Barbell Deadlift',
                description: 'Full posterior-chain movement for total back strength.',
                sets: '4',
                reps: '5-6',
                mediaUrl: 'https://gymvisual.com/img/p/1/6/6/5/6/16656.gif',
                mediaType: 'gif',
                howToDo: 'Hinge from hips, keep spine neutral, drive through floor to stand, lower bar close to body.',
            },
        ],
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
                howToDo: 'Keep elbows close to torso, curl bar up, squeeze biceps, lower slowly.',
            },
            {
                name: 'Incline Dumbbell Curl',
                description: 'Great stretch-focused movement for long head of biceps.',
                sets: '3',
                reps: '10-12',
                mediaUrl: 'https://gymvisual.com/img/p/6/4/8/0/6480.gif',
                mediaType: 'gif',
                howToDo: 'Sit on incline bench, arms hanging down, curl without swinging shoulders.',
            },
            {
                name: 'Hammer Curl',
                description: 'Targets brachialis and forearm with neutral grip.',
                sets: '3',
                reps: '12',
                mediaUrl: 'https://gymvisual.com/img/p/8/2/6/1/8261.gif',
                mediaType: 'gif',
                howToDo: 'Keep palms facing each other and curl dumbbells while controlling the lowering phase.',
            },
        ],
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
                howToDo: 'Keep elbows tucked to sides, extend forearms down fully, and return slowly.',
            },
            {
                name: 'Overhead Dumbbell Extension',
                description: 'Hits long head of triceps with deep stretch.',
                sets: '3',
                reps: '10-12',
                mediaUrl: 'https://gymvisual.com/img/p/1/5/0/0/2/15002.gif',
                mediaType: 'gif',
                howToDo: 'Hold dumbbell overhead, bend elbows behind head, extend arms up with control.',
            },
            {
                name: 'Close-Grip Push-Up',
                description: 'Bodyweight triceps movement with chest support.',
                sets: '3',
                reps: '12-15',
                mediaUrl: 'https://gymvisual.com/img/p/1/8/2/0/3/18203.gif',
                mediaType: 'gif',
                howToDo: 'Place hands close under chest, keep body straight, lower and press back up.',
            },
        ],
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
                howToDo: 'Brace core, squat to at least parallel, keep knees tracking over toes, stand up strong.',
            },
            {
                name: 'Walking Lunges',
                description: 'Builds quads, glutes, and balance.',
                sets: '3',
                reps: '12 each leg',
                mediaUrl: 'https://gymvisual.com/img/p/1/1/3/8/4/11384.gif',
                mediaType: 'gif',
                howToDo: 'Step forward, lower back knee toward floor, push through front heel, switch legs.',
            },
            {
                name: 'Leg Press',
                description: 'Great for volume training of quads and glutes.',
                sets: '4',
                reps: '12',
                mediaUrl: 'https://gymvisual.com/img/p/1/5/0/6/7/15067.gif',
                mediaType: 'gif',
                howToDo: 'Place feet shoulder-width on platform, lower sled safely, press back without knee lockout.',
            },
        ],
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
                howToDo: 'Drop to plank, perform push-up or plank hold, jump feet in, explode up into jump.',
            },
            {
                name: 'Jump Rope',
                description: 'Improves endurance, coordination, and calorie burn.',
                sets: '4',
                reps: '60 sec',
                mediaUrl: 'https://gymvisual.com/img/p/7/5/6/4/7564.gif',
                mediaType: 'gif',
                howToDo: 'Keep elbows close, rotate rope from wrists, stay light on feet with steady rhythm.',
            },
            {
                name: 'High Knees',
                description: 'Quick cardio drill to elevate heart rate.',
                sets: '4',
                reps: '30 sec',
                mediaUrl: 'https://gymvisual.com/img/p/1/8/0/3/9/18039.gif',
                mediaType: 'gif',
                howToDo: 'Run in place lifting knees to hip level, pump arms, maintain upright torso.',
            },
        ],
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
                howToDo: 'Rest forearms on bench, palms up, curl weight through wrists, lower slowly.',
            },
            {
                name: 'Reverse Wrist Curl',
                description: 'Targets forearm extensors for balanced strength.',
                sets: '4',
                reps: '15-20',
                mediaUrl: 'https://gymvisual.com/img/p/1/5/4/9/3/15493.gif',
                mediaType: 'gif',
                howToDo: 'Forearms supported, palms down, lift wrists upward then lower with control.',
            },
            {
                name: 'Farmer Carry',
                description:
                    'Excellent loaded carry for grip and forearm endurance. GIF unavailable, so use exercise link below.',
                sets: '3',
                reps: '40 m',
                mediaUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80',
                mediaType: 'image',
                exerciseLink: 'https://www.bodybuilding.com/exercises/farmers-walk',
                howToDo: 'Hold heavy dumbbells by sides, stand tall, walk controlled distance without leaning.',
            },
        ],
    },
}
