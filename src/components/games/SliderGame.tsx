import { useMemo } from 'react';
import type { BaseRoundItem } from '../../types';
import { useGameState } from '../../hooks/useGameState';
import PhaseWrapper from '../shared/PhaseWrapper';
import RevealCard from '../shared/RevealCard';
import ScoreDot from '../shared/ScoreDot';
import { buildShareText } from '../../utils/share';

interface SliderGameProps {
  gameKey: string;
  gameName: string;
  intro: string;
  showMs: number;
  items: BaseRoundItem[];
  min: number;
  max: number;
  step: number;
  format: (x: number) => string;
}

const SliderGame = ({ gameKey, gameName, intro, showMs, items, min, max, step, format }: SliderGameProps) => {
  const state = useGameState(gameKey, items, showMs, min);

  const running = useMemo(
    () => (state.scores.length ? Math.round(state.scores.reduce((a, b) => a + b, 0) / state.scores.length) : 0),
    [state.scores],
  );

  if (state.phase === 'intro') {
    return (
      <PhaseWrapper round={1} total={10} runningScore={0}>
        <div className="max-w-lg rounded-xl border border-zinc-700 bg-[#1a1a1a] p-6 text-center">
          <p className="text-lg">{intro}</p>
          <button onClick={state.start} className="mt-4 rounded-lg bg-zinc-100 px-4 py-2 font-semibold text-zinc-900">Got it</button>
        </div>
      </PhaseWrapper>
    );
  }

  if (state.phase === 'show') {
    return (
      <PhaseWrapper round={state.roundIndex + 1} total={10} runningScore={running}>
        <div className="text-center">
          <p className="text-4xl font-semibold">{state.current.prompt}</p>
        </div>
      </PhaseWrapper>
    );
  }

  if (state.phase === 'blank') {
    return <PhaseWrapper round={state.roundIndex + 1} total={10} runningScore={running}><div /></PhaseWrapper>;
  }

  if (state.phase === 'guess') {
    return (
      <PhaseWrapper round={state.roundIndex + 1} total={10} runningScore={running}>
        <div className="w-full max-w-xl rounded-xl border border-zinc-700 bg-[#1a1a1a] p-6 text-center">
          <p className="text-sm text-zinc-400">Your estimate</p>
          <p className="mt-1 text-2xl font-semibold">{format(state.guess)}</p>
          <input
            className="mt-4 w-full"
            type="range"
            min={min}
            max={max}
            step={step}
            value={state.guess}
            onChange={(e) => state.setGuess(Number(e.target.value))}
          />
          <button onClick={state.submitGuess} className="mt-4 rounded-lg bg-zinc-100 px-4 py-2 font-semibold text-zinc-900">Submit</button>
        </div>
      </PhaseWrapper>
    );
  }

  if (state.phase === 'reveal') {
    const lastScore = state.scores[state.scores.length - 1];
    const delta = Math.abs(state.guess - state.current.actual);
    const share = buildShareText(gameName, state.scores, state.current.revealLine);

    return (
      <PhaseWrapper round={state.roundIndex + 1} total={10} runningScore={running}>
        <RevealCard
          answerLabel={format(state.current.actual)}
          guessLabel={format(state.guess)}
          deltaLine={`You were ${format(delta)} off.`}
          score={lastScore}
          fact={state.current.revealLine}
          onNext={state.nextRound}
          onShare={() => navigator.clipboard.writeText(share)}
        />
      </PhaseWrapper>
    );
  }

  const average = Math.round(state.scores.reduce((a, b) => a + b, 0) / state.scores.length);
  return (
    <PhaseWrapper round={10} total={10} runningScore={average}>
      <div className="w-full max-w-xl rounded-xl border border-zinc-700 bg-[#1a1a1a] p-6 text-center">
        <h2 className="text-2xl font-semibold">{gameName} — Session complete</h2>
        <div className="mt-4 flex justify-center gap-2">{state.scores.map((score, idx) => <ScoreDot key={idx} score={score} />)}</div>
        <p className="mt-4 text-3xl font-semibold">Average: {average} / 100</p>
        <button onClick={state.reset} className="mt-6 rounded-lg bg-zinc-100 px-4 py-2 font-semibold text-zinc-900">Play again</button>
      </div>
    </PhaseWrapper>
  );
};

export default SliderGame;
