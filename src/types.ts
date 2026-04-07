export type GamePhase = 'intro' | 'show' | 'blank' | 'guess' | 'reveal' | 'summary';

export interface BaseRoundItem {
  id: string;
  prompt: string;
  actual: number;
  difficulty: 1 | 2 | 3;
  revealLine: string;
}
