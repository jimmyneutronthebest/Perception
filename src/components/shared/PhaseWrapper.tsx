import type { Phase } from '../../types';
import type { ReactNode } from 'react';

interface PhaseWrapperProps {
  phase: Phase;
  intro: ReactNode;
  show: ReactNode;
  guess: ReactNode;
  reveal: ReactNode;
  summary: ReactNode;
}

const PhaseWrapper = ({ phase, intro, show, guess, reveal, summary }: PhaseWrapperProps) => {
  if (phase === 'intro') return <>{intro}</>;
  if (phase === 'show') return <>{show}</>;
  if (phase === 'blank') return <div className="blank-dot" aria-label="memory pause" />;
  if (phase === 'guess') return <>{guess}</>;
  if (phase === 'reveal') return <>{reveal}</>;
  return <>{summary}</>;
};

export default PhaseWrapper;
