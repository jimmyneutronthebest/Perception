import type { BaseItem } from '../types';

export interface PercentileItem extends BaseItem {
  id: string;
  value: string;
  population: string;
  percentile: number;
  fact: string;
}

export const percentileItems: PercentileItem[] = [
  { id: 'm-59', value: `5'9" (175 cm)`, population: 'among American adult men', percentile: 50, difficulty: 1, fact: 'This is the median reference point.' },
  { id: 'w-54', value: `5'4" (163 cm)`, population: 'among American adult women', percentile: 50, difficulty: 1, fact: 'Exactly centered in distribution.' },
  { id: 'income-100', value: '$100,000 household income', population: 'among US households', percentile: 70, difficulty: 2, fact: 'Higher than many people guess.' },
  { id: 'iq-115', value: 'IQ 115', population: 'in IQ distribution', percentile: 84, difficulty: 2, fact: 'Roughly one standard deviation above average.' },
  { id: 'chess-2000', value: 'FIDE 2000', population: 'among rated FIDE players', percentile: 95, difficulty: 3, fact: 'Strong competitive level.' },
  { id: 'income-1m', value: '$1,000,000 household income', population: 'among US households', percentile: 99, difficulty: 3, fact: 'Very high-end tail of the distribution.' },
];
