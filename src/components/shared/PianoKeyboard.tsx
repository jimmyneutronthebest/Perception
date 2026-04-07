interface PianoKeyboardProps {
  notes: string[];
  selected: string | null;
  correct?: string;
  onSelect: (note: string) => void;
}

const PianoKeyboard = ({ notes, selected, correct, onSelect }: PianoKeyboardProps) => (
  <div className="flex gap-2 overflow-x-auto pb-2">
    {notes.map((note) => {
      const isCorrect = note === correct;
      const isSelected = note === selected;
      const classes = isCorrect ? 'bg-green-500 text-black' : isSelected ? 'bg-blue-500 text-black' : 'bg-zinc-200 text-black';
      return (
        <button
          key={note}
          onClick={() => onSelect(note)}
          className={`min-w-[44px] rounded-md px-3 py-6 text-sm font-semibold ${classes}`}
        >
          {note}
        </button>
      );
    })}
  </div>
);

export default PianoKeyboard;
