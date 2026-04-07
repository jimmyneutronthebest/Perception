import type { ReactNode } from 'react';

interface PhaseWrapperProps {
  children: ReactNode;
  round: number;
  total: number;
  runningScore: number;
}

const PhaseWrapper = ({ children, round, total, runningScore }: PhaseWrapperProps) => (
  <section className="mx-auto flex min-h-[calc(100vh-56px)] w-full max-w-5xl flex-col px-4 py-6">
    <header className="mb-6 flex items-center justify-between text-sm text-zinc-400">
      <p>Round {round} of {total}</p>
      <p>Score {runningScore}</p>
    </header>
    <div className="flex flex-1 items-center justify-center">{children}</div>
  </section>
);

export default PhaseWrapper;
