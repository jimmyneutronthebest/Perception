import type { BaseRoundItem } from '../types';

export interface PercentileItem extends BaseRoundItem {
  population: string;
}

export const percentileItems: PercentileItem[] = [
  { id: 'm-59', prompt: '5\'9" (175 cm)', actual: 50, difficulty: 1, revealLine: 'Exactly median height.', population: 'among US adult men' },
  { id: 'w-54', prompt: '5\'4" (163 cm)', actual: 50, difficulty: 1, revealLine: 'Exactly median height.', population: 'among US adult women' },
  { id: 'income-100', prompt: '$100,000 household income', actual: 70, difficulty: 2, revealLine: 'Higher than most people expect.', population: 'among US households' },
  { id: 'iq-115', prompt: 'IQ 115', actual: 84, difficulty: 2, revealLine: 'One SD above average.', population: 'in the general IQ distribution' },
  { id: 'chess-2000', prompt: 'FIDE 2000', actual: 95, difficulty: 3, revealLine: 'Expert level among rated players.', population: 'among FIDE rated players' },
  { id: 'income-1m', prompt: '$1,000,000 household income', actual: 99, difficulty: 3, revealLine: 'Extremely top-end income.', population: 'among US households' },
];
