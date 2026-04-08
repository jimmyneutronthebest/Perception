let ctx: AudioContext | null = null;

export const getAudioContext = (): AudioContext => {
  if (!ctx) ctx = new AudioContext();
  return ctx;
};

export async function ensureAudioReady(): Promise<void> {
  const audio = getAudioContext();
  if (audio.state === 'suspended') await audio.resume();
}

export function playTone(frequency: number, duration: number): void {
  const audio = getAudioContext();
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.connect(gain);
  gain.connect(audio.destination);
  osc.type = 'sine';
  osc.frequency.value = frequency;
  gain.gain.setValueAtTime(0, audio.currentTime);
  gain.gain.linearRampToValueAtTime(0.4, audio.currentTime + 0.05);
  gain.gain.setValueAtTime(0.4, audio.currentTime + duration - 0.05);
  gain.gain.linearRampToValueAtTime(0, audio.currentTime + duration);
  osc.start(audio.currentTime);
  osc.stop(audio.currentTime + duration);
}
