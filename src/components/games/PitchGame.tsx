import { useEffect, useMemo, useState } from 'react';
import { pitchItems } from '../../assets/pitches';
import GameFrame from '../shared/GameFrame';
import PhaseWrapper from '../shared/PhaseWrapper';
import PrimaryButton from '../shared/PrimaryButton';
import SummaryCard from '../shared/SummaryCard';
import { useGameState } from '../../hooks/useGameState';
import { ensureAudioReady, getAudioContext, playTone } from '../../utils/audio';
import { scoreColor, semitoneScore } from '../../utils/scoring';

const notes = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5'];

const noteToMidi = (note: string): number => {
  const base: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  const letter = note[0];
  const octave = Number(note[note.length - 1]);
  return (octave + 1) * 12 + base[letter];
};

const PitchGame = () => {
  const gs = useGameState('pitch', pitchItems, 1500, 0, (i) => i.midi);
  const [selected, setSelected] = useState<string | null>(null);
  const [audioReady, setAudioReady] = useState(false);
  const current = gs.currentItem;

  useEffect(() => {
    if (gs.phase === 'show' && audioReady) {
      playTone(current.frequency, 1.5);
    }
  }, [audioReady, current.frequency, gs.phase]);

  const difficulty = localStorage.getItem('perception_pitch_difficulty') || 'easy';
  const roundScore = useMemo(() => {
    if (!selected) return gs.score;
    const diff = Math.abs(noteToMidi(selected) - current.midi);
    return semitoneScore(diff);
  }, [current.midi, gs.score, selected]);

  return (
    <GameFrame roundNumber={gs.roundNumber} runningScore={gs.runningScore} bottomBar={gs.phase === 'guess' ? <PrimaryButton label="Submit" onClick={gs.submitGuess} disabled={!gs.hasInteracted} /> : undefined}>
      <PhaseWrapper
        phase={gs.phase}
        intro={<div className="intro"><h1>Pitch</h1><p>A tone plays briefly. Match it on the keyboard.</p><PrimaryButton label="Start" onClick={gs.begin} /></div>}
        show={!audioReady ? <div className="surface-card center-text"><p className="muted">Audio permission required.</p><PrimaryButton label="Tap to hear the tone" onClick={async () => { await ensureAudioReady(); setAudioReady(getAudioContext().state === 'running'); }} /></div> : <div className="pulse-circle" />}
        guess={<div className="surface-card"><p className="muted">Which note was that?</p><div className="pill-row">{['easy', 'medium', 'hard'].map((m) => <button key={m} className={`pill ${difficulty === m ? 'pill-active' : ''}`} onClick={() => localStorage.setItem('perception_pitch_difficulty', m)}>{m}</button>)}</div><div className="keyboard">{notes.map((n) => <button key={n} className={`key ${selected === n ? 'key-selected' : ''}`} onClick={() => { setSelected(n); gs.markInteracted(); gs.setGuess(noteToMidi(n)); }}>{n}</button>)}</div></div>}
        reveal={<div className="surface-card"><h3>The note was {current.note} — {current.frequency.toFixed(2)} Hz</h3><p className="muted">{current.fact}</p><p className="big-score" style={{ color: scoreColor(roundScore) }}>{roundScore}<span className="small-muted">/100</span></p><PrimaryButton label={gs.roundNumber === 10 ? 'See results →' : 'Next round →'} onClick={gs.nextRound} /></div>}
        summary={<SummaryCard gameName="Pitch" scores={gs.roundHistory} onReplay={gs.restart} />}
      />
    </GameFrame>
  );
};

export default PitchGame;
