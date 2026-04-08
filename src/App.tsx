import { useMemo, useState } from 'react';
import TabNav from './components/TabNav';
import CaloriesGame from './components/games/CaloriesGame';
import WordsGame from './components/games/WordsGame';
import DistanceGame from './components/games/DistanceGame';
import PercentileGame from './components/games/PercentileGame';
import PitchGame from './components/games/PitchGame';

const tabs = ['Calories', 'Words', 'Distance', 'Percentile', 'Pitch'] as const;
type Tab = (typeof tabs)[number];

const App = () => {
  const [active, setActive] = useState<Tab>('Calories');

  const game = useMemo(() => {
    if (active === 'Calories') return <CaloriesGame />;
    if (active === 'Words') return <WordsGame />;
    if (active === 'Distance') return <DistanceGame />;
    if (active === 'Percentile') return <PercentileGame />;
    return <PitchGame />;
  }, [active]);

  return (
    <main>
      <TabNav tabs={[...tabs]} activeTab={active} onSelect={(t) => setActive(t as Tab)} />
      <div className="app-body">{game}</div>
    </main>
  );
};

export default App;
