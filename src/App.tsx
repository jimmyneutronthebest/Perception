import { useMemo, useState } from 'react';
import TabNav from './components/TabNav';
import CaloriesGame from './components/games/CaloriesGame';
import WordsGame from './components/games/WordsGame';
import DistanceGame from './components/games/DistanceGame';
import PercentileGame from './components/games/PercentileGame';
import PitchGame from './components/games/PitchGame';

const TABS = ['Calories', 'Words', 'Distance', 'Percentile', 'Pitch'] as const;

type Tab = (typeof TABS)[number];

const App = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Calories');

  const game = useMemo(() => {
    switch (activeTab) {
      case 'Calories':
        return <CaloriesGame />;
      case 'Words':
        return <WordsGame />;
      case 'Distance':
        return <DistanceGame />;
      case 'Percentile':
        return <PercentileGame />;
      case 'Pitch':
        return <PitchGame />;
    }
  }, [activeTab]);

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#f0f0f0]">
      <TabNav tabs={[...TABS]} active={activeTab} onChange={(tab) => setActiveTab(tab as Tab)} />
      {game}
    </main>
  );
};

export default App;
