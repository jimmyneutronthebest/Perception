import type { BaseRoundItem } from '../types';

export interface DistanceItem extends BaseRoundItem {
  from: string;
  to: string;
}

export const distanceItems: DistanceItem[] = [
  { id: 'la-nyc', prompt: 'Los Angeles → New York', actual: 3940, difficulty: 1, revealLine: 'Cross-country really is huge.', from: 'Los Angeles', to: 'New York' },
  { id: 'ny-lon', prompt: 'New York → London', actual: 5570, difficulty: 1, revealLine: 'Overnight flight distance.', from: 'New York', to: 'London' },
  { id: 'lon-mos', prompt: 'London → Moscow', actual: 2511, difficulty: 2, revealLine: 'Shorter than map intuition.', from: 'London', to: 'Moscow' },
  { id: 'cai-mum', prompt: 'Cairo → Mumbai', actual: 4387, difficulty: 2, revealLine: 'Surprisingly direct arc.', from: 'Cairo', to: 'Mumbai' },
  { id: 'cap-cai', prompt: 'Cape Town → Cairo', actual: 8909, difficulty: 3, revealLine: 'Africa is larger than it looks.', from: 'Cape Town', to: 'Cairo' },
  { id: 'anc-hel', prompt: 'Anchorage → Helsinki', actual: 6985, difficulty: 3, revealLine: 'Polar geometry beats Mercator.', from: 'Anchorage', to: 'Helsinki' },
];
