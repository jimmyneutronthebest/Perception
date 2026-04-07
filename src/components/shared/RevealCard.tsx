import { scoreColor } from '../../utils/scoring';

interface RevealCardProps {
  answerLabel: string;
  guessLabel: string;
  deltaLine: string;
  score: number;
  fact: string;
  onNext: () => void;
  onShare: () => void;
}

const RevealCard = ({ answerLabel, guessLabel, deltaLine, score, fact, onNext, onShare }: RevealCardProps) => (
  <div className="mx-auto w-full max-w-xl rounded-xl border border-zinc-700 bg-[#1a1a1a] p-6 text-center">
    <p className="text-sm text-zinc-400">Correct answer</p>
    <h2 className="text-3xl font-semibold">{answerLabel}</h2>
    <p className="mt-1 text-zinc-400">You guessed {guessLabel}</p>
    <p className="mt-4 text-zinc-200">{deltaLine}</p>
    <p className={`mt-3 text-xl font-semibold ${scoreColor(score)}`}>Round score: {score}</p>
    <p className="mt-4 text-sm text-zinc-400">{fact}</p>
    <div className="mt-6 flex flex-col gap-2 sm:flex-row">
      <button onClick={onNext} className="flex-1 rounded-lg bg-zinc-100 px-4 py-2 font-semibold text-zinc-900">Next round</button>
      <button onClick={onShare} className="flex-1 rounded-lg border border-zinc-500 px-4 py-2">Share this</button>
    </div>
  </div>
);

export default RevealCard;
