import { useMemo, useState } from 'react';
import { pitchItems } from '../../assets/pitches';
import { useGameState } from '../../hooks/useGameState';
import { playTone } from '../../utils/audio';
import PhaseWrapper from '../shared/PhaseWrapper';
import RevealCard from '../shared/RevealCard';
import PianoKeyboard from '../shared/PianoKeyboard';

const NOTES = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];

const PitchGame = () => {
  const state = useGameState('pitch', pitchItems, 1500, 0);
  const [selectedNote, setSelectedNote] = useState<string | null>(null);

  const running = useMemo(
    () => (state.scores.length ? Math.round(state.scores.reduce((a, b) => a + b, 0) / state.scores.length) : 0),
    [state.scores],
  );

  if (state.phase === 'intro') {
    return (
      <PhaseWrapper round={1} total={10} runningScore={0}>
        <div className="max-w-lg rounded-xl border border-zinc-700 bg-[#1a1a1a] p-6 text-center">
          <p className="text-lg">A tone plays for 1.5 seconds. Match the note.</p>
          <button onClick={state.start} className="mt-4 rounded-lg bg-zinc-100 px-4 py-2 font-semibold text-zinc-900">Got it</button>
        </div>
      </PhaseWrapper>
    );
  }

  if (state.phase === 'show') {
    return (
      <PhaseWrapper round={state.roundIndex + 1} total={10} runningScore={running}>
        <button
          onClick={() => playTone((state.current as (typeof pitchItems)[number]).frequency, 1500)}
          className="rounded-full border border-zinc-500 px-8 py-8"
        >
          Tap to hear tone
        </button>
      </PhaseWrapper>
    );
  }

  if (state.phase === 'blank') {
    return <PhaseWrapper round={state.roundIndex + 1} total={10} runningScore={running}><div /></PhaseWrapper>;
  }

  if (state.phase === 'guess') {
    return (
      <PhaseWrapper round={state.roundIndex + 1} total={10} runningScore={running}>
        <div className="w-full max-w-2xl rounded-xl border border-zinc-700 bg-[#1a1a1a] p-6 text-center">
          <p className="mb-4">Pick the note.</p>
          <PianoKeyboard notes={NOTES} selected={selectedNote} onSelect={setSelectedNote} />
          <button
            onClick={() => {
              const idx = Math.max(0, NOTES.indexOf(selectedNote ?? 'C4'));
              state.setGuess(idx);
              state.submitGuess();
            }}
            className="mt-4 rounded-lg bg-zinc-100 px-4 py-2 font-semibold text-zinc-900"
          >
            Submit
          </button>
        </div>
      </PhaseWrapper>
    );
  }

  if (state.phase === 'reveal') {
    const current = state.current as (typeof pitchItems)[number];
    const guessedIdx = state.guess;
    const guessed = NOTES[guessedIdx] ?? 'C4';
    const lastScore = state.scores[state.scores.length - 1];

    return (
      <PhaseWrapper round={state.roundIndex + 1} total={10} runningScore={running}>
        <div className="w-full max-w-2xl space-y-4">
          <PianoKeyboard notes={NOTES} selected={guessed} correct={current.note} onSelect={setSelectedNote} />
          <RevealCard
            answerLabel={`${current.note} (${current.frequency.toFixed(2)} Hz)`}
            guessLabel={guessed}
            deltaLine="Pitch memory improves with reps."
            score={lastScore}
            fact={current.revealLine}
            onNext={state.nextRound}
            onShare={() => navigator.clipboard.writeText('Perception — Pitch')}
          />
        </div>
      </PhaseWrapper>
    );
  }

  const average = Math.round(state.scores.reduce((a, b) => a + b, 0) / state.scores.length);
  return (
    <PhaseWrapper round={10} total={10} runningScore={average}>
      <div className="rounded-xl border border-zinc-700 bg-[#1a1a1a] p-6 text-center">
        <h2 className="text-2xl font-semibold">Pitch — Session complete</h2>
        <p className="mt-3">Average: {average} / 100</p>
        <button onClick={state.reset} className="mt-6 rounded-lg bg-zinc-100 px-4 py-2 font-semibold text-zinc-900">Play again</button>
      </div>
    </PhaseWrapper>
  );
};

export default PitchGame;
