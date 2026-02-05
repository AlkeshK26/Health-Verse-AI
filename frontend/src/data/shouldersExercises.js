// src/data/shouldersExercises.js

// 1. Video Imports
const  shoulderPressVideo =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283123/1_v14wng.mp4';
const  smithPressVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283117/2_ouzfsr.mp4';
const reverseFlyVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283176/3_ucbcfw.mp4';
const cableShoulderVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283138/4_s115oz.mp4';
const shoulderMistakesVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283153/11_g4zgyo.mp4';
const  lateralRaiseFixedVideo =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283103/6_cgwfzl.mp4';
const barbellPressVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283139/7_iktvsa.mp4';
const dumbbellRowVideo =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283203/8_swcpy8.mp4';
const ropePressVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283188/9_a7fz18.mp4';
const lateralRaiseVideo =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283153/11_g4zgyo.mp4';
const latPulldownVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283175/12_hiyulc.mp4';
const  shoulderPress3DVideo =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283282/13_jyqtij.mp4';



export const shouldersExercisesList = [
{
    id: 1,
    name: 'Dumbbell Shoulder Press (Form Fix)',
    // Imported variable use karo 👇
    video: shoulderPressVideo, 
    desc: 'The gold standard for broad shoulders. Small adjustments in elbow position make a huge difference in safety and growth.',
    benefits: [
      'Scapular Plane: Tucking elbows slightly forward prevents rotator cuff impingement.',
      'Targets the Front & Side Delts effectively without stressing the joints.',
      'Full Range of Motion: Allows for a deeper stretch safely compared to the flared-out position.'
    ],
    steps: [
      'Sit with back support and kick dumbbells up to shoulder height.',
      'CRITICAL MISTAKE: Do not flare elbows out to the side at 90 degrees (Red X).',
      'CORRECTION: Tuck your elbows slightly forward (roughly 30-45 degrees).',
      'Press the weights straight up overhead until arms are extended.',
      'Lower the weights slowly, keeping your elbows in that "Safe Zone" (in front of your body line).'
    ]
  },
  {
    id: 2,
    name: 'Smith Machine Shoulder Press',
    // Imported variable use karo 👇
    video: smithPressVideo, 
    desc: 'Provides fixed stability to isolate the deltoids. Perfect for lifting heavy without worrying about balance.',
    benefits: [
      'Vertical Forearms: Adjust grip so forearms are straight up-and-down at the bottom.',
      'Spine Safety: Prevents excessive lower back arching (Hyper-extension) common in free weights.',
      'Constant Tension: The fixed path forces the delts to work continuously without "resting" at the top.'
    ],
    steps: [
      'Set the bench to a high incline (almost vertical) under the bar.',
      'GRIP CHECK: Hold the bar slightly wider than shoulders. Forearms must be vertical at the bottom.',
      'Unrack the bar and keep your spine neutral against the pad (Don\'t over-arch).',
      'Lower the bar slowly to chin or upper chest level.',
      'Press up explosively to full extension without locking out your elbows violently.'
    ]
  },
  {
    id: 3,
    name: 'Reverse Pec Deck Fly (Rear Delts)',
    // Imported variable use karo 👇
    video: reverseFlyVideo, 
    desc: 'The key to 3D shoulders. Changing your hand position forces the rear delts to take over instead of the back.',
    benefits: [
      'Palms Down Grip: Targets the Rear Delts more effectively than the vertical grip.',
      'Shoulder Stability: Keeping shoulders down (depressed) prevents trap engagement.',
      'Postural Correction: Strengthens the muscles responsible for pulling shoulders back.'
    ],
    steps: [
      'Sit facing the pad. Adjust seat so handles are at shoulder level.',
      'CRITICAL: Hold the HORIZONTAL handles with palms facing down (Pronated Grip).',
      'Keep your shoulders depressed (away from ears). Do not shrug.',
      'Push your arms back in a wide arc, leading with your elbows.',
      'Squeeze the back of your shoulders hard, then return slowly without letting weights touch.'
    ]
  },
  {
    id: 4,
    name: 'Ultimate Cable Shoulder Routine',
    // Imported variable use karo 👇
    video: cableShoulderVideo, 
    desc: 'A complete 3D shoulder workout using only cables. The constant tension forces growth in all three deltoid heads.',
    benefits: [
      'Front Delts: Rope Front Raise provides continuous resistance unlike dumbbells.',
      'Lateral Delts: Cable Y-Raises hit the side delts in a unique lengthened position.',
      'Rear Delts: Face Pulls correct posture and build the upper back/rear delts.'
    ],
    steps: [
      'MOVE 1: ROPE FRONT RAISE. Pull the rope from between your legs straight up to eye level.',
      'MOVE 2: CABLE Y-RAISE. Cross the cables. Raise your arms up and out in a "Y" shape.',
      'MOVE 3: CABLE LATERAL RAISE. Stand sideways. Raise handle to shoulder height (keep elbow bent).',
      'MOVE 4: FACE PULL. Set pulley high. Pull rope to your forehead and spread your hands apart.',
      'Perform 12-15 reps for each movement to maximize the pump.'
    ]
  },
  {
    id: 5,
    name: 'Shoulder Training Mistakes (Form Fixes)',
    // Imported variable use karo 👇
    video: shoulderMistakesVideo, 
    desc: 'Corrects the 3 most common errors that stop shoulder growth and cause injury.',
    benefits: [
      'Lateral Raise: Moving arms slightly forward (Scapular Plane) targets side delts safely.',
      'Upright Row: Taking a wider grip prevents shoulder impingement (pain).',
      'Overhead Press: Ensuring symmetrical pressing prevents muscle imbalances.'
    ],
    steps: [
      'FIX 1 (Lateral Raise): Don\'t lift straight out to the side (T-Pose). Bring arms slightly forward in a "V" shape.',
      'FIX 2 (Upright Row): Stop using a close grip (Red X). Widen your hands to shoulder-width for joint space.',
      'FIX 3 (Press): Avoid uneven pressing where one arm rises faster. Focus on keeping the bar/weights level.'
    ]
  },
  {
    id: 6,
    name: 'Seated Lateral Raise (Perfect Form)',
    // Imported variable use karo 👇
    video: lateralRaiseFixedVideo, 
    desc: 'The definitive guide to side delts. shifting your arm angle slightly forward saves your joints and explodes growth.',
    benefits: [
      'Scapular Plane: Lifting arms 30-degrees forward prevents shoulder impingement.',
      'Seated Position: Eliminates momentum/cheating (swinging) to isolate the delts completely.',
      'Green Line Alignment: Ensures the force is directed onto the side delt, not the traps.'
    ],
    steps: [
      'Sit on the edge of a bench with feet planted.',
      'CRITICAL MISTAKE: Do not lift straight out to your sides like a "T" (Red Line).',
      'CORRECTION: Bring your hands slightly forward to create a shallow "V" shape (Green Line).',
      'Lift elbows to shoulder height (think about pushing the weights "out", not just "up").',
      'Control the weight on the way down (don\'t let it drop).'
    ]
  },
  {
    id: 7,
    name: 'Barbell Overhead Press (Form Mastery)',
    // Imported variable use karo 👇
    video: barbellPressVideo, 
    desc: 'The ultimate strength builder for shoulders. Grip width dictates your power output and safety.',
    benefits: [
      'Vertical Forearms: Stacking joints (wrist over elbow) maximizes pushing power.',
      'Joint Safety: Prevents wrist strain and uneven shoulder loading seen with wide grips.',
      'Full ROM: Allows the bar to travel in the most efficient straight line.'
    ],
    steps: [
      'Rack the bar at chest height. Step in and grab the bar.',
      'GRIP CHECK: Hands should be just outside shoulders so forearms are VERTICAL (Green Line).',
      'Unrack and stand with feet shoulder-width apart. Brace your core.',
      'Press the bar straight up. As it clears your forehead, push your head "through the window".',
      'Lower the bar under control to the upper chest, resetting your vertical forearm position.'
    ]
  },

  {
    id: 8,
    name: 'Dumbbell Row (Form Perfection)',
    video: dumbbellRowVideo, // Imported variable 
    desc: 'Dumbbell row ek powerful compound exercise hai jo lats ko isolate karke back thickness badhane mein help karti hai.',
    benefits: [
        'Lats isolation: Sahi angle se lats aur rhomboids par load aata hai.',
        'Shoulder safety: 90-degree angle elbow position shoulder joint ko safe rakhti hai.',
        'Muscle growth: Sahi trajectory (path) se muscle fibers better tear hote hain.',
        'Asymmetry fix: Ek haath se row karne se dono sides ki muscle imbalances door hoti hain.'
    ],
    steps: [
        'Apna ek haath aur ghutna bench par rakhein, aur dusre pair ko ground par stability ke liye tikayein.',
        'Galti na karein: Elbow ko 45-degree angle par upar na khinchein.',
        'Correction: Elbow aur torso ke beech hamesha 90-degree ka angle banayein jab dumbbell upar aaye.',
        'Dumbbell ko upar khinchte waqt dhyaan rahe ki aapki back bilkul seedhi (neutral) honi chahiye.',
        'Movement ke top par shoulder blades ko squeeze karein aur slow control ke saath niche layein.'
    ]
},
{
    id: 9,
    name: 'Rope  Shoulder Press',
    video: ropePressVideo, 
    desc: 'Shoulders ke liye ek powerful exercise, lekin galat elbow position joints ko damage kar sakti hai.',
    benefits: [
        'Better Range of Motion: Dumbbells se muscles ko deep stretch milta hai.',
        'Shoulder Health: Sahi angle shoulders par pressure kam karta hai.',
        'Balanced Growth: Dono shoulders par barabar load aata hai.'
    ],
    steps: [
        'Bench par baith kar dumbbells ko shoulder level tak layein.',
        'Galti: Elbows ko bilkul side mein flare-out na karein (Red X).',
        'Fix: Elbows ko thoda aage (Scapular plane) mein rakhein.',
        'Weights ko overhead press karein aur upar shoulder blades ko squeeze karein.'
    ]
},
{
    id: 10,
    name: 'standing Lateral Raise',
    video: lateralRaiseVideo, 
    desc: 'Side delts ko isolate karne aur shoulders ko wider look dene ke liye best exercise hai.',
    benefits: [
        'Better Isolation: Baith kar karne se swinging (momentum) kam ho jati hai.',
        'Shoulder Width: Direct tension side delts par rehti hai.'
    ],
    steps: [
        'Bench ke corner par baith kar dumbbells ko side mein rakhein.',
        'Galti: Dumbbells ko body ke bilkul parallel "T" shape mein lift na karein.',
        'Fix: Arms ko thoda sa aage (approx 30 degrees) rakh kar lift karein (Scapular Plane).',
        'Weights ko shoulder level tak layein aur peak par ek second ke liye hold karein.'
    ]
},
{
    id: 11,
    name: 'Straight Arm Lat Pulldown',
    video: latPulldownVideo, 
    desc: 'Back ko isolate karne ki ek behtareen exercise, agar form sahi ho toh.',
    benefits: [
        'Pure Lat Isolation: Biceps ka involvement kam ho jata hai.',
        'V-Taper: Back ki width badhane mein help milti hai.'
    ],
    steps: [
        'Galti: Rope ko haathon se neeche na khinchein, ye triceps exercise nahi hai.',
        'Fix: Elbows ko "soft lock" (halki mudi hui) rakhein aur lats ka use karke weight neeche layein.',
        'Cues: Sochiye ki aap apne elbows ko hips ki taraf le ja rahe hain.',
        'Movement ke end mein back ko squeeze karein aur slow control ke saath upar layein.'
    ]
},
{
    id: 12,
    name: 'Seated Dumbbell Shoulder Press',
    video: shoulderPress3DVideo, 
    desc: 'Dumbbells ka use karke shoulders ko har angle se train karein aur 3D look paayein.',
    benefits: [
        'Versatility: Ek hi set of dumbbells se front, lateral, aur rear delts target hote hain.',
        'Shoulder Isolation: Seated position momentum ko rok kar deltoids par focus badhati hai.'
    ],
    steps: [
        'Bench par seedhe baith kar dumbbells ko shoulder level par layein.',
        'FRONT DELTS: Dumbbells ko seedha overhead press karein aur upar squeeze karein.',
        'LATERAL DELTS: Arms ko side mein lift karein (Lateral Raise) side width badhane ke liye.',
        'REAR DELTS: Thoda aage jhuk kar (Bent-over) dumbbells ko peeche ki taraf fly karein.'
    ]
}

];