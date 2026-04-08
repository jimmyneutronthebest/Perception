export function linearScore(guess: number, actual: number): number {
  return Math.max(0, Math.round(100 - (Math.abs(guess - actual) / actual) * 100));
}

export function logScore(guess: number, actual: number, max: number): number {
  return Math.max(0, Math.round(100 - (Math.abs(Math.log10(guess) - Math.log10(actual)) / Math.log10(max)) * 100));
}

export function semitoneScore(semitonesOff: number): number {
  if (semitonesOff === 0) return 100;
  if (semitonesOff === 1) return 70;
  if (semitonesOff === 2) return 40;
  return 10;
}

export function scoreColor(score: number): string {
  if (score >= 80) return '#30d158';
  if (score >= 50) return '#ffd60a';
  return '#ff453a';
}
