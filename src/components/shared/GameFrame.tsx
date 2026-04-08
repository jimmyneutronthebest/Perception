import type { ReactNode } from 'react';

interface GameFrameProps {
  roundNumber: number;
  runningScore: number;
  children: ReactNode;
  bottomBar?: ReactNode;
}

const GameFrame = ({ roundNumber, runningScore, children, bottomBar }: GameFrameProps) => (
  <section className="game-frame">
    <header className="game-topline">
      <span>Round {roundNumber} / 10</span>
      <span>Score: {runningScore}</span>
    </header>
    <div className="game-content">{children}</div>
    {bottomBar ? <div className="sticky-submit">{bottomBar}</div> : null}
  </section>
);

export default GameFrame;
