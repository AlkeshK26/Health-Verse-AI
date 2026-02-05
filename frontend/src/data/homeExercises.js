// src/data/homeExercises.js

// 1. Video Imports
const flutterKikck =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283944/2_mvf04d.mp4';
const  leg = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283946/3_o2wrye.mp4';
const abdominal =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283945/1_wpujrq.mp4';
const  mobility =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283947/4_dw3atx.mp4';
const  cardio = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283954/5_lxfptx.mp4';
const  seat =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283969/7_ux5jmx.mp4';
const  steps =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283957/9_furmnk.mp4';
const  push = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283958/10_jcyvql.mp4';

export const homeExercisesList = [
    {
        id: 6,
        name: 'Flutter Kicks',
        video: flutterKikck,
        desc: 'A core-strengthening exercise performed in three levels of difficulty.',
        benefits: [
            'Core Strength: Specifically targets the lower abdominal muscles.',
            'Progression: Levels allow users to scale the difficulty as they get stronger.'
        ],
        steps: [
            'Level 1: Keep hands by your sides and perform small up-and-down leg kicks.',
            'Level 2: Raise your arms toward your legs to increase core tension.',
            'Level 3: Reach arms overhead to maximize the leverage and difficulty.'
        ]
    },
    {
        id: 8,
        name: 'Leg Raises',
        video: leg,
        desc: 'Lower abdomen ko majboot banane ke liye ek effective core exercise jo different intensity levels mein aati hai.',
        benefits: [
            'Abdominal Strength: Rectus abdominis ke lower part ko build karta hai.',
            'Hip Flexor Flexibility: Hips ki mobility aur flexibility ko badhata hai.',
            'Progressive Training: Levels ki wajah se strength ke saath difficulty badhayi ja sakti hai.'
        ],
        steps: [
            'Level 1: Apne ghutno ko mod kar ya legs ko upar utha kar core ko squeeze karein.',
            'Level 2: Legs ko 45-degree angle tak control ke saath niche layein aur wapas upar le jayein.',
            'Level 3: Legs ko zameen ke bilkul paas tak niche layein bina back arch kiye.',
            'Momentum ka use na karein, sirf core ki taqat se legs ko control karein.'
        ]
    },
    {
        id: 13,
        name: 'Leg Raises Progression',
        video: abdominal,
        desc: 'Lower abdominal strength build karne ke liye ek best progression exercise jo beginner se advanced level tak jaati hai.',
        benefits: [
            'Lower Ab Isolation: Specifically lower six-pack muscles ko target karta hai.',
            'Core Control: Puri body ka balance aur stability improve hoti hai.',
            'Scalable Intensity: Aap apni strength ke hisaab se difficulty level choose kar sakte hain.'
        ],
        steps: [
            'Level 1: Ghutno ko mod kar (bent knees) legs ko upar uthayein aur core squeeze karein.',
            'Level 2: Legs ko 45-degree angle tak niche layein aur control ke saath wapas upar le jayein.',
            'Level 3: Legs ko bilkul zameen ke paas (just above floor) tak niche layein bina back arch kiye.',
            'MISTAKE: Jhatke se legs ko upar-niche karna ya lower back ko zameen se uthana.',
            'CORRECTION: Slow movement rakhein aur abdominal muscles ki taqat se legs ko lift karein.'
        ]
    },
    {
        id: 14,
        name: 'Cat Cow',
        video: mobility,
        desc: 'Spine ki flexibility badhane aur lower back pain ko kam karne ke liye ek best stretching exercise.',
        benefits: [
        'Exercise 1 (Cat Cow)',
        'Spinal Mobility: Makes the spinal column more flexible and supple.',
        
        'Exercise 2 (Upward to Downward Dog)',
        'Full Body Stretch: Simultaneously stretches the hamstrings, calves, and back.',

        'Exercise 3 (Thread the Needle)',
        'Shoulder Mobility: Releases stiffness and opens up the shoulder joints.',

        'Exercise 4 (90/90 Stretch)',
        'Hip Mobility: Increases the flexibility and range of motion of the hip joints.',

        'Exercise 5 (Hip to Hamstring)',
        'Flexibility: Lengthens the hamstrings and improves overall lower body elasticity.'
    ],
    steps: [
        'Exercise 1',
        'Get onto your hands and knees in a tabletop position.',

        'Exercise 2',
        'Downward Dog: Lift your hips upward and form a "V" shape with your body.',

        'Exercise 3',
        'Start from a tabletop position on the floor.',

        'Exercise 4',
        'Sit on the ground and bend both legs at 90-degree angles.',

        'Exercise 5',
        'Move into a lunge position (specifically a kneeling lunge).'
    ]
        
    },

    {
  id: 22,
  name: '10-Phase High-Intensity Home Cardio',
  video: cardio,
  desc: 'A comprehensive 10-exercise cardio circuit designed to maximize calorie burn and improve cardiovascular endurance without any gym equipment.',
  benefits: [
    'Maximum Calorie Burn: The high-intensity interval nature of the circuit spikes the heart rate.',
    'Full Body Conditioning: Targets the legs, core, and cardiovascular system simultaneously.',
    'Improved Stamina: Increases aerobic capacity through consistent high-tempo movement.',
    'Dynamic Agility: High and Low Jacks improve coordination and lower body explosiveness.'
  ],
  steps: [
    'Phase 1 - High Jacks: Perform standard jumping jacks with a full range of arm motion to engage the shoulders.',
    'Phase 2 - Low Jacks: Stay in a partial squat position while jumping your feet in and out to keep constant tension on the quads.',
    'Phase 3 - Mountain Climbers: Drive knees rapidly toward the chest in a high plank position.',
    'Phase 4 - Flutter Kicks: Perform rapid leg kicks while keeping the core tight and lower back flat.',
    'Phase 5 - Russian Twists: Rotate your torso side-to-side to engage the obliques.',
    'Phase 6 - V-Sit Twists: Balance on your sit bones while performing high-tempo torso rotations.',
    'Phase 7 - V-Sit Hold: Maintain a static "V" position to build core endurance.',
    'Phase 8 - Crunches: Perform fast-paced abdominal crunches with a controlled squeeze.',
    'Phase 9 - Bicycle Crunches: Alternate elbow-to-knee touches at a high tempo for cardio benefit.',
    'Phase 10 - Plank Finisher: Hold a solid plank with perfect form to stabilize the body after the high-intensity reps.'
  ]
},
{
  id: 24,
  name: "Efficient Running Mechanics (Stride Cycling)",
  video: seat,
  desc: "A technical correction drill designed to improve running speed and efficiency by transitioning from a simple vertical foot lift to a proper circular leg cycling motion.",
  benefits: [
    "Increased Running Velocity: Circular cycling generates significantly more forward momentum compared to simple vertical lifting.",
    "Improved Energy Economy: Minimizes unnecessary vertical movement, ensuring your energy is focused purely on forward progression.",
    "Reduced Joint Strain: Proper leg cycling promotes a mid-foot strike directly under the body, lowering the impact on knees and ankles.",
    "Enhanced Sprint Performance: Critical for developing 'front-side mechanics' which are essential for explosive speed."
  ],
  steps: [
    "MISTAKE: Avoid simply picking your feet up and putting them straight back down in a 'marching' or 'stamping' motion.",
    "CORRECTION: Focus on 'cycling' your legs in a smooth, circular path underneath your center of gravity.",
    "Drive your knees forward and pull your heels upward toward your hamstrings during the recovery phase of the stride.",
    "Ensure your feet land directly beneath your hips to maintain continuous balance and forward momentum.",
    "Maintain an upright torso and keep your arms moving in a synchronized rhythm with your legs."
  ]
},

{
  id: 25,
  name: "Steps climbing ",
  video: steps,
  desc: "A high-intensity, 10-exercise home circuit designed to maximize fat burn and improve cardiovascular stamina without any gym equipment.",
  benefits: [
    "Maximum Fat Loss: High-tempo intervals significantly increase calorie expenditure and spike the metabolic rate.",
    "Zero Equipment Needed: Specifically designed for effective training in a home environment with limited space.",
    "Full-Body Activation: Simultaneously targets the legs, core, and shoulders through dynamic movements.",
  ],
  steps: [
    "Phase 1 - Run In Place: Start with a steady stationary jog with controlled breathing to warm up.",
    "Phase 2 - High Jacks (Jumping Jacks): Perform standard jumping jacks with full arm and leg extension.",
    "Phase 3 - Low Jacks: Perform jumping jacks while maintaining a low squat position to keep constant tension on the quads.",
    "Phase 4 - Running Man: Rapidly alternate legs in a scissor-like running motion while stationary.",
    "Phase 5 - Butt Kickers: Jog in place while actively bringing your heels back to touch your glutes.",
    "Phase 6 - High Knees: Drive your knees up toward your chest as high and fast as possible to engage the core.",
    "Phase 7 - Mountain Climbers: In a plank position, drive your knees toward your chest in rapid, alternating succession.",
    "Phase 8 - Toe Taps: Lower into a dynamic lunge-like position and tap the floor with alternating hands.",
    
  ]
},
{
  id: 26,
  name: "Bodyweight Push-up Progression Circuit",
  video: push,
  desc: "A multi-functional push-up routine that targets the chest, shoulders, triceps, and abs by varying hand and body positions.",
  benefits: [
    "Muscle Versatility: Allows for targeted training of the chest, shoulders, or triceps with simple variations.",
    "Constant Core Engagement: Every variation requires the abdominal muscles to stabilize the torso.",
    "Upper Body Definition: High-repetition sets help build muscle endurance and aesthetic definition.",
    "No-Equipment Strength: Builds significant functional strength using only your bodyweight."
  ],
  steps: [
    "Standard Push-ups: Place hands shoulder-width apart to engage the chest and core stabilizers.",
    "Pike Push-ups: Lift your hips to form an inverted 'V' shape to shift the focus onto the shoulders.",
    "Wide Push-ups: Spread your hands wider than your shoulders to isolate the outer chest muscles.",
    "Mountain Climber Push-ups: Integrate rapid knee drives toward the chest between reps to maximize abdominal and cardio demand."
  ]
}

];