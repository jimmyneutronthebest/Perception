import { useEffect, useMemo, useState } from 'react';
import type { BaseItem, GameStateResult, Phase } from '../types';
import { linearScore } from '../utils/scoring';

const ROUND_SEQUENCE: Array<1 | 2 | 3> = [1, 2, 1, 2, 3, 2, 3, 2, 3, 3];

export function useGameState<T extends BaseItem>(
  gameKey: string,
  items: T[],
  showDurationMs: number,
  defaultGuess: number,
  getActual: (item: T) => number,
): GameStateResult<T> {
  const seenKey = `perception_${gameKey}_seen`;
  const scoreKey = `perception_${gameKey}_scores`;

  const [phase, setPhase] = useState<Phase>('intro');
  const [roundIndex, setRoundIndex] = useState(0);
  const [guess, setGuessState] = useState(defaultGuess);
  const [roundHistory, setRoundHistory] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const roundItems = useMemo(
    () =>
      ROUND_SEQUENCE.map((difficulty, idx) => {
        const byDifficulty = items.filter((item) => item.difficulty === difficulty);
        return byDifficulty[idx % byDifficulty.length];
      }),
    [items],
  );

  const currentItem = roundItems[roundIndex];

  useEffect(() => {
    const seen = localStorage.getItem(seenKey) === 'true';
    const storedScores = localStorage.getItem(scoreKey);
    if (storedScores) setRoundHistory(JSON.parse(storedScores));
    setPhase(seen ? 'show' : 'intro');
  }, [scoreKey, seenKey]);

  useEffect(() => {
    if (phase !== 'show') return;
    const showTimer = setTimeout(() => setPhase('blank'), showDurationMs);
    const blankTimer = setTimeout(() => setPhase('guess'), showDurationMs + 500);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(blankTimer);
    };
  }, [phase, showDurationMs]);

  const setGuess = (n: number) => {
    setGuessState(n);
    setHasInteracted(true);
  };

  const markInteracted = () => setHasInteracted(true);

  const submitGuess = () => {
    const s = linearScore(guess, getActual(currentItem));
    setScore(s);
    const updated = [...roundHistory, s];
    setRoundHistory(updated);
    localStorage.setItem(scoreKey, JSON.stringify(updated));
    setPhase('reveal');
  };

  const nextRound = () => {
    setHasInteracted(false);
    if (roundIndex === 9) {
      setPhase('summary');
      return;
    }
    setRoundIndex((x) => x + 1);
    setGuessState(defaultGuess);
    setPhase('show');
  };

  const restart = () => {
    setRoundIndex(0);
    setRoundHistory([]);
    setScore(0);
    setGuessState(defaultGuess);
    setHasInteracted(false);
    localStorage.removeItem(scoreKey);
    setPhase('show');
  };

  const begin = () => {
    localStorage.setItem(seenKey, 'true');
    setPhase('show');
  };

  const runningScore = roundHistory.reduce((a, b) => a + b, 0);

  return {
    phase,
    roundNumber: roundIndex + 1,
    roundHistory,
    currentItem,
    guess,
    setGuess,
    hasInteracted,
    markInteracted,
    submitGuess,
    nextRound,
    restart,
    score,
    runningScore,
    begin,
  };
}
