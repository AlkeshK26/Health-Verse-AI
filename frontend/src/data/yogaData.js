// 1. Video Imports (Paths should match your folder structure)
// import kapalbhatiVideo from './Yoga/KapalbhatiPranayama.mp4';
const flowVideo =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770284006/1_zfrdyb.mp4';
const anulomVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770284009/anulom-vilom_dbjmv5.mp4';
const ardhaMatsyendraVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770284041/ArdhaMatsyendrasana_ywpbnt.mp4';
const ashtangaVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770284016/AshtangaYoga_rpfuig.mp4'; // Ensure this file exists with space
const bhastrikaVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770284015/BhastrikaPranayama_nv3rn2.mp4';
const bhramariVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770284018/Bhramari_Pranayama_a0bd41.mp4';
const chakrasanaVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770284017/Chakrasana_dtowf7.mp4';
const cobraVideo =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770284020/cobrapose_tvi1c0.mp4';
const dhanurasanaVideo =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770284021/Dhanurasana_mhi3hr.mp4';
const halasanaVideo =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770284023/Halasana_muezo5.mp4';
const padmasanaVideo =  'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770284119/Padmasana_wrbdjk.mp4';
const paschimottanaVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770284029/Paschimottanasana_pnzr5s.mp4';
const trikonasanaVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770284036/TrikonasanaTrianglePose_ytmtse.mp4';
const vajrasanaVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770284089/VajraAsana_h5cwox.mp4';

