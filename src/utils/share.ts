export function buildShareText(gameName: string, scores: number[], url: string): string {
  const dots = scores.map((s) => (s >= 80 ? '🟢' : s >= 50 ? '🟡' : '🔴')).join('');
  const avg = Math.round(scores.reduce((a, b) => a + b, 0) / Math.max(scores.length, 1));
  return `Perception — ${gameName}\n${dots}\nAverage: ${avg}/100\n\n${url}`;
}
