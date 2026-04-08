import type { BaseItem } from '../types';

export interface PitchItem extends BaseItem {
  id: string;
  note: string;
  midi: number;
  frequency: number;
  fact: string;
}

export const pitchItems: PitchItem[] = [
  { id: 'c4', note: 'C4', midi: 60, frequency: 261.63, difficulty: 1, fact: 'Middle C anchors the keyboard center.' },
  { id: 'g4', note: 'G4', midi: 67, frequency: 392.0, difficulty: 1, fact: 'Common melodic anchor note.' },
  { id: 'a4', note: 'A4', midi: 69, frequency: 440.0, difficulty: 2, fact: 'Concert tuning standard.' },
  { id: 'd5', note: 'D5', midi: 74, frequency: 587.33, difficulty: 2, fact: 'High-mid range pitch memory check.' },
  { id: 'f#5', note: 'F#5', midi: 78, frequency: 739.99, difficulty: 3, fact: 'Sharps are harder without context.' },
  { id: 'bb3', note: 'Bb3', midi: 58, frequency: 233.08, difficulty: 3, fact: 'Flats trip up non-musicians quickly.' },
];
