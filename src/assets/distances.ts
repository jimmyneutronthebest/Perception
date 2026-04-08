import type { BaseItem } from '../types';

export interface DistanceItem extends BaseItem {
  id: string;
  from: string;
  to: string;
  distanceKm: number;
  fact: string;
}

export const distanceItems: DistanceItem[] = [
  { id: 'la-ny', from: 'Los Angeles', to: 'New York', distanceKm: 3940, difficulty: 1, fact: 'US coast-to-coast is farther than many expect.' },
  { id: 'ny-lon', from: 'New York', to: 'London', distanceKm: 5570, difficulty: 1, fact: 'A classic transatlantic route.' },
  { id: 'lon-mos', from: 'London', to: 'Moscow', distanceKm: 2511, difficulty: 2, fact: 'Looks farther on many maps than it is.' },
  { id: 'cai-mum', from: 'Cairo', to: 'Mumbai', distanceKm: 4387, difficulty: 2, fact: 'A surprisingly moderate intercontinental route.' },
  { id: 'cap-cai', from: 'Cape Town', to: 'Cairo', distanceKm: 8909, difficulty: 3, fact: 'Africa is visually underestimated on Mercator maps.' },
  { id: 'anc-hel', from: 'Anchorage', to: 'Helsinki', distanceKm: 6985, difficulty: 3, fact: 'Polar paths can be shorter than expected.' },
];