export const yogaExercises = [
//   {
//     id: 39,
//     name: "Kapalbhati Pranayama",
//     video: kapalbhatiVideo,
//     desc: "A rapid breathing technique where the focus is on forceful exhalations and passive inhalations, often referred to as 'Skull Shining Breath'.",
//     benefits: [
//       "Detoxification: Helps in clearing the respiratory tract and lungs of toxins.",
//       "Metabolic Boost: Enhances digestion and speeds up metabolism, aiding in weight management.",
//       "Mental Clarity: Improves concentration and provides a sense of mental freshness and vigor.",
//       "Abdominal Toning: Engages and strengthens the abdominal muscles through repetitive movement.",
//       "Blood Purification: Increases oxygen supply to the blood, improving skin health and overall energy levels."
//     ],
//     steps: [
//       "Sit comfortably in a cross-legged position (Sukhasana or Padmasana) with your back straight.",
//       "Rest your hands on your knees in Gyan Mudra.",
//       "Take a deep breath in to prepare.",
//       "Exhale forcefully through your nose by contracting your abdominal muscles.",
//       "Allow the inhalation to happen passively as your muscles relax.",
//       "Keep your shoulders and face relaxed throughout the process.",
//       "Continue for 20-30 breaths per round, then rest."
//     ]
//   },
  {
    id: 27,
    name: 'Advanced Yoga Strength Flow',
    video: flowVideo,
    desc: 'An elite-level strength sequence that transitions from a headstand into an arm balance.',
    benefits: [
      'Deep Core Activation: Transitions require massive recruitment of the transverse abdominis.',
      'Upper Body Stability: Crow pose builds significant power in the shoulders and triceps.',
      'Functional Flexibility: Enhances range of motion in the spine and hamstrings.',
      'Neuromuscular Coordination: Sharpens proprioception moving between inverted and arched positions.'
    ],
    steps: [
      'Phase 1 - Sirshasana: Begin in a stable, vertical headstand.',
      'Phase 2 - Knee-to-Tricep: Slowly lower your legs and tuck knees toward upper arms.',
      'Phase 3 - Bakasana: Transition into a Crow Pose by balancing knees on triceps.',
      'Phase 4 - Chaturanga: Kick legs back into a low plank position.',
      'Phase 5 - Upward Dog: Arch back and lift chest to stretch the anterior chain.',
      'Phase 6 - Downward Dog: Push hips back into an inverted "V" shape.'
    ]
  },
  {
    id: 28,
    name: 'Anulom Vilom Pranayam',
    video: anulomVideo,
    desc: 'A foundational yogic breathing technique designed to balance the body\'s energy and calm the nervous system.',
    benefits: [
      'Stress Relief: Effectively calms the mind and lowers daily stress levels.',
      'Improved Respiratory Health: Enhances lung capacity and oxygenation.',
      'Mental Balance: Harmonizes brain hemispheres for better focus.',
      'Detoxification: Aids in purifying energy channels and clearing nasal passages.'
    ],
    steps: [
      'Sit comfortably with your back straight and eyes closed.',
      'Close right nostril with thumb, inhale slowly through the left.',
      'Close left nostril with ring finger and release the right.',
      'Exhale completely through the right nostril.',
      'Inhale through the right, then exhale back through the left.',
      'Maintain a steady rhythm of approximately 5.5 seconds per phase.'
    ]
  },
  {
    id: 29,
    name: 'Ardha Matsyendrasana',
    video: ardhaMatsyendraVideo,
    desc: 'A powerful seated spinal twist that targets the spine, shoulders, and hips.',
    benefits: [
      'Spinal Mobility: Increases flexibility and relieves stiffness in the back.',
      'Digestive Stimulation: Massages internal organs, aiding in detoxification.',
      'Shoulder & Hip Stretch: Helps open up the chest and hips.',
      'Nervous System: Helps in reducing stress and calming the mind.'
    ],
    steps: [
      'Sit with legs extended, bend right leg and place heel near left hip.',
      'Cross left foot over the right knee.',
      'Place right elbow on the outside of your left knee.',
      'Twist torso to the left, looking over your left shoulder.',
      'Maintain steady breathing and stay in the position.'
    ]
  },
  {
    id: 30,
    name: 'Ashtanga Yoga (Plank Hold)',
    video: ashtangaVideo,
    desc: 'A core stability exercise that engages the entire abdominal wall and protects the spine.',
    benefits: [
      'Core Stability: Builds deep abdominal strength to support the lower back.',
      'Spinal Integrity: Teaches proper alignment to prevent back pain.',
      'Full Body Tension: Engages shoulders, glutes, and legs.',
      'Improved Posture: Strengthens stabilizers required for an upright posture.'
    ],
    steps: [
      'Assume a forearm plank position with weight on toes and elbows.',
      'Keep your forearms parallel and shoulder-width apart.',
      'Maintain a "hollow body" position with a slight pelvic tilt.',
      'Keep your feet hip-width apart.',
      'Look directly at the floor between your hands to keep neck neutral.'
    ]
  },
  {
    id: 31,
    name: 'Bhastrika Pranayama',
    video: bhastrikaVideo,
    desc: 'Known as the "Bellows Breath," a technique for forceful inhalations and exhalations.',
    benefits: [
      'Energy Boost: Provides an immediate surge of energy and clears mental fog.',
      'Metabolic Activation: Stimulates digestive fire.',
      'Lung Purification: Clears the respiratory tract.',
      'Mental Clarity: Oxygenates the blood and brain for alertness.'
    ],
    steps: [
      'Sit upright with your spine straight.',
      'Inhale forcefully while extending arms upward and opening palms.',
      'Exhale forcefully while pulling arms down and forming fists.',
      'Continue this rhythmic, forceful movement in quick succession.',
      'Focus on the synchronization of breath and arm movement.'
    ]
  },
  {
    id: 33,
    name: 'Bhramari Pranayama',
    video: bhramariVideo,
    desc: 'A calming technique using humming sounds to soothe the nervous system.',
    benefits: [
      'Anxiety Reduction: Releases mental tension.',
      'Memory: Improves concentration and memory.',
      'Soothes Nerves: Internal vibrations calm the entire system.',
      'Blood Pressure: Promotes deep relaxation to help lower pressure.'
    ],
    steps: [
      'Sit comfortably with your back straight.',
      'Place fingers over eyes and index fingers on eyebrows.',
      'Close ears using thumbs to block external sound.',
      'Inhale deeply through your nose.',
      'Exhale making a steady humming sound (Mkara).',
      'Concentrate on the vibrations felt in your head.'
    ]
  },
  {
    id: 35,
    name: 'Chakrasana (Wheel Pose)',
    video: chakrasanaVideo,
    desc: 'A deep backbend providing a full stretch to the anterior chain.',
    benefits: [
      'Spinal Elasticity: Dramatically increases flexibility of the spinal column.',
      'Lung Expansion: Opens chest and improves respiratory capacity.',
      'Upper Body: Strengthens arms, wrists, and shoulders.',
      'Hip Flexibility: Stretches abdominal muscles and hip flexors.',
      'Leg Power: Engages quadriceps and glutes.'
    ],
    steps: [
      'Lie on your back with feet hip-width apart and knees bent.',
      'Place palms on the floor beside ears, fingers pointing to shoulders.',
      'Inhale and press into palms/feet to lift hips and torso.',
      'Straighten arms and legs to form a "wheel" shape.',
      'Gaze at the floor between your hands and breathe steadily.'
    ]
  },
  {
    id: 36,
    name: "Bhujangasana (Cobra Pose)",
    video: cobraVideo,
    desc: "A foundational backbend that strengthens the spine and opens the chest.",
    benefits: [
      "Spinal Strengthening: Enhances flexibility of the vertebral column.",
      "Postural Correction: Helps in correcting rounded shoulders.",
      "Abdominal Stretch: Aids in digestion.",
      "Stress Relief: Reduces fatigue and emotional tension.",
      "Respiratory Health: Expands the chest cavity for deeper breathing."
    ],
    steps: [
      "Lie flat on your stomach.",
      "Keep legs shoulder-width apart, toes pointing back.",
      "Place palms beside your chest, elbows tucked in.",
      "Inhale and lift head, chest, and chin off the ground.",
      "Lift only until the navel remains in contact with the floor.",
      "Hold with steady breathing, then lower slowly."
    ]
  },
  {
    id: 37,
    name: "Purna Dhanurasana (Full Bow)",
    video: dhanurasanaVideo,
    desc: "Advanced Bow Pose variation requiring extreme spinal and shoulder mobility.",
    benefits: [
      "Maximum Flexibility: Intensely stretches the entire spine.",
      "Shoulder Opening: Improves range of motion in rotator cuffs.",
      "Digestion: Pressure on abdomen stimulates digestive organs.",
      "Core Strength: Requires strong glute and core engagement.",
      "Chest Expansion: Opens lungs to maximum capacity."
    ],
    steps: [
      "Warm up with Cobra Pose first.",
      "Transition into Half Bow to engage the back.",
      "Perform shoulder rotations to prepare joints.",
      "Once flexible, reach back and grasp toes.",
      "Rotate elbows upward to enter the final pose.",
      "Always move slowly to avoid hurting the spine."
    ]
  },
  {
    id: 38,
    name: "Halasana (Plough Pose)",
    video: halasanaVideo,
    desc: "An inverted posture providing a deep stretch to the spine and neck.",
    benefits: [
      "Spinal Flexibility: Stretches the entire spinal column.",
      "Thyroid: Helps in regulating the thyroid gland.",
      "Digestive Health: Massages organs to improve digestion.",
      "Mental Calm: Increases blood flow to the head to reduce stress.",
      "Shoulder Release: Releases deep-seated tension in the neck."
    ],
    steps: [
      "Lie on your back with arms by your sides.",
      "Lift legs to 90 degrees, support lower back with hands.",
      "Slowly lower feet over your head toward the floor.",
      "Keep legs as straight as possible.",
      "Hold for several deep breaths.",
      "Roll spine back down to the floor slowly."
    ]
  },
  {
    id: 40,
    name: "Padmasana (Lotus Pose)",
    video: padmasanaVideo,
    desc: "A foundational pose for deep meditation and pranayama.",
    benefits: [
      "Meditation Stability: Grounded posture for long contemplation.",
      "Spinal Alignment: Encourages proper spinal curvature.",
      "Hip Opening: Improves flexibility in hip joints.",
      "Calming: Quiets the mind and reduces stress.",
      "Energy Flow: Facilitates energy movement through chakras."
    ],
    steps: [
      "Sit with legs extended in front of you.",
      "Place right foot onto left thigh, heel close to abdomen.",
      "Lift left foot over right shin to rest on right thigh.",
      "Keep back straight and head high.",
      "Place hands on knees in a mudra.",
      "Focus on breath and maintain as long as comfortable."
    ]
  },
  {
    id: 41,
    name: "Paschimottanasana",
    video: paschimottanaVideo,
    desc: "A seated forward bend stretching the entire posterior chain.",
    benefits: [
      "Spinal Extension: Relieves lower back tension.",
      "Hamstrings: Targets hamstrings, calves, and hips.",
      "Digestive Aid: Tones liver and kidneys.",
      "Stress Reduction: Calms the nervous system.",
      "Core Engagement: Requires active engagement to deepen fold."
    ],
    steps: [
      "Sit with legs extended straight.",
      "Inhale and lift arms overhead to lengthen spine.",
      "Exhale and bend forward from hips with flat back.",
      "Hold toes or ankles.",
      "Lower forehead toward knees as flexibility allows.",
      "Inhale and slowly lift torso back up."
    ]
  },
  {
    id: 42,
    name: "Trikonasana (Triangle Pose)",
    video: trikonasanaVideo,
    desc: "A standing posture that stretches the body while improving balance.",
    benefits: [
      "Full-Body Stretch: Lengthens hamstrings, groin, and hips.",
      "Core Strength: Engages obliques to maintain lateral fold.",
      "Spinal Mobility: Increases flexibility and relieves backaches.",
      "Balance: Enhances physical and mental poise.",
      "Organ Stimulation: Aids digestion and metabolism."
    ],
    steps: [
      "Stand straight, then step feet 3-4 feet apart.",
      "Turn right foot 90 degrees, left foot slightly in.",
      "Extend arms parallel to the floor.",
      "Fold at the hip to the right, reaching hand to shin or floor.",
      "Extend left arm straight up, stacking shoulders.",
      "Gaze at left thumb and breathe deeply."
    ]
  },
  {
    id: 43,
    name: "Vajrasana (Thunderbolt Pose)",
    video: vajrasanaVideo,
    desc: "A kneeling pose that aids digestion and provides stability.",
    benefits: [
      "Digestive Health: Can be practiced immediately after meals.",
      "Spinal Alignment: Encourages an upright posture.",
      "Ankle Strength: Strengthens knees and ankle flexibility.",
      "Mental Calmness: Grounds the mind for meditation.",
      "Pelvic Toning: Strengthens pelvic floor muscles."
    ],
    steps: [
      "Kneel on the floor with knees close together.",
      "Bring big toes together to touch.",
      "Sit directly on your heels (don't sit between them).",
      "Rest palms on knees and keep spine elongated.",
      "Hold for 5–10 minutes while focusing on breath."
    ]
  }
];