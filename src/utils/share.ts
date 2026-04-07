export const dotForScore = (score: number): string => {
  if (score >= 80) return '🟢';
  if (score >= 50) return '🟡';
  return '🔴';
};

export const buildShareText = (gameName: string, scores: number[], line: string): string => {
  const avg = Math.round(scores.reduce((sum, x) => sum + x, 0) / scores.length);
  return `Perception — ${gameName}\n${scores.map(dotForScore).join('')}\nAverage: ${avg} / 100\n\n${line}\n\nhttps://example.com`;
};
