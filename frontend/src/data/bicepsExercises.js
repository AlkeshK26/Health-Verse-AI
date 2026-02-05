// src/data/bicepsExercises.js

// 1. Video Imports
const  concentrationCurlVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282630/5_tisvgz.mp4';
const shoulderPressVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282640/6_xzbsxx.mp4';
const  shoulderPressVideo2  = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282633/7_n0oekh.mp4'
const  bicepForearmVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282657/8_hkuq39.mp4';
const preacherCurlVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282645/9_ageuoj.mp4';
const  barbellCurlVideo = 'https://res.cloudinary.com/drj0u9ctf/video/upload/v1770282700/10_kc6bnh.mp4';
export const bicepsExercisesList = [
  {
    id: 37,
    name: 'Concentration Curl',
    video: concentrationCurlVideo, 
    desc: 'Widely considered one of the most effective bicep isolation exercises, it focuses on building the bicep peak by eliminating momentum.',
    benefits: [
        'Superior Bicep Isolation: The fixed arm position prevents other muscles from assisting in the lift.',
        'Maximum Peak Development: Specifically targets the long head of the bicep for height.',
        'Enhanced Mind-Muscle Connection: The concentrated movement allows for better focus on the contraction.'
    ],
    steps: [
        'Sit on a bench with your legs spread, and rest the back of your upper arm against your inner thigh.',
        'MISTAKE: Do not use a partial range of motion or swing the weight using your shoulder.',
        'CORRECTION: Lower the dumbbell until your arm is fully extended, then curl upward toward your chest.',
        'Squeeze the bicep hard at the peak of the movement before slowly lowering the weight.',
        'Keep your torso stationary throughout the set to ensure the bicep does all the work.'
    ]
},
{
    id: 38,
    name: 'Rod Shoulder Press',
    video: shoulderPressVideo, 
    desc: 'A premier compound movement for shoulder mass that focuses on the anterior and lateral deltoids while promoting core stability.',
    benefits: [
        '3D Shoulder Development: Effectively hits the shoulders from multiple angles to create a "capped" look.',
        'Shoulder Preservation: Using a specific bench angle reduces the risk of rotator cuff impingement.',
        'Unilateral Balance: Using dumbbells ensures each arm works independently, fixing muscle imbalances.'
    ],
    steps: [
        'Set your bench to a 75-degree angle rather than a completely vertical position to prevent shoulder strain.',
        'MISTAKE: Avoid over-arching your lower back away from the bench pad (Red Line).',
        'CORRECTION: Keep your spine neutral and flat against the seat back.',
        'MISTAKE: Do not flare your elbows directly out to the sides in a straight line.',
        'CORRECTION: Tuck your elbows slightly forward into the scapular plane (Green Zone).',
        'Press the weights overhead until your arms are extended, then lower them slowly back to ear level.'
    ]
},
{
    id: 38,
    name: 'Dumbbell Shoulder Press  ',
    video: shoulderPressVideo2, 
    desc: 'A premier compound movement for shoulder mass that focuses on the anterior and lateral deltoids while promoting core stability.',
    benefits: [
        '3D Shoulder Development: Effectively hits the shoulders from multiple angles to create a "capped" look.',
        'Shoulder Preservation: Using a specific bench angle reduces the risk of rotator cuff impingement.',
        'Unilateral Balance: Using dumbbells ensures each arm works independently, fixing muscle imbalances.'
    ],
    steps: [
        'Set your bench to a 75-degree angle rather than a completely vertical position to prevent shoulder strain.',
        'MISTAKE: Avoid over-arching your lower back away from the bench pad.',
        'CORRECTION: Keep your spine neutral and flat against the seat back.',
        'MISTAKE: Do not flare your elbows directly out to the sides in a straight line.',
        'CORRECTION: Tuck your elbows slightly forward into the scapular plane.',
        'Press the weights overhead until your arms are extended, then lower them slowly back to ear level.'
    ]
},

{
    id: 39,
    name: 'Bicep & Forearm Mastery',
    video: bicepForearmVideo, 
    desc: 'A combination of isolation and compound movements to build bicep peak and forearm thickness by focusing on range of motion and grip strength.',
    benefits: [
        'Bicep Peak: Isolation moves like concentration curls target the long head for a better peak.',
        'Forearm Strength: Wrist curls and rotations develop grip strength and forearm mass.',
        'Tension Management: Using cables ensures constant resistance throughout the entire curl.'
    ],
    steps: [
        'CONCENTRATION CURL: Sit and rest your elbow against your inner thigh to eliminate momentum.',
        'MISTAKE: Do not use partial reps; lower the weight until the arm is fully extended.',
        'BARBELL CURL: Keep your shoulders depressed and avoid shrugging while lifting.',
        'WRIST CURL: Support your forearm on a bench and curl the dumbbell using only your wrist.',
        'REVERSE CURL: Use an overhand grip to target the top of the forearm and brachialis.'
    ]
},

{
    id: 39,
    name: 'Preacher Curl',
    video: preacherCurlVideo, 
    desc: 'An intensive bicep isolation exercise that uses a slanted bench to prevent momentum, focusing entirely on the contraction of the bicep muscles.',
    benefits: [
        'Total Isolation: The bench locks your arms in place, making it impossible to "cheat" using your shoulders.',
        'Lower Bicep Emphasis: Provides a deep stretch at the bottom, which helps develop the lower portion of the bicep.',
        'Strict Form: Forces a controlled eccentric (lowering) phase, which is key for muscle hypertrophy.'
    ],
    steps: [
        'Sit at the preacher bench and rest your upper arms firmly against the slanted pad.',
        'MISTAKE: Avoid hunching your shoulders or leaving a gap between your armpits and the pad.',
        'CORRECTION: Ensure your armpits are snug against the top of the pad and your back is straight.',
        'MISTAKE: Do not flare your elbows outward while curling the bar.',
        'CORRECTION: Keep your elbows tucked in and parallel to each other throughout the movement.',
        'Lower the bar slowly until your arms are fully extended, then curl it back up while squeezing your biceps.'
    ]
},

{
    id: 40,
    name: 'Barbell Bicep Curl',
    video: barbellCurlVideo, 
    desc: 'The classic mass-builder for the biceps. Proper execution requires total control of the torso and shoulders.',
    benefits: [
        'Overall Mass: Allows for heavier loading compared to most other bicep exercises.',
        'Peak Tension: Targets the bicep brachii effectively through a full range of motion.',
        'Stability Training: Requires core engagement to prevent the body from swinging.'
    ],
    steps: [
        'Stand with feet shoulder-width apart and grip the barbell with palms facing up.',
        'MISTAKE: Do not shrug your shoulders toward your ears or use momentum to swing the weight.',
        'CORRECTION: Keep your shoulders depressed and your elbows pinned to your sides.',
        'MISTAKE: Avoid arching your lower back as the weight gets heavy.',
        'CORRECTION: Maintain a neutral spine and a slight forward lean if necessary for stability.',
        'Curl the bar toward your chest and squeeze at the top.'
    ]
  },
  
];