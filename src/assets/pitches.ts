import type { BaseRoundItem } from '../types';

export interface PitchItem extends BaseRoundItem {
  note: string;
  frequency: number;
}

export const pitchItems: PitchItem[] = [
  { id: 'c4', prompt: 'Listen for the note', actual: 0, difficulty: 1, revealLine: 'Middle C anchor.', note: 'C4', frequency: 261.63 },
  { id: 'g4', prompt: 'Listen for the note', actual: 1, difficulty: 1, revealLine: 'Happy Birthday opener.', note: 'G4', frequency: 392.0 },
  { id: 'a4', prompt: 'Listen for the note', actual: 2, difficulty: 2, revealLine: 'Concert pitch.', note: 'A4', frequency: 440.0 },
  { id: 'd5', prompt: 'Listen for the note', actual: 3, difficulty: 2, revealLine: 'Upper mid-range target.', note: 'D5', frequency: 587.33 },
  { id: 'f#5', prompt: 'Listen for the note', actual: 4, difficulty: 3, revealLine: 'Sharp note challenge.', note: 'F#5', frequency: 739.99 },
  { id: 'bb3', prompt: 'Listen for the note', actual: 5, difficulty: 3, revealLine: 'Flat note challenge.', note: 'Bb3', frequency: 233.08 },
];
