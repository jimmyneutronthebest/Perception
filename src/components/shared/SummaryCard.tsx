import { buildShareText } from '../../utils/share';
import { scoreColor } from '../../utils/scoring';
import PrimaryButton from './PrimaryButton';

interface SummaryCardProps {
  gameName: string;
  scores: number[];
  onReplay: () => void;
}

const SummaryCard = ({ gameName, scores, onReplay }: SummaryCardProps) => {
  const avg = Math.round(scores.reduce((a, b) => a + b, 0) / Math.max(scores.length, 1));
  const message = avg >= 85 ? 'Your perception is unusually sharp.' : avg >= 65 ? 'Solid. Better than most.' : avg >= 45 ? 'Room to grow. Try again.' : 'Your brain lied to you. It does that.';

  return (
    <div className="surface-card">
      <h2 className="title">{gameName}</h2>
      <p className="muted">Session complete</p>
      <div className="dot-row">
        {scores.map((s, i) => (
          <span key={i} className="summary-dot" style={{ background: scoreColor(s) }} />
        ))}
      </div>
      <p className="muted">Average score</p>
      <p className="big-score" style={{ color: scoreColor(avg) }}>{avg}<span className="small-muted">/100</span></p>
      <p className="muted center-text">{message}</p>
      <pre className="share-card">{buildShareText(gameName, scores, 'https://example.com')}</pre>
      <PrimaryButton label="Copy result" onClick={() => navigator.clipboard.writeText(buildShareText(gameName, scores, 'https://example.com'))} />
      <button className="secondary-btn" onClick={onReplay}>Play again</button>
    </div>
  );
};

export default SummaryCard;
