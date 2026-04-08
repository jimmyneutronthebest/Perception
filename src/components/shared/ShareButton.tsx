import { useState } from 'react';

const ShareButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button onClick={onCopy} className="rounded-lg border border-zinc-500 px-4 py-2">
      {copied ? 'Copied!' : 'Share this'}
    </button>
  );
};

export default ShareButton;
