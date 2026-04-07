export const linearScore = (guess: number, actual: number): number =>
  Math.max(0, Math.round(100 - (Math.abs(guess - actual) / actual) * 100));

export const scoreColor = (score: number): string => {
  if (score >= 80) return 'text-green-400';
  if (score >= 50) return 'text-yellow-400';
  return 'text-red-400';
};
