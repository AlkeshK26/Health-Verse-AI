// src/data/backExercises.js

// 1. Video Imports (Ensure filenames match your files)

 const deadliftVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282511/Dead_Lift_mmmv9z.mp4';
const latPulldownVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282422/2_msqdoa.mp4';
const  seatedRowVideo  = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282482/5_xmtozs.mp4';
const  pullUpVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282378/6_dois3g.mp4';
const straightArmPulldownVideo  = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282398/7_gy80sq.mp4';
const dumbbellRowVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282464/9_tmr7cn.mp4';
const landmineRowVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282465/10_hziyvc.mp4';
const supportedRowVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282514/Back_biceps_jeklti.mp4';
const machineRowVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282496/12_njqiyh.mp4';
const backExtensionVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282370/1_ncscwa.mp4';
const tBarRowVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282533/18_ocs5vt.mp4';
const dumbbellBackVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282566/19_zub6rs.mp4';



export const backExercisesList = [
  {
    id: 1,
    name: 'Deadlift',
    video: deadliftVideo, // Variable use kiya
    desc: 'The ultimate compound movement for overall back thickness and power.',
    benefits: [
      'Hits the entire posterior chain (Back, Glutes, Hamstrings).',
      'Increases overall raw strength and core stability.',
      'Boosts testosterone and growth hormone production.'
    ],
    steps: [
      'Stand with feet hip-width apart, barbell over mid-foot.',
      'Hinge at hips to grip the bar (hands shoulder-width).',
      'Keep your back straight and chest up.',
      'Drive through your heels to lift the bar, keeping it close to legs.',
      'Lock out hips at the top, then lower with control.'
    ]
  },

  {
    id: 2,
    name: 'Lat Pulldown (Grip Mastery)',
    // Imported variable use karo 👇
    video: latPulldownVideo, 
    desc: 'One machine, four grips. Master the art of targeting specific back muscles by changing your hand position.',
    benefits: [
      'Wide Grip: Targets "Upper Lats" to build the V-Taper width.',
      'Standard Grip: Hits the "Entire Lat" for overall mass and strength.',
      'Reverse Grip: Shifts focus to "Lower Lats" and biceps.',
      'Neutral Grip: Builds back thickness by targeting "Mid & Lower Lats".'
    ],
    steps: [
      'WIDE GRIP: Hands wider than shoulders. Pull bar to upper chest to hit the outer sweep.',
      'STANDARD GRIP: Hands slightly wider than shoulders. Keep torso upright and drive elbows down.',
      'REVERSE GRIP: Palms facing you (Underhand). Pull lower towards your ribcage for lower lat activation.',
      'NEUTRAL GRIP: Use V-Bar or parallel handles. Pull close to body to squeeze the mid-back.',
      'CRITICAL TIP: Don\'t swing your body. Keep your chest up and let the lats do the work.'
    ]
  },
{
    id: 3,
    name: 'Seated Cable Row (Grip Variations)',
    // Imported variable use karo 👇
    video: seatedRowVideo, 
    desc: 'The ultimate builder for back thickness. Changing the attachment shifts focus from inner back to outer lats.',
    benefits: [
      'Narrow V-Grip: Targets the "Mid-Back" (Rhomboids & Traps) for thickness.',
      'Medium Neutral Grip: Shifts tension to the "Lats" for width and sweep.',
      'Wide Overhand Grip: Hits the "Upper Back" (Rear Delts & Upper Traps).'
    ],
    steps: [
      'Sit with knees slightly bent and torso upright (chest out).',
      'NARROW GRIP: Pull the V-handle toward your belly button. Squeeze shoulder blades together.',
      'MEDIUM GRIP: Use a neutral mag-grip. Drive elbows back while keeping them close to your sides.',
      'WIDE GRIP: Use a long bar. Pull toward your upper chest with elbows flared out slightly.',
      'Release the weight slowly to feel a stretch in the lats before the next rep.'
    ]
  },

  {
    id: 4,
    name: 'Perfect Pull Up',
    // Imported variable use karo 👇
    video: pullUpVideo, 
    desc: 'The definitive guide to fixing your pull-up form. Stops momentum and forces the lats to grow.',
    benefits: [
      'Builds a wide "Cobra" back by targeting the upper and outer lats.',
      'Corrects "rounded shoulders" posture by strengthening the rear delts and traps.',
      'Engages the core specifically to prevent swinging (anti-momentum).'
    ],
    steps: [
      'Start from a "Dead Hang" with arms fully extended (Don\'t do half reps).',
      'CRITICAL: Depress your shoulders (pull them down away from ears) before you pull up.',
      'Drive your elbows down towards your pockets to lift your body.',
      'Aim to bring your CHEST to the bar, not just your chin (prevents neck strain).',
      'Lower yourself slowly back to a dead hang without swinging your legs.'
    ]
  },

  {
    id: 5,
    name: 'Straight Arm Lat Pulldown',
    // Imported variable use karo 👇
    video: straightArmPulldownVideo, 
    desc: 'An isolation movement that removes the biceps from the equation to strictly target the lats.',
    benefits: [
      'Isolates the Lats by preventing biceps from helping.',
      'Fixes the common mistake of turning it into a tricep exercise.',
      'Improves shoulder stability and lat activation for pull-ups.'
    ],
    steps: [
      'Stand with a slight hip hinge and grab the rope/bar at eye level.',
      'CRITICAL: Keep your elbows "soft" but locked in position (Do not bend and extend them).',
      'Depress your shoulders (keep them away from your ears).',
      'Pull the rope down to your thighs using a sweeping motion (like a pendulum).',
      'Squeeze your lats hard at the bottom, then return slowly to eye level.'
    ]
  },

  {
    id: 6,
    name: 'One-Arm Dumbbell Row',
    // Imported variable use karo 👇
    video: dumbbellRowVideo, 
    desc: 'The king of back builders. The secret lies in pulling "back," not just "up."',
    benefits: [
      'Maximizes Lat activation by pulling in an arc towards the hip.',
      'Reduces bicep involvement (common mistake when pulling to chest).',
      'Fixes muscle imbalances by working one side at a time.'
    ],
    steps: [
      'Place one knee and hand on a flat bench. Keep your back parallel to the ground.',
      'Let the dumbbell hang down fully to stretch the lat.',
      'CRITICAL: Drag the weight back towards your HIP/POCKET (like starting a lawnmower), not straight up to your shoulder.',
      'Keep your elbow close to your body throughout the movement.',
      'Lower the weight slowly under control to get a deep stretch at the bottom.'
    ]
  },

  {
    id: 7,
    name: 'Landmine Row (T-Bar)',
    // Imported variable use karo 👇
    video: landmineRowVideo, 
    desc: 'A heavy compound movement that adds thickness to the mid-back while protecting the lower back.',
    benefits: [
      'Targets the entire back with a focus on Lat thickness and lower traps.',
      'The fixed pivot point provides more stability than free-standing barbell rows.',
      'Neutral grip (palms facing each other) is safer for shoulders and allows heavier lifting.'
    ],
    steps: [
      'Straddle the bar and grip the V-handle securely.',
      'CRITICAL: Hinge at your hips (push butt back) until your torso is at a 45-degree angle.',
      'Keep your chest up and lower back arched (Don\'t round your spine).',
      'Pull the bar towards your waistline, driving your elbows back (not just up).',
      'Squeeze your back hard at the top, then lower the weight fully to stretch the lats.'
    ]
  },

  {
    id: 8,
    name: 'Supported Dumbbell Row (Form Fix)',
    // Imported variable use karo 👇
    video: supportedRowVideo, 
    desc: 'The classic knee-on-bench variation. Fixes the common error of turning this back exercise into a bicep workout.',
    benefits: [
      'Ensures Lat activation by fixing the pulling path (towards hip, not shoulder).',
      'Provides maximum stability by supporting the knee and hand on the bench.',
      'Prevents lower back strain by keeping the spine neutral and supported.'
    ],
    steps: [
      'Place your right knee and right hand on the bench for support.',
      'Extend your left leg back and keep your back flat (tabletop position).',
      'CRITICAL: Do not pull the weight straight up to your chest using your biceps (Red X).',
      'Instead, drive your elbow BACK towards your hip bone (Green Check).',
      'Lower the weight fully to get a deep stretch in the lat before the next rep.'
    ]
  },

  {
    id: 9,
    name: 'Chest Supported Machine Row',
    // Imported variable use karo 👇
    video: machineRowVideo, 
    desc: 'A safe and effective way to build a thick back. The chest support eliminates cheating (momentum).',
    benefits: [
      'Wide Grip: Targets the "Upper Back" (Rear Delts & Traps) for 3D shoulder look.',
      'Neutral Grip: Targets the "Lats" for back width and sweep.',
      'Underhand/Narrow Grip: Hits the "Lower Lats" and mid-back thickness.'
    ],
    steps: [
      'Adjust the seat so your chest is firmly against the pad.',
      'UPPER BACK: Use the Wide handles. Pull elbows high and wide.',
      'LATS: Use the Neutral (vertical) handles. Drive elbows close to your body.',
      'LOWER LATS: Use the Lower/Underhand handles. Pull towards your hips.',
      'Squeeze hard at the peak and let the weight stretch your back fully on return.'
    ]
  },

  {
    id: 10,
    name: 'Back Extension (Hyperextension)',
    // Imported variable use karo 👇
    video: backExtensionVideo, 
    desc: 'Strengthens the entire posterior chain. Adjusting your spine curvature changes the target muscle completely.',
    benefits: [
      'Neutral Spine: Targets the "Lower Back" (Erectors) for stability and strength.',
      'Rounded Spine: Shifts focus to "Glutes & Hamstrings" by disengaging the back.',
      'Injury Prevention: Teaches how to hinge at the hips without damaging the spine.'
    ],
    steps: [
      'Adjust the pad so it sits just below your hip bone (to allow bending).',
      'CRITICAL SAFETY: Do not over-extend (arch back) at the top. Stop when your body is in a straight line.',
      'TARGET LOWER BACK: Keep your head neutral and spine straight. Lift using your back muscles.',
      'TARGET GLUTES: Tuck your chin to chest and round your upper back. Squeeze glutes hard to lift.',
      'Lower yourself slowly, feeling the stretch in your hamstrings.'
    ]
  },
  {
    id: 11,
    name: 'T-Bar Row (Grip Mastery)',
    // Imported variable use karo 👇
    video: tBarRowVideo, 
    desc: 'The versatile mass builder. changing the handle completely shifts the target muscle.',
    benefits: [
      'Lower Lats: Narrow/Reverse grip targets the lower sweep.',
      'Upper Back: Wide grip with flared elbows hits the Traps & Rear Delts.',
      'Mid-Back Thickness: V-Grip targets the Rhomboids and middle traps.'
    ],
    steps: [
      'Straddle the bar and maintain a strong 45-degree hip hinge.',
      'TARGET LOWER LATS: Use a straight bar. Pull low towards your hips.',
      'TARGET UPPER BACK: Use a wide bar. Pull high towards your chest with elbows out.',
      'TARGET MID-BACK: Use the V-Handle. Pull towards your stomach and squeeze shoulder blades.',
      'Keep your spine neutral throughout (don\'t round your back).'
    ]
  },
  {
    id: 12,
    name: 'Dumbbell Back Transformation',
    // Imported variable use karo 👇
    video: dumbbellBackVideo, 
    desc: 'No machines needed. A complete 3-exercise routine to hit every angle of your back using just dumbbells.',
    benefits: [
      'Rear Delt Fly: Targets the often-neglected rear delts for 3D shoulders.',
      'Underhand Row: Shifts focus to the "Lower Lats" (Blue Zone) for back width.',
      'Overhand Row: Targets the "Upper Back" (Red Zone) for thickness and posture.'
    ],
    steps: [
      'MOVE 1: REAR DELT FLY (3x10 reps). Hinge at hips. Raise arms to the side like wings. Squeeze rear delts.',
      'MOVE 2: UNDERHAND ROW (3x10 reps). Palms facing forward (Supinated). Pull towards your hips to hit lats.',
      'MOVE 3: OVERHAND ROW (3x12 reps). Palms facing legs (Pronated). Pull high with elbows flared to hit upper back.'
    ]
  }
 
];