import { percentileItems } from '../../assets/percentiles';
import GameFrame from '../shared/GameFrame';
import PhaseWrapper from '../shared/PhaseWrapper';
import PrimaryButton from '../shared/PrimaryButton';
import SummaryCard from '../shared/SummaryCard';
import { useGameState } from '../../hooks/useGameState';
import { scoreColor } from '../../utils/scoring';

const ord = (n: number): string => {
  if (n % 10 === 1 && n % 100 !== 11) return `${n}st`;
  if (n % 10 === 2 && n % 100 !== 12) return `${n}nd`;
  if (n % 10 === 3 && n % 100 !== 13) return `${n}rd`;
  return `${n}th`;
};

const PercentileGame = () => {
  const gs = useGameState('percentile', percentileItems, 2000, 50, (i) => i.percentile);
  const item = gs.currentItem;

  return (
    <GameFrame roundNumber={gs.roundNumber} runningScore={gs.runningScore} bottomBar={gs.phase === 'guess' ? <PrimaryButton label="Submit" onClick={gs.submitGuess} disabled={!gs.hasInteracted} /> : undefined}>
      <PhaseWrapper
        phase={gs.phase}
        intro={<div className="intro"><h1>Percentile</h1><p>A measurement appears for 2 seconds. Guess its percentile.</p><PrimaryButton label="Start" onClick={gs.begin} /></div>}
        show={<div className="surface-card center-text"><p className="readout" style={{ fontSize: 32 }}>{item.value}</p><p className="muted">{item.population}</p></div>}
        guess={<div className="surface-card"><p className="muted">What percentile does this fall in?</p><h3>{item.value}</h3><p className="readout">You're guessing: {ord(Math.round(gs.guess))} percentile</p><input type="range" min={1} max={99} step={1} value={gs.guess} onChange={(e) => gs.setGuess(Number(e.target.value))} /></div>}
        reveal={<div className="surface-card center-text"><p className="readout">Actual: {ord(item.percentile)} percentile</p><div className="bell"><div className="bell-fill" style={{ width: `${item.percentile}%` }} /></div><p style={{ color: scoreColor(gs.score) }} className="big-score">{gs.score}<span className="small-muted">/100</span></p><div className="fact-card">{item.fact}</div><PrimaryButton label={gs.roundNumber === 10 ? 'See results →' : 'Next round →'} onClick={gs.nextRound} /></div>}
        summary={<SummaryCard gameName="Percentile" scores={gs.roundHistory} onReplay={gs.restart} />}
      />
    </GameFrame>
  );
};

export default PercentileGame;
