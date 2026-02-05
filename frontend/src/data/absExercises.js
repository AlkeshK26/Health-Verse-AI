// src/data/absExercises.js

// 1. Video Imports
const roller = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770280272/1_cgkr3v.mp4';
const plank = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770280249/2_jejtip.mp4';
const core  =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770280255/3_zojgvl.mp4';
const Combinedcore = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282227/4_nmp9gp.mp4';
const  Abs_Compilation = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770280235/Abs_f67u6e.mp4';



export const absExercisesList = [
    {
        id: 20,
        name: 'Ab Roller (Ab Wheel Rollouts)',
        video: roller,
        desc: 'An advanced core stability exercise that targets the entire abdominal wall, including the deep core muscles.',
        benefits: [
            'Core Stability: Increases core endurance to protect the spine and lower back.',
            'Deep Muscle Engagement: Targets the rectus abdominis, obliques, and transverse abdominis.',
            'Full Body Control: Engages the arms, shoulders, and back for stabilization.'
        ],
        steps: [
            'Kneel on a mat and place the ab roller directly under your shoulders.',
            'MISTAKE: Starting with the roller too far forward or too far back.',
            'CORRECTION: Align the roller in a vertical line directly beneath your shoulders.',
            'MISTAKE: Arching or sagging your lower back toward the floor.',
            'CORRECTION: Maintain a slight rounding of the back (posterior pelvic tilt) and keep the core tight.',
            'MISTAKE: Leaving the hips behind while only moving the arms forward.',
            'CORRECTION: Move your hips and torso forward in sync with the roller.',
            'Roll forward slowly and use your core strength to pull back to the starting position.'
        ]
    },
    {
        id: 7,
        name: 'Plank Perfection',
        video: plank,
        desc: 'Transform your core training by mastering the technical nuances of the plank.',
        benefits: [
            'Structural Integrity: Protects the spine and improves posture.',
            'Total Engagement: Activates the abs, glutes, and shoulders.'
        ],
        steps: [
            'MISTAKE: Sagging the lower back or lifting hips too high.',
            'CORRECTION: Maintain a flat back and a neutral spine.',
            'MISTAKE: Hands together or elbows flared.',
            'CORRECTION: Keep forearms parallel and shoulders stacked over elbows.'
        ]
    },

    {
        id: 1,
        name: 'Core Exercise ',
        video: core,
        category: 'Abs',
        desc: 'A dynamic rotational exercise focusing on the obliques and overall core stability using a weight plate.',
        benefits: [
            'Exerxise  - Russian Twist with Plate',
            'Oblique Strength, Core Stability,Abdominal Definition ',
            'Exercise - V-Sit Twist',
            'Isometric Endurance,Lower Ab Activation,Balance & Coordination ',
            ' Exercise - Flutter Kicks',
            'Lower Abdominal Focus,Hip Flexor Strength,Core Resilience',
        ],
        steps: [
            'Exerxise  - Russian Twist with Plate',
            'Sit on the floor with knees bent and feet elevated.',
            'Exercise - V-Sit Twist',
            'Balance on your sit bones with your legs extended in a "V" shape.',
            ' Exercise - Flutter Kicks',
            'Lie flat on your back or lean slightly back on your elbows/hands.',

        ]
    },

{
  id: 1,
  name: 'Core & Abdominal Circuit',
  video: Combinedcore,
  desc: 'A comprehensive core training program that combines bodyweight and weighted movements to target the upper, lower, and oblique abdominal muscles.',
  benefits: [
    'Total Abdominal Engagement: Hits the upper, lower, and lateral (oblique) regions in one session.',
    'Progressive Intensity: Includes level-based movements for lower abs to match your strength.',
    'Enhanced Rotational Power: Weighted twists build strength for daily movements and athletic performance.',
    'Isometric Endurance: Static holds like the V-sit build long-term core stability.',
    'Postural Support: Strengthens the core stabilizers to protect the lower back and improve posture.'
  ],
  steps: [
    'Russian Twist: Sit with elevated feet and rotate a weight plate side-to-side for 1 minute.',
    'V-Sit Twist: Balance on your sit bones and rotate your upper body while keeping legs steady.',
    'Crunches: Perform 30 reps with a controlled squeeze at the top of the movement.',
    'Bicycle Crunches: Alternate touching opposite elbow to knee for 20-30 reps.',
    'Toe Touches: Reach for your toes with legs extended vertically for 30 reps.',
    'Reverse Crunches: Lift your hips off the floor for 20 reps to isolate the lower abs.',
    'Flutter Kicks: Alternate small leg kicks while keeping your lower back flat on the ground.',
    'Side Plank Hip Lifts: Perform 15 reps on each side to strengthen the obliques.',
    'Plank Correction: Hold a high or forearm plank while maintaining a neutral spine and flat back.',
    'Mountain Climbers: Drive your knees toward your chest in a high plank position for 2 sets.'
  ]
},
{
  id: 1,
  name: 'Comprehensive Core & Abdominal Circuit',
  category: 'Abs',
  video: Abs_Compilation,
  desc: 'A complete abdominal training program combining bodyweight and machine-based movements to target the upper, lower, and lateral core muscles.',
  benefits: [
    'Full Abdominal Range: Targets the upper, lower, and oblique regions for balanced development.',
    'Progressive Stability: Levels allow for gradual increases in core tension and back protection.',
    'Isometric Endurance: Static holds like the V-sit and plank build long-term stability.',
    'Functional Rotational Power: Weighted twists strengthen the core for real-world movements and athletic activities.',
    'Postural Integrity: Strengthens stabilizers to support the spine and prevent lower back pain.'
  ],
  steps: [
    'Russian Twist with Plate: Sit with elevated feet and rotate a weight plate side-to-side for 1 minute.',
    'V-Sit Twist: Balance on your sit bones and rotate your upper body while keeping your legs steady.',
    'Crunches: Perform 30 repetitions with a controlled squeeze at the top of each movement.',
    'Bicycle Crunches: Alternate touching your opposite elbow to your knee for 20-30 reps.',
    'Toe Touches: Reach for your toes with legs extended vertically toward the sky for 30 reps.',
    'Reverse Crunches: Lift your hips off the floor for 20 reps to isolate the lower abdominal wall.',
    'V-Sit Hold: Maintain a rigid "V" position with arms extended forward for 1 minute.',
    'Plank Correction: Hold a forearm plank while ensuring a neutral spine and a flat, non-sagging back.',
    'Flutter Kicks: Alternate small leg kicks while maintaining constant core tension.',
    'Side Plank Hip Lifts: Perform 15 repetitions on each side to engage and strengthen the obliques.',
    'Abdominal Machine Crunch: Use a specialized gym machine for weighted resistance to build core thickness.',
    'Mountain Climbers: Drive your knees toward your chest in a high plank position for 2 full sets.'
  ]
},

];