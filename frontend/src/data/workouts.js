// src/data/workouts.js
import chest from './workout images/chest.jpg';
import back from './workout images/back.jpg';
import shoulder from './workout images/shoulders.jpg';
import triceps from './workout images/triceps.jpg';
import biseps from './workout images/biceps.jpg';
import legs from './workout images/legs.jpg';
import abs from './workout images/abs.jpg';


export const workoutCategories = [
  {
    id: 'chest',
    name: 'Chest',
    image: chest,
    desc: 'Build a massive chest with compound movements.'
  },
  {
    id: 'back',
    name: 'Back',
    image: back,
    desc: 'Widen your lats and thicken your back.'
  },
  {
    id: 'shoulders',
    name: 'Shoulders',
    image: shoulder,
    desc: 'Develop 3D deltoids for a broad look.'
  },
  {
    id: 'triceps',
    name: 'Triceps',
    image: triceps,
    desc: 'Biceps and Triceps blasting routine.'
  },
    {
    id: 'biceps',
    name: 'Biceps',
    image: biseps,
    desc: 'Biceps and Triceps blasting routine.'
  },
  {
    id: 'legs',
    name: 'Legs',
    image: legs,
    desc: 'Never skip leg day. Power and strength.'
  },
  {
    id: 'abs',
    name: 'Abs & Core',
    image: abs,
    desc: 'Chisel your core for aesthetics.'
  }
];