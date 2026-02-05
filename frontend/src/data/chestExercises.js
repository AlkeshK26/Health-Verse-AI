// src/data/chestExercises.js

// 1. SABSE PEHLE VIDEOS IMPORT KARO
// (Apne actual file names ke hisaab se path change kar lena)
const benchPressVideo =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282802/9_a3sucz.mp4';
const flatPressvideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770281659/1_wp9wkm.mp4';
const pushUpVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282776/4_d6rbhd.mp4';
const  fullChestRoutineVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282812/2_r0eehw.mp4';
const  chestFlyVideo  = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282792/5_wbikz9.mp4';
const dumbbellFlyVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282773/10_fvuklt.mp4';
const  cableFlyVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282775/11_p00m6j.mp4'
const  cableAnglesVideo =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282836/12_fag9dd.mp4';



// 2. DATA OBJECT BANAO
export const chestExercisesList = [
  {
    id: 1,
    name: 'Barbell Bench Press',
    // Imported variable use karo 👇
    video: benchPressVideo, 
    desc: 'The king of chest movements for overall mass and strength building.',
    benefits: [
      'Targets the entire pectoralis major.',
      'Builds pushing strength relevant for other lifts.',
      'Engages triceps and front deltoids heavily.'
    ],
    steps: [
      'Lie flat on the bench with your eyes under the bar.',
      'Grip the bar slightly wider than shoulder-width.',
      'Unrack and lower the bar slowly to your mid-chest.',
      'Explosively push the bar back up to the starting position.',
      'Keep your feet planted and back slightly arched.'
    ]
  },
  {
    id: 2,
    name: 'Flat Dumbbell Press',
    // Imported variable use karo 👇
    video: flatPressvideo,
    desc: 'Focuses on the upper clavicular head of the chest for a fuller look.',
    benefits: [
      'Emphasizes the upper chest muscles.',
      'Allows for a greater range of motion than barbells.',
      'Helps fix muscle imbalances between left and right sides.'
    ],
    steps: [
      'Set the bench to a 30-45 degree incline.',
      'Lift the dumbbells to shoulder height, palms facing forward.',
      'Press the weights up until your arms are extended.',
      'Lower them slowly until a good stretch is felt in the chest.',
      'Repeat without clanging the weights at the top.'
    ]
  },
  {
    id: 3,
    name: 'Standard Push Up',
    // Imported variable use karo 👇
    video: pushUpVideo, 
    desc: 'A classic bodyweight exercise that builds a solid foundation for chest size and endurance.',
    benefits: [
      'Activates the chest, shoulders, and triceps simultaneously.',
      'Improves core stability and abdominal strength.',
      'Can be performed anywhere without equipment.'
    ],
    steps: [
      'Start in a high plank position with hands placed slightly wider than shoulders.',
      'Engage your core and glutes to keep your body in a straight line (no sagging).',
      'Lower your body down efficiently until your chest nearly touches the floor.',
      'Keep your elbows at a 45-degree angle to your torso (don\'t flare them out).',
      'Push back up explosively to the starting position.'
    ]
  },
  
  {
    id: 4,
    name: 'Ultimate Home Chest Masterclass',
    // Yeh ek single video file hogi jisme teeno exercises combined honge 👇
    video: fullChestRoutineVideo, 
    desc: 'A complete 3-in-1 routine targeting the Upper, Lower, and Outer chest fibers for full development.',
    benefits: [
      'Target Lower Chest: Incline Push Ups reduce shoulder strain and hit lower fibers.',
      'Build Upper Shelf: Decline Push Ups shift weight to the clavicular head (upper chest).',
      'Widen the Chest: Wide Grip Push Ups maximize the stretch and outer chest activation.',
      'Comprehensive development without any gym equipment.'
    ],
    steps: [
      // Phase 1: Incline
      'PHASE 1 (Lower Chest): Place hands on a bench/couch. Keep body straight and lower chest to edge.',
      'Perform 12-15 reps focusing on the bottom squeeze.',
      
      // Phase 2: Decline
      'PHASE 2 (Upper Chest): Place feet on the bench and hands on floor. Brace core tightly.',
      'Lower nose to floor and push up explosively. Do 10-12 reps.',

      // Phase 3: Wide Grip
      'PHASE 3 (Outer Chest): Hands wider than shoulders on floor. Fingers turned slightly out.',
      'Lower deep to feel the stretch across the chest. Rep out until failure.'
    ]
  },
  {
    id: 5,
    name: 'Machine Chest Fly (Pec Deck)',
    // Imported variable use karo 👇
    video: chestFlyVideo, 
    desc: 'An isolation exercise that provides constant tension on the chest while minimizing shoulder strain.',
    benefits: [
      'Isolates the pectoralis major for maximum muscle growth (Hypertrophy).',
      'Safer than dumbbells as it prevents over-stretching the shoulder capsule.',
      'Provides peak contraction (squeeze) at the center of the movement.'
    ],
    steps: [
      'Adjust the seat so the handles are aligned with your mid-chest.',
      'Sit with your back flat against the pad and feet planted firmly.',
      'Maintain a slight bend in your elbows throughout the movement (Don’t lock arms).',
      'Bring handles together and squeeze your chest hard for 1 second.',
      'Return slowly, stopping before your elbows go behind your shoulders (Safety limit).'
    ]
  },

  {
    id: 6,
    name: 'Dumbbell Chest Fly',
    // Imported variable use karo 👇
    video: dumbbellFlyVideo, 
    desc: 'The best movement to build chest width and inner chest definition by stretching muscle fibers.',
    benefits: [
      'Creates a deep stretch that tears micro-fibers for growth (Hypertrophy).',
      'Targets the inner chest line (cleavage) when squeezed at the top.',
      'Opens up the rib cage and improves posture.'
    ],
    steps: [
      'Lie on a flat bench with dumbbells directly above your chest, palms facing each other.',
      'CRITICAL: Maintain a slight bend in your elbows (10-15 degrees) throughout the set.',
      'Lower the weights in a wide arc (like hugging a big tree) until you feel a deep stretch.',
      'Stop when your elbows are level with your torso (Going lower risks shoulder injury).',
      'Squeeze your chest muscles to bring the weights back to the starting position.'
    ]
  },

  {
    id: 8,
    name: 'Standing Cable Fly',
    // Imported variable use karo 👇
    video: cableFlyVideo, 
    desc: 'Uses constant tension from cables to maximize chest hypertrophy and inner chest definition.',
    benefits: [
      'Provides constant resistance throughout the entire range of motion.',
      'Allows for a deeper stretch and stronger peak contraction than dumbbells.',
      'Improves posture by requiring scapular retraction (shoulders back).'
    ],
    steps: [
      'Set pulleys to shoulder height and grab handles.',
      'Step forward into a staggered stance for stability.',
      'CRITICAL: Keep your chest up and retract your shoulder blades (don\'t hunch forward).',
      'Bring your hands together in front of your chest, squeezing hard.',
      'Return slowly to the start position, maintaining the arch in your chest.'
    ]
  },
  {
    id: 9,
    name: 'Cable Crossover (Angle Variations)',
    // Imported variable use karo 👇
    video: cableAnglesVideo, 
    desc: 'The ultimate guide to targeting every inch of your chest by simply changing the pulley height.',
    benefits: [
      'High-to-Low: Targets the Lower Chest for that defined underline.',
      'Mid-Level: Hits the Mid-Chest (Sternal Head) for overall thickness.',
      'Low-to-High: Builds the Upper Chest (Clavicular Head) or "shelf".'
    ],
    steps: [
      'Select your target area and adjust the pulley height accordingly.',
      'LOWER CHEST: Set pulley HIGH. Pull handles down towards your waist.',
      'MID CHEST: Set pulley at SHOULDER height. Pull arms straight across together.',
      'UPPER CHEST: Set pulley LOW. Scoop arms up towards your eye level.',
      'Keep elbows slightly bent and focus on the squeeze at the end of every rep.'
    ]
  }
  // Aage aur exercises add kar sakte ho...
];