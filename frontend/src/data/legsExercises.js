// src/data/legsExercises.js

// 1. Video Imports
const  smithMachinevideo =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282917/6_cffvij.mp4';
const  dumbellLunges = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282886/2_rwslh3.mp4';
const kneelingSquats =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282921/4_d7odxj.mp4';
const dumbellHome = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282979/8_glkdym.mp4';
const  legExtention =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282979/Quads_vvsik4.mp4';
const  Hamstring = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282960/Hamstrings_zr6dcg.mp4';
const  glute = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282966/Glutes_a8v3ev.mp4';
const  Calves =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282948/Calves_sivd4w.mp4';
const  legPress = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770283006/12_baakwf.mp4';
  
export const legsExercisesList = [

  {
    id: 1,
    name: 'Smith Machine Squats',
    video: smithMachinevideo,
    desc: 'A stable variation of the squat that allows for focused quad and glute engagement.',
    benefits: [
      'Controlled Movement: The fixed track provides extra stability for heavy lifting.',
      'Hypertrophy: Excellent for isolating the quadriceps through progressive overload.'
    ],
    steps: [
      'Position yourself under the bar with the barbell resting on your upper traps.',
      'MISTAKE: Gripping the bar too wide or letting your elbows flare too much.',
      'CORRECTION: Keep a firm, shoulder-width grip and tuck your elbows down.',
      'MISTAKE: Standing with your feet too close together or pointing inward.',
      'CORRECTION: Maintain a shoulder-width stance with toes slightly pointed out.',
      'Lower your hips until your thighs are parallel to the ground, then push back up.'
    ]
  },
  {
    id: 2,
    name: "Dumbbell Lunges",
    video: dumbellLunges,
    desc: "A dynamic compound exercise essential for building unilateral (single-leg) strength and core stability.",
    benefits: [
      "Muscle Balance: Helps identify and correct strength differences between your left and right legs.",
      "Core Engagement: Requires significant core activation to maintain balance throughout the movement."
    ],
    steps: [
      "Stand tall with a dumbbell in each hand by your sides.",
      "Step forward and lower your body until both of your knees form approximately 90-degree angles.",
      "MISTAKE: Allowing your back heel to touch the ground or keeping the back leg too flat.",
      "CORRECTION: Keep your back heel lifted high and maintain a straight vertical line with your torso.",
      "MISTAKE: Letting your front knee collapse inward or drift significantly out of alignment.",
      "CORRECTION: Keep your front knee aligned directly over your toes and push back to the starting position."
    ]
  },
  {
    id: 3,
    name: 'Kneeling Squats (Glute vs. Quad Focus)',
    video: kneelingSquats,
    desc: 'A specialized squat variation that can be adjusted to target either the glutes or the quadriceps.',
    benefits: [
      'Targeted Activation: Changing your torso angle shifts the load between the glutes and quads.',
      'Lower Back Safety: Reduces spinal loading compared to traditional standing squats.'
    ],
    steps: [
      'Kneel on a mat with your torso upright, holding a weight at chest level.',
      'GLUTE FOCUS: Hinge at the hips and lean your torso slightly forward as you sit back.',
      'QUAD FOCUS: Maintain a more vertical torso and sit straight down toward your heels.',
      'Squeeze the target muscle as you return to the starting kneeling position.'
    ]
  },

  {
    id: 4,
    name: 'Dumbbell Home Alternatives',
    video: dumbellHome,
    desc: 'Effective dumbbell variations that can replace heavy gym machines for lower body training.',
    benefits: [
      'Accessibility: Perform high-quality leg training with minimal equipment.',
      'Versatility: Replicate machine patterns like the leg press or hack squat using dumbbells.'
    ],
    steps: [
      'Leg Press Replacement: Perform deep dumbbell squats with a slow, controlled tempo.',
      'Hack Squat Replacement: Perform dumbbell squats with your heels slightly elevated to increase quad engagement.',
      'Lunge Replacement: Use standard dumbbell lunges to replace machine-based single-leg presses.'
    ]
  },
  {
    id: 1,
    name: 'Leg Extensions',
    video: legExtention,
    desc: 'An isolation exercise that specifically targets the quadriceps for better definition and strength.',
    benefits: [
      'Isolated Quad Growth: Directly targets the front of the thigh.',
      'Knee Stability: Strengthens the muscles around the knee joint.',
      'Definition: Helps in achieving the "teardrop" look in the legs.'
    ],
    steps: [
      'Sit on the machine with your back against the pad and shins behind the rollers.',
      'CORRECTION: Keep your quads engaged and move through a full range of motion.',
      'MISTAKE: Do not use momentum or "swing" the weight up.',
      'Extend your legs fully and squeeze at the top before lowering slowly.'
    ]
  },
  {
    id: 2,
    name: 'Hamstring Curls',
    video: Hamstring,
    desc: 'Focuses on the posterior chain to build thicker, stronger hamstrings.',
    benefits: [
      'Posterior Strength: Essential for balancing leg development.',
      'Injury Prevention: Stronger hamstrings protect the ACL during physical activity.'
    ],
    steps: [
      'Stand or lie on the machine according to its design and hook your heels under the pad.',
      'Curl the weight toward your glutes by flexing the knees.',
      'MISTAKE: Do not lift your hips off the pad to assist the movement.',
      'Slowly return to the starting position.'
    ]
  },
  {
    id: 3,
    name: 'Glute Bridges/Hip Thrusts',
    video: glute,
    desc: 'The gold standard for glute isolation and building explosive lower body power.',
    benefits: [
      'Glute Activation: Highly effective for the gluteus maximus.',
      'Postural Support: Helps alleviate lower back pain by strengthening the glutes.'
    ],
    steps: [
      'Position your upper back against a bench or lie flat on the floor.',
      'Drive through your heels to lift your hips toward the ceiling.',
      'Squeeze your glutes hard at the top of the movement.',
      'Lower your hips under control.'
    ]
  },
 {
    id: 4,
    name: 'Seated Calf Raises',
    video: Calves,
    desc: 'An isolation exercise specifically targeting the calf muscles.',
    benefits: [
      'Calf Definition: Focuses on the gastrocnemius and soleus muscles.',
      'Ankle Strength: Improves power for jumping and running.'
    ],
    steps: [
      'Sit on the calf raise machine with the pad resting on your lower thighs.',
      'Raise your heels as high as possible by pushing through the balls of your feet.',
      'Hold the contraction at the top for a second.',
      'Lower your heels back down for a deep stretch.'
    ]
  },

  {
    id: 5,
    name: 'Leg Press',
    video: legPress,
    desc: 'A fundamental machine exercise for building significant lower body power and mass.',
    benefits: [
      'High Loading Capacity: Allows for heavier weight than traditional squats.',
      'Lower Back Support: Reduces spinal loading while focusing on the legs.'
    ],
    steps: [
      'Sit on the machine and place your feet on the platform.',
      'MISTAKE: Allowing your knees to collapse inward or keeping feet too narrow.',
      'CORRECTION: Keep knees aligned with your toes and maintain a shoulder-width foot stance.',
      'MISTAKE: Lowering the platform too deep, causing your lower back to lift off the pad.',
      'CORRECTION: Only lower the weight as far as you can without your hips curling up.',
      'MISTAKE: Pushing through your toes or placing hands on your knees for assistance.',
      'CORRECTION: Drive through your heels and keep your hands on the machine handles.',
      'Push the platform up until your legs are extended but not locked.'
    ]
  },
];
