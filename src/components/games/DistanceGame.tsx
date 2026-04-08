import { distanceItems } from '../../assets/distances';
import GameFrame from '../shared/GameFrame';
import PhaseWrapper from '../shared/PhaseWrapper';
import PrimaryButton from '../shared/PrimaryButton';
import SummaryCard from '../shared/SummaryCard';
import { useGameState } from '../../hooks/useGameState';
import { logScore, scoreColor } from '../../utils/scoring';

const DistanceGame = () => {
  const gs = useGameState('distance', distanceItems, 3000, 2500, (i) => i.distanceKm);
  const item = gs.currentItem;
  const roundScore = gs.phase === 'reveal' ? logScore(gs.guess, item.distanceKm, 20000) : gs.score;

  return (
    <GameFrame roundNumber={gs.roundNumber} runningScore={gs.runningScore} bottomBar={gs.phase === 'guess' ? <PrimaryButton label="Submit" onClick={gs.submitGuess} disabled={!gs.hasInteracted} /> : undefined}>
      <PhaseWrapper
        phase={gs.phase}
        intro={<div className="intro"><h1>Distance</h1><p>Two cities appear for 3 seconds. Guess the distance.</p><PrimaryButton label="Start" onClick={gs.begin} /></div>}
        show={<div className="surface-card"><h3>{item.from} → {item.to}</h3><div className="map-placeholder">Map memory prompt</div></div>}
        guess={<div className="surface-card"><p className="muted">Straight-line distance between these cities, in km</p><h3>{item.from} → {item.to}</h3><p className="readout">{Math.round(gs.guess).toLocaleString()} km</p><input type="range" min={100} max={20000} step={50} value={gs.guess} onChange={(e) => gs.setGuess(Number(e.target.value))} /></div>}
        reveal={<div className="surface-card"><h3>{item.from} → {item.to}</h3><div className="duo"><div><p className="muted">Actual</p><p>{item.distanceKm.toLocaleString()} km</p></div><div><p className="muted">Yours</p><p>{Math.round(gs.guess).toLocaleString()} km</p></div></div><p style={{ color: scoreColor(roundScore) }} className="big-score">{roundScore}<span className="small-muted">/100</span></p><div className="fact-card">{item.fact}</div><PrimaryButton label={gs.roundNumber === 10 ? 'See results →' : 'Next round →'} onClick={gs.nextRound} /></div>}
        summary={<SummaryCard gameName="Distance" scores={gs.roundHistory} onReplay={gs.restart} />}
      />
    </GameFrame>
  );
};

export default DistanceGame;
