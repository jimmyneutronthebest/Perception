import { wordItems } from '../../assets/words';
import GameFrame from '../shared/GameFrame';
import PhaseWrapper from '../shared/PhaseWrapper';
import PrimaryButton from '../shared/PrimaryButton';
import SummaryCard from '../shared/SummaryCard';
import { useGameState } from '../../hooks/useGameState';
import { logScore, scoreColor } from '../../utils/scoring';

const WordsGame = () => {
  const gs = useGameState('words', wordItems, 3000, 500, (i) => i.rank);
  const item = gs.currentItem;
  const roundScore = gs.phase === 'reveal' ? logScore(gs.guess, item.rank, 1000000) : gs.score;

  return (
    <GameFrame roundNumber={gs.roundNumber} runningScore={gs.runningScore} bottomBar={gs.phase === 'guess' ? <PrimaryButton label="Submit" onClick={gs.submitGuess} disabled={!gs.hasInteracted} /> : undefined}>
      <PhaseWrapper
        phase={gs.phase}
        intro={<div className="intro"><h1>Words</h1><p>A word appears for 3 seconds. Guess how common it is.</p><PrimaryButton label="Start" onClick={gs.begin} /></div>}
        show={<div className="show-word">{item.word}</div>}
        guess={<div className="surface-card"><p className="muted">How common is this word in English?</p><h3>{item.word}</h3><p className="readout">~rank {Math.round(gs.guess).toLocaleString()}</p><input type="range" min={100} max={1000000} step={100} value={gs.guess} onChange={(e) => gs.setGuess(Number(e.target.value))} /><div className="range-row"><span>Top 100</span><span>Top 1,000,000</span></div></div>}
        reveal={<div className="surface-card"><p className="readout">#{item.rank.toLocaleString()} in English</p><p>{item.partOfSpeech} · {item.definition}</p><p className="muted">{item.frequencyContext}</p><p style={{ color: scoreColor(roundScore) }} className="big-score">{roundScore}<span className="small-muted">/100</span></p><div className="fact-card">{item.fact}</div><PrimaryButton label={gs.roundNumber === 10 ? 'See results →' : 'Next round →'} onClick={gs.nextRound} /></div>}
        summary={<SummaryCard gameName="Words" scores={gs.roundHistory} onReplay={gs.restart} />}
      />
    </GameFrame>
  );
};

export default WordsGame;
