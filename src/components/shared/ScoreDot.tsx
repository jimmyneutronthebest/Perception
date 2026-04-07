import { scoreColor } from '../../utils/scoring';

const ScoreDot = ({ score }: { score: number }) => (
  <span className={`inline-block h-4 w-4 rounded-full ${scoreColor(score).replace('text', 'bg')}`} />
);

export default ScoreDot;
