import { useMemo, useState } from 'react';
import { calorieItems } from '../../assets/calories';
import GameFrame from '../shared/GameFrame';
import PhaseWrapper from '../shared/PhaseWrapper';
import PrimaryButton from '../shared/PrimaryButton';
import SummaryCard from '../shared/SummaryCard';
import { useGameState } from '../../hooks/useGameState';

const categoryLabel: Record<string, string> = {
  fastfood: 'Fast Food',
  restaurant: 'Restaurant',
  breakfast: 'Breakfast',
  drinks: 'Drinks',
  snacks: 'Snacks',
};

const CaloriesGame = () => {
  const gs = useGameState('calories', calorieItems, 4000, 600, (i) => i.calories);
  const [imgError, setImgError] = useState(false);
  const item = gs.currentItem;
  const delta = Math.abs(gs.guess - item.calories);
  const deltaPct = Math.round((delta / item.calories) * 100);
  const deltaTone = deltaPct <= 15 ? 'var(--green)' : deltaPct <= 40 ? 'var(--yellow)' : 'var(--red)';
  const imageUrl = useMemo(
    () => `https://source.unsplash.com/400x300/?food,${item.imageKeyword}&sig=${item.id}`,
    [item.id, item.imageKeyword],
  );

  return (
    <GameFrame
      roundNumber={gs.roundNumber}
      runningScore={gs.runningScore}
      bottomBar={gs.phase === 'guess' ? <PrimaryButton label="Submit" onClick={gs.submitGuess} disabled={!gs.hasInteracted} /> : undefined}
    >
      <PhaseWrapper
        phase={gs.phase}
        intro={<div className="intro"><h1>Calories</h1><p>A meal appears for 4 seconds. Guess its calories.</p><PrimaryButton label="Start" onClick={gs.begin} /></div>}
        show={
          <div className="surface-card food-card">
            {!imgError ? (
              <img src={imageUrl} className="food-image" alt={item.name} onError={() => setImgError(true)} />
            ) : (
              <div className="food-image food-fallback">{item.name}</div>
            )}
            <div className="food-body">
              <span className={`badge badge-${item.category}`}>{categoryLabel[item.category]}</span>
              <h2>{item.name}</h2>
              <p className="muted">{item.descriptor}</p>
            </div>
          </div>
        }
        guess={
          <div className="surface-card">
            <h3>{item.name}</h3>
            <p className="muted">How many calories?</p>
            <p className="readout">{gs.guess} kcal</p>
            <input type="range" min={50} max={2500} step={25} value={gs.guess} onChange={(e) => gs.setGuess(Number(e.target.value))} />
            <div className="range-row"><span>50 kcal</span><span>2500 kcal</span></div>
          </div>
        }
        reveal={
          <div className="surface-card">
            <h3>{item.name}</h3>
            <div className="duo">
              <div><p className="muted">Actual</p><p>{item.calories} kcal</p></div>
              <div><p className="muted">Yours</p><p>{gs.guess} kcal</p></div>
            </div>
            <p style={{ color: deltaTone }}>You were {delta} kcal off ({deltaPct}%).</p>
            <p className="big-score" style={{ color: deltaTone }}>{gs.score}<span className="small-muted">/100</span></p>
            <div className="fact-card">{item.fact}</div>
            <PrimaryButton label={gs.roundNumber === 10 ? 'See results →' : 'Next round →'} onClick={gs.nextRound} />
          </div>
        }
        summary={<SummaryCard gameName="Calories" scores={gs.roundHistory} onReplay={gs.restart} />}
      />
    </GameFrame>
  );
};

export default CaloriesGame;
