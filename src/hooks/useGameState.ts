import { useEffect, useMemo, useState } from 'react';
import type { BaseRoundItem, GamePhase } from '../types';
import { linearScore } from '../utils/scoring';

const ROUND_PATTERN: Array<1 | 2 | 3> = [1, 2, 1, 2, 3, 2, 3, 2, 3, 3];

export const useGameState = (
  gameKey: string,
  items: BaseRoundItem[],
  showMs: number,
  defaultGuess: number,
) => {
  const [phase, setPhase] = useState<GamePhase>('intro');
  const [roundIndex, setRoundIndex] = useState(0);
  const [guess, setGuess] = useState(defaultGuess);
  const [scores, setScores] = useState<number[]>([]);

  const introSeenKey = `perception_${gameKey}_intro_seen`;

  useEffect(() => {
    const seen = localStorage.getItem(introSeenKey) === 'true';
    setPhase(seen ? 'show' : 'intro');
  }, [introSeenKey]);

  const sessionItems = useMemo(() => {
    return ROUND_PATTERN.map((difficulty, idx) => {
      const pool = items.filter((item) => item.difficulty === difficulty);
      return pool[idx % pool.length];
    });
  }, [items]);

  const current = sessionItems[roundIndex];

  useEffect(() => {
    if (phase !== 'show') return;
    const t1 = setTimeout(() => setPhase('blank'), showMs);
    const t2 = setTimeout(() => setPhase('guess'), showMs + 500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [phase, showMs]);

  const submitGuess = () => {
    const nextScore = linearScore(guess, current.actual);
    const nextScores = [...scores, nextScore];
    setScores(nextScores);
    localStorage.setItem(`perception_${gameKey}_scores`, JSON.stringify(nextScores));
    setPhase('reveal');
  };

  const nextRound = () => {
    if (roundIndex === 9) {
      setPhase('summary');
      return;
    }
    setRoundIndex((x) => x + 1);
    setPhase('show');
  };

  const start = () => {
    localStorage.setItem(introSeenKey, 'true');
    setPhase('show');
  };

  const reset = () => {
    setRoundIndex(0);
    setScores([]);
    setGuess(defaultGuess);
    setPhase('show');
    localStorage.removeItem(`perception_${gameKey}_scores`);
  };

  return {
    phase,
    start,
    current,
    guess,
    setGuess,
    submitGuess,
    nextRound,
    roundIndex,
    scores,
    reset,
  };
};
