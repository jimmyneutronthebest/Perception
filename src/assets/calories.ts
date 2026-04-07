import type { BaseRoundItem } from '../types';

export interface CalorieItem extends BaseRoundItem {
  category: 'Fast Food' | 'Restaurant' | 'Breakfast' | 'Drinks' | 'Snacks';
  description: string;
}

export const calorieItems: CalorieItem[] = [
  { id: 'bigmac', prompt: 'Big Mac', actual: 550, difficulty: 1, revealLine: 'Classic fast food anchor.', category: 'Fast Food', description: 'standard burger' },
  { id: 'fries', prompt: 'McDonald\'s Large Fries', actual: 490, difficulty: 1, revealLine: 'Almost a meal on its own.', category: 'Fast Food', description: 'large order' },
  { id: 'caesar', prompt: 'Caesar Salad', actual: 470, difficulty: 2, revealLine: 'Dressing is the trap.', category: 'Restaurant', description: 'with dressing and croutons' },
  { id: 'padthai', prompt: 'Pad Thai', actual: 838, difficulty: 2, revealLine: 'Restaurant portions run big.', category: 'Restaurant', description: 'with chicken' },
  { id: 'sweetgreen', prompt: 'Sweetgreen Pesto Parm', actual: 1010, difficulty: 3, revealLine: 'Healthy branding, heavy calories.', category: 'Restaurant', description: 'full salad bowl' },
  { id: 'chipsguac', prompt: 'Chipotle Chips + Guac', actual: 770, difficulty: 3, revealLine: 'The side is the sneak attack.', category: 'Snacks', description: 'standard serving' },
];
