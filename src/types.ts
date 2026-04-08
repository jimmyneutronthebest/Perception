export type Phase = 'intro' | 'show' | 'blank' | 'guess' | 'reveal' | 'summary';

export interface BaseItem {
  id: string;
  difficulty: 1 | 2 | 3;
}

export interface GameStateResult<T extends BaseItem> {
  phase: Phase;
  roundNumber: number;
  roundHistory: number[];
  currentItem: T;
  guess: number;
  setGuess: (n: number) => void;
  hasInteracted: boolean;
  markInteracted: () => void;
  submitGuess: () => void;
  nextRound: () => void;
  restart: () => void;
  score: number;
  runningScore: number;
  begin: () => void;
}
